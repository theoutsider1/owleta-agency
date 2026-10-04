const barriers = [
    {
        label: "Location mismatch",
        text: "Your website may describe what you do without making it clear where those services are actually available.",
    },
    {
        label: "Weak local relevance",
        text: "Search engines need clear signals connecting your services with the towns, cities or areas your business genuinely serves.",
    },
    {
        label: "Missing local pages",
        text: "Important locations may have no useful page that properly answers what people in that area are searching for.",
    },
    {
        label: "Inconsistent signals",
        text: "Business details, website content and other local signals can become disconnected or inconsistent across the web.",
    },
];

export default function LocalSearchProblem() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
                    {/* Narrative */}
                    <div className="max-w-[590px]">
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                The local visibility problem
                            </p>
                        </div>

                        <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Customers can be nearby and still{" "}
                            <span className="text-primary">
                                not find you.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-[540px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            When someone searches for a service in a particular
                            location, search engines need to understand both what
                            your business offers and where it is relevant.
                        </p>

                        <p className="mt-5 max-w-[540px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                            Local SEO strengthens that connection by making your
                            services, locations and local relevance clearer to
                            both search engines and potential customers.
                        </p>
                    </div>

                    {/* Local visibility diagnostic */}
                    <div className="border-t border-border">
                        <div className="flex items-center justify-between gap-6 border-b border-border py-4">
                            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-text-muted">
                                What can get in the way
                            </p>

                            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-primary">
                                Local visibility
                            </span>
                        </div>

                        {barriers.map((barrier, index) => (
                            <div
                                key={barrier.label}
                                className="grid gap-3 border-b border-border py-6 sm:grid-cols-[44px_0.8fr_1.2fr] sm:gap-6"
                            >
                                <span className="pt-1 text-[10px] font-medium text-text-muted">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                    {barrier.label}
                                </h3>

                                <p className="max-w-[440px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                    {barrier.text}
                                </p>
                            </div>
                        ))}

                        {/* Resolution */}
                        <div className="relative mt-10 py-8 pl-7 pr-7 md:mt-12 md:pl-8 md:pr-8">
                            <span
                                aria-hidden="true"
                                className="absolute left-0 top-0 h-8 w-px bg-primary"
                            />
                            <span
                                aria-hidden="true"
                                className="absolute left-0 top-0 h-px w-8 bg-primary"
                            />
                            <span
                                aria-hidden="true"
                                className="absolute bottom-0 right-0 h-8 w-px bg-primary"
                            />
                            <span
                                aria-hidden="true"
                                className="absolute bottom-0 right-0 h-px w-8 bg-primary"
                            />

                            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                The goal
                            </p>

                            <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                                The goal is not to appear everywhere. It is to
                                build stronger local search visibility in the
                                places where your business can genuinely serve
                                customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}