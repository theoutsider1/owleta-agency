const barriers = [
    {
        label: "Search mismatch",
        text: "Pages may exist without clearly matching what potential customers are actually searching for.",
    },
    {
        label: "Unclear relevance",
        text: "Search engines need enough context to understand what a page is about and which searches it should appear for.",
    },
    {
        label: "Weak structure",
        text: "Important services can become difficult to understand when pages, content and internal links are not organised clearly.",
    },
    {
        label: "Technical friction",
        text: "Indexing, performance or other technical issues can make it harder for useful pages to perform as intended.",
    },
];

export default function SEOVisibilityProblem() {
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
                                The visibility problem
                            </p>
                        </div>

                        <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Being online does not mean{" "}
                            <span className="text-primary">
                                being found.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-[540px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Your website can be live, useful and professionally built
                            while still struggling to appear for the searches that
                            matter to your business.
                        </p>

                        <p className="mt-5 max-w-[540px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                            SEO connects what people are searching for with the right
                            pages on your website, while making those pages easier for
                            search engines to discover and understand.
                        </p>
                    </div>

                    {/* Visibility diagnostic */}
                    <div className="border-t border-border">
                        <div className="flex items-center justify-between gap-6 border-b border-border py-4">
                            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-text-muted">
                                What can get in the way
                            </p>

                            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-primary">
                                Search visibility
                            </span>
                        </div>

                        {barriers.map((barrier, index) => (
                            <div
                                key={barrier.label}
                                className="grid gap-3 border-b border-border py-6 sm:grid-cols-[44px_0.8fr_1.2fr] sm:gap-6"
                            >
                                <span className="pt-1 text-[10px] font-medium text-text-muted">
                                    0{index + 1}
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
                                The goal is not visibility for every search. It is
                                stronger visibility where your business is genuinely
                                relevant.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}