const problems = [
    {
        number: "01",
        title: "The business has moved on.",
        description:
            "Your services, positioning or customers have changed, but the website still represents an older version of the business.",
    },
    {
        number: "02",
        title: "Customers have to work too hard.",
        description:
            "Important information is difficult to find, the journey feels unclear or taking the next step involves unnecessary friction.",
    },
    {
        number: "03",
        title: "The website is difficult to improve.",
        description:
            "Adding content, changing pages or introducing new functionality has become harder than it should be.",
    },
    {
        number: "04",
        title: "Search visibility has become an afterthought.",
        description:
            "The structure and content no longer give important services and pages a strong foundation for being found.",
    },
];

export default function RedesignProblems() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
                    {/* Intro */}
                    <div className="max-w-[560px]">
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                When a website needs attention
                            </p>
                        </div>

                        <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            A website doesn&apos;t have to look broken to{" "}
                            <span className="text-primary">
                                hold your business back.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-[510px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Sometimes the problem is obvious. Often it is a collection of
                            smaller issues that have built up as the business, the website
                            and customer expectations have changed.
                        </p>
                    </div>

                    {/* Problems */}
                    <div className="border-t border-border">
                        {problems.map((problem) => (
                            <div
                                key={problem.number}
                                className="grid gap-4 border-b border-border py-7 sm:grid-cols-[52px_1fr] sm:gap-6 md:py-8"
                            >
                                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-primary">
                                    {problem.number}
                                </span>

                                <div className="grid gap-3 md:grid-cols-[0.8fr_1.2fr] md:gap-8">
                                    <h3 className="max-w-[280px] text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                        {problem.title}
                                    </h3>

                                    <p className="max-w-[440px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        {problem.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}