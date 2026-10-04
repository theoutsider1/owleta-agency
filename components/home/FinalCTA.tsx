import Link from "next/link";

export default function FinalCTA() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden border-t border-border bg-surface"
        >
            {/* Entry signal */}
            <div className="flex justify-center">
                <div className="flex flex-col items-center">
                    <div className="h-12 w-px bg-gradient-to-b from-primary/20 to-primary" />

                    <span className="flex h-[13px] w-[13px] items-center justify-center rounded-full border border-primary/40">
                        <span className="h-[4px] w-[4px] rounded-full bg-primary" />
                    </span>
                </div>
            </div>

            <div className="site-container pb-20 pt-10 md:pb-24 md:pt-12 lg:pb-28">
                {/* Intro */}
                <div className="mx-auto max-w-[850px] text-center">
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
                        Take the next step
                    </p>

                    <h2 className="mt-6 text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
                        Let&apos;s make your website
                        <br className="hidden sm:block" />{" "}
                        <span className="text-primary">
                            work harder for your business.
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                        Whether you&apos;re starting from scratch, planning something new
                        or trying to get more from the website you already have, tell us
                        where you&apos;re at.
                    </p>
                </div>

                {/* Two paths */}
                <div className="mx-auto mt-14 grid max-w-[1050px] border-y border-border md:mt-16 md:grid-cols-2">
                    {/* New website */}
                    <Link
                        href="/contact"
                        className="group relative cursor-pointer px-6 py-10 transition-colors hover:bg-white/[0.025] md:px-10 md:py-12 lg:px-12"
                    >
                        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-text-muted">
                            I need a website
                        </p>

                        <h3 className="mt-5 text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                            Starting something new?
                        </h3>

                        <p className="mt-4 max-w-[380px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                            Tell us what you&apos;re planning and what the website needs to
                            help your business achieve.
                        </p>

                        <span className="mt-8 inline-flex items-center text-[14px] font-semibold text-primary">
                            Start a project
                            <span className="ml-3 transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </span>
                    </Link>

                    {/* Existing website */}
                    <Link
                        href="/services/website-audit/?service=check#request"
                        className="group relative cursor-pointer border-t border-border px-6 py-10 transition-colors hover:bg-white/[0.025] md:border-l md:border-t-0 md:px-10 md:py-12 lg:px-12"
                    >
                        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-text-muted">
                            I already have a website
                        </p>

                        <h3 className="mt-5 text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                            Not getting what you need?
                        </h3>

                        <p className="mt-4 max-w-[380px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                            We&apos;ll look at what could be getting in the way and help you
                            decide what is worth addressing first.
                        </p>

                        <span className="mt-8 inline-flex items-center text-[14px] font-semibold text-primary">
                            Get a website check
                            <span className="ml-3 transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </span>
                    </Link>
                </div>

                {/* Fallback */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-[15px]">
                    <span className="text-text-secondary">
                        Not sure where to start?
                    </span>

                    <Link
                        href="/contact"
                        className="group inline-flex cursor-pointer items-center font-medium text-text-primary"
                    >
                        Just get in touch
                        <span className="ml-2 transition-transform group-hover:translate-x-1">
                            →
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}