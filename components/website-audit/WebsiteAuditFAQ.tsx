const faqs = [
    {
        question: "What is included in a website audit?",
        answer:
            "The exact scope depends on your website and what needs investigating. An audit can cover customer journeys, search visibility, technical health, content structure, usability and conversion opportunities. We confirm the scope before the audit begins.",
    },
    {
        question: "Is a website audit the same as an SEO audit?",
        answer:
            "Not exactly. SEO is one part of the wider website audit. We can investigate search visibility and technical SEO foundations alongside customer journeys, usability, functionality and other areas that may affect how the website performs.",
    },
    {
        question:
            "What is the difference between a free Website Check and a Website Audit?",
        answer:
            "The free Website Check is a focused first look for any obvious issue or opportunity that may deserve further attention. A Website Audit is a deeper structured investigation with documented findings, evidence, priorities, recommended actions and a detailed PDF report.",
    },
    {
        question: "Do you need access to my website?",
        answer:
            "Not always. Most audits can begin with the publicly accessible website. If access to WordPress, analytics, Search Console or another relevant system would improve the investigation, we explain what is needed before the audit starts. Temporary access with only the required permissions is preferred.",
    },
    {
        question: "How much does a website audit cost?",
        answer:
            "Website audits are quoted based on the website, its complexity and the scope of the investigation. We review your request and confirm the scope and quote before you decide whether to proceed.",
    },
    {
        question: "What if the audit does not find any major problems?",
        answer:
            "An audit is an investigation, not a promise that problems will be found. If the website is in good shape, the report will say so and document what was reviewed, what is working well and any lower-priority observations or opportunities identified.",
    },
    {
        question:
            "Do I have to use Owlixir to make the recommended changes?",
        answer:
            "No. The audit report is yours. You can make the changes yourself, share the report with your existing developer or ask Owlixir for a separate quote to help with implementation.",
    },
];

export default function WebsiteAuditFAQ() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                    {/* Intro */}
                    <div className="max-w-[520px]">
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Website audit FAQ
                            </p>
                        </div>

                        <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Before you request{" "}
                            <span className="text-primary">
                                an audit.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-[480px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            A few useful answers about scope, access, pricing and what
                            happens after the investigation.
                        </p>
                    </div>

                    {/* Questions */}
                    <div className="border-t border-border">
                        {faqs.map((faq) => (
                            <details
                                key={faq.question}
                                className="group border-b border-border"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-6 [&::-webkit-details-marker]:hidden">
                                    <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                        {faq.question}
                                    </h3>

                                    <span
                                        aria-hidden="true"
                                        className="shrink-0 text-[22px] font-light text-text-muted transition-transform duration-200 group-open:rotate-45"
                                    >
                                        +
                                    </span>
                                </summary>

                                <div className="max-w-[700px] pb-6 pr-10">
                                    <p className="text-[15px] leading-6 text-text-secondary md:text-[16px]">
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