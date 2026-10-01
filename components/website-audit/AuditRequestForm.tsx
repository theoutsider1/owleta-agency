
"use client";

import { FormEvent, useState } from "react";

type ServiceType = "check" | "audit";

export default function AuditRequestForm({
    initialService = "audit",
}: {
    initialService?: ServiceType;
}) {
    const [service, setService] = useState<ServiceType>(initialService);
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Submission will be connected to the website contact endpoint later.
    }

    return (
        <section id="request" className="section-space border-t border-border">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                    {/* Intro */}
                    <div className="max-w-[520px]">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Request a review
                            </p>
                        </div>

                        <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Tell us about{" "}
                            <span className="text-primary">your website.</span>
                        </h2>

                        <p className="mt-6 text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Share your website and what you would like us to look at. Choose a
                            free Website Check for a focused first look, or a Website Audit
                            for a deeper investigation.
                        </p>

                        <div className="mt-8 border-t border-border pt-5">
                            <p className="text-[13px] leading-5 text-text-muted">
                                Choosing an audit here does not commit you to payment. We review
                                the request and confirm the scope and quote first.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        {/* Service choice */}
                        <fieldset>
                            <legend className="text-[13px] font-medium text-text-primary">
                                What are you interested in?
                            </legend>

                            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                <ServiceOption
                                    value="check"
                                    selected={service === "check"}
                                    onSelect={() => setService("check")}
                                    title="Free Website Check"
                                    description="A focused first look to see whether something important may be getting in the way."
                                    meta="Free"
                                />

                                <ServiceOption
                                    value="audit"
                                    selected={service === "audit"}
                                    onSelect={() => setService("audit")}
                                    title="Website Audit"
                                    description="A deeper investigation with evidence, priorities and a detailed PDF report."
                                    meta="Quoted first"
                                />
                            </div>
                        </fieldset>

                        <input type="hidden" name="service" value={service} />

                        {/* Details */}
                        <div className="mt-10 grid gap-6 sm:grid-cols-2">
                            <FormField label="Name" name="name" required />

                            <FormField
                                label="Email"
                                name="email"
                                type="email"
                                required
                            />

                            <FormField
                                label="Website URL"
                                name="website"
                                type="url"
                                placeholder="https://"
                                required
                            />

                            <FormField
                                label="Business name"
                                name="business"
                            />
                        </div>

                        {/* Message */}
                        <div className="mt-6">
                            <label
                                htmlFor="audit-message"
                                className="text-[13px] font-medium text-text-primary"
                            >
                                What would you like us to look at?
                            </label>

                            <textarea
                                id="audit-message"
                                name="message"
                                rows={6}
                                placeholder="Tell us what you have noticed, what you are concerned about or what you would like to improve."
                                className="mt-2 w-full resize-y rounded-[9px] border border-border bg-background px-4 py-3 text-[15px] leading-6 text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary"
                            />
                        </div>

                        {/* Submit */}
                        <div className="mt-7 flex flex-wrap items-center gap-5">
                            <button
                                type="submit"
                                className="inline-flex items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                Send request
                                <span className="ml-3">→</span>
                            </button>

                            <p className="max-w-[360px] text-[12px] leading-5 text-text-muted">
                                We&apos;ll review your request before confirming the next step.
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
                    className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${selected ? "border-primary" : "border-border"
                        }`}
                >
                    {selected && <span className="h-2 w-2 rounded-full bg-primary" />}
                </div>

                <span
                    className={`text-[9px] font-medium uppercase tracking-[0.12em] ${selected ? "text-primary" : "text-text-muted"
                        }`}
                >
                    {meta}
                </span>
            </div>

            <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.025em] text-text-primary">
                {title}
            </h3>

            <p className="mt-2 text-[14px] leading-6 text-text-secondary">
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
}: {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
}) {
    const id = `audit-${name}`;

    return (
        <div>
            <label
                htmlFor={id}
                className="text-[13px] font-medium text-text-primary"
            >
                {label}
                {required && (
                    <span className="ml-1 text-primary" aria-hidden="true">
                        *
                    </span>
                )}
            </label>

            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                className="mt-2 w-full rounded-[9px] border border-border bg-background px-4 py-3 text-[15px] text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary"
            />
        </div>
    );
}