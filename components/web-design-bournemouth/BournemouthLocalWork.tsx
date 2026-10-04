import Image from "next/image";
import Link from "next/link";

export default function BournemouthLocalWork() {
    return (
        <section
            id="bournemouth-work"
            className="section-space bg-surface"
        >
            <div className="site-container">
                {/* Heading */}
                <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
                    <div>
                        <div className="flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Recent website work in Bournemouth
                            </p>
                        </div>
                    </div>

                    <div className="max-w-[820px]">
                        <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Building around how local customers{" "}
                            <span className="text-primary">
                                actually search.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            A recent locksmith website was built around the services
                            customers need and the areas the business actually covers,
                            including Bournemouth, Poole and Christchurch.
                        </p>
                    </div>
                </div>

                {/* Project */}
                <div className="mt-14 grid items-center gap-10 border-t border-border pt-10 md:mt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
                    {/* Real project visual */}
                    <div className="relative overflow-hidden rounded-[14px] border border-border bg-background">
                        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                            <span
                                aria-hidden="true"
                                className="h-2 w-2 rounded-full bg-border"
                            />
                            <span
                                aria-hidden="true"
                                className="h-2 w-2 rounded-full bg-border"
                            />
                            <span
                                aria-hidden="true"
                                className="h-2 w-2 rounded-full bg-border"
                            />
                        </div>

                        <div className="relative aspect-[16/10]">
                            <Image
                                src="/work/bournemouth-locksmith.webp"
                                alt="Lock Key Locksmiths website homepage"
                                fill
                                className="object-cover object-top"
                                sizes="(min-width: 1024px) 52vw, 100vw"
                            />
                        </div>
                    </div>

                    {/* Project context */}
                    <div>
                        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
                            Lock Key Locksmiths
                        </p>

                        <h3 className="mt-5 max-w-[500px] text-[clamp(2.2rem,3.4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-text-primary">
                            From local search to a clear next step.
                        </h3>

                        <p className="mt-6 max-w-[500px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Individual services and locations have clearer routes from
                            search to action, with mobile calls, enquiries and conversion
                            measurement considered as part of the website.
                        </p>

                        {/* Real scope */}
                        <div className="mt-8 border-y border-border">
                            <Signal
                                label="Areas"
                                value="Bournemouth · Poole · Christchurch"
                            />

                            <Signal
                                label="Work"
                                value="Web Design · Web Development · Local SEO"
                            />

                            <Signal
                                label="Measurement"
                                value="Conversion Tracking"
                                last
                            />
                        </div>

                        <Link
                            href="/work/bournemouth-locksmith"
                            className="group mt-8 inline-flex cursor-pointer items-center gap-2 text-[14px] font-medium text-text-primary transition-colors hover:text-primary"
                        >
                            View the project

                            <span
                                aria-hidden="true"
                                className="transition-transform group-hover:translate-x-1"
                            >
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Signal({
    label,
    value,
    last = false,
}: {
    label: string;
    value: string;
    last?: boolean;
}) {
    return (
        <div
            className={`grid gap-2 py-4 sm:grid-cols-[120px_1fr] ${last ? "" : "border-b border-border"
                }`}
        >
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                {label}
            </span>

            <span className="text-[13px] leading-5 text-text-secondary">
                {value}
            </span>
        </div>
    );
}