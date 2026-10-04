import Link from "next/link";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function NotFound() {
    return (
        <>
            <Navigation />

            <main>
                <section className="flex min-h-[72vh] items-center px-5 pb-20 pt-36 md:px-6 md:pb-24 md:pt-44 lg:px-0">
                    <div className="site-container w-full">
                        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                            <div
                                className="hidden lg:flex lg:items-center lg:justify-center"
                                aria-hidden="true"
                            >
                                <p className="text-[clamp(7rem,12vw,10rem)] font-semibold leading-[0.8] tracking-[-0.07em] text-primary">
                                    404
                                </p>
                            </div>

                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <span
                                        aria-hidden="true"
                                        className="h-1.5 w-1.5 rounded-full bg-primary"
                                    />

                                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                        404 · Page not found
                                    </p>
                                </div>

                                <h1 className="max-w-[720px] text-[clamp(3rem,5.5vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-text-primary">
                                    This page isn&apos;t{" "}
                                    <span className="text-primary">here.</span>
                                </h1>

                                <p className="mt-7 max-w-[600px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                                    The page may have moved, the link may be incorrect or the
                                    address may no longer exist.
                                </p>

                                <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                                    <Link
                                        href="/"
                                        className="cursor-pointer rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary-hover"
                                    >
                                        Back to homepage
                                    </Link>

                                    <Link
                                        href="/contact"
                                        className="cursor-pointer text-[14px] font-medium text-text-secondary transition-colors hover:text-primary"
                                    >
                                        Start a project{" "}
                                        <span aria-hidden="true">→</span>
                                    </Link>
                                </div>

                                <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6">
                                    <Link
                                        href="/services/web-design"
                                        className="cursor-pointer text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted transition-colors hover:text-primary"
                                    >
                                        Web Design
                                    </Link>

                                    <Link
                                        href="/services/seo"
                                        className="cursor-pointer text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted transition-colors hover:text-primary"
                                    >
                                        SEO
                                    </Link>

                                    <Link
                                        href="/work"
                                        className="cursor-pointer text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted transition-colors hover:text-primary"
                                    >
                                        Work
                                    </Link>

                                    <Link
                                        href="/about"
                                        className="cursor-pointer text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted transition-colors hover:text-primary"
                                    >
                                        About
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}