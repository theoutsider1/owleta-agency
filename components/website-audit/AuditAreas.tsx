const areas = [
    {
        number: "01",
        title: "Customer journey",
        description:
            "We look at how easily visitors can understand what you offer, find what they need and take the next step.",
        checks: [
            "Calls and contact paths",
            "Forms and key actions",
            "Page hierarchy",
            "Mobile journey",
        ],
    },
    {
        number: "02",
        title: "SEO and search visibility",
        description:
            "We examine the foundations that help search engines discover, understand and prioritise the right pages.",
        checks: [
            "Page structure",
            "Search targeting",
            "Indexing signals",
            "Internal linking",
        ],
    },
    {
        number: "03",
        title: "Technical health",
        description:
            "We investigate technical issues that may affect how reliably and efficiently the website works.",
        checks: [
            "Broken functionality",
            "Performance issues",
            "Errors and redirects",
            "Technical foundations",
        ],
    },
    {
        number: "04",
        title: "Website experience",
        description:
            "We review the content, layout and usability that shape how visitors understand and interact with the website.",
        checks: [
            "Content clarity",
            "Navigation",
            "Mobile usability",
            "Trust and credibility",
        ],
    },
];

export default function AuditAreas() {
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
                                What we investigate
                            </p>
                        </div>

                        <h2 className="max-w-[600px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Looking at the website{" "}
                            <span className="text-primary">as a whole.</span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-[620px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Website issues rarely exist in isolation. We investigate the
                            areas that influence how people find your website, experience
                            it and move towards contacting your business.
                        </p>
                    </div>
                </div>

                {/* Audit areas */}
                <div className="mt-14 border-t border-border lg:mt-16">
                    {areas.map((area) => (
                        <div
                            key={area.number}
                            className="grid gap-6 border-b border-border py-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20"
                        >
                            {/* Area */}
                            <div className="grid gap-4 sm:grid-cols-[52px_1fr]">
                                <span className="pt-1 text-[10px] font-medium tracking-[0.15em] text-text-muted">
                                    {area.number}
                                </span>

                                <div>
                                    <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                        {area.title}
                                    </h3>

                                    <p className="mt-3 max-w-[440px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        {area.description}
                                    </p>
                                </div>
                            </div>

                            {/* Checks */}
                            <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                                {area.checks.map((check) => (
                                    <div
                                        key={check}
                                        className="flex items-center gap-3 border-b border-border py-3.5"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="h-1 w-1 shrink-0 rounded-full bg-primary"
                                        />

                                        <span className="text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                            {check}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scope note */}
                <div className="mt-10 grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div aria-hidden="true" className="hidden lg:block" />

                    <div className="max-w-[720px]">
                        <p className="text-[15px] leading-6 text-text-secondary md:text-[16px]">
                            The exact scope depends on your website and what needs
                            investigating. If deeper access would help us examine a
                            particular area, we confirm what is needed before the audit
                            begins.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}