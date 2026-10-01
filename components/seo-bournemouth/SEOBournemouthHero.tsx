import Link from "next/link";
import BournemouthSearchJourney from "./BournemouthSearchJourney";

export default function SEOBournemouthHero() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
                    {/* Copy */}
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                SEO Bournemouth
                            </p>
                        </div>

                        <h1 className="max-w-[760px] text-[clamp(3rem,5.5vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-text-primary">
                            Get found by more customers{" "}
                            <span className="text-primary">in Bournemouth.</span>
                        </h1>

                        <p className="mt-7 max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            SEO services for Bournemouth businesses that want stronger
                            visibility when potential customers search for the services they
                            offer.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
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
                                Explore Local SEO
                                <span className="ml-2 transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-5">
                            {[
                                "Bournemouth searches",
                                "Local relevance",
                                "Organic visibility",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Visual */}
                    <BournemouthSearchJourney />
                </div>
            </div>
        </section>
    );
}