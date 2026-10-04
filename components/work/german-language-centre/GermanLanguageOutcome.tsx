const outcomes = [
    "Clearer content organisation",
    "Arabic-first user experience",
    "Right-to-left interface",
    "Simpler learner journey",
    "Responsive page layouts",
];

export default function GermanLanguageOutcome() {
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
                            A website shaped around{" "}
                            <span className="text-primary">
                                its audience.
                            </span>
                        </h2>
                    </div>

                    {/* Outcome */}
                    <div>
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            The finished website brought the centre&apos;s
                            information into a clearer digital structure, with an
                            Arabic-first experience designed to make content easier
                            for learners to navigate and understand across different
                            screen sizes.
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