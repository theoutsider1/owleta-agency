import CustomerJourney from "./CustomerJourney";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden">
            {/* Subtle background atmosphere */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                    background:
                        "radial-gradient(circle at 76% 45%, rgba(255, 90, 31, 0.10), transparent 27%)",
                }}
            />

            <div className="site-container relative grid min-h-[calc(100svh-82px)] items-center gap-16 py-20 lg:grid-cols-[0.9fr_1.1fr]">
                {/* Content */}
                <div className="max-w-[680px]">
                    <div className="mb-7 flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                            Websites · SEO · Support
                        </p>
                    </div>

                    <h1 className="max-w-[650px] text-[clamp(3.25rem,5.7vw,5.8rem)] font-semibold leading-[0.96] tracking-[-0.055em]">
                        Your website should bring you{" "}
                        <span className="text-primary">business.</span>
                        <br />
                        Not just sit online.
                    </h1>

                    <p className="mt-8 max-w-[570px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                        We design, improve and optimise websites that help UK businesses
                        get found, earn trust and turn more visitors into enquiries.
                    </p>

                    <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center rounded-[9px] bg-primary px-6 py-3.5 text-[15px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                        >
                            Start a project
                            <span className="ml-3">→</span>
                        </a>

                        <a
                            href="#website-check"
                            className="group inline-flex items-center text-[15px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                        >
                            Get a website check

                            <span className="ml-3 transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                    </div>

                    <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-6 text-[12px] text-text-muted">
                        <span>Web Design</span>
                        <span>Website Improvements</span>
                        <span>SEO</span>
                        <span>Ongoing Support</span>
                    </div>
                </div>

                <CustomerJourney />
            </div>
        </section>
    );
}