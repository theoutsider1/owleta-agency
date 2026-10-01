const improvements = [
    {
        number: "01",
        label: "Service structure",
        title: "Clearer routes into each service",
        description:
            "The website was organised around the locksmith services customers are actually looking for, giving each core service a clearer place within the overall journey.",
    },
    {
        number: "02",
        label: "Local structure",
        title: "A tighter focus on the areas served",
        description:
            "The website structure was refined around Bournemouth, Poole and Christchurch so the local focus was clearer for both visitors and search engines.",
    },
    {
        number: "03",
        label: "Enquiry journey",
        title: "Important actions kept within reach",
        description:
            "Calls and contact actions were made easier to reach throughout the website, particularly for visitors arriving on mobile who may need help quickly.",
    },
    {
        number: "04",
        label: "Foundations",
        title: "Search and measurement considered together",
        description:
            "Technical SEO foundations, search visibility and conversion measurement were considered as part of the website setup so future performance could be understood more clearly.",
    },
];

export default function LocksmithSolution() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                {/* Introduction */}
                <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                What we changed
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Build the website around{" "}
                            <span className="text-primary">how customers look for help.</span>
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            The website was shaped around the questions a potential customer
                            needs answered quickly: what help is available, whether the
                            locksmith serves their area and how they can get in touch.
                        </p>
                    </div>
                </div>

                {/* Improvements */}
                <div className="mt-14 border-t border-border">
                    {improvements.map((item) => (
                        <div
                            key={item.number}
                            className="grid gap-4 border-b border-border py-7 md:grid-cols-[70px_0.75fr_1.25fr] md:items-start md:gap-8 lg:py-8"
                        >
                            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                {item.number}
                            </span>

                            <div>
                                <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                    {item.label}
                                </p>

                                <h3 className="mt-2 max-w-[340px] text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                    {item.title}
                                </h3>
                            </div>

                            <p className="max-w-[560px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}