import Link from "next/link";

const signals = [
    "Clear scope",
    "Written quote",
    "Invoice provided",
    "Direct communication",
];

export default function WebDesignCTA() {
    return (
        <section className="pb-8 md:pb-10">
            <div className="site-container">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-14 md:px-10 md:py-16 lg:px-16 lg:py-20">
                    {/* Subtle visual path */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[38%] lg:block"
                    >
                        <div className="absolute right-[18%] top-[calc(24%+8px)] h-[42%] w-px bg-gradient-to-b from-primary/60 to-transparent" />

                        <div className="absolute right-[18%] top-[66%] h-20 w-40 border-b border-r border-border" />
                    </div>

                    <div className="relative max-w-4xl">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Start a project
                            </p>
                        </div>

                        <h2 className="mt-5 max-w-3xl text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Have a website project{" "}
                            <span className="text-primary">
                                in mind?
                            </span>
                        </h2>

                        <p className="mt-7 max-w-xl text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Tell us about your business, what you need the website to do
                            and where you are in the process. We&apos;ll take it from there.
                        </p>

                        {/* Actions */}
                        <div className="mt-9 flex flex-wrap items-center gap-5">
                            <Link
                                href="/contact"
                                className="inline-flex cursor-pointer items-center justify-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                Start a project
                            </Link>

                            <Link
                                href="/work"
                                className="group inline-flex cursor-pointer items-center gap-2 text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
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

                        {/* Commercial signals */}
                        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6">
                            {signals.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="h-1.5 w-1.5 rounded-full bg-primary"
                                    />

                                    <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-text-muted">
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