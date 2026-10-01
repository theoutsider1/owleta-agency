import Link from "next/link";

const details = [
    {
        label: "Based in",
        value: "Morocco",
    },
    {
        label: "Working with",
        value: "UK & international businesses",
    },
    {
        label: "Partnerships",
        value: "White-label development",
    },
    {
        label: "Focus",
        value: "Websites · Web apps · SEO · Improvement",
    },
];

export default function BehindOwlixir() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                {/* Introduction */}
                <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Behind Owlixir
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Hi, I&apos;m Hatim, the web developer{" "}
                            <span className="text-primary">behind Owlixir.</span>
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            I started Owlixir as an independent web studio built around a
                            simple idea: a business website should have a purpose beyond
                            looking good. It should help people understand the business,
                            find what they need and take the next step.
                        </p>
                    </div>
                </div>

                {/* Personal story */}
                <div className="mt-14 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    {/* Identity */}
                    <div>
                        <div className="border-t border-border pt-5">
                            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                Hatim Tagmi
                            </p>

                            <p className="mt-2 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                Web developer & founder of Owlixir
                            </p>
                        </div>

                        <div className="mt-7 border-t border-border">
                            {details.map((detail) => (
                                <div
                                    key={detail.label}
                                    className="grid grid-cols-[100px_1fr] gap-5 border-b border-border py-4"
                                >
                                    <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                        {detail.label}
                                    </span>

                                    <span className="text-[14px] font-medium text-text-primary">
                                        {detail.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Story */}
                    <div>
                        <div className="max-w-[650px] space-y-5 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                            <p>
                                My work sits between design, development and search. That means
                                I&apos;m not only thinking about how a page looks, but how it
                                is structured, how someone moves through it and whether the
                                foundations support what the business wants to achieve.
                            </p>

                            <p>
                                Through Owlixir, we bring that thinking into website projects,
                                improvements and ongoing work, keeping the process focused on
                                useful decisions rather than adding complexity for its own
                                sake.
                            </p>
                        </div>

                        <Link
                            href="/work"
                            className="group mt-7 inline-flex items-center text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                        >
                            Explore selected work
                            <span className="ml-2 transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}