import Link from "next/link";

export default function RedesignApproach() {
    return (
        <section className="section-space overflow-hidden border-t border-border">
            <div className="site-container">
                {/* Intro */}
                <div className="max-w-[850px]">
                    <div className="mb-6 flex items-center gap-3">
                        <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-primary"
                        />

                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                            Decide what actually needs to change
                        </p>
                    </div>

                    <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                        Redesigning your website doesn&apos;t mean{" "}
                        <span className="text-primary">
                            replacing everything.
                        </span>
                    </h2>

                    <p className="mt-7 max-w-[680px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                        We look at the existing website first, then decide where the value
                        is in keeping what works, improving what can work harder and
                        rebuilding what needs a stronger foundation.
                    </p>
                </div>

                {/* Keep */}
                <div className="mt-14 md:mt-16">
                    <ApproachStep
                        label="Keep"
                        title="Protect what is already doing its job."
                        description="Useful content, valuable pages, familiar customer routes and existing search value can remain part of the website."
                        width="md:w-[58%]"
                    />
                </div>

                {/* Improve */}
                <div className="mt-12 md:ml-[21%] md:mt-14">
                    <ApproachStep
                        label="Improve"
                        title="Make the useful parts work harder."
                        description="Structure, mobile experience, content and conversion paths can often be improved without rebuilding everything underneath."
                        width="md:w-[62%]"
                        active
                    />
                </div>

                {/* Rebuild */}
                <div className="mt-12 md:ml-[47%] md:mt-14">
                    <ApproachStep
                        label="Rebuild"
                        title="Replace what limits what comes next."
                        description="When the structure, functionality or underlying technology is creating the problem, those parts may need to be rebuilt properly."
                        width="md:w-full"
                    />
                </div>

                {/* Scope signal */}
                <div className="mt-14 md:mt-16">
                    <div
                        aria-hidden="true"
                        className="relative flex items-center"
                    >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full border border-text-muted" />
                        <span className="h-px flex-1 bg-border" />
                        <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span className="h-px flex-1 bg-border" />
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full border border-text-muted" />
                    </div>

                    <div className="mt-4 grid grid-cols-3">
                        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-text-muted">
                            Keep
                        </p>

                        <p className="text-center text-[10px] font-medium uppercase tracking-[0.15em] text-primary">
                            Scope follows the problem
                        </p>

                        <p className="text-right text-[10px] font-medium uppercase tracking-[0.15em] text-text-muted">
                            Rebuild
                        </p>
                    </div>
                </div>

                {/* Action */}
                <div className="mt-10 flex flex-col justify-between gap-8 pt-7 md:flex-row md:items-end">
                    <div className="max-w-[520px]">
                        <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                            Not sure how much of your website actually needs changing?
                        </h3>

                        <p className="mt-3 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                            We can look at what&apos;s getting in the way before you decide
                            how far the redesign needs to go.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-5">
                        <Link
                            href="/services/website-audit/?service=check#request"
                            className="inline-flex cursor-pointer items-center justify-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                        >
                            Get a website check
                        </Link>

                        <Link
                            href="/contact"
                            className="group inline-flex cursor-pointer items-center gap-2 text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                        >
                            Discuss a redesign

                            <span
                                aria-hidden="true"
                                className="transition-transform group-hover:translate-x-1"
                            >
                                →
                            </span>
                        </Link>
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
                    className={`text-[11px] font-medium uppercase tracking-[0.18em] ${active ? "text-primary" : "text-text-muted"
                        }`}
                >
                    {label}
                </p>

                <span
                    aria-hidden="true"
                    className={`h-px flex-1 ${active ? "bg-primary" : "bg-border"
                        }`}
                />
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
                <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                    {title}
                </h3>

                <p className="max-w-[460px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                    {description}
                </p>
            </div>
        </div>
    );
}