const faqs = [
    {
        question: "What is Local SEO?",
        answer:
            "Local SEO focuses on improving how a business is represented for searches connected to particular towns, cities or service areas. It combines search intent, relevant website pages, local business signals and technical foundations.",
    },
    {
        question: "What is included in your Local SEO services?",
        answer:
            "The work depends on the business and its current website. It can include local search research, service and location page improvements, website structure, internal linking, local business signals and technical SEO affecting important local pages.",
    },
    {
        question: "Do I need a page for every area I serve?",
        answer:
            "Not necessarily. Location pages should exist because they are genuinely useful and relevant, not simply to repeat the same content with different place names. The right structure depends on your services, coverage and how customers search.",
    },
    {
        question: "How long does Local SEO take?",
        answer:
            "Local SEO is usually a longer-term process rather than an immediate result. How quickly meaningful changes appear depends on factors such as your current website, competition, existing local presence, technical condition and the amount of work required.",
    },
    {
        question: "Can you guarantee local rankings?",
        answer:
            "No specific local search position can be guaranteed. Rankings are determined by search engines and can change over time. The focus is on strengthening relevant pages, local signals and technical foundations, then measuring how local search visibility develops.",
    },
    {
        question: "What if I need broader SEO rather than Local SEO?",
        answer:
            "If your customers are not primarily searching within specific locations, broader SEO may be a better fit. Owlixir also provides SEO services focused on wider organic search visibility.",
    },
];

export default function LocalSEOFAQ() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                    {/* Intro */}
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Local SEO FAQ
                            </p>
                        </div>

                        <h2 className="max-w-[520px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Before you invest in{" "}
                            <span className="text-primary">
                                Local SEO.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-[500px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Useful answers about local search, location pages and
                            what to expect before deciding where to focus.
                        </p>
                    </div>

                    {/* FAQs */}
                    <div className="border-t border-border">
                        {faqs.map((faq, index) => (
                            <details
                                key={faq.question}
                                className="group border-b border-border"
                            >
                                <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-6 [&::-webkit-details-marker]:hidden">
                                    <div className="flex gap-5">
                                        <span className="mt-1 text-[10px] font-medium text-text-muted">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                            {faq.question}
                                        </h3>
                                    </div>

                                    <span
                                        aria-hidden="true"
                                        className="mt-1 shrink-0 text-[18px] font-light text-text-muted transition-transform duration-200 group-open:rotate-45"
                                    >
                                        +
                                    </span>
                                </summary>

                                <div className="pb-6 pl-[40px] pr-10">
                                    <p className="max-w-[680px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}