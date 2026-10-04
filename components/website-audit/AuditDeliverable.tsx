const deliverables = [
    {
        number: "01",
        title: "Documented findings",
        text: "What we identify is recorded clearly, including issues, opportunities and areas that are already working well.",
    },
    {
        number: "02",
        title: "Evidence and context",
        text: "Where useful, findings include the affected page or location, supporting evidence and an explanation of what is happening.",
    },
    {
        number: "03",
        title: "Clear priorities",
        text: "Findings are organised so you can distinguish what deserves attention first from lower-priority improvements and opportunities.",
    },
    {
        number: "04",
        title: "Recommended actions",
        text: "You receive practical recommendations explaining what to consider next, without being tied to Owlixir for implementation.",
    },
];

export default function AuditDeliverable() {
    return (
        <section className="section-space">
            <div className="site-container">
                {/* Intro */}
                <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                What you receive
                            </p>
                        </div>

                        <h2 className="max-w-[600px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Findings you can actually{" "}
                            <span className="text-primary">use.</span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-[620px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Your audit is delivered as a detailed PDF report that turns
                            the investigation into documented findings, priorities and
                            practical recommendations.
                        </p>
                    </div>
                </div>

                {/* Deliverable */}
                <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
                    <ReportPreview />

                    <div className="border-t border-border">
                        {deliverables.map((item) => (
                            <div
                                key={item.number}
                                className="grid gap-4 border-b border-border py-6 sm:grid-cols-[52px_1fr]"
                            >
                                <span className="pt-1 text-[10px] font-medium tracking-[0.15em] text-text-muted">
                                    {item.number}
                                </span>

                                <div>
                                    <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 max-w-[500px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ownership */}
                <div className="mt-10 grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
                    <div
                        aria-hidden="true"
                        className="hidden lg:block"
                    />

                    <div className="relative py-8 pl-7 pr-7 md:pl-8 md:pr-8">
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
                            Your report
                        </p>

                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            The report is yours. You can act on the recommendations
                            yourself, share them with your existing developer or ask
                            Owlixir to quote separately for implementation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ReportPreview() {
    return (
        <div className="relative mx-auto w-full max-w-[620px] lg:mx-0">
            {/* Back sheet */}
            <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[12px] border border-border bg-background-secondary"
            />

            {/* Report */}
            <div className="relative overflow-hidden rounded-[12px] border border-border bg-background">
                {/* Report header */}
                <div className="flex items-start justify-between gap-6 border-b border-border px-6 py-6 md:px-8">
                    <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                            Owlixir
                        </p>

                        <h3 className="mt-2 text-[24px] font-semibold tracking-[-0.035em] text-text-primary">
                            Website Audit Report
                        </h3>

                        <p className="mt-1 text-[13px] leading-5 text-text-secondary">
                            Findings, priorities and recommended actions
                        </p>
                    </div>

                    <span className="rounded-full border border-border px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-text-muted">
                        PDF
                    </span>
                </div>

                {/* Finding categories */}
                <div className="grid grid-cols-2 border-b border-border sm:grid-cols-4">
                    <ReportMetric label="Critical" />
                    <ReportMetric label="Improvements" />
                    <ReportMetric label="Opportunities" />
                    <ReportMetric label="Working well" />
                </div>

                {/* Example finding */}
                <div className="px-6 py-7 md:px-8 md:py-8">
                    <div className="flex items-center justify-between gap-4">
                        <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-text-muted">
                            Example finding
                        </p>

                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                            High priority
                        </span>
                    </div>

                    <h4 className="mt-4 text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                        Enquiry journey
                    </h4>

                    <p className="mt-2 max-w-[470px] text-[14px] leading-6 text-text-secondary">
                        Friction was identified between an important service page and
                        the visitor&apos;s next step.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        <ReportField
                            label="Why it matters"
                            value="Visitors may leave before reaching the enquiry point."
                        />

                        <ReportField
                            label="Recommended action"
                            value="Reduce friction and make the next step easier to reach."
                        />
                    </div>
                </div>

                {/* Report footer */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border px-6 py-4 md:px-8">
                    {[
                        "Finding",
                        "Evidence",
                        "Priority",
                        "Recommended action",
                    ].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                            <span
                                aria-hidden="true"
                                className="h-1 w-1 rounded-full bg-primary"
                            />

                            <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-text-muted">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ReportMetric({ label }: { label: string }) {
    return (
        <div className="border-r border-border px-3 py-5 last:border-r-0 sm:px-4 md:px-5">
            <span
                aria-hidden="true"
                className="mb-3 block h-1.5 w-1.5 rounded-full bg-primary"
            />

            <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-text-muted">
                {label}
            </p>
        </div>
    );
}

function ReportField({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="border-t border-border pt-3">
            <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-text-muted">
                {label}
            </p>

            <p className="mt-2 text-[13px] leading-5 text-text-secondary">
                {value}
            </p>
        </div>
    );
}