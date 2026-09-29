import Link from "next/link";

export default function BournemouthWebsiteTypes() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                {/* Intro */}
                <div className="max-w-[820px]">
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                            Websites we build
                        </p>
                    </div>

                    <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[1] tracking-[-0.045em]">
                        Different businesses need websites to do{" "}
                        <span className="text-primary">different jobs.</span>
                    </h2>

                    <p className="mt-6 max-w-[680px] text-[16px] leading-7 text-text-secondary md:text-[17px]">
                        Whether you need a new business website, a custom build or a
                        flexible WordPress website, the right approach depends on what your
                        business needs to achieve.
                    </p>
                </div>

                {/* Website options */}
                <div className="mt-12 grid border-y border-border md:grid-cols-2">
                    <WebsiteType
                        label="Business websites"
                        title="A stronger online presence."
                        description="Professional websites built around your services, your customers and the actions you want visitors to take."
                        className="border-b border-border md:border-r"
                    />

                    <WebsiteType
                        label="Custom websites"
                        title="Built around specific requirements."
                        description="A more tailored approach when your website needs custom functionality, integrations or an experience that goes beyond an off-the-shelf structure."
                        className="border-b border-border"
                    />

                    <WebsiteType
                        label="WordPress websites"
                        title="Flexible and easier to manage."
                        description="WordPress websites for businesses that want an established content management system with room to update and grow their content."
                        className="border-b border-border md:border-b-0 md:border-r"
                    />

                    <WebsiteType
                        label="Website redesign"
                        title="Improve what you already have."
                        description="Keep what still works while improving the design, customer journey, performance or search foundations that are holding the website back."
                    />
                </div>

                {/* Two routes */}
                <div className="mt-8 flex flex-col justify-between gap-7 md:flex-row md:items-center">
                    <div className="max-w-[520px]">
                        <p className="text-[16px] font-medium text-text-primary">
                            Know what you need, or still figuring it out?
                        </p>

                        <p className="mt-2 text-[14px] leading-6 text-text-secondary">
                            Start a project if you already have something in mind, or let us
                            look at your existing website first.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-5">
                        <Link
                            href="/contact"
                            className="inline-flex items-center rounded-[9px] bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover"
                        >
                            Start a project
                            <span className="ml-3">→</span>
                        </Link>

                        <Link
                            href="/website-check"
                            className="group inline-flex items-center text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                        >
                            Get a website check
                            <span className="ml-2 transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WebsiteType({
    label,
    title,
    description,
    className = "",
}: {
    label: string;
    title: string;
    description: string;
    className?: string;
}) {
    return (
        <div className={`px-0 py-8 md:p-9 ${className}`}>
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-primary">
                {label}
            </p>

            <h3 className="mt-8 max-w-[430px] text-[clamp(1.5rem,2.2vw,2.1rem)] font-medium leading-[1.1] tracking-[-0.03em] text-text-primary">
                {title}
            </h3>

            <p className="mt-4 max-w-[470px] text-[14px] leading-6 text-text-secondary">
                {description}
            </p>
        </div>
    );
}