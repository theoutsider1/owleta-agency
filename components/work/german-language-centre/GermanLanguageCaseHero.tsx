import Link from "next/link";

const details = [
    {
        label: "Project",
        value: "Language centre website",
    },
    {
        label: "Organisation",
        value: "German Language Centre",
    },
    {
        label: "Audience",
        value: "Arabic-speaking learners",
    },
    {
        label: "Focus",
        value: "Content & user journey",
    },
];

export default function GermanLanguageCaseHero() {
    return (
        <section className="section-space pt-32 md:pt-40">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
                    {/* Heading */}
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Case study · Language education
                            </p>
                        </div>

                        <h1 className="max-w-[720px] text-[clamp(3rem,5.5vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-text-primary">
                            A clearer digital experience for{" "}
                            <span className="text-primary">language learners.</span>
                        </h1>
                    </div>

                    {/* Context */}
                    <div>
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            A website built for a German language centre to organise its
                            information more clearly, support Arabic-speaking learners and
                            make important content easier to explore.
                        </p>
                    </div>
                </div>

                {/* Project details */}
                <div className="mt-14 grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
                    {details.map((detail, index) => (
                        <div
                            key={detail.label}
                            className={`py-5 sm:px-6 lg:px-7 ${index > 0
                                    ? "border-t border-border sm:border-t-0 sm:border-l"
                                    : ""
                                } ${index === 0 ? "sm:pl-0 lg:pl-0" : ""}`}
                        >
                            <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                {detail.label}
                            </p>

                            <p className="mt-2 text-[14px] font-medium text-text-primary">
                                {detail.value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Back */}
                <Link
                    href="/work"
                    className="group mt-7 flex w-fit items-center text-[13px] font-medium text-text-muted transition-colors hover:text-text-primary"
                >
                    <span className="mr-2 transition-transform group-hover:-translate-x-1">
                        ←
                    </span>
                    All selected work
                </Link>
            </div>
        </section>
    );
}