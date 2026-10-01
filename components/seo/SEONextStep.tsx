import Link from "next/link";

export default function SEONextStep() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                {/* Intro */}
                <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Before you start
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Not sure SEO is{" "}
                            <span className="text-primary">the starting point?</span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-[620px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            You do not need to choose a service based on guesswork. The right
                            starting point depends on whether you already have a website and
                            how clearly the problem is understood.
                        </p>
                    </div>
                </div>

                {/* Paths */}
                <div className="mt-16 grid border-y border-border lg:grid-cols-2">
                    {/* Existing website */}
                    <div className="border-b border-border py-9 lg:border-b-0 lg:border-r lg:py-10 lg:pr-12 xl:pr-16">
                        <div className="flex items-center justify-between gap-5">
                            <span className="text-[10px] font-medium text-text-muted">
                                01
                            </span>

                            <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                Existing website
                            </span>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                Investigate before deciding what to change.
                            </h3>

                            <p className="mt-4 max-w-[520px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                If your website is underperforming but the reason is unclear, a
                                Website Audit can investigate the customer journey, SEO,
                                technical health and other areas before you decide what work is
                                actually needed.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                            <Link
                                href="/services/website-audit/?service=audit#request"
                                className="group inline-flex items-center text-[14px] font-medium text-text-primary"
                            >
                                Request a Website Audit
                                <span className="ml-2 transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>

                            <Link
                                href="/services/website-audit/?service=check#request"
                                className="group inline-flex items-center text-[13px] font-medium text-text-muted transition-colors hover:text-text-primary"
                            >
                                Or get a free Website Check
                                <span className="ml-2 transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* No website */}
                    <div className="py-9 lg:py-10 lg:pl-12 xl:pl-16">
                        <div className="flex items-center justify-between gap-5">
                            <span className="text-[10px] font-medium text-text-muted">
                                02
                            </span>

                            <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                No website yet
                            </span>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                Build the foundations properly from the start.
                            </h3>

                            <p className="mt-4 max-w-[520px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                If you are starting without a website, web design is the more
                                useful first step. Search structure, customer journeys and
                                technical foundations can be considered as the website is
                                planned and built.
                            </p>
                        </div>

                        <div className="mt-8">
                            <Link
                                href="/services/web-design"
                                className="group inline-flex items-center text-[14px] font-medium text-text-primary"
                            >
                                Explore Web Design
                                <span className="ml-2 transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Principle */}
                <div className="mt-8 grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div aria-hidden="true" />

                    <div className="flex gap-4 border-l-2 border-primary pl-5">
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            The goal is to start with the work your website actually needs,
                            rather than choosing SEO, redesign or another service before the
                            situation is clear.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}