const process = [
    {
        label: "Understand",
        description:
            "Your business, customers and what the website needs to achieve.",
    },
    {
        label: "Identify",
        description:
            "The opportunities or problems that deserve attention first.",
    },
    {
        label: "Improve",
        description:
            "Build, redesign or refine what will make the biggest difference.",
    },
    {
        label: "Measure",
        description:
            "Use real signals to learn what is working and what comes next.",
    },
];

export default function ProcessSection() {
    return (
        <section className="relative overflow-hidden py-20 md:py-24 lg:py-28">
            <div className="site-container">
                <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-24">            {/* Content */}
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                How we work
                            </p>
                        </div>

                        <h2 className="max-w-[590px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.05em]">
                            Understand first.
                            <br />
                            <span className="text-white/65">Build second.</span>
                        </h2>

                        <p className="mt-8 max-w-[520px] text-[16px] leading-7 text-text-secondary md:text-[17px]">
                            We start by understanding what the business and its customers
                            actually need. From there, we identify what matters, improve it
                            and use real signals to guide what comes next.
                        </p>

                        <p className="mt-6 max-w-[500px] text-[15px] leading-7 text-text-muted md:text-[16px]">
                            The same approach works whether we are building something new,
                            improving an existing website or supporting it over time.
                        </p>
                    </div>

                    {/* Desktop process loop */}
                    <div className="mx-auto hidden w-full max-w-[650px] md:block lg:-mt-5">                        <div className="relative aspect-[1.3/1]">
                        {/* Loop */}
                        <div className="absolute inset-[15%] rounded-[50%] border border-white/15" />

                        {/* Direction markers */}
                        <DirectionMarker className="left-[72%] top-[18%] rotate-[42deg]" />
                        <DirectionMarker className="bottom-[24%] right-[17%] rotate-[132deg]" />
                        <DirectionMarker className="bottom-[17%] left-[25%] rotate-[222deg]" />
                        <DirectionMarker className="left-[17%] top-[27%] rotate-[312deg]" />

                        {/* Understand */}
                        <ProcessPoint
                            className="left-1/2 top-[4%] -translate-x-1/2"
                            {...process[0]}
                        />

                        {/* Identify */}
                        <ProcessPoint
                            className="right-0 top-1/2 -translate-y-1/2"
                            {...process[1]}
                        />

                        {/* Improve */}
                        <ProcessPoint
                            className="bottom-[2%] left-1/2 -translate-x-1/2"
                            {...process[2]}
                        />

                        {/* Measure */}
                        <ProcessPoint
                            className="left-0 top-1/2 -translate-y-1/2"
                            {...process[3]}
                        />

                        {/* Centre */}
                        <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--primary-border)] bg-[var(--primary-soft)] md:h-28 md:w-28">
                            <div className="text-center">
                                <span className="mx-auto block h-1.5 w-1.5 rounded-full bg-primary" />

                                <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-text-secondary">
                                    Keep
                                    <br />
                                    improving
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* Mobile process */}
                    <div className="mx-auto w-full max-w-[420px] md:hidden">
                        <div className="relative">
                            {/* Continuous line */}
                            <div className="absolute bottom-0 left-[15px] top-0 w-px bg-white/15" />

                            <div className="space-y-10">
                                {process.map((item) => (
                                    <div
                                        key={item.label}
                                        className="relative grid grid-cols-[30px_1fr] gap-5"
                                    >
                                        <div className="relative z-10 flex justify-center">
                                            <span className="flex h-[13px] w-[13px] items-center justify-center rounded-full border border-primary/40 bg-background">
                                                <span className="h-[5px] w-[5px] rounded-full bg-primary" />
                                            </span>
                                        </div>

                                        <div className="-mt-1">
                                            <h3 className="text-[18px] font-medium tracking-[-0.02em] text-text-primary">
                                                {item.label}
                                            </h3>

                                            <p className="mt-2 text-[15px] leading-6 text-text-secondary">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Ongoing result */}
                            <div className="relative mt-10 grid grid-cols-[30px_1fr] gap-5">
                                <div className="relative z-10 flex justify-center">
                                    <span className="flex h-[15px] w-[15px] items-center justify-center rounded-full border border-primary/40 bg-background">
                                        <span className="h-[5px] w-[5px] rounded-full bg-primary" />
                                    </span>
                                </div>

                                <p className="-mt-1 text-[14px] font-medium text-primary">
                                    Keep improving
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProcessPoint({
    label,
    description,
    className,
}: {
    label: string;
    description: string;
    className: string;
}) {
    return (
        <div
            className={`absolute z-10 w-[210px] bg-background px-3 py-2 text-center ${className}`}
        >
            <div className="mb-2 flex items-center justify-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />

                <h3 className="text-[18px] font-medium tracking-[-0.02em] text-text-primary">
                    {label}
                </h3>
            </div>

            <p className="text-[15px] leading-6 text-text-secondary">
                {description}
            </p>
        </div>
    );
}

function DirectionMarker({ className }: { className: string }) {
    return (
        <span
            aria-hidden="true"
            className={`absolute z-20 flex h-6 w-6 items-center justify-center rounded-full bg-background text-[13px] text-text-muted ${className}`}
        >
            →
        </span>
    );
}