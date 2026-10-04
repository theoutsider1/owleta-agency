const steps = [
    {
        number: "01",
        label: "Review",
        title: "Understand what we are taking over.",
        description:
            "We look at how the website is built, how it is hosted, the tools and integrations it relies on and the access available.",
    },
    {
        number: "02",
        label: "Assess",
        title: "Identify anything that needs attention first.",
        description:
            "Existing issues, outdated software, unusual configurations or technical limitations may need to be addressed before ongoing maintenance begins.",
    },
    {
        number: "03",
        label: "Scope",
        title: "Agree what support makes sense.",
        description:
            "Once we understand the website, we can confirm what we can support, define what the maintenance should cover and provide a quote based on the actual setup.",
    },
    {
        number: "04",
        label: "Support",
        title: "Start support with a clear scope.",
        description:
            "Once the scope is agreed, we can handle the maintenance, updates and support included in the arrangement.",
    },
];

export default function ExistingWebsiteSupport() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                    {/* Sticky intro */}
                    <div>
                        <div className="lg:sticky lg:top-28">
                            <div className="mb-6 flex items-center gap-3">
                                <span
                                    aria-hidden="true"
                                    className="h-1.5 w-1.5 rounded-full bg-primary"
                                />

                                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                    Already have a website?
                                </p>
                            </div>

                            <h2 className="max-w-[520px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                                We don&apos;t have to have built it{" "}
                                <span className="text-primary">
                                    to look after it.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-[500px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                                We can support existing websites after an initial review.
                                That gives us the technical context we need to understand
                                the setup, define the scope and agree what ongoing support
                                can include.
                            </p>
                        </div>
                    </div>

                    {/* Handover flow */}
                    <div>
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className={`grid gap-5 py-8 sm:grid-cols-[72px_1fr] md:py-10 ${index === 0 ? "border-y" : "border-b"
                                    } border-border`}
                            >
                                <div>
                                    <span className="text-[10px] font-medium tracking-[0.15em] text-primary">
                                        {step.number}
                                    </span>
                                </div>

                                <div>
                                    <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-text-muted">
                                        {step.label}
                                    </p>

                                    <h3 className="mt-3 max-w-[560px] text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 max-w-[560px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}