import Link from "next/link";

const work = [
    {
        number: "01",
        label: "Market",
        value: "Bournemouth",
        text: "An independent mobile locksmith serving customers across Bournemouth, Poole and Christchurch.",
    },
    {
        number: "02",
        label: "Website",
        value: "Local service structure",
        text: "Service and location content organised around the locksmith's actual services and the areas the business serves.",
    },
    {
        number: "03",
        label: "Search setup",
        value: "Search and measurement",
        text: "Indexing, search visibility and conversion measurement considered as part of the website's ongoing improvement.",
    },
];

export default function BournemouthSEOProof() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    {/* Intro */}
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Relevant Bournemouth work
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Built around a real{" "}
                            <span className="text-primary">
                                local service business.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-[590px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            We built a website for an independent mobile locksmith
                            serving Bournemouth, Poole and Christchurch, with the
                            structure shaped around real services, local relevance
                            and customer enquiries.
                        </p>
                    </div>

                    {/* Proof */}
                    <div>
                        <div className="border-t border-border">
                            {work.map((item) => (
                                <div
                                    key={item.number}
                                    className="grid gap-4 border-b border-border py-6 md:grid-cols-[52px_0.75fr_1.25fr] md:gap-6"
                                >
                                    <span className="pt-1 text-[10px] font-medium text-text-muted">
                                        {item.number}
                                    </span>

                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                            {item.label}
                                        </p>

                                        <h3 className="mt-2 text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                            {item.value}
                                        </h3>
                                    </div>

                                    <p className="text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-7">
                            <Link
                                href="/work/bournemouth-locksmith"
                                className="group inline-flex cursor-pointer items-center text-[14px] font-medium text-text-primary transition-colors hover:text-primary"
                            >
                                View the Bournemouth locksmith project

                                <span
                                    aria-hidden="true"
                                    className="ml-2 transition-transform group-hover:translate-x-1"
                                >
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}