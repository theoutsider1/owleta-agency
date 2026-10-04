import Image from "next/image";
import Link from "next/link";

const details = [
    ["Project", "Language centre website"],
    ["Audience", "Arabic-speaking learners"],
    ["Focus", "Content & user journey"],
];

export default function GermanLanguageCentreProject() {
    return (
        <section className="section-space">
            <div className="site-container">
                {/* Heading */}
                <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Selected project · 02
                            </p>
                        </div>

                        <h2 className="max-w-[650px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            A focused website for a{" "}
                            <span className="text-primary">
                                German language centre.
                            </span>
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            A website built for a German language centre to present
                            its offering clearly to Arabic-speaking learners and make
                            important information easier to explore.
                        </p>
                    </div>
                </div>

                {/* Project body */}
                <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
                    {/* Information */}
                    <div className="flex flex-col">
                        <div className="border-t border-border">
                            {details.map(([label, value]) => (
                                <div
                                    key={label}
                                    className="flex items-baseline justify-between gap-6 border-b border-border py-4"
                                >
                                    <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                        {label}
                                    </span>

                                    <span className="max-w-[260px] text-right text-[14px] font-medium text-text-secondary">
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <p className="max-w-[470px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                The project organised the centre&apos;s information
                                into a clearer digital experience, with Arabic content,
                                right-to-left interaction and responsive layouts
                                considered throughout the website.
                            </p>

                            <Link
                                href="/work/german-language-centre"
                                className="group mt-7 inline-flex w-fit cursor-pointer items-center text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                            >
                                View project

                                <span
                                    aria-hidden="true"
                                    className="ml-2 transition-transform group-hover:translate-x-1"
                                >
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="overflow-hidden">
                        <div className="flex items-center justify-between border-b border-border pb-3">
                            <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                Selected work
                            </span>

                            <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                Arabic website
                            </span>
                        </div>

                        <div className="relative mt-4 aspect-[16/9] overflow-hidden">
                            <Image
                                src="/work/german-language-centre.webp"
                                alt="Arabic website created for a German language centre"
                                fill
                                sizes="(min-width: 1024px) 55vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}