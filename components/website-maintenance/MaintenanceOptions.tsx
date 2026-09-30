import Link from "next/link";

export default function MaintenanceOptions() {
    return (
        <section className="section-space">
            <div className="site-container">
                {/* Intro */}
                <div className="max-w-[820px]">
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                            Support that fits what you need
                        </p>
                    </div>

                    <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[1] tracking-[-0.045em] text-text-primary">
                        Ongoing maintenance or help with{" "}
                        <span className="text-primary">one specific problem.</span>
                    </h2>

                    <p className="mt-6 max-w-[650px] text-[16px] leading-7 text-text-secondary md:text-[17px]">
                        Not every website needs the same level of support. You might want
                        someone looking after it over time, or simply need help fixing or
                        changing something now.
                    </p>
                </div>

                {/* Two paths */}
                <div className="mt-14 grid border-y border-border lg:grid-cols-2">
                    {/* Ongoing */}
                    <div className="py-9 lg:border-r lg:border-border lg:py-11 lg:pr-12">
                        <div className="flex items-center justify-between gap-5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-primary">
                                Ongoing website maintenance
                            </p>

                            <span className="text-[10px] font-medium tracking-[0.14em] text-text-muted">
                                01
                            </span>
                        </div>

                        <h3 className="mt-6 max-w-[480px] text-[clamp(1.8rem,2.7vw,2.6rem)] font-medium leading-[1.05] tracking-[-0.035em] text-text-primary">
                            Someone to keep looking after the website.
                        </h3>

                        <p className="mt-5 max-w-[520px] text-[14px] leading-6 text-text-secondary">
                            For businesses that want continued help with website care,
                            updates, fixes and improvements instead of dealing with each
                            change or technical problem alone.
                        </p>

                        <div className="mt-8 space-y-3">
                            {[
                                "Routine website attention",
                                "Updates and changes",
                                "Technical support",
                                "Ongoing improvements",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <span className="h-1 w-1 rounded-full bg-primary" />
                                    <span className="text-[11px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* One-off */}
                    <div className="border-t border-border py-9 lg:border-l-0 lg:border-t-0 lg:py-11 lg:pl-12">
                        <div className="flex items-center justify-between gap-5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-primary">
                                One-off website support
                            </p>

                            <span className="text-[10px] font-medium tracking-[0.14em] text-text-muted">
                                02
                            </span>
                        </div>

                        <h3 className="mt-6 max-w-[480px] text-[clamp(1.8rem,2.7vw,2.6rem)] font-medium leading-[1.05] tracking-[-0.035em] text-text-primary">
                            Get help with the problem in front of you.
                        </h3>

                        <p className="mt-5 max-w-[520px] text-[14px] leading-6 text-text-secondary">
                            Already know what needs attention? We can review a specific
                            website problem, update or piece of work without requiring an
                            ongoing maintenance arrangement.
                        </p>

                        <div className="mt-8 space-y-3">
                            {[
                                "Broken forms or links",
                                "Content and page changes",
                                "Layout or mobile issues",
                                "Technical troubleshooting",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <span className="h-1 w-1 rounded-full bg-primary" />
                                    <span className="text-[11px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contextual CTA */}
                <div className="mt-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
                    <div className="max-w-[540px]">
                        <p className="text-[17px] font-medium leading-6 text-text-primary">
                            Have something on your website that needs attention?
                        </p>

                        <p className="mt-2 text-[14px] leading-6 text-text-secondary">
                            Tell us what&apos;s happening and we can look at the right way to
                            help.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-5">
                        <Link
                            href="/contact"
                            className="inline-flex items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                        >
                            Get website support
                            <span className="ml-3">→</span>
                        </Link>

                        <Link
                            href="/contact"
                            className="group inline-flex items-center text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                        >
                            Discuss ongoing maintenance
                            <span className="ml-2 transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}