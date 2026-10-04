import Link from "next/link";
import BournemouthLocalJourney from "./BournemouthLocalJourney";

export default function BournemouthHero() {
    return (
        <section className="relative overflow-hidden">
            <div className="site-container relative grid min-h-[calc(100svh-82px)] items-center gap-14 py-20 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20">
                {/* Content */}
                <div className="max-w-[690px]">
                    {/* Eyebrow */}
                    <div className="mb-7 flex items-center gap-3">
                        <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-primary"
                        />

                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                            Web Design Bournemouth
                        </p>
                    </div>

                    <h1 className="max-w-[690px] text-[clamp(3rem,5.5vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-text-primary">
                        Web design for Bournemouth businesses that need{" "}
                        <span className="text-primary">
                            more
                        </span>{" "}
                        from their website.
                    </h1>

                    <p className="mt-8 max-w-[590px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                        We design and build websites that help Bournemouth businesses get
                        found, earn trust and make it easier for customers to call, enquire
                        or take the next step.
                    </p>

                    {/* Actions */}
                    <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                        <Link
                            href="/contact"
                            className="inline-flex cursor-pointer items-center justify-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                        >
                            Start a project
                        </Link>

                        <a
                            href="#bournemouth-work"
                            className="group inline-flex cursor-pointer items-center gap-2 text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                        >
                            See Bournemouth-area work

                            <span
                                aria-hidden="true"
                                className="transition-transform group-hover:translate-x-1"
                            >
                                →
                            </span>
                        </a>
                    </div>

                    {/* Signals */}
                    <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-6">
                        {[
                            "Web Design",
                            "Search Foundations",
                            "Conversion Focused",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-2"
                            >
                                <span
                                    aria-hidden="true"
                                    className="h-1 w-1 rounded-full bg-primary"
                                />

                                <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-text-muted">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Local discovery visual */}
                <div className="relative mx-auto w-full max-w-[620px] lg:mx-0">
                    <BournemouthLocalJourney />
                </div>
            </div>
        </section>
    );
}