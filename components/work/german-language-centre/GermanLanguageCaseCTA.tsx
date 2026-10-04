import Link from "next/link";

const routes = [
    {
        label: "Web Design",
        href: "/services/web-design",
    },
    {
        label: "Website Redesign",
        href: "/services/website-redesign",
    },
];

export default function GermanLanguageCaseCTA() {
    return (
        <section className="section-space">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-20">
                    {/* Copy */}
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Have a project in mind?
                            </p>
                        </div>

                        <h2 className="max-w-[760px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Build a website around{" "}
                            <span className="text-primary">
                                the people using it.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            If your website needs a clearer structure, a better user
                            journey or an experience shaped around a specific
                            audience, tell us what you are trying to achieve.
                        </p>
                    </div>

                    {/* Action */}
                    <div className="lg:flex lg:justify-end">
                        <div className="w-full max-w-[420px] border-t border-border pt-6">
                            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                Tell us about your project
                            </p>

                            <Link
                                href="/contact"
                                className="mt-5 inline-flex cursor-pointer items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                Start a project
                            </Link>

                            {/* Related services */}
                            <div className="mt-7 border-t border-border pt-5">
                                <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                    Related services
                                </p>

                                <div className="mt-3 flex flex-col gap-2">
                                    {routes.map((route) => (
                                        <Link
                                            key={route.href}
                                            href={route.href}
                                            className="group flex w-fit cursor-pointer items-center text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                                        >
                                            {route.label}

                                            <span
                                                aria-hidden="true"
                                                className="ml-2 transition-transform group-hover:translate-x-1"
                                            >
                                                →
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link
                                href="/work"
                                className="group mt-6 flex w-fit cursor-pointer items-center text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                            >
                                <span
                                    aria-hidden="true"
                                    className="mr-2 transition-transform group-hover:-translate-x-1"
                                >
                                    ←
                                </span>

                                Back to selected work
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}