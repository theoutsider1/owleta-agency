import Link from "next/link";

const faqs = [
    {
        question: "How much does a website cost in Bournemouth?",
        answer: (
            <>
                <p>
                    The cost depends on what the website needs to do, how many pages are
                    required, the functionality involved and whether you need support
                    with content, SEO or other parts of the project.
                </p>

                <p className="mt-3">
                    Once we understand what you need, we can define the scope and provide
                    a written quote before the project starts.
                </p>
            </>
        ),
    },
    {
        question: "Can you redesign my existing website?",
        answer: (
            <p>
                Yes. A completely new website is not always necessary. If the existing
                foundation is still useful, we can focus on improving the design,
                customer journey, performance or search foundations that are getting in
                the way.{" "}
                <Link
                    href="/services/website-redesign"
                    className="cursor-pointer font-medium text-text-primary underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                >
                    Explore website redesign
                </Link>
                .
            </p>
        ),
    },
    {
        question: "Can you help my Bournemouth business appear in local search?",
        answer: (
            <p>
                Yes. Local search visibility can be considered alongside the website,
                including how your services and locations are structured, the technical
                foundations of the site and how clearly each page matches what local
                customers are looking for.{" "}
                <Link
                    href="/services/seo-bournemouth"
                    className="cursor-pointer font-medium text-text-primary underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                >
                    Explore SEO for Bournemouth businesses
                </Link>
                .
            </p>
        ),
    },
    {
        question: "Do you build WordPress and custom websites?",
        answer: (
            <p>
                Yes. We can build WordPress websites as well as more custom website
                solutions. The right approach depends on what your business needs the
                website to do, how you want to manage it and whether it requires
                specific functionality or integrations.
            </p>
        ),
    },
    {
        question: "Do you only work with businesses in Bournemouth?",
        answer: (
            <p>
                No. Owlixir works with businesses internationally. This service is
                specifically focused on businesses operating in or serving Bournemouth,
                with website strategy shaped around their customers, services and local
                search needs.
            </p>
        ),
    },
];

export default function BournemouthFAQ() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                    {/* Intro */}
                    <div className="max-w-[470px]">
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Frequently asked questions
                            </p>
                        </div>

                        <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Questions before starting a{" "}
                            <span className="text-primary">
                                website project?
                            </span>
                        </h2>

                        <p className="mt-7 max-w-[430px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            A few things Bournemouth businesses often want to know before
                            deciding what their website needs.
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

                                <div className="max-w-[680px] pb-8 pr-8 text-[15px] leading-6 text-text-secondary md:text-[16px]">
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