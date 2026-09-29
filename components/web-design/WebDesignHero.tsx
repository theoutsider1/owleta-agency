import Link from "next/link";

export default function WebDesignHero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28">
            <div className="site-container">
                <div className="max-w-5xl">
                    {/* Eyebrow */}
                    <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-[#ff5a1f]">
                        Web design services
                    </p>

                    {/* Main message */}
                    <h1 className="max-w-5xl text-[clamp(3rem,6vw,5.8rem)] font-medium leading-[0.94] tracking-[-0.055em] text-white">
                        Web design built around what your business needs to achieve.
                    </h1>

                    {/* Supporting copy */}
                    <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60 md:mt-8 md:text-xl md:leading-8">
                        We design and build websites for UK businesses that make it easier for
                        customers to understand what you offer, find what they need and take
                        the next step.
                    </p>

                    {/* Actions */}
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Link
                            href="/contact"
                            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ff5a1f] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#ff6b35]"
                        >
                            Start a project
                        </Link>

                        <Link
                            href="/work"
                            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/[0.12] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:border-white/[0.22] hover:bg-white/[0.04]"
                        >
                            See our work
                        </Link>
                    </div>
                </div>

                {/* Capability signals */}
                <div className="mt-16 border-y border-white/[0.08] md:mt-20">
                    <div className="grid md:grid-cols-3">
                        <div className="flex items-center gap-3 border-b border-white/[0.08] py-5 md:border-r md:border-b-0 md:pr-6">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]"
                            />
                            <span className="text-sm font-medium uppercase tracking-[0.1em] text-white/55">
                                Clear customer journeys
                            </span>
                        </div>

                        <div className="flex items-center gap-3 border-b border-white/[0.08] py-5 md:border-r md:border-b-0 md:px-6">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]"
                            />
                            <span className="text-sm font-medium uppercase tracking-[0.1em] text-white/55">
                                Search ready foundations
                            </span>
                        </div>

                        <div className="flex items-center gap-3 py-5 md:pl-6">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]"
                            />
                            <span className="text-sm font-medium uppercase tracking-[0.1em] text-white/55">
                                Built to be measured
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}