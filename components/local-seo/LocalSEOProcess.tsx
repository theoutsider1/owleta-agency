// components/local-seo/LocalSEOProcess.tsx

const steps = [
    {
        number: "01",
        title: "Understand",
        text: "Start with your business, services, customers and the locations you genuinely serve.",
        detail: "business · services · areas",
    },
    {
        number: "02",
        title: "Research",
        text: "Review how people search locally, where relevant visibility already exists and where useful opportunities may be missing.",
        detail: "searches · visibility · opportunities",
    },
    {
        number: "03",
        title: "Improve",
        text: "Strengthen relevant pages, local signals, internal structure and technical foundations based on what the research shows.",
        detail: "pages · signals · structure",
    },
    {
        number: "04",
        title: "Measure",
        text: "Review search performance and use what we learn to guide the next useful local SEO improvements.",
        detail: "performance · learning · priorities",
    },
];

export default function LocalSEOProcess() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                {/* Intro */}
                <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                How we approach Local SEO
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Build local visibility{" "}
                            <span className="text-primary">with a clear reason.</span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-[620px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            We start by understanding how your business serves customers,
                            then use local search research and available performance data to
                            decide what deserves attention.
                        </p>
                    </div>
                </div>

                {/* Process */}
                <div className="relative mt-16">
                    {/* Desktop connection */}
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
                                <div className="relative z-10 mb-6 flex items-center gap-3 lg:block">
                                    <span className="block h-3 w-3 rounded-full border-[3px] border-background bg-primary" />

                                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted lg:mt-5 lg:block">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                    {step.text}
                                </p>

                                <p className="mt-5 text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                    {step.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Principle */}
                <div className="mt-14 border-t border-border pt-7">
                    <p className="max-w-[760px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                        Local SEO is an ongoing process of understanding where customers
                        search, strengthening the connection between your services and
                        those locations, and learning from how your visibility develops.
                    </p>
                </div>
            </div>
        </section>
    );
}