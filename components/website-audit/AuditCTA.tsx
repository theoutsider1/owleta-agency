import Link from "next/link";

export default function AuditCTA() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-x-20">
                    {/* Message */}
                    <div className="max-w-[760px]">
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Understand what comes next
                            </p>
                        </div>

                        <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            You don&apos;t need to know what&apos;s wrong{" "}
                            <span className="text-primary">
                                before you ask.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Start with the level of investigation that makes sense for
                            you. We&apos;ll help establish what deserves attention
                            before you decide what to change.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="lg:pb-1">
                        <div className="flex flex-wrap items-center gap-5 lg:justify-end">
                            <Link
                                href="?service=audit#request"
                                className="inline-flex cursor-pointer items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                Request a website audit
                            </Link>

                            <Link
                                href="?service=check#request"
                                className="group inline-flex cursor-pointer items-center text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                            >
                                Get a free website check

                                <span
                                    aria-hidden="true"
                                    className="ml-2 transition-transform group-hover:translate-x-1"
                                >
                                    →
                                </span>
                            </Link>
                        </div>

                        <p className="mt-5 max-w-[430px] text-[15px] leading-6 text-text-secondary lg:ml-auto lg:text-right">
                            Audit scope and quote are confirmed before you decide
                            whether to proceed.
                        </p>
                    </div>

                    {/* No website */}
                    <div className="border-t border-border pt-6 lg:col-span-2 lg:mt-2">
                        <p className="text-[15px] leading-6 text-text-secondary lg:text-right md:text-[16px]">
                            Don&apos;t have a website yet?{" "}
                            <Link
                                href="/services/web-design"
                                className="group inline-flex cursor-pointer items-center font-medium text-text-primary transition-colors hover:text-primary"
                            >
                                Explore web design services
                                <span
                                    aria-hidden="true"
                                    className="ml-2 transition-transform group-hover:translate-x-1"
                                >
                                    →
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}