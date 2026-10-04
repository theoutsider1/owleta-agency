"use client";

import { FormEvent, useRef, useState } from "react";
import {
    Turnstile,
    type TurnstileInstance,
} from "@marsidev/react-turnstile";

const projectTypes = [
    "New website",
    "Website redesign",
    "Website improvements",
    "SEO",
    "Website maintenance",
    "White-label development",
    "Other",
];

export default function ContactForm() {
    const [projectType, setProjectType] = useState("");
    const [turnstileToken, setTurnstileToken] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({
        type: null,
        message: "",
    });

    const turnstileRef = useRef<TurnstileInstance>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (isSubmitting) return;

        setStatus({
            type: null,
            message: "",
        });

        if (!projectType) {
            setStatus({
                type: "error",
                message: "Please select what you need help with.",
            });
            return;
        }

        if (!turnstileToken) {
            setStatus({
                type: "error",
                message: "Please complete the security check.",
            });
            return;
        }

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: String(formData.get("name") ?? ""),
            email: String(formData.get("email") ?? ""),
            business: String(formData.get("business") ?? ""),
            projectType,
            website: String(formData.get("website") ?? ""),
            message: String(formData.get("message") ?? ""),
            turnstileToken,
        };

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = (await response.json()) as {
                success?: boolean;
                message?: string;
            };

            if (!response.ok || !data.success) {
                throw new Error(
                    data.message ||
                    "Something went wrong. Please try again.",
                );
            }

            form.reset();
            setProjectType("");
            setTurnstileToken("");
            turnstileRef.current?.reset();

            setStatus({
                type: "success",
                message:
                    data.message ||
                    "Thanks. Your enquiry has been received.",
            });
        } catch (error) {
            setStatus({
                type: "error",
                message:
                    error instanceof Error
                        ? error.message
                        : "Something went wrong. Please try again.",
            });

            setTurnstileToken("");
            turnstileRef.current?.reset();
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section
            id="enquiry"
            className="section-space border-t border-border"
        >
            <div className="site-container">
                <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    {/* Introduction */}
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Project enquiry
                            </p>
                        </div>

                        <h2 className="max-w-[560px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Give us a little{" "}
                            <span className="text-primary">context.</span>
                        </h2>

                        <p className="mt-6 max-w-[520px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Tell us enough to understand what you are working
                            on. We can clarify the details together before any
                            scope or quote is agreed.
                        </p>

                        <div className="mt-9 border-t border-border pt-5">
                            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                No finished brief required
                            </p>

                            <p className="mt-2 max-w-[440px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                If you are not sure exactly what you need yet,
                                describe the problem in your own words.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        onChange={() => {
                            if (status.type === "success") {
                                setStatus({
                                    type: null,
                                    message: "",
                                });
                            }
                        }}>

                        {/* Name + email */}
                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-primary"
                                >
                                    Your name
                                    <span className="ml-2 normal-case tracking-normal text-text-muted">
                                        required
                                    </span>
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    minLength={2}
                                    maxLength={100}
                                    placeholder="Your name"
                                    className="mt-3 w-full rounded-[9px] border border-border bg-background px-4 py-3.5 text-[15px] text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary md:text-[16px]"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-primary"
                                >
                                    Email address
                                    <span className="ml-2 normal-case tracking-normal text-text-muted">
                                        required
                                    </span>
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="you@business.com"
                                    className="mt-3 w-full rounded-[9px] border border-border bg-background px-4 py-3.5 text-[15px] text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary md:text-[16px]"
                                />
                            </div>
                        </div>

                        {/* Business */}
                        <div className="mt-6">
                            <label
                                htmlFor="business"
                                className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-primary"
                            >
                                Business or organisation
                                <span className="ml-2 normal-case tracking-normal text-text-muted">
                                    optional
                                </span>
                            </label>

                            <input
                                id="business"
                                name="business"
                                type="text"
                                autoComplete="organization"
                                placeholder="Business name"
                                className="mt-3 w-full rounded-[9px] border border-border bg-background px-4 py-3.5 text-[15px] text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary md:text-[16px]"
                            />
                        </div>

                        {/* Project type */}
                        <fieldset className="mt-8">
                            <legend className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-primary">
                                What can we help with?
                                <span className="ml-2 normal-case tracking-normal text-text-muted">
                                    required
                                </span>
                            </legend>

                            <div className="mt-3 flex flex-wrap gap-2">
                                {projectTypes.map((type) => {
                                    const active = projectType === type;

                                    return (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => {
                                                setProjectType(type);

                                                if (status.type === "success") {
                                                    setStatus({
                                                        type: null,
                                                        message: "",
                                                    });
                                                }
                                            }}
                                            aria-pressed={active}
                                            className={`cursor-pointer rounded-[9px] border px-4 py-2.5 text-[13px] font-medium transition-colors ${active
                                                ? "border-primary bg-primary text-white"
                                                : "border-border bg-background text-text-secondary hover:border-text-muted hover:text-text-primary"
                                                }`}
                                        >
                                            {type}
                                        </button>
                                    );
                                })}

                                <input
                                    type="hidden"
                                    name="projectType"
                                    value={projectType}
                                />
                            </div>
                        </fieldset>

                        {/* Website */}
                        <div className="mt-8">
                            <label
                                htmlFor="website"
                                className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-primary"
                            >
                                Existing website
                                <span className="ml-2 normal-case tracking-normal text-text-muted">
                                    optional
                                </span>
                            </label>

                            <input
                                id="website"
                                name="website"
                                type="text"
                                inputMode="url"
                                autoComplete="url"
                                placeholder="yourwebsite.com"
                                className="mt-3 w-full rounded-[9px] border border-border bg-background px-4 py-3.5 text-[15px] text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary md:text-[16px]"
                            />
                        </div>

                        {/* Message */}
                        <div className="mt-8">
                            <label
                                htmlFor="message"
                                className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-primary"
                            >
                                Tell us about the project
                                <span className="ml-2 normal-case tracking-normal text-text-muted">
                                    required
                                </span>
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                required
                                minLength={10}
                                maxLength={5000}
                                rows={7}
                                placeholder="Tell us a little about your project..."
                                className="mt-3 w-full resize-none rounded-[9px] border border-border bg-background px-4 py-3.5 text-[15px] leading-7 text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary md:text-[16px]"
                            />
                        </div>

                        {/* Security check */}
                        <div className="mt-7">
                            <Turnstile
                                ref={turnstileRef}
                                siteKey={
                                    process.env
                                        .NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""
                                }
                                onSuccess={(token) => {
                                    setTurnstileToken(token);
                                }}
                                onExpire={() => {
                                    setTurnstileToken("");
                                }}
                                onError={() => {
                                    setTurnstileToken("");

                                    setStatus({
                                        type: "error",
                                        message:
                                            "The security check could not load. Please refresh and try again.",
                                    });
                                }}
                                options={{
                                    theme: "auto",
                                    size: "flexible",
                                }}
                            />
                        </div>

                        {/* Submit */}
                        <div className="mt-7">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex cursor-pointer items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color,opacity] hover:-translate-y-0.5 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                            >
                                {isSubmitting
                                    ? "Sending..."
                                    : "Send enquiry"}

                                {!isSubmitting && (
                                    <span className="ml-3">→</span>
                                )}
                            </button>

                            <p className="mt-4 max-w-[520px] text-[13px] leading-5 text-text-muted">
                                Sending an enquiry does not commit you to a
                                project. We will review the details first and
                                discuss the appropriate next step.
                            </p>

                            {status.type && (
                                <div
                                    role={
                                        status.type === "error"
                                            ? "alert"
                                            : "status"
                                    }
                                    aria-live="polite"
                                    className={`mt-5 border-l-2 pl-4 text-[14px] leading-6 ${status.type === "success"
                                        ? "border-primary text-text-primary"
                                        : "border-border text-text-secondary"
                                        }`}
                                >
                                    {status.message}
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}