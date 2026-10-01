// components/seo/SEOFoundations.tsx

const foundations = [
    {
        number: "01",
        title: "Search intent",
        text: "Understand what potential customers are searching for, why they are searching and which searches are relevant to the business.",
        detail: "Demand · intent · relevance",
    },
    {
        number: "02",
        title: "Pages & content",
        text: "Give important searches a useful destination with pages that clearly answer what people are looking for.",
        detail: "Services · structure · content",
    },
    {
        number: "03",
        title: "Technical foundations",
        text: "Make it easier for search engines to access, crawl and understand the pages that should be visible.",
        detail: "Crawling · indexing · performance",
    },
    {
        number: "04",
        title: "Internal structure",
        text: "Connect related pages in a way that helps visitors and search engines understand how the website fits together.",
        detail: "Hierarchy · relationships · internal links",
    },
];

export default function SEOFoundations() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                {/* Intro */}
                <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                What SEO involves
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            SEO is more than adding{" "}
                            <span className="text-primary">keywords to pages.</span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-[620px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Stronger search visibility comes from connecting what people are
                            looking for with useful pages, clear website structure and solid
                            technical foundations.
                        </p>
                    </div>
                </div>

                {/* System */}
                <div className="relative mt-14">
                    {/* Desktop connection */}
                    <div
                        aria-hidden="true"
                        className="absolute left-0 right-0 top-[6px] hidden h-px bg-border lg:block"
                    />

                    <div className="grid lg:grid-cols-4">
                        {foundations.map((item) => (
                            <div
                                key={item.number}
                                className="relative border-b border-border py-7 first:pt-0 lg:border-b-0 lg:border-r lg:px-7 lg:py-0 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                            >
                                {/* Point */}
                                <div className="relative z-10 mb-6 flex items-center gap-3 lg:block">
                                    <span className="block h-3 w-3 rounded-full border-[3px] border-background bg-primary" />

                                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted lg:mt-5 lg:block">
                                        {item.number}
                                    </span>
                                </div>

                                <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                    {item.text}
                                </p>

                                <p className="mt-5 text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                    {item.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Relationship */}
                <div className="mt-14 border-y border-border py-7">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:gap-6">
                        {[
                            "Search demand",
                            "Relevant page",
                            "Clear structure",
                            "Accessible website",
                            "Organic visibility",
                        ].map((item, index, array) => (
                            <div key={item} className="flex items-center gap-4 md:gap-6">
                                <span
                                    className={
                                        index === array.length - 1
                                            ? "text-[11px] font-semibold uppercase tracking-[0.14em] text-primary"
                                            : "text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted"
                                    }
                                >
                                    {item}
                                </span>

                                {index < array.length - 1 && (
                                    <span
                                        aria-hidden="true"
                                        className="text-[14px] text-text-muted"
                                    >
                                        →
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}