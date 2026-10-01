import Link from "next/link";

export default function AboutCTA() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-20">
                    {/* Copy */}
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Work with Owlixir
                            </p>
                        </div>

                        <h2 className="max-w-[760px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Have something you want to{" "}
                            <span className="text-primary">build or improve?</span>
                        </h2>

                        <p className="mt-6 max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Whether you need a new website, improvements to an existing one
                            or development support for a client project, tell us what you are
                            working on and what you need help with.
                        </p>
                    </div>

                    {/* Action */}
                    <div className="lg:flex lg:justify-end">
                        <div className="w-full max-w-[420px] border-t border-border pt-6">
                            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                Tell us about your project
                            </p>

                            <Link
                                href="/contact"
                                className="mt-5 inline-flex items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                Start a project
                                <span className="ml-3">→</span>
                            </Link>

                            <div className="mt-6">
                                <Link
                                    href="/services/website-audit/?service=check#request"
                                    className="group inline-flex items-center text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                                >
                                    Not ready for a project? Get a website check
                                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}