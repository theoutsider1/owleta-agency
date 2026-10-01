import Link from "next/link";

const details = [
    ["Project", "Local service website"],
    ["Business", "Independent locksmith"],
    ["Area", "Bournemouth, Poole & Christchurch"],
    ["Focus", "Enquiries & local visibility"],
];

export default function LocksmithCaseHero() {
    return (
        <section className="section-space pt-32 md:pt-40">
            <div className="site-container">
                <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
                    {/* Heading */}
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Case study · Bournemouth
                            </p>
                        </div>

                        <h1 className="max-w-[760px] text-[clamp(3rem,5.5vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-text-primary">
                            A clearer website for a{" "}
                            <span className="text-primary">local locksmith.</span>
                        </h1>
                    </div>

                    {/* Context */}
                    <div>
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            A website project for an independent locksmith serving
                            Bournemouth, Poole and Christchurch, designed to make services
                            easier to understand, strengthen local relevance and create
                            clearer paths to enquiry.
                        </p>
                    </div>
                </div>

                {/* Project details */}
                <div className="mt-14 grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
                    {details.map(([label, value], index) => (
                        <div
                            key={label}
                            className={`py-5 sm:px-6 lg:px-7 ${index > 0 ? "border-t border-border sm:border-t-0" : ""
                                } ${index % 2 !== 0 ? "sm:border-l sm:border-border" : ""
                                } ${index > 1 ? "sm:border-t sm:border-border lg:border-t-0" : ""
                                } ${index > 0 ? "lg:border-l lg:border-border" : ""
                                }`}
                        >
                            <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                {label}
                            </p>

                            <p className="mt-2 text-[14px] font-medium text-text-primary">
                                {value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <div className="mt-7">
                    <Link
                        href="/work"
                        className="group inline-flex items-center text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                    >
                        <span className="mr-2 transition-transform group-hover:-translate-x-1">
                            ←
                        </span>
                        All selected work
                    </Link>
                </div>
            </div>
        </section>
    );
}