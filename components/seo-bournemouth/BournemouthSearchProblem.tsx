const barriers = [
    {
        number: "01",
        title: "Unclear Bournemouth relevance",
        text: "Your website may explain what you offer without making it clear why the business is relevant to customers searching in Bournemouth.",
    },
    {
        number: "02",
        title: "The wrong page appears",
        text: "A search may lead to a general page that does not properly answer the service and location behind the customer's search.",
    },
    {
        number: "03",
        title: "Stronger local competition",
        text: "Other businesses may have pages and search signals that connect their services with Bournemouth more clearly.",
    },
    {
        number: "04",
        title: "Weak website foundations",
        text: "Technical issues, poor internal structure or unclear content can make important pages harder for search engines to discover and understand.",
    },
];

export default function BournemouthSearchProblem() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
                    {/* Narrative */}
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                The Bournemouth search problem
                            </p>
                        </div>

                        <h2 className="max-w-[650px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Being relevant to Bournemouth does not mean{" "}
                            <span className="text-primary">
                                search engines will understand it.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-[620px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            When someone searches for a service in Bournemouth,
                            your website needs to make the relationship between that
                            service, the location and the most relevant page clear.
                        </p>

                        <p className="mt-5 max-w-[620px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                            Simply mentioning Bournemouth across the website is not
                            enough. The content, structure and search signals need
                            to support a genuinely useful result for the person
                            making that search.
                        </p>
                    </div>

                    {/* Diagnostic */}
                    <div>
                        <div className="border-t border-border">
                            {barriers.map((barrier) => (
                                <div
                                    key={barrier.number}
                                    className="grid grid-cols-[42px_1fr] gap-4 border-b border-border py-6 md:grid-cols-[52px_0.72fr_1.28fr] md:gap-6"
                                >
                                    <span className="pt-1 text-[10px] font-medium text-text-muted">
                                        {barrier.number}
                                    </span>

                                    <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                        {barrier.title}
                                    </h3>

                                    <p className="col-start-2 text-[15px] leading-6 text-text-secondary md:col-start-auto md:text-[16px]">
                                        {barrier.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Resolution */}
                        <div className="relative mt-10 py-8 pl-7 pr-7 md:mt-12 md:pl-8 md:pr-8">
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
                                The goal
                            </p>

                            <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                                The aim is to make the relationship between your
                                services, Bournemouth and the pages that deserve to
                                appear in search clearer and more useful.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}