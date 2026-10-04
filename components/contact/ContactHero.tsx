const signals = [
    "Websites & web apps",
    "Website improvements",
    "White-label development",
];

export default function ContactHero() {
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
                                Contact Owlixir
                            </p>
                        </div>

                        <h1 className="max-w-[850px] text-[clamp(3rem,5.5vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-text-primary">
                            Tell us what you want to{" "}
                            <span className="text-primary">
                                build or improve.
                            </span>
                        </h1>
                    </div>

                    {/* Introduction */}
                    <div>
                        <p className="max-w-[600px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Whether you need a new website, improvements to an
                            existing one, SEO or development help for a client
                            project, tell us what you are working on and where you
                            need help.
                        </p>

                        <p className="mt-5 max-w-[600px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                            You do not need a finished brief. A clear description of
                            the business, the problem and what you would like to
                            achieve is enough to start.
                        </p>
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