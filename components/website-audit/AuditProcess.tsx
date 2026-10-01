
const steps = [
    {
        number: "01",
        title: "Request",
        text: "Send us your website and tell us what you would like to understand or improve.",
    },
    {
        number: "02",
        title: "Review & scope",
        text: "We review the website, confirm whether an audit is suitable and define what should be investigated.",
    },
    {
        number: "03",
        title: "Access & quote",
        text: "If deeper access would help, we confirm what is needed and provide the audit quote before any work begins.",
    },
    {
        number: "04",
        title: "Investigation",
        text: "Once agreed, we investigate the website against the confirmed scope and document the findings.",
    },
    {
        number: "05",
        title: "Report",
        text: "You receive your PDF audit with evidence, priorities and recommended actions.",
    },
];

export default function AuditProcess() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                {/* Intro */}
                <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                How the audit works
                            </p>
                        </div>

                        <h2 className="max-w-[600px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Understand the scope{" "}
                            <span className="text-primary">before the work begins.</span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-[620px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            We first make sure the audit fits your website and what you need
                            to understand. You know the scope, access requirements and quote
                            before committing.
                        </p>
                    </div>
                </div>

                {/* Process */}
                <div className="relative mt-14">
                    {/* Desktop connecting line */}
                    <div
                        aria-hidden="true"
                        className="absolute left-0 right-0 top-[6px] hidden h-px bg-border lg:block"
                    />

                    <div className="grid gap-0 lg:grid-cols-5">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className="relative border-b border-border py-7 first:pt-0 lg:border-b-0 lg:border-r lg:px-6 lg:py-0 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                            >
                                {/* Marker */}
                                <div className="relative z-10 mb-6 flex items-center gap-3 lg:block">
                                    <span className="block h-3 w-3 rounded-full border-[3px] border-background bg-primary" />

                                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted lg:mt-5 lg:block">
                                        Step {step.number}
                                    </span>
                                </div>

                                <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                    {step.title}
                                </h3>

                                <p className="mt-3 max-w-[240px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                    {step.text}
                                </p>

                                {index === 2 && (
                                    <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.13em] text-primary">
                                        Nothing charged yet
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Access note */}
                <div className="mt-14 grid gap-8 border-t border-border pt-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div>
                        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-text-muted">
                            About website access
                        </p>
                    </div>

                    <div>
                        <p className="max-w-[700px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Most audits can begin from what is publicly visible. If access to
                            WordPress, analytics, Search Console or another relevant system
                            would improve the investigation, we will explain what is needed
                            before the audit starts.
                        </p>

                        <p className="mt-4 max-w-[700px] text-[15px] leading-6 text-text-muted md:text-[16px]">
                            here access is required, temporary user access with only the
                            permissions needed is preferred. You do not need to share your
                            personal login credentials with us.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}