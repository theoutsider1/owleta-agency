import Link from "next/link";

export default function RedesignCTA() {
    return (
        <section className="pb-[var(--section-space)]">
            <div className="site-container">
                <div className="border-t border-border pt-12 md:pt-16">
                    <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-20">
                        {/* Message */}
                        <div className="max-w-[760px]">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                    Ready for the next step?
                                </p>
                            </div>

                            <h2 className="text-[clamp(2.7rem,4.8vw,5rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-text-primary">
                                Your website already exists.
                                <br />
                                <span className="text-primary">
                                    Let&apos;s make it work better.
                                </span>
                            </h2>
                        </div>

                        {/* Actions */}
                        <div className="lg:pb-1">
                            <p className="max-w-[480px] text-[15px] leading-6 text-text-secondary">
                                Tell us what isn&apos;t working, what you want to improve and
                                where the website needs to take your business next.
                            </p>

                            <div className="mt-7 flex flex-wrap items-center gap-5">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                                >
                                    Discuss your redesign
                                    <span className="ml-3">→</span>
                                </Link>

                                <Link
                                    href="/website-check"
                                    className="group inline-flex items-center text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                                >
                                    Get a website check
                                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>
                            </div>

                            <p className="mt-5 text-[12px] leading-5 text-text-muted">
                                Not sure how much needs changing? Start with a website check.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}