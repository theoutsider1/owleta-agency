import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis =
    process.env.UPSTASH_REDIS_REST_URL &&
        process.env.UPSTASH_REDIS_REST_TOKEN
        ? Redis.fromEnv()
        : null;

const contactLimiter = redis
    ? new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(5, "10 m"),
        prefix: "owlixir:contact",
    })
    : null;

const auditLimiter = redis
    ? new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(3, "10 m"),
        prefix: "owlixir:audit",
    })
    : null;

export type RateLimitType = "contact" | "audit";

export async function checkRateLimit(
    type: RateLimitType,
    identifier: string,
) {
    const limiter = type === "contact" ? contactLimiter : auditLimiter;

    /*
     * Fail closed in production if rate limiting has not been configured.
     * Local development can continue while we build the integration.
     */
    if (!limiter) {
        if (process.env.NODE_ENV === "production") {
            console.error("Upstash rate limiting is not configured.");

            return {
                success: false,
                limit: 0,
                remaining: 0,
                reset: 0,
            };
        }

        return {
            success: true,
            limit: 0,
            remaining: 0,
            reset: 0,
        };
    }

    return limiter.limit(identifier);
}