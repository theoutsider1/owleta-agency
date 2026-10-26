import 'server-only';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { createHmac } from 'node:crypto';
import { checkerClientIp } from './checker-client-ip';
import { checkerConfig } from '../website-checker/config';

export async function checkerRateLimit(headers: Headers): Promise<
    { success: true } | { success: false; code: 'rate_limited' | 'temporary_capacity'; retryAfterSeconds?: number }
> {
    try {
        const ip = checkerClientIp(headers);
        const salt = process.env.CHECKER_IP_HASH_SECRET;
        const url = process.env.UPSTASH_REDIS_REST_URL;
        const token = process.env.UPSTASH_REDIS_REST_TOKEN;
        if (!ip || !salt || salt.length < 32 || !url || !token) return { success: false, code: 'temporary_capacity' };
        const identifier = createHmac('sha256', salt).update(ip).digest('hex');
        const redis = new Redis({ url, token, retry: false, signal: () => AbortSignal.timeout(3000) });
        const c = checkerConfig();
        // No in-process deny cache: limits are shared across instances and deployments.
        const hourly = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(c.hourlyChecks, '1 h'), prefix: 'owlixir:checker:v1:hour', ephemeralCache: false, timeout: 3000 });
        const daily = new Ratelimit({ redis, limiter: Ratelimit.fixedWindow(c.dailyChecks, '1 d'), prefix: 'owlixir:checker:v1:day', ephemeralCache: false, timeout: 3000 });
        const results = await Promise.all([hourly.limit(identifier), daily.limit(identifier)]);
        if (results.some(r => r.reason === 'timeout')) return { success: false, code: 'temporary_capacity' };
        const denied = results.filter(r => !r.success);
        return denied.length ? { success: false, code: 'rate_limited', retryAfterSeconds: Math.max(1, Math.ceil((Math.max(...denied.map(r => r.reset)) - Date.now()) / 1000)) } : { success: true };
    } catch { return { success: false, code: 'temporary_capacity' }; }
}
