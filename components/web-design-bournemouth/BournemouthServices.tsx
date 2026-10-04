import Link from "next/link";

export default function BournemouthServices() {
    return (
        <section className="section-space">
            <div className="site-container">
                {/* Intro */}
                <div className="max-w-[820px]">
                    <div className="mb-6 flex items-center gap-3">
                        <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-primary"
                        />

                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                            Web design + local SEO
                        </p>
                    </div>

                    <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                        Your website should not work{" "}
                        <span className="text-primary">
                            in isolation.
                        </span>
                    </h2>

                    <p className="mt-7 max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                        Design, development and local SEO work together to help
                        Bournemouth businesses get found and make the next step easier
                        for potential customers.
                    </p>
                </div>

                {/* Bento */}
                <div className="mt-12 grid gap-3 md:mt-14 lg:grid-cols-[1.15fr_0.85fr]">
                    {/* Web Design */}
                    <Link
                        href="/services/web-design"
                        className="group relative min-h-[330px] cursor-pointer overflow-hidden rounded-[14px] border border-border bg-surface p-6 transition-[border-color,background-color] hover:border-primary/40 md:p-7"
                    >
                        <div className="flex h-full flex-col">
                            {/* Top */}
                            <div className="flex items-center justify-between gap-6">
                                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                                    Web design
                                </p>

                                <span className="flex shrink-0 items-center gap-2 text-[14px] font-medium text-text-secondary transition-colors group-hover:text-primary">
                                    Explore web design

                                    <span
                                        aria-hidden="true"
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    >
                                        →
                                    </span>
                                </span>
                            </div>

                            {/* Main content */}
                            <div className="my-auto max-w-[480px] py-8">
                                <h3 className="text-[clamp(1.8rem,3vw,2.8rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-text-primary">
                                    Turn attention
                                    <br />
                                    into{" "}
                                    <span className="text-primary">
                                        action.
                                    </span>
                                </h3>

                                <p className="mt-5 max-w-[440px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                    Give potential customers a clear journey from arriving
                                    on your website to calling, enquiring or booking.
                                </p>
                            </div>

                            {/* Journey */}
                            <div className="border-t border-border pt-5">
                                <div className="flex items-center">
                                    <JourneyStep label="Visit" />

                                    <JourneyLine />

                                    <JourneyStep label="Trust" />

                                    <JourneyLine />

                                    <JourneyStep label="Action" active />
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Right column */}
                    <div className="grid gap-3">
                        {/* Local SEO */}
                        <Link
                            href="/services/seo-bournemouth"
                            className="group relative min-h-[195px] cursor-pointer overflow-hidden rounded-[14px] border border-border bg-background p-6 transition-colors hover:border-primary/40"
                        >
                            <div className="flex h-full flex-col">
                                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                                    Local SEO
                                </p>

                                <div className="pt-7">
                                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-text-muted">
                                        Bournemouth
                                    </p>

                                    <h3 className="max-w-[390px] text-[clamp(1.45rem,2vw,2rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-text-primary">
                                        Get found by the right local searches.
                                    </h3>

                                    <p className="mt-3 max-w-[390px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        Connect your services and locations with the searches
                                        that matter to your business.
                                    </p>
                                </div>

                                <div className="mt-auto flex justify-end pt-5">
                                    <span className="flex items-center gap-2 text-[14px] font-medium text-text-secondary transition-colors group-hover:text-primary">
                                        Explore local SEO

                                        <span
                                            aria-hidden="true"
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        >
                                            →
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </Link>

                        {/* Web Development */}
                        <Link
                            href="/services/web-design"
                            className="group relative min-h-[122px] cursor-pointer overflow-hidden rounded-[14px] border border-border bg-surface p-6 transition-colors hover:border-primary/40"
                        >
                            <div className="flex h-full flex-col">
                                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                                    Web development
                                </p>

                                <div className="mt-5">
                                    <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                        The foundation behind the experience.
                                    </h3>

                                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                                        <TechSignal label="Performance" />
                                        <TechSignal label="Mobile" />
                                        <TechSignal label="Technical SEO" />
                                    </div>
                                </div>

                                <div className="mt-auto flex justify-end pt-4">
                                    <span className="flex items-center gap-2 text-[14px] font-medium text-text-secondary transition-colors group-hover:text-primary">
                                        Explore development

                                        <span
                                            aria-hidden="true"
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        >
                                            →
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function JourneyStep({
    label,
    active = false,
}: {
    label: string;
    active?: boolean;
}) {
    return (
        <div className="flex shrink-0 items-center gap-2">
            <span
                aria-hidden="true"
                className={`h-1.5 w-1.5 rounded-full ${active ? "bg-primary" : "bg-text-muted"
                    }`}
            />

            <span
                className={`text-[10px] font-medium uppercase tracking-[0.14em] ${active ? "text-text-primary" : "text-text-muted"
                    }`}
            >
                {label}
            </span>
        </div>
    );
}

function JourneyLine() {
    return <div className="mx-4 h-px flex-1 bg-border sm:mx-6" />;
}

function TechSignal({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-2">
            <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-primary"
            />

            <span className="text-[10px] uppercase tracking-[0.12em] text-text-muted">
                {label}
            </span>
        </div>
    );
}