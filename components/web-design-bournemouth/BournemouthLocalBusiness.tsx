import Link from "next/link";

export default function BournemouthLocalBusiness() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                {/* Intro */}
                <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
                    <div>
                        <div className="flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                When the website gets in the way
                            </p>
                        </div>
                    </div>

                    <div className="max-w-[820px]">
                        <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Bournemouth customers are searching.
                            <br />
                            <span className="text-primary">
                                Are they reaching you?
                            </span>
                        </h2>

                        <p className="mt-7 max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Your website can be online and still make it difficult for local
                            customers to find you, trust you or take the next step.
                        </p>
                    </div>
                </div>

                {/* Problems */}
                <div className="mt-14 grid border-y border-border md:mt-16 md:grid-cols-3">
                    <Problem
                        number="01"
                        title="Not being found"
                        description="Your services are not clearly connected to the searches and areas that matter to your business."
                    />

                    <Problem
                        number="02"
                        title="Losing trust"
                        description="People arrive, but the website does not quickly give them enough reason to choose your business."
                    />

                    <Problem
                        number="03"
                        title="Losing the enquiry"
                        description="The customer is ready, but calling, enquiring or booking takes more effort than it should."
                        last
                    />
                </div>

                {/* Action */}
                <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
                    <div className="max-w-[570px]">
                        <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                            Not sure where the problem is?
                        </h3>

                        <p className="mt-3 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                            We can take a focused look at your website and identify what may
                            be getting in the way.
                        </p>
                    </div>

                    <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                        <Link
                            href="/services/website-audit/?service=check#request"
                            className="inline-flex cursor-pointer items-center justify-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                        >
                            Get a website check
                        </Link>

                        <Link
                            href="/contact"
                            className="group inline-flex cursor-pointer items-center gap-2 text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                        >
                            Starting from scratch?

                            <span
                                aria-hidden="true"
                                className="transition-transform group-hover:translate-x-1"
                            >
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Problem({
    number,
    title,
    description,
    last = false,
}: {
    number: string;
    title: string;
    description: string;
    last?: boolean;
}) {
    return (
        <div
            className={`py-8 md:px-8 md:py-9 ${last
                    ? ""
                    : "border-b border-border md:border-b-0 md:border-r"
                }`}
        >
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-primary">
                {number}
            </span>

            <h3 className="mt-5 text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                {title}
            </h3>

            <p className="mt-3 max-w-[330px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                {description}
            </p>
        </div>
    );
}