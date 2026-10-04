export default function RedesignFoundation() {
    return (
        <section className="section-space-tight">
            <div className="site-container">
                {/* Intro + technical decision */}
                <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
                    <div className="max-w-[560px]">
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                The existing foundation
                            </p>
                        </div>

                        <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            A redesign can work with what you have,{" "}
                            <span className="text-primary">
                                when the foundation still works.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-[520px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Before changing the underlying setup, we look at whether the
                            current website can support the design, functionality,
                            performance and future changes the business needs.
                        </p>
                    </div>

                    {/* Decision path */}
                    <div className="lg:pt-2">
                        <div className="border-l border-border pl-6 md:pl-9">
                            <div>
                                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-primary">
                                    Existing foundation
                                </p>

                                <h3 className="mt-4 text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                    Keep the underlying setup when it still supports the
                                    website.
                                </h3>

                                <p className="mt-3 max-w-[610px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                    If the current platform and structure can support the
                                    changes, the redesign can focus on the pages, content,
                                    customer journey and functionality that need improvement
                                    without replacing everything underneath.
                                </p>
                            </div>

                            <div
                                aria-hidden="true"
                                className="my-9 flex items-center gap-4"
                            >
                                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-text-muted">
                                    or
                                </span>

                                <span className="h-px flex-1 bg-border" />
                            </div>

                            <div>
                                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-primary">
                                    New foundation
                                </p>

                                <h3 className="mt-4 text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                    Rebuild the foundation when it limits meaningful
                                    improvements.
                                </h3>

                                <p className="mt-3 max-w-[610px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                    An outdated theme, restrictive page builder, difficult
                                    codebase or unsuitable structure can make improvements
                                    harder to implement and maintain. In those cases, rebuilding
                                    the underlying setup can create a cleaner base for the
                                    redesigned website.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Platform-specific redesign */}
                <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-14">
                    <div className="border-t border-border pt-6">
                        <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-primary">
                            WordPress website redesign
                        </p>

                        <h3 className="mt-4 text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                            Already have a WordPress website?
                        </h3>

                        <p className="mt-3 max-w-[520px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                            We can redesign the experience, structure and content while
                            keeping WordPress when it still suits the business. If an
                            outdated theme, page builder or plugin setup is causing problems,
                            we can also assess whether a cleaner rebuild would make more
                            sense.
                        </p>
                    </div>

                    <div className="border-t border-border pt-6">
                        <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-primary">
                            Custom website redesign
                        </p>

                        <h3 className="mt-4 text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                            Need something more specific?
                        </h3>

                        <p className="mt-3 max-w-[520px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
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