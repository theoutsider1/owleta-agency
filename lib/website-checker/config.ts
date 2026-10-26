export function setting(name: string, fallback: number, min: number, max: number) {
    const raw = process.env[name];
    const value = raw === undefined ? fallback : Number(raw);
    if ((raw !== undefined && !/^\d+$/.test(raw)) || !Number.isSafeInteger(value) || value < min || value > max) {
        throw new Error(`Invalid checker setting: ${name}`);
    }
    return value;
}
export function checkerConfig() {
    return {
        hourlyChecks: setting('CHECKER_USER_HOURLY_LIMIT', 3, 1, 100),
        dailyChecks: setting('CHECKER_USER_DAILY_LIMIT', 5, 1, 1000),
        pageSpeedTimeoutMs: setting('CHECKER_PAGESPEED_TIMEOUT_MS', 45000, 1000, 45000),
        cacheTtlSeconds: setting('CHECKER_CACHE_TTL_SECONDS', 3600, 0, 86400),
    };
}
