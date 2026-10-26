import type { CheckAvailability } from "./availability";
import { z } from "zod";

export const websiteCheckSchema = z.object({
    url: z
        .string()
        .trim()
        .min(1, "Enter a website URL.")
        .max(2048, "The URL is too long.")
        .transform((value) =>
            value.includes("://") ? value : `https://${value}`,
        )
        .pipe(
            z.url("Enter a valid website URL.").refine((value) => {
                try {
                    const url = new URL(value);
                    const hostname = url.hostname.toLowerCase();

                    return (
                        url.protocol === "https:" &&
                        !url.username &&
                        !url.password &&
                        !url.port &&
                        !url.hash &&
                        hostname.includes(".") &&
                        !hostname.endsWith(".local") &&
                        !hostname.endsWith(".internal") &&
                        hostname !== "localhost" &&
                        !/^\d+\.\d+\.\d+\.\d+$/.test(hostname) &&
                        !hostname.startsWith("[")
                    );
                } catch {
                    return false;
                }
            }, "Enter a public HTTPS website URL."),
        ).transform((value) => {
            const url = new URL(value);

            return `${url.origin}/`;
        }),
    turnstileToken: z.string().min(1, "Complete the security check."),
});


export type FindingStatus =
    | "pass"
    | "warning"
    | "fail"
    | "unknown";

export type FindingCategory =
    | "performance"
    | "seo"
    | "accessibility"
    | "enquiries"
    | "trust";

export type FindingPriority = "high" | "medium" | "low";

export interface WebsiteFinding {
    id: string;
    category: FindingCategory;
    status: FindingStatus;
    priority?: FindingPriority;
    title: string;
    explanation: string;
    recommendation?: string;
    evidence?: string;
    affectedElements?: AffectedElement[];
}

export interface WebsiteCheckResult {
    technical: CheckAvailability;
    enquiries: CheckAvailability;
    cached?: boolean;
    url: string;
    checkedAt: string;
    scope: "single-page";
    performanceScore: number | null;
    accessibilityScore: number | null;
    seoScore: number | null;
    findings: WebsiteFinding[];
    limitations: string[];
}

export interface AffectedElement {
    selector?: string;
    label?: string;
    snippet?: string;
}