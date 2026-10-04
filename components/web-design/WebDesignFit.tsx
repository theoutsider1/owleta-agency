import Link from "next/link";

export default function WebDesignFit() {
    return (
        <section className="section-space">
            <div className="site-container">
                {/* Intro */}
                <div className="max-w-4xl">
                    <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-[#ff5a1f]">
                        The right starting point
                    </p>

                    <h2 className="max-w-4xl text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                        Starting fresh makes sense when{" "}
                        <span className="text-primary">
                            the foundation needs to change.
                        </span>
                    </h2>

                    <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 md:text-[17px]">
                        A new website can be the right move when you&apos;re starting a
                        business, launching something new or when the existing site no
                        longer gives you a useful foundation to build on.
                    </p>
                </div>

                {/* Decision split */}
                <div className="mt-14 grid overflow-hidden rounded-2xl border border-white/[0.08] lg:mt-16 lg:grid-cols-2">
                    {/* New website */}
                    <div className="group relative overflow-hidden bg-[#0d0d0d] p-7 md:p-10 lg:flex lg:p-12">
                        {/* Subtle visual */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/[0.06]"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-2 top-10 h-32 w-32 rounded-full border border-white/[0.05]"
                        />

                        <div className="relative z-10 flex w-full flex-col">
                            <div className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-[#ff5a1f]" />

                                <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/45">
                                    Starting fresh
                                </span>
                            </div>

                            <h3 className="mt-8 max-w-md text-3xl font-medium leading-[1.05] tracking-[-0.035em] text-white md:text-4xl">
                                Build a new foundation.
                            </h3>

                            <p className="mt-5 max-w-md text-base leading-7 text-white/55">
                                Starting again can make sense when the business is new, the
                                website no longer reflects what you offer or the existing
                                structure is holding back what you need to do next.
                            </p>

                            <div className="mt-9 grid gap-3 sm:grid-cols-2">
                                {[
                                    "New business or service",
                                    "Major change in direction",
                                    "Poor existing structure",
                                    "Technical limitations",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-white/30"
                                        />

                                        <span className="text-sm leading-6 text-white/50">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA alignment */}
                            <div className="mt-auto pt-10">
                                <Link
                                    href="/contact"
                                    className="group/link inline-flex cursor-pointer items-center gap-2 text-[15px] font-semibold text-white transition-colors hover:text-[#ff5a1f]"
                                >
                                    Start a project

                                    <span
                                        aria-hidden="true"
                                        className="transition-transform group-hover/link:translate-x-1"
                                    >
                                        →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Existing website */}
                    <div className="group relative overflow-hidden border-t border-white/[0.08] bg-white/[0.035] p-7 md:p-10 lg:flex lg:border-l lg:border-t-0 lg:p-12">
                        {/* Different visual language */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute right-10 top-10 grid grid-cols-4 gap-2 opacity-20"
                        >
                            {Array.from({ length: 16 }).map((_, index) => (
                                <span
                                    key={index}
                                    className="h-1 w-1 rounded-full bg-white"
                                />
                            ))}
                        </div>

                        <div className="relative z-10 flex w-full flex-col">
                            <div className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full border border-[#ff5a1f]" />

                                <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/45">
                                    Already have a website
                                </span>
                            </div>

                            <h3 className="mt-8 max-w-md text-3xl font-medium leading-[1.05] tracking-[-0.035em] text-white md:text-4xl">
                                Improve the foundation you have.
                            </h3>

                            <p className="mt-5 max-w-md text-base leading-7 text-white/55">
                                If the existing website still gives us something useful to
                                work with, rebuilding everything may not be necessary. We can
                                focus on what is actually getting in the way.
                            </p>

                            {/* Deciding question */}
                            <div className="relative mt-8 max-w-md px-6 py-6">
                                {/* Top-left corner */}
                                <span
                                    aria-hidden="true"
                                    className="absolute left-0 top-0 h-6 w-px bg-primary"
                                />
                                <span
                                    aria-hidden="true"
                                    className="absolute left-0 top-0 h-px w-6 bg-primary"
                                />

                                {/* Bottom-right corner */}
                                <span
                                    aria-hidden="true"
                                    className="absolute bottom-0 right-0 h-6 w-px bg-primary"
                                />
                                <span
                                    aria-hidden="true"
                                    className="absolute bottom-0 right-0 h-px w-6 bg-primary"
                                />

                                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                    The deciding question
                                </p>

                                <p className="text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                    The first question is not whether the website is old. It
                                    is whether the existing foundation is still worth
                                    improving.
                                </p>
                            </div>

                            {/* CTA alignment */}
                            <div className="mt-auto pt-10">
                                <Link
                                    href="/services/website-redesign"
                                    className="group/link inline-flex cursor-pointer items-center gap-2 text-[15px] font-semibold text-white transition-colors hover:text-[#ff5a1f]"
                                >
                                    Explore website redesign

                                    <span
                                        aria-hidden="true"
                                        className="transition-transform group-hover/link:translate-x-1"
                                    >
                                        →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Unsure route */}
                <div className="mt-6 flex flex-col gap-4 rounded-xl bg-white/[0.025] px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
                    <p className="text-base text-white/55">
                        Not sure whether to rebuild or improve what you have?
                    </p>

                    <Link
                        href="/services/website-audit/?service=check#request"
                        className="group inline-flex shrink-0 cursor-pointer items-center gap-2 text-[15px] font-semibold text-[#ff5a1f]"
                    >
                        Get a website check

                        <span
                            aria-hidden="true"
                            className="transition-transform group-hover:translate-x-1"
                        >
                            →
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}