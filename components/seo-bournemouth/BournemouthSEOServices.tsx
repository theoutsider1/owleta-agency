const services = [
    {
        number: "01",
        title: "Bournemouth search opportunity",
        text: "Research how potential customers search for your services in Bournemouth and identify the searches and pages that deserve attention.",
        detail: "search terms · intent · demand",
    },
    {
        number: "02",
        title: "Service and location relevance",
        text: "Strengthen the pages that should connect your services with Bournemouth so they answer those searches clearly and provide genuinely useful local relevance.",
        detail: "services · pages · Bournemouth",
    },
    {
        number: "03",
        title: "On-page SEO",
        text: "Improve titles, headings, content and internal links so important pages communicate their purpose and search relevance more clearly.",
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
                                SEO services in Bournemouth
                            </p>
                        </div>

                        <h2 className="max-w-[650px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Improve what helps the right searches{" "}
                            <span className="text-primary">
                                reach the right pages.
                            </span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            SEO for Bournemouth searches is rarely one isolated
                            change. We look at the demand that matters, the pages
                            that should respond to it and the website foundations
                            supporting those pages.
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
                            Where to focus first
                        </p>

                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            The priority depends on where your website stands today.
                            Some businesses need stronger relevance for Bournemouth
                            searches, while others first need better pages, internal
                            structure or technical foundations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}