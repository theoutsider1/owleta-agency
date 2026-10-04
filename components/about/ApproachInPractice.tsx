import Link from "next/link";

const projects = [
    {
        number: "01",
        type: "Local service business",
        title: "Bournemouth locksmith",
        description:
            "A website shaped around clearer services, focused local coverage and a more direct journey towards customer enquiry.",
        focus: "Structure · Local relevance · Measurement",
        href: "/work/bournemouth-locksmith",
    },
    {
        number: "02",
        type: "Language education",
        title: "German Language Centre",
        description:
            "An Arabic-first website focused on clearer content organisation, right-to-left usability and a simpler journey for learners.",
        focus: "Content · RTL experience · User journey",
        href: "/work/german-language-centre",
    },
];

export default function ApproachInPractice() {
    return (
        <section className="section-space">
            <div className="site-container">
                {/* Introduction */}
                <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                In practice
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            The approach changes with{" "}
                            <span className="text-primary">
                                the problem.
                            </span>
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Different businesses need different things from their
                            websites. The principles stay consistent, but the
                            decisions should respond to the audience, the business
                            and the problem being solved.
                        </p>
                    </div>
                </div>

                {/* Projects */}
                <div className="mt-14 border-t border-border">
                    {projects.map((project) => (
                        <Link
                            key={project.number}
                            href={project.href}
                            className="group grid cursor-pointer gap-5 border-b border-border py-8 md:grid-cols-[70px_0.8fr_1.2fr] md:gap-8 lg:py-9"
                        >
                            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                {project.number}
                            </span>

                            <div>
                                <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                    {project.type}
                                </p>

                                <h3 className="mt-2 text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary transition-colors group-hover:text-primary">
                                    {project.title}
                                </h3>

                                <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                    {project.focus}
                                </p>
                            </div>

                            <div className="flex items-start justify-between gap-8">
                                <p className="max-w-[540px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                    {project.description}
                                </p>

                                <span
                                    aria-hidden="true"
                                    className="shrink-0 text-[18px] text-text-muted transition-[transform,color] group-hover:translate-x-1 group-hover:text-primary"
                                >
                                    →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <Link
                    href="/work"
                    className="group mt-7 inline-flex w-fit cursor-pointer items-center text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                >
                    Explore selected work

                    <span
                        aria-hidden="true"
                        className="ml-2 transition-transform group-hover:translate-x-1"
                    >
                        →
                    </span>
                </Link>
            </div>
        </section>
    );
}