const improvements = [
    {
        number: "01",
        label: "Content structure",
        title: "A clearer hierarchy for the centre's information",
        description:
            "Content was organised into a more deliberate structure so learners could move through the website without important information becoming buried or difficult to follow.",
    },
    {
        number: "02",
        label: "Arabic experience",
        title: "An interface shaped around the audience",
        description:
            "The website was designed with Arabic content and right-to-left reading in mind, allowing the experience to feel natural for the learners it was intended to serve.",
    },
    {
        number: "03",
        label: "User journey",
        title: "Clearer routes through the website",
        description:
            "Navigation and page hierarchy were kept focused so visitors could understand where they were, explore relevant information and move towards the next step more easily.",
    },
    {
        number: "04",
        label: "Responsive design",
        title: "A consistent experience across screen sizes",
        description:
            "Layouts were designed to adapt across desktop and mobile so the content remained readable, structured and easy to navigate on different devices.",
    },
];

export default function GermanLanguageSolution() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                {/* Introduction */}
                <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                What we changed
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Shape the experience around{" "}
                            <span className="text-primary">the people using it.</span>
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            The website was approached around the needs of its audience,
                            combining clearer content organisation with an interface suited
                            to Arabic-speaking learners and the way they move through the
                            site.
                        </p>
                    </div>
                </div>

                {/* Improvements */}
                <div className="mt-14 border-t border-border">
                    {improvements.map((item) => (
                        <div
                            key={item.number}
                            className="grid gap-4 border-b border-border py-7 md:grid-cols-[70px_0.75fr_1.25fr] md:items-start md:gap-8 lg:py-8"
                        >
                            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                {item.number}
                            </span>

                            <div>
                                <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                    {item.label}
                                </p>

                                <h3 className="mt-2 max-w-[340px] text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                    {item.title}
                                </h3>
                            </div>

                            <p className="max-w-[560px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}