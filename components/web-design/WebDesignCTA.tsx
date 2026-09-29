import Link from "next/link";

export default function WebDesignCTA() {
    return (
        <section className="pb-8 md:pb-10">
            <div className="site-container">
                <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d0d] px-6 py-14 md:px-10 md:py-16 lg:px-16 lg:py-20">
                    {/* Subtle visual path */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[38%] lg:block"
                    >
                        <div className="absolute right-[18%] top-[calc(24%+8px)] h-[42%] w-px bg-gradient-to-b from-[#ff5a1f]/60 to-transparent" />
                        <div className="absolute right-[18%] top-[66%] h-20 w-40 border-b border-r border-white/[0.08]" />
                    </div>

                    <div className="relative max-w-4xl">
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#ff5a1f]">
                            Start a project
                        </p>

                        <h2 className="mt-5 max-w-3xl text-[clamp(2.7rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.05em] text-white">
                            Have a website project in mind?
                        </h2>

                        <p className="mt-7 max-w-xl text-base leading-7 text-white/60 md:text-[17px]">
                            Tell us about your business, what you need the website to do and
                            where you are in the process. We&apos;ll take it from there.
                        </p>

                        <div className="mt-9 flex flex-wrap items-center gap-5">
                            <Link
                                href="/contact"
                                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ff5a1f] px-6 text-sm font-semibold text-[#070707] transition-colors hover:bg-[#ff6b35]"
                            >
                                Start a project
                            </Link>

                            <Link
                                href="/work"
                                className="group inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition-colors hover:text-white"
                            >
                                See our work
                                <span
                                    aria-hidden="true"
                                    className="transition-transform group-hover:translate-x-1"
                                >
                                    →
                                </span>
                            </Link>
                        </div>
                        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/[0.08] pt-6">
                            {[
                                "Clear scope",
                                "Written quote",
                                "Invoice provided",
                                "Direct communication",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <span
                                        aria-hidden="true"
                                        className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]"
                                    />
                                    <span className="text-xs font-medium uppercase tracking-[0.08em] text-white">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}