import Link from "next/link";
import AuditSnapshot from "./AuditSnapshot";

export default function WebsiteAuditHero() {
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
                                Website audit services
                            </p>
                        </div>

                        <h1 className="text-[clamp(3rem,5.5vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-text-primary">
                            Find out what your website is{" "}
                            <span className="text-primary">really doing.</span>
                        </h1>

                        <p className="mt-7 max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            A detailed website audit that investigates customer journeys,
                            SEO, technical health and conversion paths, then turns the
                            findings into clear priorities and recommended actions.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-5">
                            <Link
                                href="/services/website-audit/?service=audit#request"
                                className="inline-flex cursor-pointer items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                Request a website audit
                            </Link>

                            <Link
                                href="/services/website-audit/?service=check#request"
                                className="group inline-flex cursor-pointer items-center text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                            >
                                Get a free website check

                                <span
                                    aria-hidden="true"
                                    className="ml-2 transition-transform group-hover:translate-x-1"
                                >
                                    →
                                </span>
                            </Link>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-5">
                            {[
                                "Detailed investigation",
                                "PDF audit report",
                                "Clear priorities",
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

                    <AuditSnapshot />
                </div>
            </div>
        </section>
    );
}