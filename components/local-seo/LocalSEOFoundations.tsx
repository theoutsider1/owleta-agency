const foundations = [
    {
        number: "01",
        title: "Search intent",
        text: "Understand what potential customers search for when they need your services in a particular area.",
        detail: "service · location · intent",
    },
    {
        number: "02",
        title: "Website relevance",
        text: "Connect your services with the towns, cities and areas you genuinely serve through useful pages and clear content.",
        detail: "services · areas · pages",
    },
    {
        number: "03",
        title: "Local signals",
        text: "Keep important business information clear and consistent across your website and relevant local profiles.",
        detail: "details · profiles · consistency",
    },
    {
        number: "04",
        title: "Technical foundations",
        text: "Make sure important pages can be discovered, understood and indexed without unnecessary technical barriers.",
        detail: "crawling · indexing · performance",
    },
];

export default function LocalSEOFoundations() {
    return (
        <section className="section-space">
            <div className="site-container">
                {/* Intro */}
                <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                How local visibility works
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Local SEO connects your services{" "}
                            <span className="text-primary">
                                with the places you serve.
                            </span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-[620px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Strong local search visibility comes from giving people
                            and search engines clear, consistent signals about what
                            your business does, where it operates and which pages are
                            relevant to each search.
                        </p>
                    </div>
                </div>

                {/* System */}
                <div className="relative mt-14">
                    {/* Desktop connection */}
                    <div
                        aria-hidden="true"
                        className="absolute left-0 right-0 top-[6px] hidden h-px bg-border lg:block"
                    />

                    <div className="grid lg:grid-cols-4">
                        {foundations.map((item) => (
                            <div
                                key={item.number}
                                className="relative min-w-0 border-b border-border py-7 first:pt-0 lg:border-b-0 lg:border-r lg:px-7 lg:py-0 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                            >
                                {/* Point */}
                                <div className="relative z-10 mb-6 flex items-center gap-3 lg:block">
                                    <span
                                        aria-hidden="true"
                                        className="block h-3 w-3 rounded-full border-[3px] border-background bg-primary"
                                    />

                                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted lg:mt-5 lg:block">
                                        {item.number}
                                    </span>
                                </div>

                                <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                    {item.text}
                                </p>

                                <p className="mt-5 text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                    {item.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Relationship */}
                <div className="mt-14 border-y border-border py-7">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-center md:gap-6">
                        {[
                            "Local search",
                            "Relevant page",
                            "Clear location",
                            "Consistent signals",
                            "Local visibility",
                        ].map((item, index, array) => (
                            <div
                                key={item}
                                className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6"
                            >
                                <span
                                    className={
                                        index === array.length - 1
                                            ? "text-[11px] font-semibold uppercase tracking-[0.14em] text-primary"
                                            : "text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted"
                                    }
                                >
                                    {item}
                                </span>

                                {index < array.length - 1 && (
                                    <>
                                        <span
                                            aria-hidden="true"
                                            className="text-[14px] text-text-muted md:hidden"
                                        >
                                            ↓
                                        </span>

                                        <span
                                            aria-hidden="true"
                                            className="hidden text-[14px] text-text-muted md:inline"
                                        >
                                            →
                                        </span>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}