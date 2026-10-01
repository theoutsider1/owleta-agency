// components/seo/SEOCTA.tsx

import Link from "next/link";

export default function SEOCTA() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-20">
                    {/* Copy */}
                    <div className="max-w-[780px]">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Improve your search visibility
                            </p>
                        </div>

                        <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Make it easier for the right people{" "}
                            <span className="text-primary">to find you.</span>
                        </h2>

                        <p className="mt-6 max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Tell us about your website, your business and where you want to
                            improve your search visibility. We can start by understanding
                            what you are trying to achieve and where SEO may help.
                        </p>
                    </div>

                    {/* Action */}
                    <div className="lg:flex lg:justify-end">
                        <div className="w-full max-w-[420px] border-t border-border pt-6">
                            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                Ready to discuss SEO?
                            </p>

                            <Link
                                href="/contact"
                                className="mt-5 inline-flex items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                Discuss your SEO
                                <span className="ml-3">→</span>
                            </Link>

                            <p className="mt-5 max-w-[360px] text-[13px] leading-5 text-text-muted">
                                No ranking guarantees. Just a clear conversation about your
                                website, search visibility and what makes sense to investigate
                                or improve.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}