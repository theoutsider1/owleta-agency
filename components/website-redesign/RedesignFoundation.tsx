export default function RedesignFoundation() {
    return (
        <section className="section-space-tight">
            <div className="site-container">
                {/* Intro + decision */}
                <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
                    <div className="max-w-[560px]">
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Redesigning an existing website
                            </p>
                        </div>

                        <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[1] tracking-[-0.045em] text-text-primary">
                            Your website may not need to be{" "}
                            <span className="text-primary">rebuilt from scratch.</span>
                        </h2>

                        <p className="mt-6 max-w-[520px] text-[16px] leading-7 text-text-secondary md:text-[17px]">
                            A website redesign can mean improving the website you already
                            have, or rebuilding it when the current setup limits what can be
                            changed. We look at the design, content, functionality,
                            performance and SEO before deciding which approach makes sense.
                        </p>
                    </div>

                    {/* Decision path */}
                    <div className="lg:pt-2">
                        <div className="border-l border-border pl-6 md:pl-9">
                            <div>
                                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-primary">
                                    Improve
                                </p>

                                <h3 className="mt-4 text-[24px] font-medium leading-[1.15] tracking-[-0.03em] text-text-primary md:text-[28px]">
                                    Improve the website you already have.
                                </h3>

                                <p className="mt-4 max-w-[610px] text-[14px] leading-6 text-text-secondary">
                                    If your current website can support the changes you need, we
                                    can redesign key pages, improve the customer journey,
                                    reorganise content, strengthen calls to action and update
                                    functionality without replacing everything underneath.
                                </p>
                            </div>

                            <div className="my-9 flex items-center gap-4">
                                <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-text-muted">
                                    or
                                </span>
                                <span className="h-px flex-1 bg-border" />
                            </div>

                            <div>
                                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-primary">
                                    Rebuild
                                </p>

                                <h3 className="mt-4 text-[24px] font-medium leading-[1.15] tracking-[-0.03em] text-text-primary md:text-[28px]">
                                    Rebuild when the current website is getting in the way.
                                </h3>

                                <p className="mt-4 max-w-[610px] text-[14px] leading-6 text-text-secondary">
                                    Sometimes an outdated theme, page builder, code or website
                                    structure makes meaningful improvements difficult. In that
                                    case, rebuilding can give the redesigned website better
                                    performance, cleaner functionality and more flexibility for
                                    future changes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Platform-specific redesign */}
                <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-14">
                    <div className="border-t border-border pt-6">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-primary">
                            WordPress website redesign
                        </p>

                        <h3 className="mt-4 text-[21px] font-medium leading-[1.2] tracking-[-0.025em] text-text-primary">
                            Already have a WordPress website?
                        </h3>

                        <p className="mt-4 max-w-[520px] text-[14px] leading-6 text-text-secondary">
                            We can redesign the experience, structure and content while
                            keeping WordPress when it still suits the business. If an
                            outdated theme, page builder or plugin setup is causing problems,
                            we can also assess whether a cleaner rebuild would make more
                            sense.
                        </p>
                    </div>

                    <div className="border-t border-border pt-6">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-primary">
                            Custom website redesign
                        </p>

                        <h3 className="mt-4 text-[21px] font-medium leading-[1.2] tracking-[-0.025em] text-text-primary">
                            Need something more specific?
                        </h3>

                        <p className="mt-4 max-w-[520px] text-[14px] leading-6 text-text-secondary">
                            For websites with more specific requirements, a redesign can
                            include a custom build around the functionality, performance and
                            customer journey the business actually needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}