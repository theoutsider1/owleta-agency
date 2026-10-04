const signals = [
    {
        number: "01",
        title: "Visitors are not taking the next step",
        text: "People reach the website, but calls, forms or enquiries do not follow as often as expected.",
    },
    {
        number: "02",
        title: "Search visibility is difficult to understand",
        text: "Important pages may exist, but it is not clear whether search engines can find, understand and prioritise them properly.",
    },
    {
        number: "03",
        title: "Something feels wrong, but the cause is unclear",
        text: "A slow page, awkward mobile experience or unreliable feature can point to a deeper issue that needs investigating.",
    },
    {
        number: "04",
        title: "You are considering changes without enough evidence",
        text: "Before redesigning, rebuilding or investing in SEO, it helps to know what actually deserves attention.",
    },
];

export default function AuditWhy() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    {/* Intro */}
                    <div className="max-w-[560px]">
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Why audit your website?
                            </p>
                        </div>

                        <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            The symptom is not always{" "}
                            <span className="text-primary">the problem.</span>
                        </h2>

                        <p className="mt-7 max-w-[520px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            When something on a website is not working as expected,
                            changing things without understanding the cause can waste
                            time and money. An audit investigates what is happening
                            before deciding what deserves attention.
                        </p>
                    </div>

                    {/* Signals */}
                    <div className="border-t border-border">
                        {signals.map((signal) => (
                            <div
                                key={signal.number}
                                className="grid gap-4 border-b border-border py-6 sm:grid-cols-[52px_1fr]"
                            >
                                <span className="pt-1 text-[10px] font-medium tracking-[0.15em] text-text-muted">
                                    {signal.number}
                                </span>

                                <div className="grid gap-3 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
                                    <h3 className="max-w-[320px] text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                        {signal.title}
                                    </h3>

                                    <p className="max-w-[500px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        {signal.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Resolution */}
                <div className="mt-10 grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div
                        aria-hidden="true"
                        className="hidden lg:block"
                    />

                    <div className="relative py-8 pl-7 pr-7 md:pl-8 md:pr-8">
                        <span
                            aria-hidden="true"
                            className="absolute left-0 top-0 h-8 w-px bg-primary"
                        />
                        <span
                            aria-hidden="true"
                            className="absolute left-0 top-0 h-px w-8 bg-primary"
                        />
                        <span
                            aria-hidden="true"
                            className="absolute bottom-0 right-0 h-8 w-px bg-primary"
                        />
                        <span
                            aria-hidden="true"
                            className="absolute bottom-0 right-0 h-px w-8 bg-primary"
                        />

                        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                            The purpose of the audit
                        </p>

                        <p className="max-w-[680px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            The goal is not to find problems for the sake of finding
                            them. It is to separate what is working from what needs
                            attention, then show you what is worth doing next.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}