import Link from "next/link";

export default function ContactAlternative() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-20">
                    {/* Message */}
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Not ready for a project?
                            </p>
                        </div>

                        <h2 className="max-w-[760px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Start with a{" "}
                            <span className="text-primary">
                                website check.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-[680px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            If you already have a website but are not sure what needs
                            improving, we can take a first look and tell you whether
                            we can see an obvious issue worth investigating.
                        </p>
                    </div>

                    {/* Action */}
                    <div className="border-t border-border pt-7">
                        <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                            Free first look
                        </p>

                        <p className="mt-3 max-w-[480px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                            No full audit and no invented list of problems. If we
                            notice something meaningful, we will point you in the
                            right direction.
                        </p>

                        <Link
                            href="/services/website-audit?service=check#request"
                            className="mt-6 inline-flex cursor-pointer items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                        >
                            Get a website check
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}