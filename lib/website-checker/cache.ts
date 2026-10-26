import "server-only";
import { createHash } from "node:crypto";
import { Redis } from "@upstash/redis";
import { z } from "zod";
import { checkerConfig } from "./config";
import type { PageSpeedResult } from "./pagespeed";

// Only technical results are stored; browser availability never enters this cache.
const score = z.number().min(0).max(100).nullable();
const cachedResultSchema = z.object({
    url: z.string(),
    checkedAt: z.string().datetime(),
    performanceScore: score,
    accessibilityScore: score,
    seoScore: score,
    findings: z.array(z.object({
        id: z.string(),
        category: z.enum(["performance", "accessibility", "seo"]),
        status: z.enum(["pass", "warning", "fail", "unknown"]),
        title: z.string(),
        explanation: z.string(),
        recommendation: z.string().optional(),
        evidence: z.string().optional(),
        affectedElements: z.array(z.object({
            selector: z.string().optional(),
            label: z.string().optional(),
            snippet: z.string().optional(),
        })).optional(),
    })),
});

export type CachedPageSpeed = PageSpeedResult & {
    url: string;
    checkedAt: string;
};

export function pageSpeedCacheKey(url: string): string {
    const environment = process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? "development";
    const namespace = process.env.CHECKER_CACHE_NAMESPACE ?? environment;
    const digest = createHash("sha256").update(url).digest("hex");
    return `owlixir:pagespeed:v1:${namespace}:mobile:performance-accessibility-seo:${digest}`;
}

function redisClient() {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    if (!url || !token) throw new Error("Cache not configured");
    return new Redis({
        url,
        token,
        retry: false,
        enableAutoPipelining: false,
        signal: () => AbortSignal.timeout(3000),
    });
}

export async function readPageSpeedCache(url: string): Promise<CachedPageSpeed | null> {
    const ttl = checkerConfig().cacheTtlSeconds;
    if (ttl === 0) return null;

    try {
        const value = await redisClient().get(pageSpeedCacheKey(url));
        const parsed = cachedResultSchema.safeParse(value);
        if (!parsed.success || parsed.data.url !== url) return null;

        const age = Date.now() - Date.parse(parsed.data.checkedAt);
        if (age < 0 || age >= ttl * 1000) return null;
        return parsed.data;
    } catch {
        // The existing per-IP limiter remains fail-closed; caching is best effort.
        return null;
    }
}

export async function writePageSpeedCache(result: CachedPageSpeed): Promise<void> {
    const ttl = checkerConfig().cacheTtlSeconds;
    if (ttl === 0) return;

    const parsed = cachedResultSchema.safeParse(result);
    if (!parsed.success) return;
    if (JSON.stringify(parsed.data).length > 100000) return;

    try {
        await redisClient().set(pageSpeedCacheKey(result.url), parsed.data, { ex: ttl });
    } catch {
        // A cache write failure must not discard a completed Google result.
    }
}
