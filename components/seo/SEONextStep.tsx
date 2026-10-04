import Link from "next/link";

export default function SEONextStep() {
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
                                Before you start
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Not sure SEO is{" "}
                            <span className="text-primary">
                                the starting point?
                            </span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-[620px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            You do not need to choose a service based on guesswork. The
                            right starting point depends on whether you already have a
                            website and how clearly the problem is understood.
                        </p>
                    </div>
                </div>

                {/* Paths */}
                <div className="mt-14 grid border-y border-border lg:mt-16 lg:grid-cols-2">
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
                                If your website is underperforming but the reason is
                                unclear, a Website Audit can investigate the customer
                                journey, SEO, technical health and other areas before
                                you decide what work is actually needed.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                            <Link
                                href="/services/website-audit/?service=audit#request"
                                className="group inline-flex cursor-pointer items-center text-[14px] font-medium text-text-primary transition-colors hover:text-primary"
                            >
                                Request a Website Audit

                                <span
                                    aria-hidden="true"
                                    className="ml-2 transition-transform group-hover:translate-x-1"
                                >
                                    →
                                </span>
                            </Link>

                            <Link
                                href="/services/website-audit/?service=check#request"
                                className="group inline-flex cursor-pointer items-center text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                            >
                                Or get a free Website Check

                                <span
                                    aria-hidden="true"
                                    className="ml-2 transition-transform group-hover:translate-x-1"
                                >
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
                                If you are starting without a website, we can plan the website,
                                customer journey, search structure and technical foundations
                                together from the beginning.
                            </p>
                        </div>

                        <div className="mt-8">
                            <Link
                                href="/contact"
                                className="inline-flex cursor-pointer items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                Start a web design project
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Principle */}
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
                            Start with what is needed
                        </p>

                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            The goal is to start with the work your website actually
                            needs, rather than choosing SEO, redesign or another
                            service before the situation is clear.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}