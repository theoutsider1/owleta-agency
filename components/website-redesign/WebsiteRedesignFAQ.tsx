import Link from "next/link";

const faqs = [
    {
        question: "How much does a website redesign cost?",
        answer: (
            <>
                The cost depends on how much of the existing website needs to change,
                the number of pages involved, the functionality required and whether
                the current setup can be improved or needs a wider rebuild. Once the
                scope is clear, we provide a written quote before the project begins.
            </>
        ),
    },
    {
        question: "Do I need to rebuild my whole website?",
        answer: (
            <>
                Not necessarily. A website redesign can focus on the parts that are
                creating problems while keeping useful content, pages and functionality
                that still work well. We review the existing website first so the scope
                reflects what actually needs changing. If you&apos;re starting with a completely new website instead, explore our{" "}
                <Link
                    href="/services/web-design"
                    className="text-text-primary underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                >
                    web design services
                </Link>
                .
            </>
        ),
    },
    {
        question: "Can you redesign an existing WordPress website?",
        answer: (
            <>
                Yes. A WordPress website redesign can improve the structure, design,
                content and customer journey while keeping WordPress when it remains a
                good fit. If the existing theme, page builder or plugin setup is
                limiting the website, we can also assess whether a cleaner rebuild
                makes more sense.
            </>
        ),
    },
    {
        question: "Will redesigning my website affect SEO?",
        answer: (
            <>
                It can. Changes to URLs, page structure, content and technical setup can
                affect how search engines understand the website. SEO should therefore
                be considered during the redesign rather than after it. For projects
                needing deeper search work, see our{" "}
                <Link
                    href="/services/seo"
                    className="text-text-primary underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                >
                    SEO services
                </Link>
                .
            </>
        ),
    },
    {
        question: "How long does a website redesign take?",
        answer: (
            <>
                It depends on the size of the website, how much needs to change,
                functionality requirements and whether the existing setup is being
                improved or rebuilt. We define the scope and expected project timeline
                before work begins.
            </>
        ),
    },
    {
        question: "Can you redesign a website without changing the content?",
        answer: (
            <>
                Sometimes, but keeping every piece of existing content unchanged can
                limit what the redesign achieves. We look at how the content supports
                the customer journey and can keep, reorganise or improve it depending
                on what the website needs.
            </>
        ),
    },
];

export default function WebsiteRedesignFAQ() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Website redesign FAQ
                            </p>
                        </div>

                        <h2 className="max-w-[520px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[1] tracking-[-0.045em] text-text-primary">
                            Questions before{" "}
                            <span className="text-primary">redesigning your website.</span>
                        </h2>
                    </div>

                    <div className="border-t border-border">
                        {faqs.map((faq) => (
                            <details
                                key={faq.question}
                                className="group border-b border-border"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                                    <h3 className="text-[16px] font-medium leading-6 text-text-primary md:text-[17px]">
                                        {faq.question}
                                    </h3>

                                    <span className="relative h-4 w-4 shrink-0">
                                        <span className="absolute left-0 top-1/2 h-px w-4 bg-text-muted" />
                                        <span className="absolute left-1/2 top-0 h-4 w-px bg-text-muted transition-transform group-open:rotate-90 group-open:opacity-0" />
                                    </span>
                                </summary>

                                <div className="max-w-[650px] pb-7 pr-8 text-[14px] leading-6 text-text-secondary">
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