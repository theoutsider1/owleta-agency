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
                    <div>
                        <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-[#ff5a1f]">
                            More than a good-looking website
                        </p>

                        <h2 className="max-w-xl text-[clamp(2.5rem,4vw,4.2rem)] font-medium leading-[0.98] tracking-[-0.045em] text-white">
                            A website has more than one job to do.
                        </h2>

                        <p className="mt-7 max-w-lg text-base leading-7 text-white/60 md:text-[17px]">
                            It needs to explain what you do, help the right people find what
                            they need and make the next step feel obvious. If any part of
                            that journey is unclear, even a polished website can struggle to
                            support the business behind it.
                        </p>
                    </div>

                    <div className="lg:pt-2">
                        <div className="border-t border-white/[0.1]">
                            {principles.map((principle) => (
                                <div
                                    key={principle.number}
                                    className="grid gap-4 border-b border-white/[0.1] py-7 md:grid-cols-[56px_0.7fr_1.3fr] md:items-start md:gap-6 md:py-8"
                                >
                                    <span className="text-xs font-medium text-[#ff5a1f]">
                                        {principle.number}
                                    </span>

                                    <h3 className="text-xl font-medium tracking-[-0.02em] text-white md:text-[22px]">
                                        {principle.title}
                                    </h3>

                                    <p className="max-w-md text-base leading-7 text-white/55">
                                        {principle.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex gap-4 md:mt-12">
                            <span
                                aria-hidden="true"
                                className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-[#ff5a1f]"
                            />

                            <p className="max-w-xl text-xl font-medium leading-8 tracking-[-0.02em] text-white md:text-[22px]">
                                That is why we start with what the website needs to achieve,
                                not how it should look.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}