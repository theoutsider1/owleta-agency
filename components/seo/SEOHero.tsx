// components/seo/SEOHero.tsx

import Link from "next/link";
import SEOSearchJourney from "./SEOSearchJourney";

export default function SEOHero() {
    return (
        <section className="relative overflow-hidden pb-20 pt-32 md:pb-24 md:pt-40">
            <div className="site-container">
                <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
                    <div className="max-w-[760px]">
                        {/* Eyebrow */}
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                SEO services
                            </p>
                        </div>

                        {/* Heading */}
                        <h1 className="text-[clamp(3rem,5.5vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-text-primary">
                            Help the right people{" "}
                            <span className="text-primary">find your business.</span>
                        </h1>

                        {/* Supporting copy */}
                        <p className="mt-7 max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            SEO services for UK businesses focused on improving how your
                            website is discovered, understood and positioned in organic
                            search.
                        </p>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-wrap items-center gap-5">
                            <Link
                                href="/contact"
                                className="inline-flex items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                Discuss SEO
                                <span className="ml-3">→</span>
                            </Link>

                            <Link
                                href="/services/local-seo"
                                className="group inline-flex items-center text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                            >
                                Need local SEO?
                                <span className="ml-2 transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>

                        {/* Signals */}
                        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-5">
                            {[
                                "Search visibility",
                                "Technical foundations",
                                "Measurable improvement",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <span className="h-1 w-1 rounded-full bg-primary" />

                                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <SEOSearchJourney />
                </div>
            </div>
        </section>
    );
}