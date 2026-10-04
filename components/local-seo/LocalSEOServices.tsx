const services = [
    {
        number: "01",
        title: "Local search research",
        text: "Research how potential customers search for your services across the locations that matter, then use those findings to guide page and content priorities.",
        detail: "search terms · locations · intent",
    },
    {
        number: "02",
        title: "Service and location pages",
        text: "Improve existing pages or create useful new ones that connect your services with the areas you genuinely serve without relying on thin or repetitive location content.",
        detail: "services · locations · relevance",
    },
    {
        number: "03",
        title: "Local business signals",
        text: "Review important business information across your website and relevant local profiles, then strengthen consistency where those signals do not align.",
        detail: "business details · profiles · consistency",
    },
    {
        number: "04",
        title: "Technical and internal structure",
        text: "Improve how important local pages are organised, internally linked and made accessible to search engines across the website.",
        detail: "indexing · internal links · structure",
    },
];

export default function LocalSEOServices() {
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
                                Local SEO services
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Strengthen the signals that support{" "}
                            <span className="text-primary">
                                local search visibility.
                            </span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-[620px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Local SEO work depends on how your business operates,
                            where your customers are and how clearly your website
                            currently connects its services with those locations.
                        </p>
                    </div>
                </div>

                {/* Services */}
                <div className="mt-16 border-t border-border">
                    {services.map((service) => (
                        <div
                            key={service.number}
                            className="grid gap-5 border-b border-border py-7 md:grid-cols-[70px_0.75fr_1.25fr] md:gap-8 md:py-8"
                        >
                            <span className="pt-1 text-[10px] font-medium text-text-muted">
                                {service.number}
                            </span>

                            <div>
                                <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                    {service.title}
                                </h3>

                                <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                    {service.detail}
                                </p>
                            </div>

                            <p className="max-w-[620px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                {service.text}
                            </p>
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

                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Not every business needs the same local SEO work. The
                            priority is to focus on the locations, pages and signals
                            that are genuinely relevant to how your business serves
                            customers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}