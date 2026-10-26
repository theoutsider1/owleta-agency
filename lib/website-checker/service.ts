import type { WebsiteCheckResult } from "./schema";
import type { AvailabilityCode } from "./availability";
import type { CachedPageSpeed } from "./cache";
import { PageSpeedRateLimitError, type PageSpeedResult } from "./pagespeed";

export interface CheckerDependencies {
    readCache(url: string): Promise<CachedPageSpeed | null>;
    writeCache(result: CachedPageSpeed): Promise<void>;
    pageSpeed(url: string): Promise<PageSpeedResult>;
}

export type ScanResponse =
    | { success: true; result: WebsiteCheckResult }
    | {
        success: false;
        code: AvailabilityCode;
        retryAfterSeconds?: number;
    };

function report(data: CachedPageSpeed, cached: boolean, complete = true): WebsiteCheckResult {
    return {
        ...data,
        cached,
        scope: "single-page",
        technical: {
            status: complete ? "complete" : "pagespeed_failed",
            performed: complete,
        },
        // Compatibility field for the existing UI; no inspection is requested.
        enquiries: { status: "security_unavailable", performed: false },
        limitations: [
            "This automated check analyses your homepage on mobile.",
            "It does not review every page, test enquiry journeys, submit forms or perform bookings.",
            "Automated accessibility and SEO checks are not a complete accessibility assessment or a guarantee of search rankings.",
        ],
    };
}

export async function checkWebsite(url: string, deps: CheckerDependencies): Promise<ScanResponse> {
    const cached = await deps.readCache(url).catch(() => null);
    if (cached) return { success: true, result: report(cached, true) };

    let scores: PageSpeedResult;
    try {
        scores = await deps.pageSpeed(url);
    } catch (error) {
        if (error instanceof PageSpeedRateLimitError) {
            return {
                success: false,
                code: "pagespeed_rate_limited",
                retryAfterSeconds: error.retryAfterSeconds,
            };
        }
        return {
            success: true,
            result: report({
                url,
                checkedAt: new Date().toISOString(),
                performanceScore: null,
                accessibilityScore: null,
                seoScore: null,
                findings: [],
            }, false, false),
        };
    }

    const data = { ...scores, url, checkedAt: new Date().toISOString() };
    await deps.writeCache(data).catch(() => {});
    return { success: true, result: report(data, false) };
}
