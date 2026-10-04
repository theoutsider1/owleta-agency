const principles = [
    {
        number: "01",
        title: "Purpose before design",
        description:
            "Before deciding what to design or build, we look at what the website needs to help the business achieve and what visitors need from it.",
    },
    {
        number: "02",
        title: "Clarity over complexity",
        description:
            "Pages, content and actions should make the business easier to understand, help people find what matters and make the next step obvious.",
    },
    {
        number: "03",
        title: "Foundations matter",
        description:
            "Structure, performance, responsive behaviour and search visibility are considered as part of the website rather than added as an afterthought.",
    },
    {
        number: "04",
        title: "Improvement comes from use",
        description:
            "Launch is not always the finish line. Measurement, feedback and real use can reveal where the website should be refined next.",
    },
];

export default function HowWeThink() {
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
                                How we think
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Good websites start with{" "}
                            <span className="text-primary">
                                the right questions.
                            </span>
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            We do not start with colours, animations or a list of
                            features. We start by understanding what the website
                            needs to do, who it needs to work for and what might be
                            getting in the way.
                        </p>
                    </div>
                </div>

                {/* Principles */}
                <div className="relative mt-14">
                    <div
                        aria-hidden="true"
                        className="absolute left-0 right-0 top-[6px] hidden h-px bg-border lg:block"
                    />

                    <div className="grid lg:grid-cols-4">
                        {principles.map((principle) => (
                            <div
                                key={principle.number}
                                className="relative border-b border-border py-7 first:pt-0 lg:border-b-0 lg:border-r lg:px-7 lg:py-0 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                            >
                                <span
                                    aria-hidden="true"
                                    className="block h-3 w-3 rounded-full border-[3px] border-background bg-primary"
                                />

                                <span className="mt-5 block text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                    {principle.number}
                                </span>

                                <h3 className="mt-4 text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                    {principle.title}
                                </h3>

                                <p className="mt-3 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                    {principle.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Relationship */}
                <div className="mt-14 flex flex-col gap-3 border-y border-border py-7 text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted sm:flex-row sm:items-center sm:justify-center sm:gap-5">
                    <span>Business purpose</span>

                    <span aria-hidden="true" className="hidden sm:inline">
                        →
                    </span>

                    <span>Clear experience</span>

                    <span aria-hidden="true" className="hidden sm:inline">
                        →
                    </span>

                    <span>Strong foundations</span>

                    <span aria-hidden="true" className="hidden sm:inline">
                        →
                    </span>

                    <span className="font-semibold text-primary">
                        Useful website
                    </span>
                </div>
            </div>
        </section>
    );
}