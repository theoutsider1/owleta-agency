import Link from "next/link";

const checks = [
    {
        number: "01",
        title: "Customer journey",
    },
    {
        number: "02",
        title: "Mobile experience",
    },
    {
        number: "03",
        title: "Search visibility",
    },
    {
        number: "04",
        title: "Technical health",
    },
];

export default function WebsiteCheck() {
    return (
        <section
            id="website-check"
            className="relative overflow-hidden py-20 md:py-24 lg:py-28"
        >
            <div className="site-container">
                {/* Intro */}
                <div className="mx-auto max-w-[850px] text-center">
                    <div className="mb-6 flex items-center justify-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                            Website check
                        </p>
                    </div>

                    <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.05em]">
                        Before changing anything,
                        <br />
                        find out what&apos;s{" "}
                        <span className="text-white/65">getting in the way.</span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-[610px] text-[16px] leading-7 text-text-secondary md:text-[17px]">
                        Not every website needs rebuilding. Sometimes a few specific
                        problems are making it harder for people to find you, understand
                        what you offer or get in touch.
                    </p>
                </div>

                {/* Desktop diagnostic path */}
                <div className="mx-auto mt-16 hidden max-w-[1080px] md:block">
                    <div className="relative">
                        {/* Horizontal line */}
                        <div className="absolute left-[12.5%] right-[12.5%] top-[55px] h-px bg-white/15" />

                        <div className="relative grid grid-cols-4">
                            {checks.map((check) => (
                                <div key={check.number} className="text-center">
                                    <span className="font-mono text-[11px] text-text-muted">
                                        {check.number}
                                    </span>

                                    <div className="mt-4 flex h-[15px] items-center justify-center">
                                        <span className="relative z-10 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-white/15 bg-background">
                                            <span className="h-[5px] w-[5px] rounded-full bg-white/45 transition-colors duration-300" />
                                        </span>
                                    </div>

                                    <p className="mt-5 text-[16px] font-medium text-text-secondary md:text-[17px]">
                                        {check.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Convergence */}
                    <div className="relative mx-auto mt-8 flex w-px flex-col items-center">
                        <div className="h-10 w-px bg-gradient-to-b from-white/15 to-primary/60" />

                        <div className="flex h-[15px] w-[15px] items-center justify-center rounded-full border border-primary/40">
                            <span className="h-[5px] w-[5px] rounded-full bg-primary" />
                        </div>

                        <div className="h-7 w-px bg-gradient-to-b from-primary/60 to-primary/10" />
                    </div>
                </div>

                {/* Mobile diagnostic path */}
                <div className="mx-auto mt-12 max-w-[420px] md:hidden">
                    {checks.map((check, index) => (
                        <div
                            key={check.number}
                            className="grid grid-cols-[30px_1fr] gap-4"
                        >
                            <div className="flex flex-col items-center">
                                <span className="flex h-[13px] w-[13px] items-center justify-center rounded-full border border-white/15">
                                    <span className="h-[4px] w-[4px] rounded-full bg-white/45" />
                                </span>

                                {index !== checks.length - 1 && (
                                    <span className="h-10 w-px bg-white/15" />
                                )}
                            </div>

                            <div className="-mt-1">
                                <span className="mt-1 text-[16px] font-medium text-text-secondary">
                                    {check.number}
                                </span>

                                <p className="mt-1 text-[14px] font-medium text-text-secondary">
                                    {check.title}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Transition from diagnostic path into centred result */}
                    <div className="grid grid-cols-[30px_1fr]">
                        <div className="flex justify-center">
                            <div className="h-8 w-px bg-white/15" />
                        </div>

                        <div />
                    </div>

                    <div className="relative h-10">
                        <div className="absolute left-[15px] right-1/2 top-0 h-px bg-gradient-to-r from-white/15 to-primary/50" />

                        <div className="absolute left-1/2 top-0 h-7 w-px -translate-x-1/2 bg-gradient-to-b from-primary/50 to-primary" />

                        <div className="absolute left-1/2 top-7 flex h-[13px] w-[13px] -translate-x-1/2 items-center justify-center rounded-full border border-primary/40">
                            <span className="h-[4px] w-[4px] rounded-full bg-primary" />
                        </div>
                    </div>
                </div>

                {/* Resolution */}
                <div className="mx-auto max-w-[650px] text-center">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                        Focused initial review
                    </p>

                    <h3 className="mt-4 text-[clamp(1.65rem,2.5vw,2.3rem)] font-medium leading-[1.12] tracking-[-0.035em]">
                        Find the friction before deciding
                        <br className="hidden sm:block" /> what to change.
                    </h3>

                    <p className="mx-auto mt-5 max-w-[580px] text-[16px] leading-7 text-text-secondary md:text-[17px]">
                        We&apos;ll look for obvious issues affecting how people find,
                        understand and contact your business. Then we'll explain what's worth addressing first.
                    </p>

                    <div className="mt-7 flex flex-col items-center justify-center gap-5 sm:flex-row">
                        <a
                            href="#website-check-form"
                            className="inline-flex items-center rounded-[9px] bg-primary px-6 py-3.5 text-[15px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                        >
                            Get a website check
                            <span className="ml-3">→</span>
                        </a>

                        <Link
                            href="/website-audit"
                            className="group inline-flex items-center text-[13px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                        >
                            Explore website audits
                            <span className="ml-2 transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </div>

                    <p className="mx-auto mt-5 max-w-[520px] text-[13px] leading-5 text-text-muted md:text-[14px]">
                        This is a focused first look at your website, not an automated score or a full technical audit.
                    </p>
                </div>
            </div>
        </section>
    );
}