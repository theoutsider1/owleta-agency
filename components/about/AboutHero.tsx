import Link from "next/link";

const signals = [
    "Web design",
    "SEO foundations",
    "Website improvement",
];

export default function AboutHero() {
    return (
        <section className="section-space pt-32 md:pt-40">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-20">
                    {/* Heading */}
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                About Owlixir
                            </p>
                        </div>

                        <h1 className="max-w-[850px] text-[clamp(3rem,5.5vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-text-primary">
                            Websites built with a reason{" "}
                            <span className="text-primary">
                                behind every decision.
                            </span>
                        </h1>
                    </div>

                    {/* Introduction */}
                    <div>
                        <p className="max-w-[600px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Owlixir is an independent web studio helping UK and
                            international businesses build, improve and optimise
                            websites around what actually matters: being found,
                            earning trust and turning more visitors into enquiries.
                        </p>

                        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                            <Link
                                href="/contact"
                                className="inline-flex cursor-pointer items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                Start a project
                            </Link>

                            <Link
                                href="/work"
                                className="group inline-flex cursor-pointer items-center text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                            >
                                See our work

                                <span
                                    aria-hidden="true"
                                    className="ml-2 transition-transform group-hover:translate-x-1"
                                >
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Signals */}
                <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-y border-border py-5">
                    {signals.map((signal) => (
                        <span
                            key={signal}
                            className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted"
                        >
                            {signal}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}