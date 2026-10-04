import Link from "next/link";

const linkClasses =
    "cursor-pointer font-medium text-text-primary underline decoration-border underline-offset-4 transition-colors hover:text-primary";

const faqs = [
    {
        question: "How much does website maintenance cost?",
        answer: (
            <>
                <p>
                    Website maintenance costs depend on the website, its existing setup
                    and the type of support you need. A simple website requiring
                    occasional updates will have different needs from a website with
                    plugins, integrations, custom functionality or regular changes.
                </p>

                <p className="mt-3">
                    For websites we did not build, we review the existing setup before
                    confirming the maintenance scope and quote.
                </p>
            </>
        ),
    },
    {
        question: "Do you offer website maintenance plans or packages?",
        answer: (
            <>
                <p>
                    We offer ongoing website maintenance with a scope based on the
                    website, its setup and the level of support the business needs.
                </p>

                <p className="mt-3">
                    We can also help with one-off website support if you only need a
                    specific fix, update or technical change.
                </p>
            </>
        ),
    },
    {
        question: "Do you provide WordPress maintenance?",
        answer: (
            <p>
                Yes. WordPress maintenance can include core, theme and plugin updates,
                compatibility checks, troubleshooting, content changes and ongoing
                improvements. We review the existing WordPress setup first so we
                understand what needs to be maintained.
            </p>
        ),
    },
    {
        question: "Can you maintain a custom website?",
        answer: (
            <p>
                Potentially, yes. We can support custom websites after reviewing the
                existing codebase, technology, dependencies, hosting or deployment
                setup and available access. This lets us confirm what we can support
                before agreeing the scope.
            </p>
        ),
    },
    {
        question: "Can you maintain a website you did not build?",
        answer: (
            <p>
                Yes, in many cases. We first review how the website is built, its
                current condition, integrations and the access available. If the setup
                is suitable for us to support, we can then agree the maintenance scope
                and handle the relevant work. If you need a completely new website
                instead, explore our{" "}
                <Link href="/services/web-design" className={linkClasses}>
                    web design services
                </Link>
                .
            </p>
        ),
    },
    {
        question: "Does website maintenance include hosting and backups?",
        answer: (
            <p>
                It depends on the website and its existing setup. We first check where
                the website is hosted, what backup systems are already available and
                what access we have. Any hosting or backup responsibilities included in
                the maintenance arrangement will be agreed as part of the scope.
            </p>
        ),
    },
    {
        question: "What if my website needs more than maintenance?",
        answer: (
            <>
                <p>
                    Maintenance is best suited to keeping an existing website working,
                    current and supported, along with smaller improvements over time. If
                    the website needs substantial changes to its design, structure,
                    customer journey or underlying setup, a redesign may make more
                    sense.
                </p>

                <p className="mt-3">
                    You can explore our{" "}
                    <Link
                        href="/services/website-redesign"
                        className={linkClasses}
                    >
                        website redesign services
                    </Link>{" "}
                    if the problems go beyond ongoing maintenance.
                </p>

                <p className="mt-3">
                    If you&apos;re not sure what your website needs yet, start with a{" "}
                    <Link
                        href="/services/website-audit/?service=check#request"
                        className={linkClasses}
                    >
                        free website check
                    </Link>
                    .
                </p>
            </>
        ),
    },
];

export default function WebsiteMaintenanceFAQ() {
    return (
        <section className="section-space">
            <div className="site-container">
                {/* Intro */}
                <div className="max-w-[900px]">
                    <div className="mb-6 flex items-center gap-3">
                        <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-primary"
                        />

                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                            Website maintenance FAQ
                        </p>
                    </div>

                    <h2 className="max-w-[800px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                        Questions before we{" "}
                        <span className="text-primary">
                            look after your website.
                        </span>
                    </h2>

                    <p className="mt-7 max-w-[600px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                        A few useful things to know about website maintenance,
                        technical support and working with an existing website.
                    </p>
                </div>

                {/* FAQ */}
                <div className="mt-14 border-t border-border lg:mt-16">
                    {faqs.map((faq, index) => (
                        <details
                            key={faq.question}
                            className="group border-b border-border"
                        >
                            <summary className="relative grid cursor-pointer list-none items-start gap-5 py-7 pr-10 text-left sm:grid-cols-[60px_1fr_auto] sm:pr-0 md:py-8 [&::-webkit-details-marker]:hidden">
                                <span className="hidden pt-1 text-[10px] font-medium tracking-[0.15em] text-text-muted sm:block">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="max-w-[760px] text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                    {faq.question}
                                </span>

                                <span
                                    aria-hidden="true"
                                    className="absolute right-0 top-7 text-[22px] font-light leading-none text-text-muted transition-[transform,color] duration-200 group-hover:text-primary group-open:rotate-45 group-open:text-primary sm:static sm:mt-1"
                                >
                                    +
                                </span>
                            </summary>

                            <div className="pb-8 sm:grid sm:grid-cols-[60px_1fr_auto] sm:gap-5">
                                <div aria-hidden="true" />

                                <div className="max-w-[720px] pr-8 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                    {faq.answer}
                                </div>

                                <div
                                    aria-hidden="true"
                                    className="hidden w-[22px] sm:block"
                                />
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}