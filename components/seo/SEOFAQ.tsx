const faqs = [
    {
        question: "What is included in your SEO services?",
        answer:
            "The exact work depends on the website and its priorities. SEO can include search and intent research, on-page improvements, technical SEO, website structure, internal linking and measurement of organic search performance.",
    },
    {
        question: "How long does SEO take to work?",
        answer:
            "SEO is usually a longer-term process rather than an immediate result. How quickly meaningful changes appear depends on factors such as the website's current position, competition, technical condition, existing content and the searches being targeted.",
    },
    {
        question: "Can you guarantee Google rankings?",
        answer:
            "No. Search rankings are controlled by search engines and can change over time, so specific positions cannot be guaranteed. The focus is on improving the website's relevance, structure and technical foundations while measuring how organic visibility develops.",
    },
    {
        question: "What is the difference between on-page SEO and technical SEO?",
        answer:
            "On-page SEO focuses on individual pages, including their content, headings, search intent and relevance. Technical SEO focuses on the underlying website factors that can affect crawling, indexing, performance and how search engines access and understand those pages.",
    },
    {
        question: "Do I need Local SEO instead?",
        answer:
            "If your business depends heavily on customers searching within particular towns, cities or service areas, Local SEO may need to play a larger role. Broader SEO and Local SEO can also work together rather than being treated as completely separate strategies.",
    },
    {
        question: "Do you need access to my website?",
        answer:
            "That depends on the work being carried out. Some research and investigation can begin externally, while implementation normally requires appropriate website access. Search Console or analytics access can also help when existing performance data is relevant.",
    },
    {
        question: "What if I am not sure whether SEO is the problem?",
        answer:
            "You do not need to decide before the website has been investigated. A Website Audit can look more broadly at SEO, technical health, customer journeys and conversion opportunities to help identify what deserves attention first.",
    },
];

export default function SEOFAQ() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                    {/* Intro */}
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                SEO FAQ
                            </p>
                        </div>

                        <h2 className="max-w-[520px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Before you invest in{" "}
                            <span className="text-primary">SEO.</span>
                        </h2>

                        <p className="mt-6 max-w-[500px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            A few useful things to understand about scope, expectations and
                            how SEO work is approached.
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

                                        <h3 className="text-[17px] font-semibold leading-6 tracking-[-0.02em] text-text-primary md:text-[18px]">
                                            {faq.question}
                                        </h3>
                                    </div>

                                    <span
                                        aria-hidden="true"
                                        className="mt-1 text-[18px] font-light text-text-muted transition-transform duration-200 group-open:rotate-45"
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