const services = [
    {
        number: "01",
        title: "Local search research",
        text: "Understand how potential customers search for your services across the locations that matter to your business.",
        detail: "search terms · locations · intent",
    },
    {
        number: "02",
        title: "Service & location pages",
        text: "Improve or create useful pages that clearly connect what you offer with the areas you genuinely serve.",
        detail: "services · locations · relevance",
    },
    {
        number: "03",
        title: "Local business signals",
        text: "Strengthen the consistency of important business information across your website and relevant local profiles.",
        detail: "business details · profiles · consistency",
    },
    {
        number: "04",
        title: "Technical & internal structure",
        text: "Improve how local pages are organised, connected and made accessible to search engines across the website.",
        detail: "indexing · internal links · structure",
    },
];

export default function LocalSEOServices() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                {/* Intro */}
                <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Local SEO services
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Strengthen the signals that support{" "}
                            <span className="text-primary">local search visibility.</span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-[620px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Local SEO work depends on how your business operates, where your
                            customers are and how clearly your website currently connects
                            services with those locations.
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
                <div className="mt-8 grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div aria-hidden="true" />

                    <div className="flex gap-4 border-l-2 border-primary pl-5">
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Not every business needs the same local SEO work. The priority is
                            to focus on the locations, pages and signals that are genuinely
                            relevant to how your business serves customers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}