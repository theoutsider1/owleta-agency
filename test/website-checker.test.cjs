/* eslint-disable @typescript-eslint/no-require-imports -- Existing Node test harness. */
const { test, afterEach } = require('node:test');
const assert = require('node:assert/strict');
const { checkWebsite } = require('../lib/website-checker/service.ts');
const { getPageSpeedResults, PageSpeedRateLimitError } = require('../lib/website-checker/pagespeed.ts');
const { readPageSpeedCache, writePageSpeedCache, pageSpeedCacheKey } = require('../lib/website-checker/cache.ts');
const { websiteCheckSchema } = require('../lib/website-checker/schema.ts');
const { checkerClientIp } = require('../lib/security/checker-client-ip.ts');
const { checkerRateLimit } = require('../lib/security/checker-rate-limit.ts');
const { checkerConfig } = require('../lib/website-checker/config.ts');

const originalFetch = global.fetch;
const originalEnv = { ...process.env };
const homepage = 'https://example.com/';
const scores = {
  performanceScore: 72,
  seoScore: 91,
  accessibilityScore: 80,
  findings: [],
};

afterEach(() => {
  global.fetch = originalFetch;
  process.env = { ...originalEnv };
});

function dependencies() {
  const calls = { pageSpeed: 0, writes: [] };
  return {
    calls,
    readCache: async () => null,
    writeCache: async (result) => {
      calls.writes.push(result);
    },
    pageSpeed: async () => {
      calls.pageSpeed++;
      return scores;
    },
  };
}

function cacheRecord() {
  return { ...scores, url: homepage, checkedAt: new Date().toISOString() };
}

function configureRedis() {
  process.env.UPSTASH_REDIS_REST_URL = 'https://redis.example';
  process.env.UPSTASH_REDIS_REST_TOKEN = 'test-token';
  process.env.CHECKER_CACHE_TTL_SECONDS = '3600';
}

test('a fresh scan caches successful technical results without Worker configuration', async () => {
  delete process.env.WEBSITE_CHECKER_WORKER_URL;
  delete process.env.WEBSITE_CHECKER_WORKER_SECRET;
  const deps = dependencies();
  const outcome = await checkWebsite(homepage, deps);

  assert.equal(outcome.result.performanceScore, 72);
  assert.equal(outcome.result.technical.performed, true);
  assert.equal(outcome.result.enquiries.performed, false);
  assert.equal(deps.calls.pageSpeed, 1);
  assert.equal(deps.calls.writes.length, 1);
});

test('cache hits preserve timestamps and skip Google and cache writes', async () => {
  const deps = dependencies();
  const cached = cacheRecord();
  deps.readCache = async () => cached;
  const outcome = await checkWebsite(homepage, deps);

  assert.equal(outcome.result.cached, true);
  assert.equal(outcome.result.checkedAt, cached.checkedAt);
  assert.equal(deps.calls.pageSpeed, 0);
  assert.equal(deps.calls.writes.length, 0);
});

test('Google 429 is distinct and never cached or retried', async () => {
  const deps = dependencies();
  let calls = 0;
  deps.pageSpeed = async () => {
    calls++;
    throw new PageSpeedRateLimitError(120);
  };
  const outcome = await checkWebsite(homepage, deps);

  assert.deepEqual(outcome, {
    success: false,
    code: 'pagespeed_rate_limited',
    retryAfterSeconds: 120,
  });
  assert.equal(calls, 1);
  assert.equal(deps.calls.writes.length, 0);
});

test('provider failures return unavailable scores and are not cached', async () => {
  for (const failure of [new Error('HTTP 500'), new Error('timeout'), new Error('invalid JSON')]) {
    const deps = dependencies();
    deps.pageSpeed = async () => { throw failure; };
    const outcome = await checkWebsite(homepage, deps);
    assert.equal(outcome.result.technical.status, 'pagespeed_failed');
    assert.equal(outcome.result.technical.performed, false);
    assert.equal(outcome.result.performanceScore, null);
    assert.equal(deps.calls.writes.length, 0);
  }
});

test('cache outages do not discard successful PageSpeed results', async () => {
  const deps = dependencies();
  deps.readCache = async () => { throw new Error('offline'); };
  deps.writeCache = async () => { throw new Error('offline'); };
  const outcome = await checkWebsite(homepage, deps);
  assert.equal(outcome.result.performanceScore, 72);
});

test('all three categories use one fixed Google endpoint request', async () => {
  let calls = 0;
  global.fetch = async (input, options) => {
    calls++;
    const url = new URL(input);
    assert.equal(url.origin, 'https://www.googleapis.com');
    assert.equal(url.searchParams.get('url'), homepage);
    assert.equal(url.searchParams.get('strategy'), 'mobile');
    assert.deepEqual(url.searchParams.getAll('category'), ['performance', 'accessibility', 'seo']);
    assert.equal(options.redirect, 'error');
    assert.ok(options.signal);
    return Response.json({ lighthouseResult: { categories: {
      performance: { score: 0.72 },
      accessibility: { score: 0.8 },
      seo: { score: 0.91 },
    } } });
  };
  assert.equal((await getPageSpeedResults(homepage)).performanceScore, 72);
  assert.equal(calls, 1);
});

test('PageSpeed 429 safely parses Retry-After without exposing upstream bodies', async () => {
  const headers = ['120', new Date(Date.now() + 60000).toUTCString(), 'invalid'];
  for (const retryAfter of headers) {
    let calls = 0;
    global.fetch = async () => {
      calls++;
      return new Response('private upstream details', {
        status: 429,
        headers: { 'Retry-After': retryAfter },
      });
    };
    await assert.rejects(getPageSpeedResults(homepage), (error) => {
      assert.ok(error instanceof PageSpeedRateLimitError);
      assert.doesNotMatch(error.message, /private/);
      if (retryAfter === '120') assert.equal(error.retryAfterSeconds, 120);
      else if (retryAfter === 'invalid') assert.equal(error.retryAfterSeconds, undefined);
      else assert.ok(error.retryAfterSeconds > 0 && error.retryAfterSeconds <= 60);
      return true;
    });
    assert.equal(calls, 1);
  }
});

test('HTTP 200 with a failed Lighthouse run is not treated as a successful result', async () => {
  const responses = [
    {},
    { lighthouseResult: { categories: {} } },
    { lighthouseResult: {
      runtimeError: { code: 'NO_FCP' },
      categories: { performance: { score: null } },
    } },
  ];
  for (const data of responses) {
    global.fetch = async () => Response.json(data);
    const deps = dependencies();
    deps.pageSpeed = getPageSpeedResults;
    const outcome = await checkWebsite(homepage, deps);
    assert.equal(outcome.result.technical.performed, false);
    assert.equal(deps.calls.writes.length, 0);
  }
});

test('cache keys separate environments and URLs and include analysis version', () => {
  delete process.env.CHECKER_CACHE_NAMESPACE;
  process.env.VERCEL_ENV = 'production';
  const production = pageSpeedCacheKey(homepage);
  assert.match(production, /v1:production:mobile:performance-accessibility-seo:/);
  assert.notEqual(production, pageSpeedCacheKey('https://other.example/'));
  process.env.VERCEL_ENV = 'preview';
  assert.notEqual(production, pageSpeedCacheKey(homepage));
});

test('Redis cache writes use TTL and reads validate URL, shape and age', async () => {
  configureRedis();
  const record = cacheRecord();
  let command;
  global.fetch = async (_url, options) => {
    command = JSON.parse(options.body);
    return Response.json({ result: 'OK' });
  };
  await writePageSpeedCache(record);
  assert.equal(command[0].toLowerCase(), 'set');
  assert.ok(command.includes('ex'));
  assert.ok(command.includes(3600));

  for (const candidate of [
    record,
    { ...record, url: 'https://other.example/' },
    { ...record, checkedAt: new Date(Date.now() - 3601000).toISOString() },
    { ...record, checkedAt: new Date(Date.now() + 60000).toISOString() },
    { ...record, performanceScore: 999 },
    { status: 'pagespeed_failed' },
  ]) {
    global.fetch = async () => Response.json({ result: JSON.stringify(candidate) });
    const result = await readPageSpeedCache(homepage);
    if (candidate === record) assert.deepEqual(result, record);
    else assert.equal(result, null);
  }
});

test('disabled caching makes no Redis requests', async () => {
  process.env.CHECKER_CACHE_TTL_SECONDS = '0';
  global.fetch = async () => { assert.fail('Cache is disabled'); };
  assert.equal(await readPageSpeedCache(homepage), null);
  await writePageSpeedCache(cacheRecord());
});

test('homepage normalisation and unsafe URL rejection are retained', () => {
  const parse = (url) => websiteCheckSchema.safeParse({ url, turnstileToken: 'test' });
  assert.equal(parse('https://EXAMPLE.com/path?tracking=x').data.url, homepage);
  for (const url of ['http://example.com', 'https://127.0.0.1', 'https://[::1]', 'https://user:pass@example.com', 'file:///etc/passwd']) {
    assert.equal(parse(url).success, false);
  }
});

test('per-IP limits fail closed without trusted identity', async () => {
  delete process.env.CHECKER_CLIENT_IP_HEADER;
  global.fetch = async () => { assert.fail('No provider call expected'); };
  const result = await checkerRateLimit(new Headers({ 'x-forwarded-for': '8.8.8.8' }));
  assert.equal(result.code, 'temporary_capacity');
});

test('invalid cache configuration is rejected', () => {
  process.env.CHECKER_CACHE_TTL_SECONDS = '-1';
  assert.throws(() => checkerConfig());
});

test('API preserves Turnstile and per-IP checks, then returns Google 429 clearly', async (t) => {
  const security = require('../lib/security/checker-rate-limit.ts');
  const turnstile = require('../lib/security/turnstile.ts');
  const cache = require('../lib/website-checker/cache.ts');
  const pageSpeed = require('../lib/website-checker/pagespeed.ts');
  const { POST } = require('../app/api/website-check/route.ts');
  const request = () => new Request('https://owlixir.com/api/website-check', {
    method: 'POST',
    body: JSON.stringify({ url: homepage, turnstileToken: 'test' }),
  });
  const rate = t.mock.method(security, 'checkerRateLimit', async () => ({
    success: false, code: 'rate_limited', retryAfterSeconds: 60,
  }));
  const verify = t.mock.method(turnstile, 'verifyTurnstile', async () => false);
  const read = t.mock.method(cache, 'readPageSpeedCache', async () => null);
  const write = t.mock.method(cache, 'writePageSpeedCache', async () => {});
  const google = t.mock.method(pageSpeed, 'getPageSpeedResults', async () => {
    throw new PageSpeedRateLimitError(120);
  });

  let response = await POST(request());
  assert.equal(response.status, 429);
  assert.equal((await response.json()).code, 'rate_limited');
  assert.equal(read.mock.callCount(), 0);
  rate.mock.mockImplementation(async () => ({ success: true }));
  response = await POST(request());
  assert.equal(response.status, 400);
  assert.equal(read.mock.callCount(), 0);
  verify.mock.mockImplementation(async () => true);
  response = await POST(request());
  assert.equal(response.status, 429);
  assert.equal(response.headers.get('Retry-After'), '120');
  assert.equal((await response.json()).code, 'pagespeed_rate_limited');
  assert.equal(google.mock.callCount(), 1);
  assert.equal(write.mock.callCount(), 0);
});

test('API rejects malformed and oversized bodies', async () => {
  const { POST } = require('../app/api/website-check/route.ts');
  for (const body of ['{', 'x'.repeat(4097), 'null']) {
    const response = await POST(new Request('https://owlixir.com/api/website-check', {
      method: 'POST', body,
    }));
    assert.equal(response.status, 400);
  }
});

test('UI retains cache timestamps and technical failures without browser notices', async () => {
  const React = require('react');
  const { renderToStaticMarkup } = require('react-dom/server');
  const { CheckAvailability } = require('../components/Website-checker/CheckAvailability.tsx');
  const deps = dependencies();
  deps.readCache = async () => cacheRecord();
  const { result } = await checkWebsite(homepage, deps);
  const html = renderToStaticMarkup(React.createElement(CheckAvailability, { result }));
  assert.match(html, /Saved results from/);
  assert.doesNotMatch(html, /enquiry|browser/i);
  result.technical = { status: 'pagespeed_failed', performed: false };
  const failed = renderToStaticMarkup(React.createElement(CheckAvailability, { result }));
  assert.match(failed, /website analysis could not be completed/);
});

// Trusted ingress identity.
test('Vercel identity uses its dedicated header, never a supplied forwarding chain', () => {
  const headers = new Headers({
    'x-vercel-forwarded-for': '203.0.113.12',
    'x-forwarded-for': '1.2.3.4',
    'cf-connecting-ip': '5.6.7.8',
  });

  assert.equal(checkerClientIp(headers, { VERCEL: '1' }), '203.0.113.12');
  assert.equal(checkerClientIp(headers, {
    VERCEL: '1',
    CHECKER_CLIENT_IP_HEADER: 'x-vercel-forwarded-for',
  }), '203.0.113.12');
  assert.equal(checkerClientIp(headers, {
    VERCEL: '1',
    CHECKER_CLIENT_IP_HEADER: 'cf-connecting-ip',
  }), null);

  const untrustedHeaders = new Headers({ 'x-forwarded-for': '1.2.3.4' });
  assert.equal(checkerClientIp(untrustedHeaders, { VERCEL: '1' }), null);
  assert.equal(checkerClientIp(headers, {}), null);
});

test('client identity rejects lists and ports and canonicalises IPv6', () => {
  const env = { VERCEL: '1' };
  const invalidAddresses = [
    '1.2.3.4, 5.6.7.8',
    '1.2.3.4:123',
    'unknown',
    '[::1]:123',
    '',
  ];

  for (const value of invalidAddresses) {
    const headers = new Headers({ 'x-vercel-forwarded-for': value });
    assert.equal(checkerClientIp(headers, env), null);
  }

  const ipv6Headers = new Headers({
    'x-vercel-forwarded-for': '2001:0db8:0:0:0:0:0:1',
  });
  assert.equal(checkerClientIp(ipv6Headers, env), '2001:db8::1');
});
