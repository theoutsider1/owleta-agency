const outcomes = [
    "Clearer service structure",
    "Focused local coverage",
    "Mobile-friendly enquiry paths",
    "Search-friendly page foundations",
    "Analytics & conversion measurement",
];

export default function LocksmithOutcome() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    {/* Heading */}
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                The outcome
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            A stronger foundation for{" "}
                            <span className="text-primary">
                                the next stage.
                            </span>
                        </h2>
                    </div>

                    {/* Outcome */}
                    <div>
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            The project resulted in a more focused website built
                            around the locksmith&apos;s services, priority locations
                            and customer journey, with search and measurement
                            foundations in place to understand how visibility and
                            important customer actions develop after launch.
                        </p>

                        <div className="mt-9 border-t border-border">
                            {outcomes.map((outcome, index) => (
                                <div
                                    key={outcome}
                                    className="flex items-center gap-5 border-b border-border py-4"
                                >
                                    <span className="w-6 shrink-0 text-[10px] font-medium text-text-muted">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-[15px] font-medium text-text-secondary md:text-[16px]">
                                        {outcome}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}