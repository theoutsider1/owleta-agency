import Link from "next/link";

export default function MaintenanceCTA() {
    return (
        <section className="pb-[var(--section-space)] pt-8 md:pt-12">
            <div className="site-container">
                <div className="border-t border-border pt-12 md:pt-16">
                    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
                        {/* Message */}
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <span
                                    aria-hidden="true"
                                    className="h-1.5 w-1.5 rounded-full bg-primary"
                                />

                                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                    Website support
                                </p>
                            </div>

                            <h2 className="max-w-[780px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                                Your website is live.
                                <br />
                                <span className="text-primary">
                                    Keep it working as the business moves forward.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-[620px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                                Whether you need ongoing website maintenance or help with
                                a specific issue, tell us what needs attention and
                                we&apos;ll discuss the appropriate way to support it.
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="lg:pb-1">
                            <div className="border-t border-border">
                                <Link
                                    href="/contact"
                                    className="group flex cursor-pointer items-center justify-between gap-8 border-b border-border py-6"
                                >
                                    <div>
                                        <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-text-muted">
                                            Ongoing support
                                        </p>

                                        <p className="mt-2 text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary transition-colors group-hover:text-primary">
                                            Discuss website maintenance
                                        </p>
                                    </div>

                                    <span
                                        aria-hidden="true"
                                        className="shrink-0 text-[20px] text-primary transition-transform group-hover:translate-x-1"
                                    >
                                        →
                                    </span>
                                </Link>

                                <Link
                                    href="/contact"
                                    className="group flex cursor-pointer items-center justify-between gap-8 border-b border-border py-6"
                                >
                                    <div>
                                        <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-text-muted">
                                            One-off support
                                        </p>

                                        <p className="mt-2 text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary transition-colors group-hover:text-primary">
                                            Get help with your website
                                        </p>
                                    </div>

                                    <span
                                        aria-hidden="true"
                                        className="shrink-0 text-[20px] text-primary transition-transform group-hover:translate-x-1"
                                    >
                                        →
                                    </span>
                                </Link>
                            </div>

                            <p className="mt-6 max-w-[480px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                We confirm the scope and provide a quote before any
                                maintenance or support work begins.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}