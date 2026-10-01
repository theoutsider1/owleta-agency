const deliverables = [
    {
        number: "01",
        title: "Documented findings",
        text: "The issues and opportunities we identify are recorded clearly, rather than left as vague observations.",
    },
    {
        number: "02",
        title: "Evidence and context",
        text: "Where useful, findings include the affected page, supporting evidence and an explanation of what is happening.",
    },
    {
        number: "03",
        title: "Clear priorities",
        text: "Findings are organised so you can distinguish what deserves attention first from lower-priority improvements.",
    },
    {
        number: "04",
        title: "Recommended actions",
        text: "You receive practical recommendations explaining what should be considered next, without being tied to Owlixir for implementation.",
    },
];

export default function AuditDeliverable() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                {/* Intro */}
                <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

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
                            Your audit is delivered as a detailed PDF report that turns the
                            investigation into documented findings, priorities and practical
                            recommendations.
                        </p>
                    </div>
                </div>

                {/* Deliverable */}
                <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
                    <ReportPreview />

                    <div className="border-t border-border">
                        {deliverables.map((item) => (
                            <div
                                key={item.number}
                                className="grid gap-4 border-b border-border py-6 sm:grid-cols-[52px_1fr]"
                            >
                                <span className="pt-1 text-[11px] font-medium text-text-muted">
                                    {item.number}
                                </span>

                                <div>
                                    <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 max-w-[500px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ownership */}
                <div className="mt-12 grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
                    <div />

                    <div className="border-l-2 border-primary pl-5">
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            The report is yours. You can act on the recommendations yourself,
                            share them with your existing developer or ask Owlixir to quote
                            separately for the work.
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

                        <p className="mt-1 text-[13px] text-text-muted">
                            Findings, priorities and recommended actions
                        </p>
                    </div>

                    <span className="rounded-full border border-border px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-text-muted">
                        PDF
                    </span>
                </div>

                {/* Summary */}
                <div className="grid grid-cols-3 border-b border-border">
                    <ReportMetric value="02" label="Critical" />
                    <ReportMetric value="05" label="Improvements" />
                    <ReportMetric value="03" label="Opportunities" />
                </div>

                {/* Example finding */}
                <div className="px-6 py-7 md:px-8 md:py-8">
                    <div className="flex items-center justify-between gap-4">
                        <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-text-muted">
                            Finding 01
                        </p>

                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                            High priority
                        </span>
                    </div>

                    <h4 className="mt-4 text-[20px] font-semibold tracking-[-0.025em] text-text-primary">
                        Enquiry journey
                    </h4>

                    <p className="mt-2 max-w-[470px] text-[14px] leading-6 text-text-secondary">
                        Friction was identified between an important service page and the
                        visitor&apos;s next step.
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
                    {["Finding", "Evidence", "Priority", "Action"].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-primary" />
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

function ReportMetric({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    return (
        <div className="border-r border-border px-4 py-5 last:border-r-0 md:px-6">
            <p className="text-[22px] font-semibold tracking-[-0.035em] text-text-primary">
                {value}
            </p>

            <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.12em] text-text-muted">
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