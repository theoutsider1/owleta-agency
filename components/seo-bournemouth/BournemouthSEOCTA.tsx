import Link from "next/link";

export default function BournemouthSEOCTA() {
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
                                SEO for businesses serving Bournemouth
                            </p>
                        </div>

                        <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Make it easier for Bournemouth customers{" "}
                            <span className="text-primary">
                                to find your business.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Tell us what your business offers, who you want to reach
                            and where your search visibility stands today. We can
                            identify what deserves attention and where it makes sense
                            to start.
                        </p>
                    </div>

                    {/* Action */}
                    <div className="lg:flex lg:justify-end">
                        <div className="w-full max-w-[420px] border-t border-border pt-6">
                            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                Ready to improve your search visibility?
                            </p>

                            <Link
                                href="/contact"
                                className="mt-5 inline-flex cursor-pointer items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                Discuss Bournemouth SEO
                            </Link>

                            <p className="mt-5 max-w-[380px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                We will first understand your website, the customers
                                you want to reach and the Bournemouth searches that
                                matter before recommending where to focus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}