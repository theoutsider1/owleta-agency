import Link from "next/link";
import RedesignDecision from "./RedesignDecision";

export default function WebsiteRedesignHero() {
    return (
        <section className="relative overflow-hidden border-b border-border">
            <div className="site-container">
                <div className="grid min-h-[720px] items-center gap-14 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
                    {/* Copy */}
                    <div className="max-w-[720px]">
                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Website redesign services
                            </p>
                        </div>

                        <h1 className="max-w-[720px] text-[clamp(3.4rem,5.5vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-text-primary">
                            Website redesign that fixes what&apos;s{" "}
                            <span className="text-primary">getting in the way.</span>
                        </h1>

                        <p className="mt-7 max-w-[620px] text-[17px] leading-8 text-text-secondary md:text-[18px]">
                            We redesign existing websites for UK businesses by keeping what
                            still works, improving what doesn&apos;t and rebuilding what
                            needs a stronger foundation.
                        </p>

                        <div className="mt-9 flex flex-wrap items-center gap-5">
                            <Link
                                href="/contact"
                                className="inline-flex items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                Discuss a redesign
                                <span className="ml-3">→</span>
                            </Link>

                            <Link
                                href="/website-check"
                                className="group inline-flex items-center text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                            >
                                Get a website check
                                <span className="ml-2 transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-5">
                            <Signal>Keep what works</Signal>
                            <Signal>Fix the friction</Signal>
                            <Signal>Rebuild what needs it</Signal>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="lg:pl-4">
                        <RedesignDecision />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Signal({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-primary" />
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-text-muted">
                {children}
            </span>
        </div>
    );
}