import Link from "next/link";

const faqs = [
    {
        question: "What does SEO for a Bournemouth business involve?",
        answer:
            "It depends on the website and the searches that matter to the business. Work can include search research, service and location relevance, on-page SEO, internal linking and technical improvements that support important pages.",
    },
    {
        question: "Do I need to be based in Bournemouth to target Bournemouth searches?",
        answer:
            "Not necessarily. What matters is whether Bournemouth is a genuine market for your business and whether you actually serve customers there. Your website should represent that relationship clearly rather than creating location content for places you do not genuinely serve.",
    },
    {
        question: "Do I need a separate Bournemouth page?",
        answer:
            "Not every business does. A dedicated page can make sense when Bournemouth represents a distinct and useful search opportunity, but the page should provide genuine value rather than repeat another page with the location name changed.",
    },
    {
        question: "How long does SEO take to improve visibility?",
        answer:
            "The timeframe varies depending on your current website, competition, existing search presence and the work required. SEO is usually a longer-term process of improving relevant pages and foundations, then learning from how search visibility develops.",
    },
    {
        question: "Can you help if I serve Bournemouth and other areas?",
        answer:
            "Yes. The website structure can reflect multiple genuine service areas without treating every location the same. If several towns, cities or service areas matter to your business, a broader Local SEO approach may be more useful.",
    },
    {
        question: "What is the difference between Bournemouth SEO and Local SEO?",
        answer:
            "This page focuses specifically on improving relevance and visibility for searches connected with Bournemouth. Local SEO is the broader service for businesses that want to strengthen how their services and genuine locations or service areas are represented in local search.",
    },
];

export default function BournemouthSEOFAQ() {
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
                                Bournemouth SEO FAQ
                            </p>
                        </div>

                        <h2 className="max-w-[520px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Questions before investing in{" "}
                            <span className="text-primary">
                                Bournemouth SEO.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-[500px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Useful answers about targeting Bournemouth searches,
                            local relevance and deciding which SEO approach fits
                            your business.
                        </p>

                        <div className="mt-8 border-t border-border pt-5">
                            <p className="text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                Need visibility across several locations?
                            </p>

                            <Link
                                href="/services/local-seo"
                                className="group mt-3 inline-flex cursor-pointer items-center text-[14px] font-medium text-text-primary transition-colors hover:text-primary"
                            >
                                Explore Local SEO

                                <span
                                    aria-hidden="true"
                                    className="ml-2 transition-transform group-hover:translate-x-1"
                                >
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div className="border-t border-border">
                        {faqs.map((faq, index) => (
                            <details
                                key={faq.question}
                                className="group border-b border-border"
                            >
                                <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-6 [&::-webkit-details-marker]:hidden">
                                    <div className="flex min-w-0 gap-5">
                                        <span className="mt-1 shrink-0 text-[10px] font-medium text-text-muted">
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