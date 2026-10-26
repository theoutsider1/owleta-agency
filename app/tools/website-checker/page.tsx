import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import WebsiteChecker from "@/components/Website-checker/WebsiteChecker";

const description =
    "Check your homepage’s mobile performance, accessibility and basic SEO. Request a free manual website report by email within 24 hours.";

export const metadata: Metadata = {
    title: "Free Website Checker & Website Report | Owlixir",
    description,
    alternates: {
        canonical: "/tools/website-checker",
    },
    openGraph: {
        title: "Free Website Checker | Owlixir",
        description,
        url: "/tools/website-checker",
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Website Checker | Owlixir",
        description,
    },
};

export default function WebsiteCheckerPage() {
    return (
        <>
            <Navigation />

            <section className="website-checker-hero">
                <div className="site-container py-16 md:py-24">
                    <div className="mx-auto max-w-[780px]">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-primary">
                        Free website checker
                    </p>

                    <h1 className="mt-5 text-[clamp(2.7rem,5vw,4.5rem)] font-semibold leading-[1.06] tracking-[-0.04em] text-text-primary">
                        Find out where your website{" "}
                        <span className="text-primary">
                            needs attention.
                        </span>
                    </h1>

                    <p className="mt-6 text-[17px] leading-8 text-text-secondary">
                        Check your homepage’s mobile performance,
                        accessibility and basic SEO. Get practical
                        recommendations without signing up.
                    </p>

                    <p className="mt-4 text-[15px] leading-7 text-text-secondary">
                        Need website help beyond the scores? Request a
                        free manual review and receive your report by
                        email within 24 hours.
                    </p>

                    <a
                        href="#free-website-report"
                        className="mt-5 inline-block font-semibold text-primary underline underline-offset-4"
                    >
                        Get my free 24-hour report
                    </a>
                    </div>
                </div>
            </section>

            <main className="website-checker-theme">
                <div className="site-container py-16 md:py-24">
                    <div className="mx-auto max-w-[780px]">
                    <div className="mt-12">
                        <WebsiteChecker>
                            <section className="website-checker-info relative left-1/2 mt-14 w-[100dvw] -translate-x-1/2 border-y border-border bg-surface">
                                <div className="site-container py-16 md:py-20">
                                    <div className="mx-auto max-w-[1050px]">
                                        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
                                            About this checker
                                        </p>

                                        <h2
                                            id="checker-information-heading"
                                            className="mt-3 text-[28px] font-semibold tracking-[-0.035em] text-text-primary md:text-[32px]"
                                        >
                                            What the free website checker looks at
                                        </h2>

                                        <p className="mt-4 max-w-[680px] text-[15px] leading-7 text-text-secondary">
                                            Get a quick, practical view of your homepage before
                                            deciding what needs attention next.
                                        </p>

                                        <div className="mt-8 grid gap-0 border-y border-border md:grid-cols-3">
                                            <div className="border-b border-border px-0 py-6 md:border-b-0 md:border-r md:pr-8">
                                                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
                                                    01 · Check
                                                </p>
                                                <h3 className="mt-3 text-[17px] font-semibold text-text-primary">
                                                    Your homepage
                                                </h3>
                                                <p className="mt-3 text-[14px] leading-6 text-text-secondary">
                                                    We run a mobile website check on the public
                                                    homepage you enter.
                                                </p>
                                            </div>

                                            <div className="border-b border-border px-0 py-6 md:border-b-0 md:border-r md:px-8">
                                                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
                                                    02 · Review
                                                </p>
                                                <h3 className="mt-3 text-[17px] font-semibold text-text-primary">
                                                    Three key areas
                                                </h3>
                                                <p className="mt-3 text-[14px] leading-6 text-text-secondary">
                                                    See mobile performance, accessibility and basic
                                                    SEO scores with practical findings.
                                                </p>
                                            </div>

                                            <div className="px-0 py-6 md:pl-8">
                                                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
                                                    03 · Decide
                                                </p>
                                                <h3 className="mt-3 text-[17px] font-semibold text-text-primary">
                                                    Choose your next step
                                                </h3>
                                                <p className="mt-3 text-[14px] leading-6 text-text-secondary">
                                                    Use the results as a starting point, then request
                                                    a free manual review if you need more context.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-6 border-l-2 border-primary pl-4 text-[14px] leading-7 text-text-secondary">
                                            <p>
                                                No email address is needed for the automated check.
                                                It covers one homepage and does not replace a review
                                                of every page, conversion path or business enquiry
                                                journey.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </WebsiteChecker>
                    </div>

                    <p className="mt-10 border-t border-border pt-6 text-[14px] leading-7 text-text-secondary">
                        Need help acting on your report? Explore our{" "}
                        <Link
                            href="/services/website-maintenance"
                            className="font-medium text-primary underline underline-offset-4"
                        >
                            website support and maintenance services
                        </Link>
                        . Website repair work is separate from your free
                        report and is only undertaken with your agreement.
                    </p>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
