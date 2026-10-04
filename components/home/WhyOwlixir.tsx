import Link from "next/link";

export default function WhyOwlixir() {
    return (
        <section
            id="about"
            className="relative py-20 md:py-24 lg:py-28"
        >
            <div className="site-container">
                <div className="grid gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
                    {/* Main statement */}
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Why Owlixir
                            </p>
                        </div>

                        <h2 className="max-w-[610px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
                            Build what you need.
                            <br />
                            <span className="text-primary">
                                Improve what you already have.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-[540px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Owlixir is an independent web studio. Your project is handled
                            directly by the person doing the work, from understanding the
                            problem to building and improving the solution.
                        </p>

                        <Link
                            href="/about"
                            className="group mt-7 inline-flex cursor-pointer items-center text-[14px] font-medium text-text-primary"
                        >
                            Meet the person behind Owlixir
                            <span className="ml-2 transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </div>

                    {/* Principles */}
                    <div className="lg:pt-10">
                        <div className="max-w-[540px] lg:ml-auto">
                            <Principle
                                title="Business first. Website second."
                                description="We start with what your website needs to achieve, then make design and technical decisions around that goal."
                            />
                        </div>

                        <div className="mt-12 max-w-[500px] lg:ml-8">
                            <Principle
                                title="Fix what needs fixing."
                                description="A new website is not always the answer. If the existing foundation is useful, we focus on improving what is getting in the way."
                            />
                        </div>

                        <div className="mt-12 max-w-[520px] lg:ml-auto lg:mr-8">
                            <Principle
                                title="Measure instead of guessing."
                                description="Search visibility, enquiries and customer actions give us something real to learn from and improve over time."
                            />
                        </div>
                    </div>
                </div>

                {/* Connected capabilities */}
                <div className="mt-16 border-t border-border pt-7 md:mt-20">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                        <p className="max-w-[560px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                            Design, development, SEO and analytics work together around the
                            same goal: helping the website support the business.
                        </p>

                        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[14px] font-medium text-text-secondary">
                            <span>Design</span>
                            <span>Development</span>
                            <span>SEO</span>
                            <span>Analytics</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Principle({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="relative pl-6">
            <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary" />

            <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                {title}
            </h3>

            <p className="mt-3 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                {description}
            </p>
        </div>
    );
}