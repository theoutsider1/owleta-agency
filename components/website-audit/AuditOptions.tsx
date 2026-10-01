import Link from "next/link";

const checkIncludes = [
    "Human review of your website",
    "Focused first look",
    "High-level issue or opportunity",
    "No obligation",
];

const auditIncludes = [
    "Deeper structured investigation",
    "Evidence and context",
    "Prioritised findings",
    "Recommended actions",
    "Detailed PDF report",
];

export default function AuditOptions() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                {/* Intro */}
                <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Two ways to start
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Not every website needs a{" "}
                            <span className="text-primary">full audit.</span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-[620px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            If you simply want to know whether something important may be
                            getting in the way, start with a free website check. If you need
                            a deeper investigation and documented recommendations, choose a
                            website audit.
                        </p>
                    </div>
                </div>

                {/* Options */}
                <div className="mt-14 grid border-y border-border lg:grid-cols-2">
                    {/* Free check */}
                    <div className="py-8 lg:border-r lg:border-border lg:py-10 lg:pr-12">
                        <div className="flex items-center justify-between gap-4">
                            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-text-muted">
                                Free website check
                            </p>

                            <span className="rounded-full border border-border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-text-muted">
                                Free
                            </span>
                        </div>

                        <h3 className="mt-6 max-w-[470px] text-[30px] font-semibold leading-[1.05] tracking-[-0.04em] text-text-primary">
                            Is there something worth your attention?
                        </h3>

                        <p className="mt-5 max-w-[520px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                            A focused human review designed to spot whether there is a
                            meaningful issue or opportunity worth looking into further.
                        </p>

                        <div className="mt-8 border-t border-border">
                            {checkIncludes.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 border-b border-border py-3.5"
                                >
                                    <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />

                                    <span className="text-[14px] font-medium text-text-secondary">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <p className="mt-6 text-[13px] leading-5 text-text-muted">
                            This is a first look, not a comprehensive audit or detailed
                            technical report.
                        </p>

                        <Link
                            href="?service=check#request"
                            className="group mt-7 inline-flex items-center text-[14px] font-medium text-text-primary transition-colors hover:text-primary"
                        >
                            Request a free website check
                            <span className="ml-2 transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </div>

                    {/* Paid audit */}
                    <div className="border-t border-border py-8 lg:border-t-0 lg:py-10 lg:pl-12">
                        <div className="flex items-center justify-between gap-4">
                            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
                                Website audit
                            </p>

                            <span className="rounded-full border border-primary/30 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-primary">
                                Quoted
                            </span>
                        </div>

                        <h3 className="mt-6 max-w-[470px] text-[30px] font-semibold leading-[1.05] tracking-[-0.04em] text-text-primary">
                            What is happening, and what should you do next?
                        </h3>

                        <p className="mt-5 max-w-[520px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                            A deeper professional investigation for businesses that need
                            documented findings, evidence, priorities and recommended
                            actions.
                        </p>

                        <div className="mt-8 border-t border-border">
                            {auditIncludes.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 border-b border-border py-3.5"
                                >
                                    <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />

                                    <span className="text-[14px] font-medium text-text-secondary">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <p className="mt-6 text-[13px] leading-5 text-text-muted">
                            Scope and price are confirmed before the audit begins.
                        </p>

                        <Link
                            href="?service=audit#request"
                            className="mt-7 inline-flex items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                        >
                            Request a website audit
                            <span className="ml-3">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}