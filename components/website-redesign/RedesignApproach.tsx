export default function RedesignApproach() {
    return (
        <section className="section-space border-t border-border overflow-hidden">
            <div className="site-container">
                {/* Intro */}
                <div className="max-w-[850px]">
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                            Decide what actually needs to change
                        </p>
                    </div>

                    <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[1] tracking-[-0.045em] text-text-primary">
                        Redesigning your website doesn&apos;t mean{" "}
                        <span className="text-primary">replacing everything.</span>
                    </h2>

                    <p className="mt-6 max-w-[680px] text-[16px] leading-7 text-text-secondary md:text-[17px]">
                        We look at the existing website first, then decide where the value
                        is in keeping what works, improving what can work harder and
                        rebuilding what needs a stronger foundation.
                    </p>
                </div>

                {/* Keep */}
                <div className="mt-16 md:mt-20">
                    <ApproachStep
                        label="Keep"
                        title="Protect what is already doing its job."
                        description="Useful content, valuable pages, familiar customer routes and existing search value can remain part of the website."
                        width="md:w-[58%]"
                    />
                </div>

                {/* Improve */}
                <div className="mt-14 md:mt-16 md:ml-[21%]">
                    <ApproachStep
                        label="Improve"
                        title="Make the useful parts work harder."
                        description="Structure, mobile experience, content and conversion paths can often be improved without rebuilding everything underneath."
                        width="md:w-[62%]"
                        active
                    />
                </div>

                {/* Rebuild */}
                <div className="mt-14 md:mt-16 md:ml-[47%]">
                    <ApproachStep
                        label="Rebuild"
                        title="Replace what limits what comes next."
                        description="When the structure, functionality or technical foundation is creating the problem, those parts need a stronger foundation."
                        width="md:w-full"
                    />
                </div>

                {/* Scope signal */}
                <div className="mt-16 md:mt-20">
                    <div className="relative flex items-center">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full border border-text-muted" />
                        <span className="h-px flex-1 bg-border" />
                        <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span className="h-px flex-1 bg-border" />
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full border border-text-muted" />
                    </div>

                    <div className="mt-4 grid grid-cols-3">
                        <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-text-muted">
                            Keep
                        </p>

                        <div className="text-center">
                            <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-primary">
                                Scope follows the problem
                            </p>
                        </div>

                        <p className="text-right text-[9px] font-medium uppercase tracking-[0.15em] text-text-muted">
                            Rebuild
                        </p>
                    </div>
                </div>
                <div className="mt-10 flex flex-col justify-between gap-6 pt-7 md:flex-row md:items-center">
                    <div className="max-w-[520px]">
                        <p className="text-[16px] font-medium text-text-primary">
                            Not sure how much of your website actually needs changing?
                        </p>

                        <p className="mt-2 text-[14px] leading-6 text-text-secondary">
                            We can look at what&apos;s getting in the way before you decide how far
                            the redesign needs to go.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-5">
                        <a
                            href="/website-check"
                            className="inline-flex items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                        >
                            Get a website check
                            <span className="ml-3">→</span>
                        </a>

                        <a
                            href="/contact"
                            className="group inline-flex items-center text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                        >
                            Discuss a redesign
                            <span className="ml-2 transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ApproachStep({
    label,
    title,
    description,
    width,
    active = false,
}: {
    label: string;
    title: string;
    description: string;
    width: string;
    active?: boolean;
}) {
    return (
        <div className={width}>
            <div className="flex items-center gap-4">
                <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${active ? "text-primary" : "text-text-muted"
                        }`}
                >
                    {label}
                </p>

                <span
                    className={`h-px flex-1 ${active ? "bg-primary" : "bg-border"
                        }`}
                />
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
                <h3 className="text-[clamp(1.5rem,2.3vw,2.15rem)] font-medium leading-[1.1] tracking-[-0.03em] text-text-primary">
                    {title}
                </h3>

                <p className="max-w-[460px] text-[14px] leading-6 text-text-secondary">
                    {description}
                </p>
            </div>
        </div>
    );
}