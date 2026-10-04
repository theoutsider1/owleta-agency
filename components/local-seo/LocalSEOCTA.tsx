import Link from "next/link";

export default function LocalSEOCTA() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-20">
                    {/* Copy */}
                    <div className="max-w-[780px]">
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Strengthen your local visibility
                            </p>
                        </div>

                        <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Help more local customers{" "}
                            <span className="text-primary">
                                find your business.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            If local search matters to your business, we can review
                            where you serve, how your website currently represents
                            those areas and what would be worth improving first.
                        </p>
                    </div>

                    {/* Action */}
                    <div className="lg:flex lg:justify-end">
                        <div className="w-full max-w-[420px] border-t border-border pt-6">
                            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                Ready to discuss Local SEO?
                            </p>

                            <Link
                                href="/contact"
                                className="mt-5 inline-flex cursor-pointer items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                Discuss Local SEO
                            </Link>

                            <p className="mt-5 max-w-[380px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                We will first understand your business, service areas
                                and current website before recommending the work that
                                makes sense.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}