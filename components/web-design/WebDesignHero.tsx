import Link from "next/link";

export default function WebDesignHero() {
    return (
        <section className="relative overflow-hidden pb-20 pt-20 md:pb-24 md:pt-24 lg:pb-28 lg:pt-28">
            <div className="site-container">
                <div className="max-w-5xl">
                    {/* Eyebrow */}
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                            Web design services
                        </p>
                    </div>

                    {/* Main message */}
                    <h1 className="max-w-5xl text-[clamp(3rem,5.5vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-text-primary">
                        Web design built around{" "}
                        <span className="text-primary">
                            what your business needs to achieve.
                        </span>
                    </h1>

                    {/* Supporting copy */}
                    <p className="mt-7 max-w-2xl text-[17px] leading-7 text-text-secondary md:mt-8 md:text-[18px]">
                        We design and build websites for UK businesses that make it
                        easier for customers to understand what you offer, find what
                        they need and take the next step.
                    </p>

                    {/* Actions */}
                    <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                        <Link
                            href="/contact"
                            className="inline-flex cursor-pointer items-center justify-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                        >
                            Start a project
                            <span className="ml-2" aria-hidden="true">
                                →
                            </span>
                        </Link>

                        <Link
                            href="/work"
                            className="group inline-flex cursor-pointer items-center text-[14px] font-medium text-text-primary transition-colors hover:text-primary"
                        >
                            See our work

                            <span
                                aria-hidden="true"
                                className="ml-2 transition-transform group-hover:translate-x-1"
                            >
                                →
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Capability signals */}
                <div className="mt-16 border-y border-border md:mt-20">
                    <div className="grid md:grid-cols-3">
                        <div className="flex items-center gap-3 border-b border-border py-5 md:border-b-0 md:border-r md:pr-6">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                Clear customer journeys
                            </span>
                        </div>

                        <div className="flex items-center gap-3 border-b border-border py-5 md:border-b-0 md:border-r md:px-6">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                Search ready foundations
                            </span>
                        </div>

                        <div className="flex items-center gap-3 py-5 md:pl-6">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                Built to be measured
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}