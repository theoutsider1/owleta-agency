import Image from "next/image";
import Link from "next/link";

const details = [
    ["Project", "Local service website"],
    ["Market", "Bournemouth, Poole & Christchurch"],
    ["Focus", "Enquiries & local visibility"],
];

export default function FeaturedLocksmithProject() {
    return (
        <section className="section-space">
            <div className="site-container">
                {/* Project heading */}
                <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Selected project · 01
                            </p>
                        </div>

                        <h2 className="max-w-[650px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            A clearer website for a{" "}
                            <span className="text-primary">
                                Bournemouth locksmith.
                            </span>
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            A website project for an independent locksmith serving
                            Bournemouth, Poole and Christchurch, built to make
                            services easier to understand, strengthen local relevance
                            and give potential customers clearer ways to get in touch.
                        </p>
                    </div>
                </div>

                {/* Project body */}
                <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                    {/* Visual */}
                    <div className="overflow-hidden">
                        <div className="flex items-center justify-between border-b border-border pb-3">
                            <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                Featured work
                            </span>

                            <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                Bournemouth · UK
                            </span>
                        </div>

                        <div className="relative mt-4 aspect-[16/9] overflow-hidden">
                            <Image
                                src="/work/bournemouth-locksmith.webp"
                                alt="Website created for an independent locksmith serving Bournemouth, Poole and Christchurch"
                                fill
                                sizes="(min-width: 1024px) 55vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Project information */}
                    <div className="flex flex-col">
                        {/* Project details */}
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

                        {/* Project summary */}
                        <div className="mt-8">
                            <p className="max-w-[520px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                                The project brought the locksmith&apos;s services,
                                local coverage and contact journey into a more focused
                                website structure, with search foundations and
                                conversion measurement included in the setup.
                            </p>

                            <Link
                                href="/work/bournemouth-locksmith"
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
                </div>
            </div>
        </section>
    );
}