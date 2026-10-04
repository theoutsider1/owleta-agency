const steps = [
    {
        number: "01",
        title: "We review your enquiry",
        description:
            "We look at what you need, the context around the project and any existing website you have shared.",
    },
    {
        number: "02",
        title: "We clarify the scope",
        description:
            "If anything needs to be discussed first, we clarify the requirements, priorities and what should be included.",
    },
    {
        number: "03",
        title: "You receive a quote",
        description:
            "Before work begins, we provide the proposed scope, quote and relevant project terms so you know what to expect.",
    },
    {
        number: "04",
        title: "Work begins",
        description:
            "Once the scope and terms are agreed, we can move forward with the project and keep communication clear throughout the work.",
    },
];

export default function ContactProcess() {
    return (
        <section className="section-space">
            <div className="site-container">
                {/* Introduction */}
                <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                What happens next
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Clear before the{" "}
                            <span className="text-primary">
                                work begins.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                        An enquiry is only the starting point. We make sure the
                        project is understood and the commercial details are clear
                        before you commit to the work.
                    </p>
                </div>

                {/* Process */}
                <div className="relative mt-14">
                    <div
                        aria-hidden="true"
                        className="absolute left-0 right-0 top-[6px] hidden h-px bg-border lg:block"
                    />

                    <div className="grid lg:grid-cols-4">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="relative border-b border-border py-7 first:pt-0 lg:border-b-0 lg:border-r lg:px-7 lg:py-0 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                            >
                                <span
                                    aria-hidden="true"
                                    className="block h-3 w-3 rounded-full border-[3px] border-background bg-primary"
                                />

                                <span className="mt-5 block text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                    {step.number}
                                </span>

                                <h3 className="mt-3 text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Commercial reassurance */}
                <div className="mt-10 grid lg:grid-cols-4">
                    <div
                        className="hidden lg:col-span-2 lg:block"
                        aria-hidden="true"
                    />

                    <div className="relative py-8 pl-7 pr-7 md:pl-8 md:pr-8 lg:col-span-2">
                        {/* Top-left corner */}
                        <span
                            aria-hidden="true"
                            className="absolute left-0 top-0 h-8 w-px bg-primary"
                        />
                        <span
                            aria-hidden="true"
                            className="absolute left-0 top-0 h-px w-8 bg-primary"
                        />

                        {/* Bottom-right corner */}
                        <span
                            aria-hidden="true"
                            className="absolute bottom-0 right-0 h-8 w-px bg-primary"
                        />
                        <span
                            aria-hidden="true"
                            className="absolute bottom-0 right-0 h-px w-8 bg-primary"
                        />

                        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                            Clear commercial process
                        </p>

                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Project documentation and professional invoices include
                            the relevant registered business details, so the
                            commercial side of the work is documented clearly too.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}