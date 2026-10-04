import Link from "next/link";

const faqs = [
    {
        question: "How much does a professional website cost?",
        answer:
            "Every project is scoped around what your business actually needs. Before work begins, you'll receive a clear written quote outlining the agreed scope and price. An invoice is also provided for the work.",
    },
    {
        question: "What happens before the project starts?",
        answer:
            "We first discuss what you need the website to achieve, the pages required and any functionality involved. Once the scope is clear, you'll receive a written quote so you know what is included before committing to the project.",
    },
    {
        question: "Can you redesign my existing website?",
        answer:
            "Yes. If you already have a website, we first look at whether the existing foundation is worth improving or whether rebuilding would make more sense.",
        link: {
            label: "Explore website redesign",
            href: "/services/website-redesign",
        },
    },
    {
        question: "Is SEO considered when you build the website?",
        answer:
            "Yes. Page structure, metadata, internal linking, responsive behaviour, performance and other search foundations can be considered as part of the build. If your business needs a broader search strategy, we also provide dedicated SEO services.",
        link: {
            label: "Explore SEO services",
            href: "/services/seo",
        },
    },
    {
        question: "Do you provide web design services across the UK?",
        answer:
            "Yes. Owlixir works remotely with businesses across the UK and internationally. Planning, feedback and project communication can be handled online, with a clear quote and invoice provided for the project.",
        link: {
            label: "Explore web design in Bournemouth",
            href: "/services/web-design-bournemouth",
        },
    },
];

export default function WebDesignFAQ() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
                    {/* Intro */}
                    <div>
                        <div className="flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Web design FAQ
                            </p>
                        </div>

                        <h2 className="mt-5 max-w-lg text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Questions before starting{" "}
                            <span className="text-primary">
                                a website project.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-md text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            If your question is specific to your business, tell us what
                            you&apos;re planning and we can talk through it.
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

                                <div className="max-w-2xl pb-8">
                                    <p className="text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        {faq.answer}
                                    </p>

                                    {faq.link && (
                                        <Link
                                            href={faq.link.href}
                                            className="group/link mt-5 inline-flex cursor-pointer items-center gap-2 text-[14px] font-medium text-primary"
                                        >
                                            {faq.link.label}

                                            <span
                                                aria-hidden="true"
                                                className="transition-transform group-hover/link:translate-x-1"
                                            >
                                                →
                                            </span>
                                        </Link>
                                    )}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}