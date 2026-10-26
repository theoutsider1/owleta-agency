import { checkerConfig } from "./config";
import type { AffectedElement, WebsiteFinding, } from "./schema";

type LighthouseCategory = {
    score?: number | null;
};

type LighthouseAudit = {
    id?: string;
    title?: string;
    score?: number | null;
    scoreDisplayMode?: string;
    displayValue?: string;
    details?: {
        type?: string;
        items?: Array<{
            node?: {
                selector?: string;
                snippet?: string;
                nodeLabel?: string;
            };
            url?: string;
        }>;
    };
};

type PageSpeedResponse = {
    lighthouseResult?: {
        runtimeError?: { code?: string; message?: string };
        categories?: {
            performance?: LighthouseCategory;
            accessibility?: LighthouseCategory;
            seo?: LighthouseCategory;
        };
        audits?: Record<string, LighthouseAudit>;
    };
};

export interface PageSpeedResult {
    performanceScore: number | null;
    accessibilityScore: number | null;
    seoScore: number | null;
    findings: WebsiteFinding[];
}

function toScore(
    score: number | null | undefined,
): number | null {
    if (
        typeof score !== "number" ||
        !Number.isFinite(score)
    ) {
        return null;
    }

    return Math.round(score * 100);
}


function getAuditEvidence(
    audit: LighthouseAudit,
): string | undefined {
    const items = audit.details?.items;

    if (!Array.isArray(items) || items.length === 0) {
        return audit.displayValue;
    }

    const evidence: string[] = [];

    for (const item of items.slice(0, 3)) {
        const selector = item.node?.selector;
        const nodeLabel = item.node?.nodeLabel;
        const url = item.url;

        if (selector) {
            evidence.push(`Element: ${selector}`);
        } else if (nodeLabel) {
            evidence.push(`Element: ${nodeLabel}`);
        } else if (url) {
            evidence.push(`Resource: ${url}`);
        }
    }

    return evidence.length > 0
        ? evidence.join(" | ")
        : audit.displayValue;
}

function getAffectedElements(
    audit: LighthouseAudit,
): AffectedElement[] {
    const items = audit.details?.items;

    if (!Array.isArray(items)) {
        return [];
    }

    return items
        .filter((item) => item.node)
        .slice(0, 3)
        .map((item) => ({
            ...(item.node?.selector
                ? { selector: item.node.selector }
                : {}),
            ...(item.node?.nodeLabel
                ? { label: item.node.nodeLabel }
                : {}),
            ...(item.node?.snippet
                ? { snippet: item.node.snippet }
                : {}),
        }))
        .filter((element) =>
            Boolean(
                element.selector ||
                element.label ||
                element.snippet,
            ),
        );
}

type AuditDefinition = {
    id: string;
    category: WebsiteFinding["category"];
    title: string;
    explanation: string;
    recommendation: string;
};

const auditDefinitions: AuditDefinition[] = [
    {
        id: "document-title",
        category: "seo",
        title: "Page title needs attention",
        explanation:
            "The check detected a problem with the page title, which helps people and search engines understand the page.",
        recommendation:
            "Use a clear, descriptive page title that reflects the content and the business.",
    },
    {
        id: "meta-description",
        category: "seo",
        title: "Meta description needs attention",
        explanation:
            "The check detected a missing or inadequate meta description.",
        recommendation:
            "Write a useful description that explains what the page offers.",
    },
    {
        id: "viewport",
        category: "seo",
        title: "Mobile viewport needs attention",
        explanation:
            "The check detected a problem with the page's mobile viewport configuration.",
        recommendation:
            "Check the viewport meta tag and ensure the layout adapts to mobile screens.",
    },
    {
        id: "image-alt",
        category: "accessibility",
        title: "Some images need alternative text",
        explanation:
            "The check found images without appropriate accessible text.",
        recommendation:
            "Add meaningful alternative text to informative images and treat decorative images appropriately.",
    },
    {
        id: "link-name",
        category: "accessibility",
        title: "Some links lack accessible names",
        explanation:
            "The check found links that may be difficult for screen-reader users to understand.",
        recommendation:
            "Give links clear, descriptive accessible names.",
    },
    {
        id: "button-name",
        category: "accessibility",
        title: "Some buttons lack accessible names",
        explanation:
            "The check found buttons without appropriate accessible names.",
        recommendation:
            "Add visible labels or appropriate accessible names to buttons.",
    },
    {
        id: "color-contrast",
        category: "accessibility",
        title: "Text contrast needs improvement",
        explanation:
            "The check found text that does not meet its tested contrast requirements.",
        recommendation:
            "Improve contrast between text and its background.",
    },
    {
        id: "largest-contentful-paint",
        category: "performance",
        title: "Main content appears slowly",
        explanation:
            "The check measured a slow Largest Contentful Paint, which describes when the main visible content appears.",
        recommendation:
            "Review large images, render-blocking resources and server response times.",
    },
    {
        id: "total-blocking-time",
        category: "performance",
        title: "The page may be slow to respond",
        explanation:
            "The check measured significant main-thread blocking during page load.",
        recommendation:
            "Reduce unnecessary JavaScript and expensive main-thread work.",
    },
    {
        id: "render-blocking-resources",
        category: "performance",
        title: "Resources may delay page rendering",
        explanation:
            "The check identified resources that may delay the initial display of the page.",
        recommendation:
            "Review blocking stylesheets and scripts, and prioritise critical resources.",
    },

    {
        id: "is-crawlable",
        category: "seo",
        title: "Page indexing may be restricted",
        explanation:
            "The check detected a restriction that may prevent search engines from indexing this page.",
        recommendation:
            "Check whether the page is intentionally excluded from search results. Review robots directives and indexing settings.",
    },
    {
        id: "http-status-code",
        category: "seo",
        title: "Page response status needs attention",
        explanation:
            "The check detected a response status that may affect search-engine access to this page.",
        recommendation:
            "Check that the page returns an appropriate HTTP response, normally 200 for a public page.",
    },
    {
        id: "link-text",
        category: "seo",
        title: "Some link text is not descriptive",
        explanation:
            "The check detected links whose visible text may not clearly describe their destination.",
        recommendation:
            "Use meaningful link text that tells visitors what they will find after clicking.",
    },
    {
        id: "crawlable-anchors",
        category: "seo",
        title: "Some links may not be crawlable",
        explanation:
            "The check detected links that search engines may have difficulty following.",
        recommendation:
            "Use valid href destinations for important navigation and content links.",
    },
    {
        id: "robots-txt",
        category: "seo",
        title: "robots.txt needs attention",
        explanation:
            "The check detected a problem with the site's robots.txt file during this analysis.",
        recommendation:
            "Review the robots.txt file for invalid directives or responses that prevent search engines from reading it correctly.",
    },
    {
        id: "hreflang",
        category: "seo",
        title: "Language targeting needs attention",
        explanation:
            "The check detected a problem with the page's hreflang annotations.",
        recommendation:
            "Check that language and regional alternate URLs are valid and correctly reference each other.",
    },
    {
        id: "canonical",
        category: "seo",
        title: "Canonical URL needs attention",
        explanation:
            "The check detected a problem with the page's canonical URL declaration.",
        recommendation:
            "Check that the canonical URL points to the preferred, indexable version of the page.",
    },

];

function getFindings(
    audits: Record<string, LighthouseAudit> | undefined,
): WebsiteFinding[] {
    if (!audits) {
        return [];
    }

    const findings: WebsiteFinding[] = [];

    for (const definition of auditDefinitions) {
        const audit = audits[definition.id];

        if (!audit) {
            continue;
        }

        // Only report evaluated audits with a numeric score.
        if (
            typeof audit.score !== "number" ||
            !Number.isFinite(audit.score)
        ) {
            continue;
        }

        // Passing audits do not need a problem finding.
        if (audit.score >= 0.9) {
            continue;
        }

        const affectedElements = getAffectedElements(audit);

        findings.push({
            id: definition.id,
            category: definition.category,
            status:
                audit.score < 0.5 ? "fail" : "warning",
            title: definition.title,
            explanation: definition.explanation,
            recommendation: definition.recommendation,
            ...(getAuditEvidence(audit)
                ? { evidence: getAuditEvidence(audit) }
                : {}),
            ...(affectedElements.length > 0
                ? { affectedElements }
                : {}),
        });
    }

    return findings;
}

export class PageSpeedRateLimitError extends Error {
    constructor(public readonly retryAfterSeconds?: number) {
        super("PageSpeed request allowance reached");
        this.name = "PageSpeedRateLimitError";
    }
}

function retryDelay(value: string | null): number | undefined {
    if (!value) return undefined;
    const seconds = /^\d+$/.test(value)
        ? Number(value)
        : Math.ceil((Date.parse(value) - Date.now()) / 1000);
    return Number.isFinite(seconds) && seconds > 0
        ? Math.min(seconds, 86400)
        : undefined;
}

export async function getPageSpeedResults(
    url: string,
): Promise<PageSpeedResult> {
    const endpoint = new URL(
        "https://www.googleapis.com/pagespeedonline/v5/runPagespeed",
    );

    endpoint.searchParams.set("url", url);
    endpoint.searchParams.set("strategy", "mobile");

    for (const category of [
        "performance",
        "accessibility",
        "seo",
    ]) {
        endpoint.searchParams.append("category", category);
    }

    const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY;

    if (apiKey) {
        endpoint.searchParams.set("key", apiKey);
    }

    const response = await fetch(endpoint.toString(), {
        signal: AbortSignal.timeout(checkerConfig().pageSpeedTimeoutMs),
        cache: "no-store",
        redirect: "error",
    });

    if (response.status === 429) {
        throw new PageSpeedRateLimitError(
            retryDelay(response.headers.get("retry-after")),
        );
    }

    if (!response.ok) {
        throw new Error(
            `PageSpeed Insights returned HTTP ${response.status}`,
        );
    }

    const data =
        (await response.json()) as PageSpeedResponse;

    const lighthouse = data.lighthouseResult;
    const categories = lighthouse?.categories;

    if (!categories || lighthouse?.runtimeError) {
        throw new Error(
            "PageSpeed Insights returned no Lighthouse results.",
        );
    }

    const hasScore = Object.values(categories).some(
        (category) => typeof category.score === "number" && Number.isFinite(category.score),
    );
    if (!hasScore) throw new Error("PageSpeed returned no evaluated categories.");

    return {
        performanceScore: toScore(
            categories.performance?.score,
        ),
        accessibilityScore: toScore(
            categories.accessibility?.score,
        ),
        seoScore: toScore(categories.seo?.score),
        findings: getFindings(lighthouse?.audits),
    };
}
