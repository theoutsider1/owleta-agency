const steps = [
    {
        number: "01",
        label: "Review",
        title: "Understand the website you already have.",
        description:
            "We review the current website, what the business needs from it and where customers may be running into problems. That includes the experience, content, functionality, performance and search foundations.",
    },
    {
        number: "02",
        label: "Decide",
        title: "Turn the findings into a clear redesign scope.",
        description:
            "We define which pages and parts of the website need attention, what the redesign should achieve and what work is required before design and development begin.",
    },
    {
        number: "03",
        label: "Redesign",
        title: "Reshape the customer experience.",
        description:
            "We improve the structure, page flow, content presentation and calls to action so customers can understand the business and take the next step more easily.",
    },
    {
        number: "04",
        label: "Build",
        title: "Put the redesigned experience into place.",
        description:
            "The approved direction is built around the functionality and technical approach the website needs, whether that means improving the existing setup or rebuilding parts of it.",
    },
    {
        number: "05",
        label: "Check and launch",
        title: "Check the redesigned website before launch.",
        description:
            "We review key pages and customer journeys across relevant screen sizes, check forms and important actions, and make sure essential search considerations are accounted for before the redesigned website goes live.",
    },
];

export default function RedesignProcess() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                    {/* Sticky intro */}
                    <div>
                        <div className="lg:sticky lg:top-28">
                            <div className="mb-6 flex items-center gap-3">
                                <span
                                    aria-hidden="true"
                                    className="h-1.5 w-1.5 rounded-full bg-primary"
                                />

                                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                    Website redesign process
                                </p>
                            </div>

                            <h2 className="max-w-[540px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                                Change what matters,{" "}
                                <span className="text-primary">
                                    without changing blindly.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-[480px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                                The redesign starts with the website you already have and
                                moves from understanding the problem to putting the right
                                changes into place.
                            </p>
                        </div>
                    </div>

                    {/* Process */}
                    <div className="relative">
                        <div
                            aria-hidden="true"
                            className="absolute bottom-0 left-[5px] top-2 w-px bg-border md:left-[7px]"
                        />

                        <div className="space-y-12 md:space-y-14">
                            {steps.map((step, index) => (
                                <div
                                    key={step.number}
                                    className="relative pl-10 md:pl-14"
                                >
                                    <span
                                        aria-hidden="true"
                                        className={`absolute left-0 top-2 z-10 rounded-full ${index === 0
                                                ? "h-[11px] w-[11px] bg-primary md:h-[15px] md:w-[15px]"
                                                : "h-[11px] w-[11px] border border-text-muted bg-background md:h-[15px] md:w-[15px]"
                                            }`}
                                    />

                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-medium tracking-[0.15em] text-primary">
                                            {step.number}
                                        </span>

                                        <span className="text-[10px] font-medium uppercase tracking-[0.17em] text-text-muted">
                                            {step.label}
                                        </span>
                                    </div>

                                    <h3 className="mt-4 max-w-[520px] text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 max-w-[560px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}