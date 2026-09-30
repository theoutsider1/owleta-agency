const reasons = [
    {
        label: "Things change",
        title: "Your business does not stay the same.",
        description:
            "Services, prices, team details, opening information and customer needs can change. The website needs to keep up with the business it represents.",
    },
    {
        label: "Things break",
        title: "Small website problems still matter.",
        description:
            "A broken form, link, layout or integration can make it harder for customers to use the website or get in touch.",
    },
    {
        label: "Things age",
        title: "The technology underneath keeps moving.",
        description:
            "Plugins, themes, dependencies, integrations and platforms change over time. Updates can require checks, fixes or compatibility work.",
    },
    {
        label: "Things improve",
        title: "A live website can still get better.",
        description:
            "Customer journeys, content, performance and search foundations can be improved as you learn more about how the website is being used.",
    },
];

export default function MaintenanceReality() {
    return (
        <section className="section-space">
            <div className="site-container">
                {/* Heading */}
                <div className="max-w-[860px]">
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                            After the website goes live
                        </p>
                    </div>

                    <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[1] tracking-[-0.045em] text-text-primary">
                        Websites need attention{" "}
                        <span className="text-primary">after launch too.</span>
                    </h2>

                    <p className="mt-6 max-w-[650px] text-[16px] leading-7 text-text-secondary md:text-[17px]">
                        Website maintenance is not only about software updates. It is about
                        keeping the website useful, current and ready to support the
                        business as things change.
                    </p>
                </div>

                {/* Reasons */}
                <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:mt-16">
                    {reasons.map((reason) => (
                        <div
                            key={reason.label}
                            className="grid gap-4 border-t border-border pt-6 sm:grid-cols-[120px_1fr]"
                        >
                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                                {reason.label}
                            </p>

                            <div>
                                <h3 className="text-[20px] font-medium leading-[1.2] tracking-[-0.025em] text-text-primary">
                                    {reason.title}
                                </h3>

                                <p className="mt-3 max-w-[440px] text-[14px] leading-6 text-text-secondary">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}