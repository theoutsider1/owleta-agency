import Link from "next/link";
import MaintenanceStatus from "./MaintenanceStatus";

export default function WebsiteMaintenanceHero() {
    return (
        <section className="relative overflow-hidden pb-20 pt-20 md:pb-24 md:pt-24 lg:pb-28 lg:pt-28">
            <div className="site-container">
                <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
                    {/* Copy */}
                    <div className="max-w-[760px]">
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Website maintenance services
                            </p>
                        </div>

                        <h1 className="text-[clamp(3rem,5.5vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-text-primary">
                            Keep your website working, current and{" "}
                            <span className="text-primary">looked after.</span>
                        </h1>

                        <p className="mt-7 max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Website maintenance and support for UK businesses that need
                            help with updates, fixes, technical issues and ongoing
                            improvements.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-5">
                            <Link
                                href="/contact"
                                className="inline-flex cursor-pointer items-center justify-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                Discuss website maintenance
                            </Link>

                            <Link
                                href="/contact"
                                className="group inline-flex cursor-pointer items-center gap-2 text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                            >
                                Ask about a one-off fix

                                <span
                                    aria-hidden="true"
                                    className="transition-transform group-hover:translate-x-1"
                                >
                                    →
                                </span>
                            </Link>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-5">
                            {[
                                "Ongoing maintenance",
                                "One-off support",
                                "Existing websites",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <span
                                        aria-hidden="true"
                                        className="h-1 w-1 rounded-full bg-primary"
                                    />

                                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <MaintenanceStatus />
                </div>
            </div>
        </section>
    );
}