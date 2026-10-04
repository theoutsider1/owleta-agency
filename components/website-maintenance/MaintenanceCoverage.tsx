const coverage = [
    {
        number: "01",
        label: "Website care",
        title: "Keep the website in good working order.",
        description:
            "Routine checks, relevant software updates and checks around important website functionality can help identify problems before they go unnoticed.",
        items: ["Routine checks", "Relevant updates", "Functionality checks"],
    },
    {
        number: "02",
        label: "Fixes and support",
        title: "Get technical help when something goes wrong.",
        description:
            "Broken forms, links, layouts, integrations and other website issues can be investigated and fixed without you having to work out the technical problem yourself.",
        items: ["Bug fixes", "Forms and links", "Technical support"],
    },
    {
        number: "03",
        label: "Website updates",
        title: "Keep the website aligned with the business.",
        description:
            "Content, images, services, calls to action and sections can be updated as the business changes or new information needs to go live.",
        items: ["Content changes", "Page updates", "New sections"],
    },
    {
        number: "04",
        label: "Ongoing improvement",
        title: "Keep improving what the website can do.",
        description:
            "Ongoing support can also include improvements to performance, customer journeys, search foundations and measurement when useful opportunities are identified.",
        items: ["Performance", "Customer journey", "Search foundations"],
    },
];

export default function MaintenanceCoverage() {
    return (
        <section className="section-space">
            <div className="site-container">
                {/* Intro */}
                <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                    <div>
                        <div className="flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                What we look after
                            </p>
                        </div>
                    </div>

                    <div className="max-w-[760px]">
                        <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Maintenance means more than{" "}
                            <span className="text-primary">
                                keeping software updated.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Our website maintenance services combine practical website
                            care, technical support and ongoing changes so you have help
                            with both everyday updates and the problems that appear over
                            time.
                        </p>
                    </div>
                </div>

                {/* Connected coverage */}
                <div className="relative mt-14 md:mt-16">
                    {/* Desktop connecting line */}
                    <div
                        aria-hidden="true"
                        className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-border md:block"
                    />

                    <div className="space-y-12 md:space-y-0">
                        {coverage.map((item) => (
                            <div
                                key={item.number}
                                className="relative md:grid md:grid-cols-[90px_0.7fr_1fr] md:gap-10 md:py-9"
                            >
                                {/* Number / node */}
                                <div className="mb-4 flex items-center gap-4 md:mb-0">
                                    <span
                                        aria-hidden="true"
                                        className="relative z-10 h-[15px] w-[15px] shrink-0 rounded-full border border-text-muted bg-background"
                                    />

                                    <span className="text-[10px] font-medium tracking-[0.15em] text-primary">
                                        {item.number}
                                    </span>
                                </div>

                                {/* Title */}
                                <div>
                                    <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-text-muted">
                                        {item.label}
                                    </p>

                                    <h3 className="mt-3 max-w-[340px] text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Detail */}
                                <div className="mt-4 md:mt-0">
                                    <p className="max-w-[520px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        {item.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                                        {item.items.map((detail) => (
                                            <span
                                                key={detail}
                                                className="text-[10px] font-medium uppercase tracking-[0.13em] text-text-muted"
                                            >
                                                {detail}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}