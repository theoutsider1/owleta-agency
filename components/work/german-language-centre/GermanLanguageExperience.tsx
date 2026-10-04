const principles = [
    {
        number: "01",
        label: "Direction",
        title: "Right-to-left by design",
        description:
            "The interface was structured around right-to-left reading so navigation, content flow and visual hierarchy worked naturally with Arabic rather than feeling adapted afterwards.",
    },
    {
        number: "02",
        label: "Readability",
        title: "Content given room to breathe",
        description:
            "Spacing, hierarchy and page composition were used to keep information approachable, helping learners scan the website and understand how different pieces of content relate.",
    },
    {
        number: "03",
        label: "Consistency",
        title: "One coherent experience",
        description:
            "The same visual and structural principles were carried across the website so learners could move between pages without having to relearn how the interface works.",
    },
];

export default function GermanLanguageExperience() {
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
                                Arabic experience
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Arabic was part of the{" "}
                            <span className="text-primary">
                                design from the start.
                            </span>
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Supporting an Arabic-speaking audience involves more than
                            translating text. Reading direction, hierarchy, spacing
                            and navigation all influence whether the website feels
                            natural to use.
                        </p>
                    </div>
                </div>

                {/* Principles */}
                <div className="mt-14 grid border-y border-border lg:grid-cols-3">
                    {principles.map((item, index) => (
                        <div
                            key={item.number}
                            className={`py-8 lg:px-8 ${index > 0
                                    ? "border-t border-border lg:border-l lg:border-t-0"
                                    : ""
                                } ${index === 0 ? "lg:pl-0" : ""} ${index === principles.length - 1
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
                    <span>Arabic content</span>

                    <span
                        aria-hidden="true"
                        className="hidden sm:inline"
                    >
                        →
                    </span>

                    <span>RTL experience</span>

                    <span
                        aria-hidden="true"
                        className="hidden sm:inline"
                    >
                        →
                    </span>

                    <span className="font-semibold text-primary">
                        Clearer learner journey
                    </span>
                </div>
            </div>
        </section>
    );
}