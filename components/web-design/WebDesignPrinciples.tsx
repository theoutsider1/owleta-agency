const principles = [
    {
        number: "01",
        title: "Clear message",
        description:
            "Visitors should quickly understand what you offer, who it is for and why they should keep looking.",
    },
    {
        number: "02",
        title: "Easy journey",
        description:
            "Important information should be easy to find on every screen, without making people work for it.",
    },
    {
        number: "03",
        title: "Clear next step",
        description:
            "Calling, enquiring, booking or requesting a quote should feel like a natural part of the journey.",
    },
    {
        number: "04",
        title: "Strong foundation",
        description:
            "Performance, responsive behaviour, search foundations and measurement should be considered from the beginning.",
    },
];

export default function WebDesignPrinciples() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-28">
                    {/* Introduction */}
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                More than a good-looking website
                            </p>
                        </div>

                        <h2 className="max-w-xl text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            A website has more than{" "}
                            <span className="text-primary">one job to do.</span>
                        </h2>

                        <p className="mt-7 max-w-lg text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            It needs to explain what you do, help the right people find
                            what they need and make the next step feel obvious. If any
                            part of that journey is unclear, even a polished website can
                            struggle to support the business behind it.
                        </p>
                    </div>

                    {/* Principles */}
                    <div className="lg:pt-2">
                        <div className="border-t border-border">
                            {principles.map((principle) => (
                                <div
                                    key={principle.number}
                                    className="grid gap-4 border-b border-border py-7 md:grid-cols-[56px_0.7fr_1.3fr] md:items-start md:gap-6 md:py-8"
                                >
                                    <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-primary">
                                        {principle.number}
                                    </span>

                                    <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                        {principle.title}
                                    </h3>

                                    <p className="max-w-md text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        {principle.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Takeaway */}
                        <div className="relative mt-10 py-8 pl-7 pr-7 md:mt-12 md:pl-8 md:pr-8">
                            {/* Top-left corner */}
                            <span
                                aria-hidden="true"
                                className="absolute left-0 top-0 h-8 w-px bg-primary"
                            />
                            <span
                                aria-hidden="true"
                                className="absolute left-0 top-0 h-px w-8 bg-primary"
                            />

                            {/* Bottom-right corner */}
                            <span
                                aria-hidden="true"
                                className="absolute bottom-0 right-0 h-8 w-px bg-primary"
                            />
                            <span
                                aria-hidden="true"
                                className="absolute bottom-0 right-0 h-px w-8 bg-primary"
                            />

                            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                Our approach
                            </p>

                            <p className="max-w-xl text-[17px] leading-7 text-text-secondary md:text-[18px]">
                                That is why we start with{" "}
                                <span className="font-medium text-text-primary">
                                    what the website needs to achieve
                                </span>
                                , not how it should look.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}