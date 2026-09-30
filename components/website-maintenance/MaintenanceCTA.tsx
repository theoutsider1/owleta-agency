import Link from "next/link";

export default function MaintenanceCTA() {
    return (
        <section className="pb-24 pt-8 md:pb-32 md:pt-12">
            <div className="site-container">
                <div className="border-t border-border pt-12 md:pt-16">
                    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
                        {/* Message */}
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                    Keep your website looked after
                                </p>
                            </div>

                            <h2 className="max-w-[780px] text-[clamp(2.7rem,4.5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-text-primary">
                                Your website is live.
                                <br />
                                <span className="text-primary">
                                    It still needs someone looking after it.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-[620px] text-[16px] leading-7 text-text-secondary md:text-[17px]">
                                Whether you need ongoing website maintenance or help with a
                                specific issue, tell us what you need and we&apos;ll look at
                                the right way to support your website.
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="lg:pb-1">
                            <div className="border-t border-border">
                                <Link
                                    href="/contact"
                                    className="group flex items-center justify-between gap-8 border-b border-border py-6"
                                >
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                                            Ongoing support
                                        </p>

                                        <p className="mt-2 text-[18px] font-medium text-text-primary transition-colors group-hover:text-primary">
                                            Discuss website maintenance
                                        </p>
                                    </div>

                                    <span className="text-[20px] text-primary transition-transform group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>

                                <Link
                                    href="/contact"
                                    className="group flex items-center justify-between gap-8 border-b border-border py-6"
                                >
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                                            One-off support
                                        </p>

                                        <p className="mt-2 text-[18px] font-medium text-text-primary transition-colors group-hover:text-primary">
                                            Get help with your website
                                        </p>
                                    </div>

                                    <span className="text-[20px] text-primary transition-transform group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>
                            </div>

                            <p className="mt-5 text-[12px] leading-5 text-text-muted">
                                Already have a website? We can review the existing setup
                                before confirming the work and quote.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}