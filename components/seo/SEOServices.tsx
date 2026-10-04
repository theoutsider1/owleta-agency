const services = [
    {
        number: "01",
        title: "On-page SEO",
        text: "Improve individual pages so their purpose, topic and relevance are clearer to both visitors and search engines.",
        items: [
            "Page titles and descriptions",
            "Headings and page structure",
            "Content relevance",
            "Search intent alignment",
        ],
    },
    {
        number: "02",
        title: "Technical SEO",
        text: "Identify and improve technical foundations that can affect how search engines access, understand and index the website.",
        items: [
            "Crawlability and indexing",
            "Redirects and broken pages",
            "Site performance",
            "Technical page signals",
        ],
    },
    {
        number: "03",
        title: "Search and content structure",
        text: "Organise important topics and services around the searches that are genuinely relevant to the business.",
        items: [
            "Keyword and intent research",
            "Page opportunities",
            "Website hierarchy",
            "Internal linking",
        ],
    },
    {
        number: "04",
        title: "Measurement and improvement",
        text: "Use search and website data to understand what is gaining visibility, where opportunities exist and what deserves attention next.",
        items: [
            "Search Console insights",
            "Organic landing pages",
            "Search performance",
            "Ongoing opportunities",
        ],
    },
];

export default function SEOServices() {
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
                                SEO services
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Work on what actually influences{" "}
                            <span className="text-primary">
                                search visibility.
                            </span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-[620px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            SEO work depends on where the opportunity or limitation
                            exists. That can mean improving individual pages,
                            strengthening technical foundations or making the wider
                            website easier to understand.
                        </p>
                    </div>
                </div>

                {/* Services */}
                <div className="mt-14 border-t border-border lg:mt-16">
                    {services.map((service) => (
                        <div
                            key={service.number}
                            className="grid gap-7 border-b border-border py-8 lg:grid-cols-[52px_0.8fr_1.2fr] lg:gap-10"
                        >
                            <span className="pt-1 text-[11px] font-medium text-text-muted">
                                {service.number}
                            </span>

                            <div>
                                <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                    {service.title}
                                </h3>

                                <p className="mt-3 max-w-[440px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                    {service.text}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                                {service.items.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 border-b border-border py-3.5"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="h-1 w-1 shrink-0 rounded-full bg-primary"
                                        />

                                        <span className="text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scope */}
                <div className="mt-10 grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div
                        aria-hidden="true"
                        className="hidden lg:block"
                    />

                    <div className="relative py-8 pl-7 pr-7 md:pl-8 md:pr-8">
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
                            The right scope
                        </p>

                        <p className="max-w-[680px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Not every website needs every type of SEO work. The priority
                            is identifying which improvements make sense for your
                            website, your search opportunities and your business.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}