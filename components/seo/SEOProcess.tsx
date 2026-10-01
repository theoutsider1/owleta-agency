// components/seo/SEOProcess.tsx

const steps = [
    {
        number: "01",
        title: "Understand",
        text: "Start with the business, the website and the customers you want to reach through organic search.",
    },
    {
        number: "02",
        title: "Research",
        text: "Look at relevant searches, existing visibility, competitors and the opportunities that make sense for the website.",
    },
    {
        number: "03",
        title: "Improve",
        text: "Strengthen the pages, content, internal structure and technical foundations that deserve attention.",
    },
    {
        number: "04",
        title: "Measure",
        text: "Review search performance and use what the data shows to guide the next useful improvements.",
    },
];

export default function SEOProcess() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                {/* Intro */}
                <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                How we approach SEO
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Improve with a reason,{" "}
                            <span className="text-primary">not at random.</span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-[620px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            SEO should not begin with changing pages simply because something
                            might help. We start by understanding what matters, then use
                            research and performance data to decide where effort is better
                            spent.
                        </p>
                    </div>
                </div>

                {/* Process */}
                <div className="relative mt-16">
                    {/* Connecting line */}
                    <div
                        className="absolute left-0 right-0 top-[5px] hidden h-px bg-border lg:block"
                        aria-hidden="true"
                    />

                    <div className="grid gap-10 lg:grid-cols-4 lg:gap-0">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className="relative border-b border-border pb-10 last:border-b-0 last:pb-0 lg:border-b-0 lg:border-r lg:px-8 lg:pb-0 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                            >
                                {/* Marker */}
                                <div className="relative z-10 flex items-center gap-4 lg:block">
                                    <span className="block h-[11px] w-[11px] rounded-full border-[3px] border-background bg-primary" />

                                    <span className="text-[10px] font-medium text-text-muted lg:mt-5 lg:block">
                                        {step.number}
                                    </span>
                                </div>

                                <div className="mt-6 lg:mt-8">
                                    <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        {step.text}
                                    </p>
                                </div>

                                {/* Direction indicator */}
                                {index < steps.length - 1 && (
                                    <span
                                        aria-hidden="true"
                                        className="absolute right-[-5px] top-[-5px] z-20 hidden bg-background px-2 text-[13px] text-text-muted lg:block"
                                    >
                                        →
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Closing principle */}
                <div className="mt-14 border-t border-border pt-7">
                    <p className="max-w-[760px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                        SEO is an ongoing process of understanding what people search for,
                        improving how the website responds to that demand and learning from
                        what happens next.
                    </p>
                </div>
            </div>
        </section>
    );
}