import Link from "next/link";

export default function WorkHero() {
    return (
        <section className="section-space pt-32 md:pt-40">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-20">
                    {/* Main */}
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Selected work
                            </p>
                        </div>

                        <h1 className="max-w-[850px] text-[clamp(3rem,5.5vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-text-primary">
                            Websites built around{" "}
                            <span className="text-primary">
                                real business needs.
                            </span>
                        </h1>
                    </div>

                    {/* Supporting */}
                    <div className="lg:pb-1">
                        <p className="max-w-[560px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            A selection of website projects showing the thinking,
                            design and development behind the work, from local service
                            businesses to audience-specific digital experiences.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-5">
                            {[
                                "Web design",
                                "Development",
                                "SEO foundations",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Work index */}
                <div className="mt-16 border-y border-border py-5">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                        <span>Selected projects</span>

                        <span aria-hidden="true">→</span>

                        <Link
                            href="/work/bournemouth-locksmith"
                            className="cursor-pointer text-text-secondary transition-colors hover:text-primary"
                        >
                            Bournemouth locksmith
                        </Link>

                        <span aria-hidden="true">·</span>

                        <Link
                            href="/work/german-language-centre"
                            className="cursor-pointer text-text-secondary transition-colors hover:text-primary"
                        >
                            German Language Centre
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}