import Link from "next/link";

const faqs = [
    {
        question: "How much does a website redesign cost?",
        answer: (
            <p>
                The cost depends on how much of the existing website needs to change,
                the number of pages involved, the functionality required and whether
                the current setup can be improved or needs a wider rebuild. Once the
                scope is clear, we provide a written quote before the project begins.
            </p>
        ),
    },
    {
        question: "Do I need to rebuild my whole website?",
        answer: (
            <p>
                Not necessarily. A website redesign can focus on the parts that are
                creating problems while keeping useful content, pages and functionality
                that still work well. We review the existing website first so the scope
                reflects what actually needs changing. If you&apos;re starting with a
                completely new website instead, explore our{" "}
                <Link
                    href="/services/web-design"
                    className="cursor-pointer font-medium text-text-primary underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                >
                    web design services
                </Link>
                .
            </p>
        ),
    },
    {
        question: "Can you redesign an existing WordPress website?",
        answer: (
            <p>
                Yes. A WordPress website redesign can improve the structure, design,
                content and customer journey while keeping WordPress when it remains a
                good fit. If the existing theme, page builder or plugin setup is
                limiting the website, we can also assess whether a cleaner rebuild
                makes more sense.
            </p>
        ),
    },
    {
        question: "Will redesigning my website affect SEO?",
        answer: (
            <p>
                It can. Changes to URLs, page structure, content and technical setup can
                affect existing search visibility and how search engines understand the
                website. We therefore consider important search foundations during the
                redesign, including existing URLs and content that may already carry
                search value. For projects needing deeper search work, explore our{" "}
                <Link
                    href="/services/seo"
                    className="cursor-pointer font-medium text-text-primary underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                >
                    SEO services
                </Link>
                .
            </p>
        ),
    },
    {
        question: "How long does a website redesign take?",
        answer: (
            <p>
                It depends on the size of the website, how much needs to change,
                functionality requirements and whether the existing setup is being
                improved or rebuilt. We define the scope and expected project timeline
                before work begins.
            </p>
        ),
    },
    {
        question: "Can you redesign a website without changing the content?",
        answer: (
            <p>
                Sometimes. If the existing content still supports the business and the
                customer journey, it can remain part of the redesigned website. Where
                content is unclear, outdated or working against the new structure, we
                can reorganise or improve it as part of the redesign.
            </p>
        ),
    },
];

export default function WebsiteRedesignFAQ() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                    {/* Intro */}
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Website redesign FAQ
                            </p>
                        </div>

                        <h2 className="max-w-[520px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Questions before{" "}
                            <span className="text-primary">
                                redesigning your website.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-[440px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            A few common questions about scope, existing websites,
                            WordPress, SEO and what happens before a redesign begins.
                        </p>
                    </div>

                    {/* Questions */}
                    <div className="border-t border-border">
                        {faqs.map((faq) => (
                            <details
                                key={faq.question}
                                className="group border-b border-border"
                            >
                                <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-7 text-left md:py-8 [&::-webkit-details-marker]:hidden">
                                    <span className="max-w-2xl text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                        {faq.question}
                                    </span>

                                    <span
                                        aria-hidden="true"
                                        className="relative mt-1 h-5 w-5 shrink-0 text-text-muted transition-colors group-hover:text-primary group-open:text-primary"
                                    >
                                        <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />

                                        <span className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-current transition-all duration-300 group-open:rotate-90 group-open:opacity-0" />
                                    </span>
                                </summary>

                                <div className="max-w-[650px] pb-8 pr-8 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}