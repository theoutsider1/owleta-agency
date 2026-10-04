export default function RedesignFocus() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                {/* Intro */}
                <div className="max-w-[820px]">
                    <div className="mb-6 flex items-center gap-3">
                        <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-primary"
                        />

                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                            What a redesign can improve
                        </p>
                    </div>

                    <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                        Design, functionality and SEO{" "}
                        <span className="text-primary">
                            need to work together.
                        </span>
                    </h2>

                    <p className="mt-7 max-w-[680px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                        Improving how a website looks is only one part of a redesign. We
                        also consider how people use it, what the website needs to do and
                        what should be protected or improved for search.
                    </p>
                </div>

                {/* Connected focus areas */}
                <div className="mt-14 grid gap-10 md:mt-16 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-8">
                    <FocusArea
                        label="Design"
                        title="Make the experience clearer."
                        description="Improve the visual hierarchy, content flow and customer journey so people can understand the business and find what they need more easily."
                        signals={[
                            "Visual hierarchy",
                            "Customer journey",
                            "Mobile experience",
                        ]}
                    />

                    <Connector />

                    <FocusArea
                        label="Functionality"
                        title="Make the website easier to use."
                        description="Review the actions and features customers rely on, from enquiries and forms to functionality that supports the business."
                        signals={[
                            "Forms",
                            "Features",
                            "Integrations",
                        ]}
                    />

                    <Connector />

                    <FocusArea
                        label="SEO"
                        title="Protect and strengthen search foundations."
                        description="Consider the structure, existing search value and technical changes needed when pages, content or URLs are redesigned."
                        signals={[
                            "Site structure",
                            "Search value",
                            "Technical SEO",
                        ]}
                    />
                </div>

                {/* Connection takeaway */}
                <div className="mt-12 flex flex-col gap-5 md:mt-14 md:flex-row md:items-center md:gap-6">
                    <div
                        aria-hidden="true"
                        className="flex flex-1 items-center gap-3"
                    >
                        <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span className="h-px flex-1 bg-border" />
                    </div>

                    <p className="text-[15px] leading-6 text-text-secondary md:shrink-0 md:whitespace-nowrap md:text-[16px]">
                        One website. Three connected parts of the same customer experience.
                    </p>
                </div>
            </div>
        </section>
    );
}

function FocusArea({
    label,
    title,
    description,
    signals,
}: {
    label: string;
    title: string;
    description: string;
    signals: string[];
}) {
    return (
        <div className="min-w-0">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                {label}
            </p>

            <h3 className="mt-5 max-w-[310px] text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                {title}
            </h3>

            <p className="mt-3 max-w-[340px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                {description}
            </p>

            <div className="mt-7 space-y-3">
                {signals.map((signal) => (
                    <div
                        key={signal}
                        className="flex items-center gap-3"
                    >
                        <span
                            aria-hidden="true"
                            className="h-1 w-1 rounded-full bg-text-muted"
                        />

                        <span className="text-[11px] font-medium uppercase tracking-[0.13em] text-text-muted">
                            {signal}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Connector() {
    return (
        <div
            aria-hidden="true"
            className="hidden items-center lg:flex"
        >
            <span className="h-px w-10 bg-border" />
            <span className="h-1.5 w-1.5 rounded-full border border-text-muted" />
            <span className="h-px w-10 bg-border" />
        </div>
    );
}