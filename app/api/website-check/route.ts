import { NextRequest, NextResponse } from 'next/server';
import { websiteCheckSchema } from '@/lib/website-checker/schema';
import { checkerRateLimit } from '@/lib/security/checker-rate-limit';
import { verifyTurnstile } from '@/lib/security/turnstile';
import { getPageSpeedResults } from '@/lib/website-checker/pagespeed';
import {
    readPageSpeedCache,
    writePageSpeedCache,
} from "@/lib/website-checker/cache";
import { checkWebsite } from '@/lib/website-checker/service';
import { availabilityMessages, type AvailabilityCode } from '@/lib/website-checker/availability';

export const runtime = 'nodejs';
export const maxDuration = 90;
function failure(code: AvailabilityCode, retryAfterSeconds?: number) {
    return NextResponse.json({ success: false, code, message: availabilityMessages[code], retryAfterSeconds }, {
        status: code === 'rate_limited' || code === 'pagespeed_rate_limited' ? 429 : 503,
        headers: { 'Cache-Control': 'no-store', ...(retryAfterSeconds ? { 'Retry-After': String(retryAfterSeconds) } : {}) },
    });
}
async function readBody(request: Request) {
    if (!request.body) throw new Error('Missing body');
    const reader = request.body.getReader(); let size = 0; let text = '';
    const decoder = new TextDecoder();
    let timedOut = false;
    const timer = setTimeout(() => { timedOut = true; void reader.cancel(); }, 3000);
    try {
        for (;;) {
            const { value, done } = await reader.read(); if (done) break;
            size += value.byteLength;
            if (size > 4096) { await reader.cancel(); throw new Error('Body too large'); }
            text += decoder.decode(value, { stream: true });
        }
        if (timedOut) throw new Error('Body timeout');
        return JSON.parse(text + decoder.decode());
    } finally { clearTimeout(timer); reader.releaseLock(); }
}
export async function POST(request: NextRequest) {
    try {
        let body: unknown;
        try { body = await readBody(request); }
        catch { return NextResponse.json({ success: false, code: 'invalid_request', message: 'Enter a valid website URL and complete the security check.' }, { status: 400 }); }
        const parsed = websiteCheckSchema.safeParse(body);
        if (!parsed.success) return NextResponse.json({ success: false, code: 'invalid_request', message: parsed.error.issues[0]?.message }, { status: 400 });
        const limit = await checkerRateLimit(request.headers);
        if (!limit.success) return failure(limit.code, limit.retryAfterSeconds);
        if (!await verifyTurnstile(parsed.data.turnstileToken)) return NextResponse.json({ success: false, code: 'verification_failed', message: "We couldn't verify the security check. Please try again." }, { status: 400 });
        const outcome = await checkWebsite(parsed.data.url, {
            readCache: readPageSpeedCache,
            writeCache: writePageSpeedCache,
            pageSpeed: getPageSpeedResults,
        });
        if (!outcome.success) return failure(outcome.code, outcome.retryAfterSeconds);
        return NextResponse.json(outcome, { headers: { 'Cache-Control': 'no-store' } });
    } catch {
        return failure('temporary_capacity');
    }
}
