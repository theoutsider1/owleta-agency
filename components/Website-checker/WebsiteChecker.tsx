"use client";

import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import {
    Turnstile,
    type TurnstileInstance,
} from "@marsidev/react-turnstile";
import type {
    WebsiteCheckResult,
    WebsiteFinding,
} from "@/lib/website-checker/schema";
import { availabilityMessages, type AvailabilityCode } from "@/lib/website-checker/availability";
import { CheckAvailability } from "./CheckAvailability";
import FreeWebsiteReportForm from "./FreeWebsiteReportForm";

type ApiResponse = {
    code?: AvailabilityCode;
    retryAfterSeconds?: number;
    success: boolean;
    message?: string;
    result?: WebsiteCheckResult;
};

function ScoreCard({
    label,
    score,
}: {
    label: string;
    score: number | null;
}) {
    const scoreLabel =
        score === null
            ? "Unavailable"
            : score >= 90
                ? "Good"
                : score >= 50
                    ? "Needs improvement"
                    : "Poor";

    return (
        <div className="rounded-[12px] border border-border bg-background p-5">
            <p className="text-[12px] font-medium text-text-secondary">
                {label}
            </p>

            <p className="mt-4 text-[36px] font-semibold leading-none tracking-[-0.04em] text-text-primary">
                {score === null ? "—" : score}
                {score !== null && (
                    <span className="ml-1 text-[14px] font-normal text-text-muted">
                        / 100
                    </span>
                )}
            </p>

            <p className="mt-3 text-[12px] text-text-muted">
                {scoreLabel}
            </p>
        </div>
    );
}


const findingCategories = [
    { id: "performance", label: "Performance" },
    { id: "seo", label: "SEO" },
    { id: "accessibility", label: "Accessibility" },
] as const;

function FindingsSection({
    findings,
}: {
    findings: WebsiteFinding[];
}) {
    const relevantFindings = findings.filter((finding) =>
        findingCategories.some(
            (category) => category.id === finding.category,
        ),
    );

    return (
        <div className="mt-12 border-t border-border pt-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
                What we found
            </p>

            <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.03em] text-text-primary">
                Issues worth looking at
            </h3>

            <p className="mt-3 text-[14px] leading-7 text-text-secondary">
                These findings come from a mobile analysis of this page.
                They are not a complete
                website audit.
            </p>

            {relevantFindings.length === 0 ? (
                <div className="mt-6 rounded-[12px] border border-border bg-surface p-5">
                    <p className="text-[14px] leading-7 text-text-secondary">
                        No issues were returned by the checks currently
                        supported by this tool.
                        This doesn&apos;t mean the page is free of
                        problems.
                    </p>
                </div>
            ) : (
                <div className="mt-8 space-y-10">
                    {findingCategories.map((category) => {
                        const categoryFindings =
                            relevantFindings.filter(
                                (finding) =>
                                    finding.category === category.id,
                            );

                        if (categoryFindings.length === 0) {
                            return null;
                        }

                        return (
                            <section
                                key={category.id}
                                aria-label={`${category.label} findings`}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <h4 className="text-[17px] font-semibold text-text-primary">
                                        {category.label}
                                    </h4>

                                    <span className="text-[12px] text-text-muted">
                                        {categoryFindings.length}{" "}
                                        {categoryFindings.length === 1
                                            ? "finding"
                                            : "findings"}
                                    </span>
                                </div>

                                <div className="mt-4 space-y-3">
                                    {categoryFindings.map((finding) => (
                                        <article
                                            key={finding.id}
                                            className="rounded-[12px] border border-border bg-surface p-5 md:p-6"
                                        >
                                            <div className="flex flex-wrap items-center gap-3">
                                                <span
                                                    className={`inline-block h-2.5 w-2.5 rounded-full ${finding.status === "fail"
                                                        ? "bg-red-500"
                                                        : "bg-amber-500"
                                                        }`}
                                                    aria-hidden="true"
                                                />

                                                <h5 className="text-[15px] font-semibold text-text-primary">
                                                    {finding.title}
                                                </h5>

                                                <span className="text-[11px] font-medium uppercase tracking-wide text-text-muted">
                                                    {finding.status === "fail"
                                                        ? "Needs attention"
                                                        : "Review"}
                                                </span>
                                            </div>

                                            <p className="mt-4 text-[14px] leading-7 text-text-secondary">
                                                {finding.explanation}
                                            </p>

                                            {finding.affectedElements &&
                                                finding.affectedElements.length > 0 ? (
                                                <div className="mt-5">
                                                    <p className="text-[12px] font-medium text-text-primary">
                                                        Affected elements
                                                    </p>

                                                    <p className="mt-1 text-[12px] text-text-muted">
                                                        Up to 3 examples identified by the check.
                                                    </p>

                                                    <div className="mt-3 space-y-2">
                                                        {finding.affectedElements.map((element, index) => (
                                                            <div
                                                                key={`${finding.id}-${index}`}
                                                                className="rounded-[9px] border border-border bg-background px-4 py-3"
                                                            >
                                                                <p className="text-[13px] font-medium text-text-primary">
                                                                    {finding.id === "image-alt"
                                                                        ? `Image ${index + 1}`
                                                                        : finding.id === "link-name" ||
                                                                            finding.id === "link-text" ||
                                                                            finding.id === "crawlable-anchors"
                                                                            ? `Link ${index + 1}`
                                                                            : finding.id === "button-name"
                                                                                ? `Button ${index + 1}`
                                                                                : `Element ${index + 1}`}
                                                                </p>

                                                                {element.label &&
                                                                    element.label !== element.selector &&
                                                                    !element.label.includes(" > ") && (
                                                                        <p className="mt-1 break-words text-[12px] text-text-secondary">
                                                                            {element.label}
                                                                        </p>
                                                                    )}

                                                                <details className="mt-2">
                                                                    <summary className="cursor-pointer text-[12px] text-primary">
                                                                        View technical details
                                                                    </summary>

                                                                    <div className="mt-3 space-y-2 text-[12px] leading-6 text-text-muted">
                                                                        {element.selector && (
                                                                            <p className="break-all">
                                                                                <span className="font-medium">
                                                                                    CSS selector:
                                                                                </span>{" "}
                                                                                {element.selector}
                                                                            </p>
                                                                        )}

                                                                        {element.snippet && (
                                                                            <p className="break-all">
                                                                                <span className="font-medium">
                                                                                    HTML snippet:
                                                                                </span>{" "}
                                                                                {element.snippet}
                                                                            </p>
                                                                        )}
                                                                    </div>
                                                                </details>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                finding.evidence && (
                                                    <p className="mt-3 text-[12px] leading-6 text-text-muted">
                                                        Check measurement: {finding.evidence}
                                                    </p>
                                                )
                                            )}

                                            {finding.recommendation && (
                                                <div className="mt-5 border-t border-border pt-4">
                                                    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-primary">
                                                        Suggested improvement
                                                    </p>

                                                    <p className="mt-2 text-[14px] leading-7 text-text-secondary">
                                                        {finding.recommendation}
                                                    </p>
                                                </div>
                                            )}
                                        </article>
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>
            )}
        </div>
    );
}


export default function WebsiteChecker({
    children,
}: {
    children?: ReactNode;
}) {
    const [url, setUrl] = useState("");
    const [turnstileToken, setTurnstileToken] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [result, setResult] =
        useState<WebsiteCheckResult | null>(null);

    const turnstileRef = useRef<TurnstileInstance>(null);
    const [turnstileSize, setTurnstileSize] = useState<"compact" | "flexible">("compact");

    useEffect(() => {
        const media = window.matchMedia("(min-width: 361px)");
        const updateSize = () => setTurnstileSize(media.matches ? "flexible" : "compact");

        updateSize();
        media.addEventListener("change", updateSize);
        return () => media.removeEventListener("change", updateSize);
    }, []);

    async function handleSubmit(
        event: FormEvent<HTMLFormElement>,
    ) {
        event.preventDefault();

        if (isSubmitting) return;

        setError("");
        setResult(null);

        if (!url.trim()) {
            setError("Please enter your website address.");
            return;
        }

        if (!turnstileToken) {
            setError("Please complete the security check.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/website-check", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    url: url.trim(),
                    turnstileToken,
                }),
            });

            const data = (await response.json()) as ApiResponse;

            if (!response.ok || !data.success || !data.result) {
                throw new Error(
                    (data.code && availabilityMessages[data.code]) || data.message ||
                    "We couldn't analyse this website. Please try again.",
                );
            }

            setResult(data.result);
        } catch (error) {
            setError(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again.",
            );
        } finally {
            setTurnstileToken("");
            turnstileRef.current?.reset();
            setIsSubmitting(false);
        }
    }

    const siteKey =
        process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

    return (
        <div>
            <div>
                <div className="max-w-[680px]">
                    <div className="mb-6 flex items-center gap-3">
                        <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-primary"
                        />
                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                            Free website analysis
                        </p>
                    </div>

                    <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                        Enter your{" "}
                        <span className="text-primary">website URL.</span>
                    </h2>

                    <p className="mt-7 text-[17px] leading-7 text-text-secondary md:text-[18px]">
                        We&apos;ll run a mobile website check and show you the
                        results. No email address required.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mx-auto mt-8 max-w-[680px] border border-border-strong bg-surface p-6 md:p-8"
                >
                <div className="sm:flex sm:items-end sm:gap-3">
                    <div className="min-w-0 flex-1">
                        <label
                            htmlFor="checker-url"
                            className="text-[11px] font-medium uppercase tracking-[0.14em] text-text-primary"
                        >
                            Website URL
                        </label>

                        <input
                            id="checker-url"
                            type="text"
                            inputMode="url"
                            autoComplete="url"
                            required
                            maxLength={2048}
                            value={url}
                            onChange={(event) => {
                                setUrl(event.target.value);
                                setError("");
                                setResult(null);
                            }}
                            placeholder="yourwebsite.co.uk"
                            className="mt-3 w-full border border-border bg-background px-4 py-3.5 text-[16px] text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting || !siteKey}
                        className="mt-4 inline-flex w-full cursor-pointer items-center justify-center bg-primary px-6 py-3.5 text-[14px] font-semibold text-white transition-[transform,background-color,opacity] hover:-translate-y-0.5 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:mt-0 sm:w-auto"
                    >
                        {isSubmitting
                            ? "Checking..."
                            : "Check my website"}
                    </button>
                </div>

                <div className="mt-7">
                    {siteKey ? (
                        <div className="checker-turnstile">
                            <Turnstile
                                ref={turnstileRef}
                                siteKey={siteKey}
                                onSuccess={(token) => {
                                    setTurnstileToken(token);
                                }}
                                onExpire={() => {
                                    setTurnstileToken("");
                                }}
                                onError={() => {
                                    setTurnstileToken("");
                                    setError(
                                        "The security check couldn't load. Please refresh and try again.",
                                    );
                                }}
                                options={{
                                    theme: "light",
                                    size: turnstileSize,
                                }}
                            />
                        </div>
                    ) : (
                        <p role="alert" className="text-[13px] text-red-700">
                            The security check is not configured.
                        </p>
                    )}
                </div>

                {isSubmitting && (
                    <p role="status" className="mt-4 text-[13px] text-text-secondary">
                        Running a mobile website analysis. This may take a little while.
                    </p>
                )}

                {error && (
                    <p
                        role="alert"
                        className="mt-5 border-l-2 border-red-500 pl-4 text-[14px] leading-6 text-text-secondary"
                    >
                        {error}
                    </p>
                )}
                </form>
            </div>

            {result && (
                <section
                    aria-labelledby="checker-results-heading"
                    className="mt-12"
                >
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
                        Your results
                    </p>

                    <h2
                        id="checker-results-heading"
                        className="mt-3 text-[28px] font-semibold tracking-[-0.035em] text-text-primary"
                    >
                        Website performance overview
                    </h2>

                    <p className="mt-3 break-all text-[14px] text-text-secondary">
                        {result.url}
                    </p>

                    <CheckAvailability result={result} />

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        <ScoreCard
                            label="Mobile performance"
                            score={result.performanceScore}
                        />
                        <ScoreCard
                            label="SEO"
                            score={result.seoScore}
                        />
                        <ScoreCard
                            label="Accessibility"
                            score={result.accessibilityScore}
                        />
                    </div>

                    <p className="mt-5 text-[13px] leading-6 text-text-muted">
                        These are diagnostic scores for the analysed page,
                        not a guarantee of search rankings
                        or business results.
                    </p>

                    {result.technical?.status === "complete" && <FindingsSection findings={result.findings ?? []} />}

                    {result.limitations.length > 0 && (
                        <div className="mt-8 border-t border-border pt-6">
                            <h3 className="text-[14px] font-semibold text-text-primary">
                                About this check
                            </h3>

                            <div className="mt-3 space-y-2 text-[13px] leading-6 text-text-secondary">
                                {result.limitations.map((limitation) => (
                                    <p key={limitation}>{limitation}</p>
                                ))}
                            </div>
                        </div>
                    )}
                </section>
            )}

            {children}

            <FreeWebsiteReportForm
                suggestedWebsite={result?.url ?? url}
            />
        </div>
    );
}
