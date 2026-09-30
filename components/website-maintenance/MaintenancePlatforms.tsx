export default function MaintenancePlatforms() {
    return (
        <section className="section-space-tight border-t border-border">
            <div className="site-container">
                {/* Intro */}
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Different websites, different needs
                            </p>
                        </div>
                    </div>

                    <div className="max-w-[760px]">
                        <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[1] tracking-[-0.045em] text-text-primary">
                            Maintenance should fit{" "}
                            <span className="text-primary">
                                the website you actually have.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-[650px] text-[16px] leading-7 text-text-secondary md:text-[17px]">
                            WordPress, another content management system or a custom-coded
                            website can all need ongoing attention. The work depends on how
                            your website is built and what needs to be maintained.
                        </p>
                    </div>
                </div>

                {/* Platform layout */}
                <div className="mt-16 grid border-y border-border lg:grid-cols-[1.15fr_0.85fr]">
                    {/* WordPress feature */}
                    <div className="py-10 lg:border-r lg:border-border lg:py-12 lg:pr-12">
                        <div className="flex items-center justify-between gap-5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-primary">
                                WordPress maintenance
                            </p>

                            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                CMS
                            </span>
                        </div>

                        <h3 className="mt-6 max-w-[520px] text-[clamp(2rem,3vw,3rem)] font-medium leading-[1.05] tracking-[-0.04em] text-text-primary">
                            Keep your WordPress website updated and supported.
                        </h3>

                        <p className="mt-5 max-w-[570px] text-[14px] leading-6 text-text-secondary">
                            WordPress maintenance can include core, theme and plugin updates,
                            compatibility checks, troubleshooting, content changes and
                            ongoing improvements based on the website and its existing
                            setup.
                        </p>

                        <div className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                            {[
                                "WordPress core updates",
                                "Theme and plugin updates",
                                "Compatibility checks",
                                "Troubleshooting",
                                "Content changes",
                                "Website improvements",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 border-t border-border pt-4"
                                >
                                    <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />

                                    <span className="text-[12px] leading-5 text-text-secondary">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other platforms */}
                    <div className="border-t border-border lg:border-t-0 lg:pl-12">
                        {/* Other CMS */}
                        <div className="py-10 lg:py-12">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-primary">
                                Other CMS websites
                            </p>

                            <h3 className="mt-5 text-[24px] font-medium leading-[1.1] tracking-[-0.03em] text-text-primary">
                                Support starts with understanding the setup.
                            </h3>

                            <p className="mt-4 max-w-[470px] text-[14px] leading-6 text-text-secondary">
                                If your website uses another CMS, we can review the platform,
                                configuration and access first, then confirm what maintenance,
                                updates and support we can provide.
                            </p>
                        </div>

                        {/* Custom code */}
                        <div className="border-t border-border py-10 lg:py-12">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-primary">
                                Custom-coded websites
                            </p>

                            <h3 className="mt-5 text-[24px] font-medium leading-[1.1] tracking-[-0.03em] text-text-primary">
                                Custom code needs technical context too.
                            </h3>

                            <p className="mt-4 max-w-[470px] text-[14px] leading-6 text-text-secondary">
                                Custom-built websites can be supported with bug fixes,
                                dependency updates where appropriate, functionality changes,
                                performance work and ongoing development after we review the
                                existing codebase and deployment setup.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Qualification note */}
                <div className="mt-8 flex max-w-[760px] items-start gap-4">
                    <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                    <p className="text-[13px] leading-6 text-text-muted">
                        For websites we did not build, we review the existing setup before confirming
                        he maintenance scope and quote. This helps us understand the platform, code,
                        integrations and access involved before making changes.
                    </p>
                </div>
            </div>
        </section>
    );
}