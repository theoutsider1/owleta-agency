import Link from "next/link";

export default function LocalSEOMidCTA() {
    return (
        <section className="section-space-tight border-t border-border">
            <div className="site-container">
                <div className="grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-end lg:gap-20">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Improve your local visibility
                            </p>
                        </div>

                        <h2 className="max-w-[760px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Want more of the right local searches{" "}
                            <span className="text-primary">to lead to your business?</span>
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-[520px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Tell us what you offer, where you serve customers and what you
                            want to improve. We can look at whether Local SEO is the right
                            place to start.
                        </p>

                        <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                Discuss Local SEO
                                <span className="ml-3">→</span>
                            </Link>

                            <Link
                                href="/services/website-audit/?service=check#request"
                                className="group inline-flex items-center text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                            >
                                Not sure? Get a website check
                                <span className="ml-2 transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}