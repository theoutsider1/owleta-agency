"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import {
    Turnstile,
    type TurnstileInstance,
} from "@marsidev/react-turnstile";
import { trackAnalyticsEvent } from "@/components/analytics/GoogleAnalytics";

type ServiceType = "check" | "audit";

type FormStatus = {
    type: "success" | "error" | null;
    message: string;
};

export default function AuditRequestForm({
    initialService = "audit",
}: {
    initialService?: ServiceType;
}) {
    const [service, setService] = useState<ServiceType>(initialService);
    const [turnstileToken, setTurnstileToken] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<FormStatus>({
        type: null,
        message: "",
    });
    const [fieldErrors, setFieldErrors] = useState<
        Partial<Record<"name" | "email" | "website", string>>
    >({});

    const turnstileRef = useRef<TurnstileInstance>(null);

    function clearSuccessStatus() {
        if (status.type === "success") {
            setStatus({
                type: null,
                message: "",
            });
        }
    }

    function clearFieldError(field: keyof typeof fieldErrors) {
        setFieldErrors((current) => {
            if (!current[field]) return current;

            const next = { ...current };
            delete next[field];

            return next;
        });
    }

    function handleInvalid(
        field: keyof typeof fieldErrors,
        message: string,
    ) {
        return (event: React.FormEvent<HTMLInputElement>) => {
            event.preventDefault();

            setFieldErrors((current) => ({
                ...current,
                [field]: message,
            }));
        };
    }

    function isValidWebsite(value: string) {
        const trimmed = value.trim();

        if (!trimmed) return false;

        const normalized = /^https?:\/\//i.test(trimmed)
            ? trimmed
            : `https://${trimmed}`;

        try {
            const url = new URL(normalized);

            return (
                (url.protocol === "http:" || url.protocol === "https:") &&
                url.hostname.includes(".")
            );
        } catch {
            return false;
        }
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (isSubmitting) return;

        setStatus({
            type: null,
            message: "",
        });

        const form = event.currentTarget;
        const formData = new FormData(form);
        const website = String(formData.get("website") ?? "");

        if (!isValidWebsite(website)) {
            setFieldErrors((current) => ({
                ...current,
                website: website.trim()
                    ? "Please enter a valid website address."
                    : "Please enter your website address.",
            }));

            document.getElementById("audit-website")?.focus();
            return;
        }

        if (!turnstileToken) {
            setStatus({
                type: "error",
                message: "Please complete the security check.",
            });
            return;
        }

        const payload = {
            service,
            name: String(formData.get("name") ?? ""),
            email: String(formData.get("email") ?? ""),
            website,
            business: String(formData.get("business") ?? ""),
            message: String(formData.get("message") ?? ""),
            turnstileToken,
        };

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/audit-request", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                setStatus({
                    type: "error",
                    message:
                        data.message ??
                        "Something went wrong. Please try again.",
                });

                turnstileRef.current?.reset();
                setTurnstileToken("");

                return;
            }

            trackAnalyticsEvent(
                service === "check"
                    ? "website_check_submit"
                    : "website_audit_submit",
            );

            form.reset();

            setStatus({
                type: "success",
                message: "Thanks. Your request has been received.",
            });

            turnstileRef.current?.reset();
            setTurnstileToken("");
        } catch {
            setStatus({
                type: "error",
                message:
                    "Something went wrong while sending your request. Please try again.",
            });

            turnstileRef.current?.reset();
            setTurnstileToken("");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="request" className="section-space">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                    {/* Intro */}
                    <div className="max-w-[520px]">
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Request a review
                            </p>
                        </div>

                        <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Tell us about{" "}
                            <span className="text-primary">
                                your website.
                            </span>
                        </h2>

                        <p className="mt-7 text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Share your website and what you would like us to look
                            at. Choose a free Website Check for a focused first
                            look, or a Website Audit for a deeper investigation.
                        </p>

                        {/* Commitment reassurance */}
                        <div className="relative mt-10 py-8 pl-7 pr-7 md:pl-8 md:pr-8">
                            <span
                                aria-hidden="true"
                                className="absolute left-0 top-0 h-8 w-px bg-primary"
                            />
                            <span
                                aria-hidden="true"
                                className="absolute left-0 top-0 h-px w-8 bg-primary"
                            />
                            <span
                                aria-hidden="true"
                                className="absolute bottom-0 right-0 h-8 w-px bg-primary"
                            />
                            <span
                                aria-hidden="true"
                                className="absolute bottom-0 right-0 h-px w-8 bg-primary"
                            />

                            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                Before you commit
                            </p>

                            <p className="text-[17px] leading-7 text-text-secondary md:text-[18px]">
                                Choosing an audit here does not commit you to
                                payment. We review your request and confirm the
                                scope and quote before you decide to proceed.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        onChange={clearSuccessStatus}
                    >
                        {/* Service choice */}
                        <fieldset>
                            <legend className="text-[13px] font-medium text-text-primary">
                                What are you interested in?
                                <span
                                    className="ml-1 text-primary"
                                    aria-hidden="true"
                                >
                                    *
                                </span>
                            </legend>

                            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                <ServiceOption
                                    value="check"
                                    selected={service === "check"}
                                    onSelect={() => {
                                        setService("check");
                                        clearSuccessStatus();
                                    }}
                                    title="Free Website Check"
                                    description="A focused first look for any obvious issue or opportunity that may deserve further attention."
                                    meta="Free"
                                />

                                <ServiceOption
                                    value="audit"
                                    selected={service === "audit"}
                                    onSelect={() => {
                                        setService("audit");
                                        clearSuccessStatus();
                                    }}
                                    title="Website Audit"
                                    description="A deeper structured investigation with evidence, priorities and a detailed PDF report."
                                    meta="Quoted first"
                                />
                            </div>
                        </fieldset>

                        {/* Details */}
                        <div className="mt-10 grid gap-6 sm:grid-cols-2">
                            <FormField
                                label="Name"
                                name="name"
                                required
                                minLength={2}
                                maxLength={100}
                                autoComplete="name"
                                error={fieldErrors.name}
                                onInvalid={handleInvalid(
                                    "name",
                                    "Please enter your name.",
                                )}
                                onChange={() => clearFieldError("name")}
                            />

                            <FormField
                                label="Email"
                                name="email"
                                type="email"
                                required
                                maxLength={254}
                                autoComplete="email"
                                error={fieldErrors.email}
                                onInvalid={handleInvalid(
                                    "email",
                                    "Please enter a valid email address.",
                                )}
                                onChange={() => clearFieldError("email")}
                            />

                            <FormField
                                label="Website URL"
                                name="website"
                                type="text"
                                inputMode="url"
                                autoComplete="url"
                                placeholder="yourwebsite.com"
                                required
                                maxLength={500}
                                error={fieldErrors.website}
                                onInvalid={handleInvalid(
                                    "website",
                                    "Please enter your website address.",
                                )}
                                onChange={() => clearFieldError("website")}
                            />

                            <FormField
                                label="Business name"
                                name="business"
                                maxLength={150}
                                autoComplete="organization"
                            />
                        </div>

                        {/* Message */}
                        <div className="mt-6">
                            <label
                                htmlFor="audit-message"
                                className="text-[13px] font-medium text-text-primary"
                            >
                                What would you like us to look at?

                                <span className="ml-1 font-normal text-text-muted">
                                    Optional
                                </span>
                            </label>

                            <textarea
                                id="audit-message"
                                name="message"
                                rows={6}
                                maxLength={5000}
                                placeholder="Anything specific you would like us to check?"
                                className="mt-2 w-full resize-y rounded-[9px] border border-border bg-background px-4 py-3 text-[15px] leading-6 text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary"
                            />
                        </div>

                        {/* Security */}
                        <div className="mt-6">
                            <Turnstile
                                ref={turnstileRef}
                                siteKey={
                                    process.env
                                        .NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""
                                }
                                onSuccess={(token) =>
                                    setTurnstileToken(token)
                                }
                                onExpire={() => setTurnstileToken("")}
                                onError={() => {
                                    setTurnstileToken("");

                                    setStatus({
                                        type: "error",
                                        message:
                                            "The security check could not load. Please refresh and try again.",
                                    });
                                }}
                            />
                        </div>

                        {/* Status */}
                        {status.type && (
                            <p
                                role={
                                    status.type === "error"
                                        ? "alert"
                                        : "status"
                                }
                                aria-live={
                                    status.type === "error"
                                        ? "assertive"
                                        : "polite"
                                }
                                className={`mt-5 text-[15px] leading-6 ${status.type === "success"
                                    ? "text-text-secondary"
                                    : "text-red-600"
                                    }`}
                            >
                                {status.message}
                            </p>
                        )}

                        {/* Submit */}
                        <div className="mt-7">
                            <div className="flex flex-wrap items-center gap-5">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex cursor-pointer items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color,opacity] hover:-translate-y-0.5 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send request"}
                                </button>

                                <p className="max-w-[360px] text-[15px] leading-6 text-text-secondary">
                                    We&apos;ll review your request before
                                    confirming the next step.
                                </p>
                            </div>

                            <p className="mt-4 max-w-[620px] text-[13px] leading-5 text-text-secondary">
                                Information submitted through this form is
                                handled according to our{" "}
                                <Link
                                    href="/privacy"
                                    className="cursor-pointer text-text-primary underline decoration-border-strong underline-offset-4 transition-colors hover:text-primary"
                                >
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

function ServiceOption({
    value,
    selected,
    onSelect,
    title,
    description,
    meta,
}: {
    value: ServiceType;
    selected: boolean;
    onSelect: () => void;
    title: string;
    description: string;
    meta: string;
}) {
    return (
        <label
            className={`relative cursor-pointer rounded-[10px] border p-5 transition-colors ${selected
                ? "border-primary bg-primary/[0.03]"
                : "border-border hover:border-text-muted"
                }`}
        >
            <input
                type="radio"
                name="service-choice"
                value={value}
                checked={selected}
                onChange={onSelect}
                className="sr-only"
            />

            <div className="flex items-start justify-between gap-4">
                <div
                    aria-hidden="true"
                    className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${selected ? "border-primary" : "border-border"
                        }`}
                >
                    {selected && (
                        <span className="h-2 w-2 rounded-full bg-primary" />
                    )}
                </div>

                <span
                    className={`text-[9px] font-medium uppercase tracking-[0.12em] ${selected ? "text-primary" : "text-text-muted"
                        }`}
                >
                    {meta}
                </span>
            </div>

            <h3 className="mt-5 text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                {title}
            </h3>

            <p className="mt-2 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                {description}
            </p>
        </label>
    );
}

function FormField({
    label,
    name,
    type = "text",
    placeholder,
    required = false,
    minLength,
    maxLength,
    inputMode,
    autoComplete,
    error,
    onInvalid,
    onChange,
}: {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
    autoComplete?: string;
    error?: string;
    onInvalid?: React.FormEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
    const id = `audit-${name}`;
    const errorId = `${id}-error`;

    return (
        <div>
            <label
                htmlFor={id}
                className="text-[13px] font-medium text-text-primary"
            >
                {label}

                <span
                    className={`ml-1 font-normal ${required ? "text-primary" : "text-text-muted"
                        }`}
                >
                    {required ? "*" : "Optional"}
                </span>
            </label>

            <input
                id={id}
                name={name}
                type={type}
                inputMode={inputMode}
                autoComplete={autoComplete}
                placeholder={placeholder}
                required={required}
                minLength={minLength}
                maxLength={maxLength}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                onInvalid={onInvalid}
                onChange={onChange}
                className={`mt-2 w-full rounded-[9px] border bg-background px-4 py-3 text-[15px] text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary ${error
                    ? "border-red-500"
                    : "border-border"
                    }`}
            />

            {error && (
                <p
                    id={errorId}
                    role="alert"
                    className="mt-2 text-[13px] leading-5 text-red-600"
                >
                    {error}
                </p>
            )}
        </div>
    );
}