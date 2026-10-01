const businesses = [
    {
        number: "01",
        title: "Local service businesses",
        text: "Businesses that travel to customers or provide services across defined towns, cities or surrounding areas.",
        detail: "trades · repairs · home services",
    },
    {
        number: "02",
        title: "Location-based businesses",
        text: "Businesses that serve customers from a physical location and depend on people searching nearby before they visit.",
        detail: "clinics · studios · professional services",
    },
    {
        number: "03",
        title: "Multi-area businesses",
        text: "Businesses serving several genuine locations that need a clearer search structure for different service areas.",
        detail: "multiple areas · service coverage",
    },
];

export default function LocalSEOFit() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                {/* Intro */}
                <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Who Local SEO is for
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Local visibility matters when{" "}
                            <span className="text-primary">
                                location affects the decision.
                            </span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-[620px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Local SEO is most relevant when customers care about where a
                            business is based, where it operates or whether its services are
                            available in their area.
                        </p>
                    </div>
                </div>

                {/* Business types */}
                <div className="mt-16 border-y border-border">
                    {businesses.map((business) => (
                        <div
                            key={business.number}
                            className="grid gap-5 border-b border-border py-7 last:border-b-0 md:grid-cols-[70px_0.75fr_1.25fr] md:gap-8 md:py-8"
                        >
                            <span className="pt-1 text-[10px] font-medium text-text-muted">
                                {business.number}
                            </span>

                            <div>
                                <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                    {business.title}
                                </h3>

                                <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                    {business.detail}
                                </p>
                            </div>

                            <p className="max-w-[620px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                {business.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Qualification */}
                <div className="mt-8 grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div aria-hidden="true" />

                    <div className="flex gap-4 border-l-2 border-primary pl-5">
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            If customers can use your service regardless of where they are,
                            broader SEO may be more relevant than building a strategy around
                            specific locations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}