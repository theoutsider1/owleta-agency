import BournemouthLocalJourney from "./BournemouthLocalJourney";

export default function BournemouthHero() {
    return (
        <section className="relative overflow-hidden">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                    background:
                        "radial-gradient(circle at 78% 42%, rgba(255, 90, 31, 0.09), transparent 25%)",
                }}
            />

            <div className="site-container relative grid min-h-[calc(100svh-82px)] items-center gap-14 py-20 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20">
                {/* Content */}
                <div className="max-w-[690px]">
                    <div className="mb-7 flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                            Web Design Bournemouth
                        </p>
                    </div>

                    <h1 className="max-w-[690px] text-[clamp(3.1rem,5.2vw,5.35rem)] font-semibold leading-[0.97] tracking-[-0.055em]">
                        Web design for Bournemouth businesses that need{" "}
                        <span className="text-primary">more</span> from their website.
                    </h1>

                    <p className="mt-8 max-w-[590px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                        We design and build websites that help Bournemouth businesses get
                        found, earn trust and make it easier for customers to call, enquire
                        or take the next step.
                    </p>

                    <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                        <a
                            href="/contact"
                            className="inline-flex items-center rounded-[9px] bg-primary px-6 py-3.5 text-[15px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                        >
                            Start a project
                            <span className="ml-3">→</span>
                        </a>

                        <a
                            href="#bournemouth-work"
                            className="group inline-flex items-center text-[15px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                        >
                            See Bournemouth-area work
                            <span className="ml-3 transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                    </div>

                    <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-6 text-[12px] text-text-muted">
                        <span>Web Design</span>
                        <span>Search Foundations</span>
                        <span>Conversion Focused</span>
                    </div>
                </div>

                {/* Local discovery visual */}
                <div className="relative mx-auto w-full max-w-[620px] lg:mx-0">
                    <div
                        aria-hidden="true"
                        className="absolute -inset-12 bg-[radial-gradient(circle,rgba(255,90,31,0.08),transparent_62%)]"
                    />

                    <BournemouthLocalJourney />
                </div>
            </div>
        </section>
    );
}