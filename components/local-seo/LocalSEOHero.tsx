import Link from "next/link";
import LocalSearchJourney from "./LocalSearchJourney";

export default function LocalSEOHero() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
                    {/* Copy */}
                    <div className="max-w-[720px]">
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Local SEO services
                            </p>
                        </div>

                        <h1 className="text-[clamp(3rem,5.5vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-text-primary">
                            Be easier to find{" "}
                            <span className="text-primary">
                                where you do business.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Local SEO services for UK businesses that want stronger
                            visibility when potential customers search for their
                            services in the towns, cities and areas they serve.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                            <Link
                                href="/contact"
                                className="inline-flex cursor-pointer items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                Discuss Local SEO
                            </Link>

                            <Link
                                href="/services/seo-bournemouth"
                                className="group inline-flex cursor-pointer items-center text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                            >
                                SEO in Bournemouth

                                <span
                                    aria-hidden="true"
                                    className="ml-2 transition-transform group-hover:translate-x-1"
                                >
                                    →
                                </span>
                            </Link>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-5">
                            {[
                                "Local search",
                                "Service areas",
                                "Local relevance",
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
                    <LocalSearchJourney />
                </div>
            </div>
        </section>
    );
}