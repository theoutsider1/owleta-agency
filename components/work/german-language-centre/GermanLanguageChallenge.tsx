import Image from "next/image";

const challenges = [
    {
        number: "01",
        title: "Organise the information more clearly",
        description:
            "The website needed to present the centre's information in a structure that made important content easier for learners to find and understand.",
    },
    {
        number: "02",
        title: "Design around an Arabic-speaking audience",
        description:
            "The experience needed to support Arabic content naturally, with the layout and content hierarchy working for the audience rather than simply adapting an existing structure.",
    },
    {
        number: "03",
        title: "Create a simpler journey for learners",
        description:
            "Visitors needed a clearer route through the website so they could explore the centre, understand the available information and know where to go next.",
    },
];

export default function GermanLanguageChallenge() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                {/* Introduction */}
                <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                The challenge
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Make the information{" "}
                            <span className="text-primary">
                                easier to explore.
                            </span>
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            A language centre can have a lot to communicate, but learners
                            should not have to work through a complicated website to find
                            what matters to them. The challenge was to create a clearer
                            experience around the centre&apos;s content and audience.
                        </p>
                    </div>
                </div>

                {/* Challenge body */}
                <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
                    {/* Project visual */}
                    <div>
                        <div className="flex items-center justify-between border-b border-border pb-3">
                            <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                Website
                            </span>

                            <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                Arabic experience
                            </span>
                        </div>

                        <Image
                            src="/work/german-language-centre.webp"
                            alt="German Language Centre Arabic website"
                            width={1600}
                            height={900}
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="mt-4 h-auto w-full"
                        />
                    </div>

                    {/* Challenges */}
                    <div className="border-t border-border">
                        {challenges.map((challenge) => (
                            <div
                                key={challenge.number}
                                className="grid grid-cols-[38px_1fr] gap-4 border-b border-border py-6 first:pt-5"
                            >
                                <span className="pt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                    {challenge.number}
                                </span>

                                <div>
                                    <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                        {challenge.title}
                                    </h3>

                                    <p className="mt-2 max-w-[520px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        {challenge.description}
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