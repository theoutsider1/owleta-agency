const principles = [
    {
        number: "01",
        title: "Start with the business",
        text: "Understand what the website needs to help the business achieve before deciding what should be designed or built.",
    },
    {
        number: "02",
        title: "Make the journey clearer",
        text: "Organise pages, content and actions around what visitors need to understand and what they should be able to do next.",
    },
    {
        number: "03",
        title: "Build for what comes after launch",
        text: "Consider search visibility, measurement and future improvements as part of the website rather than treating launch as the finish line.",
    },
];

export default function WorkApproach() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Behind the work
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Different businesses.{" "}
                            <span className="text-primary">
                                Same starting point.
                            </span>
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Every project has different requirements, but the website
                            still needs a clear reason for every page, decision and
                            improvement.
                        </p>
                    </div>
                </div>

                {/* Principles */}
                <div className="relative mt-14">
                    <div
                        aria-hidden="true"
                        className="absolute left-0 right-0 top-[6px] hidden h-px bg-border lg:block"
                    />

                    <div className="grid lg:grid-cols-3">
                        {principles.map((principle) => (
                            <div
                                key={principle.number}
                                className="relative border-b border-border py-7 first:pt-0 lg:border-b-0 lg:border-r lg:px-7 lg:py-0 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                            >
                                <span
                                    aria-hidden="true"
                                    className="block h-3 w-3 rounded-full border-[3px] border-background bg-primary"
                                />

                                <span className="mt-5 block text-[10px] font-medium text-text-muted">
                                    {principle.number}
                                </span>

                                <h3 className="mt-4 text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                    {principle.title}
                                </h3>

                                <p className="mt-3 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                    {principle.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}