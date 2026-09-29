import Link from "next/link";

const improvements = [
    "Local search structure",
    "Mobile enquiry journey",
    "Technical SEO",
    "Conversion measurement",
];

const measurements = [
    "Search visibility",
    "Organic clicks",
    "Calls",
    "Contact enquiries",
];

export default function FeaturedCaseStudy() {
    return (
        <section className="relative py-20 md:py-24 lg:py-28">
            <div className="site-container">
                {/* Intro */}
                <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Featured case study
                            </p>
                        </div>

                        <h2 className="max-w-[680px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.05em]">
                            Turning a local locksmith
                            <br />
                            website into a{" "}
                            <span className="text-white/65">
                                measurable customer journey.
                            </span>
                        </h2>
                    </div>

                    <div className="max-w-[500px] lg:justify-self-end">
                        <p className="text-[16px] leading-7 text-text-secondary md:text-[17px]">
                            For a locksmith serving Bournemouth, Poole and Christchurch,
                            the website needed to do more than explain the services. It
                            needed to help local customers find the right page, take action
                            quickly and make those actions measurable.
                        </p>

                        <Link
                            href="/work/lock-key-locksmiths"
                            className="group mt-6 inline-flex items-center text-[14px] font-medium text-text-primary"
                        >
                            View full case study
                            <span className="ml-2 transition-transform group-hover:translate-x-1">
                                ↗
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Case study surface */}
                <div className="mt-12 overflow-hidden rounded-[20px] border border-border-strong bg-surface md:mt-16">
                    {/* Top metadata */}
                    <div className="flex flex-col gap-4 border-b border-border px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
                        <div className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-primary" />

                            <span className="text-[12px] font-medium text-text-primary">
                                Lock Key Locksmiths
                            </span>
                        </div>

                        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
                            Bournemouth · Poole · Christchurch
                        </span>
                    </div>

                    <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
                        {/* Project context */}
                        <div className="border-b border-border p-6 md:p-7 lg:border-b-0 lg:border-r lg:p-8">
                            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                                The challenge
                            </p>

                            <p className="mt-5 max-w-[390px] text-[22px] font-medium leading-[1.3] tracking-[-0.025em] md:text-[25px]">
                                Make it easier for people searching locally to reach the right
                                service and take the next step.
                            </p>

                            <div className="mt-8 border-t border-border pt-6">
                                <p className="text-[11px] uppercase tracking-[0.15em] text-text-muted">
                                    What changed
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {improvements.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-border-strong px-3 py-1.5 text-[11px] text-text-secondary"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Customer journey */}
                        <div className="p-6 md:p-7 lg:p-8">
                            <div className="flex items-center justify-between">
                                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
                                    Customer journey
                                </p>

                                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-text-subtle">
                                    Search → Action
                                </span>
                            </div>

                            {/* Journey */}
                            <div className="mt-9">
                                <JourneyStep
                                    number="01"
                                    title="Local search"
                                    description="A customer searches for a locksmith in the area."
                                />

                                <JourneyConnector />

                                <JourneyStep
                                    number="02"
                                    title="Relevant service"
                                    description="The website connects the search with the right service and location."
                                />

                                <JourneyConnector />

                                <JourneyStep
                                    number="03"
                                    title="Clear next step"
                                    description="Mobile visitors can quickly call or move towards an enquiry."
                                />

                                <JourneyConnector active />

                                <JourneyStep
                                    number="04"
                                    title="Measured action"
                                    description="Key interactions can be tracked instead of relying on guesswork."
                                    active
                                />
                            </div>

                            {/* Measurement */}
                            <div className="mt-9 border-t border-border pt-6">
                                <div className="grid gap-5 md:grid-cols-[0.65fr_1.35fr]">
                                    <div>
                                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                                            What we&apos;re measuring
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                                        {measurements.map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center gap-3 text-[12px] text-text-secondary"
                                            >
                                                <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function JourneyStep({
    number,
    title,
    description,
    active = false,
}: {
    number: string;
    title: string;
    description: string;
    active?: boolean;
}) {
    return (
        <div className="grid grid-cols-[34px_1fr] gap-4 md:grid-cols-[42px_0.6fr_1fr] md:items-center md:gap-6">
            <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border font-mono text-[9px] ${active
                    ? "border-[var(--primary-border)] bg-[var(--primary-soft)] text-primary"
                    : "border-border-strong text-text-muted"
                    }`}
            >
                {number}
            </div>

            <p
                className={`text-[15px] font-medium ${active ? "text-text-primary" : "text-text-secondary"
                    }`}
            >
                {title}
            </p>

            <p className="col-start-2 text-[13px] leading-5 text-text-muted md:col-start-auto">
                {description}
            </p>
        </div>
    );
}

function JourneyConnector({ active = false }: { active?: boolean }) {
    return (
        <div className="ml-[15px] h-6 md:ml-[15px]">
            <div
                className={`h-full w-px ${active
                    ? "bg-gradient-to-b from-border-strong to-primary/60"
                    : "bg-border-strong"
                    }`}
            />
        </div>
    );
}