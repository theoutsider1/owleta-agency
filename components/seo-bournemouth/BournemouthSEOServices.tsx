const services = [
    {
        number: "01",
        title: "Search opportunity",
        text: "Understand how potential customers search for your services in Bournemouth and which searches are worth targeting.",
        detail: "search terms · intent · Bournemouth",
    },
    {
        number: "02",
        title: "Service & location relevance",
        text: "Strengthen the pages that connect your services with Bournemouth so they answer the search more clearly and usefully.",
        detail: "services · pages · local relevance",
    },
    {
        number: "03",
        title: "On-page SEO",
        text: "Improve page titles, headings, content and internal signals so important pages communicate their purpose more clearly.",
        detail: "content · headings · internal links",
    },
    {
        number: "04",
        title: "Technical foundations",
        text: "Identify technical barriers that can affect how important pages are discovered, understood, indexed and experienced.",
        detail: "crawling · indexing · performance",
    },
];

export default function BournemouthSEOServices() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                SEO services in Bournemouth
                            </p>
                        </div>

                        <h2 className="max-w-[650px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Improve what helps the right searches{" "}
                            <span className="text-primary">reach the right pages.</span>
                        </h2>
                    </div>

                    <div className="lg:pt-1">
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Bournemouth SEO is not one isolated change. We look at the
                            searches that matter, the pages competing for them and the
                            website foundations supporting those pages.
                        </p>
                    </div>
                </div>

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

                                <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                    {service.detail}
                                </p>
                            </div>

                            <p className="text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                {service.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div aria-hidden="true" />

                    <div className="flex gap-4 border-l-2 border-primary pl-5">
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            The priority depends on where your website stands today. Some
                            businesses need stronger Bournemouth relevance, while others
                            first need better pages, structure or technical foundations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}