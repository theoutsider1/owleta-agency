"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
    Turnstile,
    type TurnstileInstance,
} from "@marsidev/react-turnstile";

import { auditRequestSchema } from "@/lib/validation/audit";

const reviewInterests = [
    "Speed and performance",
    "SEO and visibility",
    "Accessibility",
    "Navigation and customer enquiries",
    "Website fixes",
    "Redesign advice",
] as const;

type Status = {
    type: "success" | "error";
    message: string;
} | null;

const inputClass =
    "mt-2 w-full border border-border-strong bg-background px-4 py-3 text-base text-text-primary placeholder:text-text-muted";

export default function FreeWebsiteReportForm({
    suggestedWebsite = "",
}: {
    suggestedWebsite?: string;
}) {
    // null means use the checker's latest URL.
    // Once edited, preserve the visitor's own value.
    const [websiteOverride, setWebsiteOverride] =
        useState<string | null>(null);

    const [token, setToken] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<Status>(null);

    const turnstileRef = useRef<TurnstileInstance>(null);
    const [turnstileSize, setTurnstileSize] = useState<"compact" | "flexible">("compact");

    useEffect(() => {
        const media = window.matchMedia("(min-width: 361px)");
        const updateSize = () => setTurnstileSize(media.matches ? "flexible" : "compact");

        updateSize();
        media.addEventListener("change", updateSize);
        return () => media.removeEventListener("change", updateSize);
    }, []);
    const submissionLock = useRef(false);

    const siteKey =
        process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

    const website = websiteOverride ?? suggestedWebsite;

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (submissionLock.current) return;

        setStatus(null);

        const formData = new FormData(event.currentTarget);
        const interests = formData.getAll("interests").map(String);

        if (interests.length === 0) {
            setStatus({
                type: "error",
                message: "Choose at least one area for your review.",
            });
            document.getElementById("report-interest-0")?.focus();
            return;
        }

        const payload = {
            service: "check" as const,
            name: String(formData.get("name") ?? ""),
            email: String(formData.get("email") ?? ""),
            website,
            business: "",
            message: [
                "Offer: Free manual website report within 24 hours.",
                "Source: Website checker",
                "",
                `Review interests: ${interests.join(", ")}`,
                "",
                "Additional message:",
                String(formData.get("message") ?? "").trim() ||
                "None provided.",
            ].join("\n"),
            turnstileToken: token,
        };

        const parsed = auditRequestSchema.safeParse(payload);

        if (!parsed.success) {
            setStatus({
                type: "error",
                message:
                    parsed.error.issues[0]?.message ??
                    "Please check your details.",
            });
            return;
        }

        submissionLock.current = true;
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/audit-request", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(parsed.data),
            });

            const data = (await response.json()) as {
                success?: boolean;
                message?: string;
            };

            if (!response.ok || !data.success) {
                throw new Error(
                    data.message ||
                    "We couldn't send your request. Please try again.",
                );
            }

            setStatus({
                type: "success",
                message:
                    "Thanks! Your request has been received. We’ll email your free website report within 24 hours.",
            });
        } catch (error) {
            // Keep every field intact so the visitor can retry.
            setStatus({
                type: "error",
                message:
                    error instanceof Error
                        ? error.message
                        : "We couldn't send your request. Please try again.",
            });
        } finally {
            submissionLock.current = false;
            setIsSubmitting(false);
            setToken("");
            turnstileRef.current?.reset();
        }
    }

    return (
        <section
            id="free-website-report"
            aria-labelledby="free-report-heading"
            className="mt-14 scroll-mt-24"
        >
            <div>
                <div className="max-w-[680px]">
                    <div className="mb-6 flex items-center gap-3">
                        <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-primary"
                        />
                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                            Free manual website review
                        </p>
                    </div>

                    <h2
                        id="free-report-heading"
                        className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary"
                    >
                        Want a more{" "}
                        <span className="text-primary">detailed website report?</span>
                    </h2>

                    <p className="mt-7 text-[17px] leading-7 text-text-secondary md:text-[18px]">
                        Tell us what you need help with. We’ll manually review
                        your website and email a report with practical
                        recommendations within 24 hours of submission.
                    </p>

                    <p className="mt-4 text-[15px] font-medium leading-7 text-text-primary md:text-[16px]">
                        Free for now. No payment details or purchase required.
                    </p>

                    <p className="mt-3 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                        This is a focused review of selected pages and the
                        interests you choose, rather than an exhaustive audit
                        of every page.
                    </p>
                </div>

                <div className="mx-auto mt-10 max-w-[680px] border border-border-strong bg-surface p-6 md:p-8">
                {status?.type === "success" ? (
                    <div
                        role="status"
                        className="border border-border bg-background p-5 leading-7 text-text-primary"
                    >
                        {status.message}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                    <fieldset disabled={isSubmitting}>
                        <legend className="sr-only">
                            Request your free website report
                        </legend>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="report-name"
                                    className="text-sm font-medium text-text-primary"
                                >
                                    Name
                                </label>
                                <input
                                    id="report-name"
                                    name="name"
                                    required
                                    minLength={2}
                                    maxLength={100}
                                    autoComplete="name"
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="report-email"
                                    className="text-sm font-medium text-text-primary"
                                >
                                    Email
                                </label>
                                <input
                                    id="report-email"
                                    name="email"
                                    type="email"
                                    required
                                    maxLength={254}
                                    autoComplete="email"
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        <div className="mt-5">
                            <label
                                htmlFor="report-website"
                                className="text-sm font-medium text-text-primary"
                            >
                                Website URL
                            </label>
                            <input
                                id="report-website"
                                name="website"
                                type="text"
                                inputMode="url"
                                autoComplete="url"
                                required
                                maxLength={500}
                                value={website}
                                onChange={(event) =>
                                    setWebsiteOverride(event.target.value)
                                }
                                placeholder="yourwebsite.co.uk"
                                className={inputClass}
                            />
                        </div>

                        <fieldset className="mt-6">
                            <legend className="text-sm font-medium text-text-primary">
                                What would you like help with?
                                Choose at least one.
                            </legend>

                            <div className="mt-3 grid gap-3 sm:grid-cols-2">
                                {reviewInterests.map((interest, index) => (
                                    <label
                                        key={interest}
                                        className="flex cursor-pointer items-start gap-3 border border-border p-3 text-sm leading-6 text-text-secondary"
                                    >
                                        <input
                                            id={`report-interest-${index}`}
                                            type="checkbox"
                                            name="interests"
                                            value={interest}
                                            className="mt-1 h-4 w-4 shrink-0 accent-primary"
                                        />
                                        {interest}
                                    </label>
                                ))}
                            </div>
                        </fieldset>

                        <div className="mt-6">
                            <label
                                htmlFor="report-message"
                                className="text-sm font-medium text-text-primary"
                            >
                                Anything else?{" "}
                                <span className="font-normal text-text-muted">
                                    Optional
                                </span>
                            </label>
                            <textarea
                                id="report-message"
                                name="message"
                                rows={4}
                                maxLength={3500}
                                placeholder="Tell us about a specific issue or what you want your website to achieve."
                                className={`${inputClass} resize-y`}
                            />
                        </div>
                    </fieldset>

                    <div className="mt-6">
                        {siteKey ? (
                            <div className="checker-turnstile">
                                <Turnstile
                                    ref={turnstileRef}
                                    siteKey={siteKey}
                                    onSuccess={setToken}
                                    onExpire={() => setToken("")}
                                    onError={() => {
                                        setToken("");
                                        setStatus({
                                            type: "error",
                                            message:
                                                "The security check couldn’t load. Please refresh and try again.",
                                        });
                                    }}
                                    options={{
                                        theme: "light",
                                        size: turnstileSize,
                                    }}
                                />
                            </div>
                        ) : (
                            <p role="alert" className="text-sm text-red-700">
                                The form is temporarily unavailable.
                                Please try again later.
                            </p>
                        )}
                    </div>

                    {status?.type === "error" && (
                        <p role="alert" className="mt-4 text-sm text-red-700">
                            {status.message}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting || !siteKey || !token}
                        className="mt-6 bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSubmitting
                            ? "Sending your request..."
                            : "Get my free report within 24 hours"}
                    </button>

                    <p className="mt-4 text-sm leading-6 text-text-secondary">
                        We’ll use your details to prepare and email your
                        report. Read our{" "}
                        <Link
                            href="/privacy"
                            className="text-primary underline underline-offset-4"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>
                    </form>
                )}
                </div>
            </div>
        </section>
    );
}
