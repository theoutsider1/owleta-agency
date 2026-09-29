const steps = [
    {
        number: "01",
        title: "Understand",
        description:
            "We learn about your business, customers, goals and what the website needs to help them do.",
    },
    {
        number: "02",
        title: "Structure",
        description:
            "We organise the pages, content and customer journey before focusing on how everything should look.",
    },
    {
        number: "03",
        title: "Design",
        description:
            "We shape the visual direction around your business and make sure the experience works across different screen sizes.",
    },
    {
        number: "04",
        title: "Build",
        description:
            "We turn the approved direction into a working website, with performance, search foundations and important actions considered as part of the build.",
    },
    {
        number: "05",
        title: "Launch & measure",
        description:
            "Before launch, we check the important journeys and technical details. Where measurement is part of the project, we can also track the actions that matter after the website goes live.",
    },
];

export default function WebDesignProcess() {
    return (
        <section className="section-space bg-[var(--surface)]">
            <div className="site-container">
                {/* Intro */}
                <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#ff5a1f]">
                            How we build
                        </p>
                    </div>

                    <div>
                        <h2 className="max-w-4xl text-[clamp(2.5rem,4vw,4.2rem)] font-medium leading-[0.98] tracking-[-0.045em] text-white">
                            From the first conversation to a website ready to do its job.
                        </h2>

                        <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 md:text-[17px]">
                            We keep the process clear and involve you where your input
                            matters. Each stage builds on the one before it, so decisions
                            about design and development are based on what the website
                            actually needs to achieve.
                        </p>
                    </div>
                </div>

                {/* Process */}
                <div className="mt-16 md:mt-20">
                    <div className="grid lg:grid-cols-5">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className="group relative border-l border-white/[0.1] pb-12 pl-8 last:pb-0 lg:border-l-0 lg:border-t lg:pb-0 lg:pl-0 lg:pr-8 lg:pt-9"
                            >
                                {/* Progress point */}
                                <span
                                    aria-hidden="true"
                                    className="absolute -left-[5px] top-0 h-[9px] w-[9px] rounded-full border border-white/30 bg-[var(--surface)] transition-all duration-300 group-hover:border-[#ff5a1f] group-hover:bg-[#ff5a1f] lg:-top-[5px] lg:left-0"
                                />

                                {/* Hover progress */}
                                {index < steps.length - 1 && (
                                    <span
                                        aria-hidden="true"
                                        className="absolute left-[-1px] top-0 h-0 w-px bg-[#ff5a1f] transition-all duration-500 group-hover:h-full lg:left-0 lg:top-[-1px] lg:h-px lg:w-0 lg:group-hover:h-px lg:group-hover:w-full"
                                    />
                                )}

                                <p className="text-xs font-medium tracking-[0.14em] text-[#ff5a1f]">
                                    {step.number}
                                </p>

                                <h3 className="mt-4 text-xl font-medium tracking-[-0.025em] text-white md:text-2xl">
                                    {step.title}
                                </h3>

                                <p className="mt-4 max-w-[17rem] text-sm leading-6 text-white/50">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}