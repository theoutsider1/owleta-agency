import Link from "next/link";

const solutions = [
    {
        number: "01",
        title: "Web Design",
        description:
            "For businesses that need a new website built around clarity, trust and turning visitors into enquiries.",
        href: "/web-design",
    },
    {
        number: "02",
        title: "Website Redesign",
        description:
            "When the foundations are there, but the experience, message or performance needs to work harder.",
        href: "/website-redesign",
    },
    {
        number: "03",
        title: "SEO",
        description:
            "Improve how your business is found in search and connect the right visitors with the right pages.",
        href: "/seo",
    },
    {
        number: "04",
        title: "Website Maintenance",
        description:
            "Keep your website reliable, updated and supported after launch instead of leaving problems to build up.",
        href: "/website-maintenance",
    },
];

export default function SolutionsSection() {
    return (
        <section
            id="services"
            className="relative pt-12 pb-28 md:pt-16 md:pb-36 lg:pt-20 lg:pb-40"
        >
            <div className="site-container">
                {/* Intro */}
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                What we do
                            </p>
                        </div>

                        <h2 className="max-w-[600px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.05em]">
                            The right fix
                            <br />
                            depends on
                            <br />
                            <span className="text-white/65">the problem.</span>
                        </h2>
                    </div>

                    <div className="max-w-[600px] lg:justify-self-end lg:pt-12">
                        <p className="text-[16px] leading-7 text-text-secondary md:text-[17px]">
                            You might need a new website. You might get better results by
                            improving the one you already have. We look at what&apos;s getting
                            in the way first, then focus on what makes sense for your business.
                        </p>

                        <Link
                            href="/website-audit"
                            className="group mt-6 inline-flex items-center text-[14px] font-medium text-text-primary"
                        >
                            Explore website audits
                            <span className="ml-2 transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Solutions */}
                <div className="mt-20 md:mt-28">
                    {solutions.map((solution) => (
                        <Link
                            key={solution.title}
                            href={solution.href}
                            className="group grid gap-5 border-t border-border py-8 transition-colors last:border-b md:grid-cols-[70px_0.75fr_1fr_32px] md:items-center md:gap-8 md:py-9"
                        >
                            <span className="font-mono text-[11px] text-text-subtle transition-colors group-hover:text-primary">
                                {solution.number}
                            </span>

                            <h3 className="text-[23px] font-medium tracking-[-0.03em] text-text-primary md:text-[27px]">
                                {solution.title}
                            </h3>

                            <p className="max-w-[520px] text-[15px] leading-6 text-text-muted md:text-[16px] md:leading-7">
                                {solution.description}
                            </p>

                            <span
                                aria-hidden="true"
                                className="hidden text-right text-[20px] text-text-muted transition-[color,transform] group-hover:translate-x-1 group-hover:text-primary md:block"
                            >
                                ↗
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}