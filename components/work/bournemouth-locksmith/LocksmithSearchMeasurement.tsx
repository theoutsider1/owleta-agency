const foundations = [
    {
        number: "01",
        label: "Local relevance",
        title: "A clearer relationship between services and locations",
        description:
            "The website was structured around the locksmith's core services and the areas being prioritised, helping create clearer context for both customers and search engines.",
    },
    {
        number: "02",
        label: "Search visibility",
        title: "Technical foundations for organic search",
        description:
            "Page structure, metadata, internal linking and indexing considerations were included as part of the build rather than being treated as a separate task after launch.",
    },
    {
        number: "03",
        label: "Measurement",
        title: "A clearer view of important customer actions",
        description:
            "Analytics and conversion tracking were added so important actions, including phone enquiries, could be measured as the website develops.",
    },
];

export default function LocksmithSearchMeasurement() {
    return (
        <section className="section-space">
            <div className="site-container">
                {/* Introduction */}
                <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Search & measurement
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Launch with foundations for{" "}
                            <span className="text-primary">
                                visibility and measurement.
                            </span>
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Search and measurement were considered alongside the
                            website structure, so visibility and important customer
                            actions could be monitored after launch and used to
                            inform future improvements.
                        </p>
                    </div>
                </div>

                {/* Foundations */}
                <div className="mt-14 grid border-y border-border lg:grid-cols-3">
                    {foundations.map((item, index) => (
                        <div
                            key={item.number}
                            className={`py-8 lg:px-8 ${index > 0
                                    ? "border-t border-border lg:border-l lg:border-t-0"
                                    : ""
                                } ${index === 0 ? "lg:pl-0" : ""} ${index === foundations.length - 1
                                    ? "lg:pr-0"
                                    : ""
                                }`}
                        >
                            <div className="flex items-center justify-between gap-4">
                                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                    {item.number}
                                </span>

                                <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                    {item.label}
                                </span>
                            </div>

                            <h3 className="mt-7 text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Relationship */}
                <div className="mt-8 flex flex-col gap-3 text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted sm:flex-row sm:items-center sm:justify-center sm:gap-5">
                    <span>Relevant pages</span>

                    <span
                        aria-hidden="true"
                        className="hidden sm:inline"
                    >
                        →
                    </span>

                    <span>Search visibility</span>

                    <span
                        aria-hidden="true"
                        className="hidden sm:inline"
                    >
                        →
                    </span>

                    <span className="font-semibold text-primary">
                        Measurable actions
                    </span>
                </div>
            </div>
        </section>
    );
}