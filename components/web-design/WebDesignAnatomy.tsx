import Link from "next/link";

const capabilities = [
    {
        number: "01",
        title: "Structure & messaging",
        description:
            "Organise the website around what customers need to understand and the actions you want them to take.",
    },
    {
        number: "02",
        title: "Responsive design",
        description:
            "Create an experience that remains clear and easy to use across phones, tablets and larger screens.",
    },
    {
        number: "03",
        title: "Development",
        description:
            "Turn the design into a fast, reliable website using technology suited to the project.",
    },
    {
        number: "04",
        title: "Enquiry journey",
        description:
            "Make calls, forms, bookings or other important actions easy to find and complete.",
    },
    {
        number: "05",
        title: "Search foundations",
        description:
            "Build page structure, metadata, internal linking and technical foundations with search visibility in mind.",
    },
    {
        number: "06",
        title: "Measurement",
        description:
            "Set up the website so important customer actions can be tracked instead of guessed.",
    },
];

const relatedServices = [
    {
        label: "Website redesign",
        text: "Improve what you already have.",
        action: "Explore redesign",
        href: "/services/website-redesign",
    },
    {
        label: "SEO",
        text: "Strengthen how people find your business.",
        action: "Explore SEO",
        href: "/services/seo",
    },
    {
        label: "Website maintenance",
        text: "Keep your website working properly.",
        action: "Explore maintenance",
        href: "/services/website-maintenance",
    },
];

export default function WebDesignAnatomy() {
    return (
        <section className="pb-20 pt-8 md:pb-24 md:pt-10 lg:pb-28 lg:pt-12">
            <div className="site-container">
                {/* Intro */}
                <div className="max-w-3xl">
                    <div className="mb-5 flex items-center gap-3">
                        <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-primary"
                        />

                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                            What goes into the website
                        </p>
                    </div>

                    <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                        Built as one{" "}
                        <span className="text-primary">
                            connected experience.
                        </span>
                    </h2>

                    <p className="mt-7 max-w-2xl text-[17px] leading-7 text-text-secondary md:text-[18px]">
                        Design, development, search foundations and measurement work
                        better when they&apos;re considered together from the start. We
                        bring them together around the journey your customers need to
                        take.
                    </p>
                </div>

                {/* Anatomy */}
                <div className="mt-12 grid gap-12 md:mt-14 lg:mt-16 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">
                    {/* Capability list */}
                    <div className="grid gap-x-10 md:grid-cols-2">
                        {capabilities.map((capability) => (
                            <div
                                key={capability.number}
                                className="border-t border-border py-7"
                            >
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-primary">
                                        {capability.number}
                                    </span>

                                    <span
                                        aria-hidden="true"
                                        className="h-px w-6 bg-border-strong"
                                    />
                                </div>

                                <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                    {capability.title}
                                </h3>

                                <p className="mt-3 max-w-sm text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                    {capability.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Website anatomy visual */}
                    <div
                        aria-hidden="true"
                        className="relative mx-auto w-full max-w-[500px]"
                    >
                        {/* Outer guide */}
                        <div className="absolute -inset-5 md:-inset-8" />

                        {/* Website frame */}
                        <div className="relative overflow-hidden rounded-xl border border-border-strong bg-[#f2f2f0] shadow-2xl shadow-black/40">
                            {/* Browser bar */}
                            <div className="flex h-11 items-center gap-2 border-b border-black/[0.08] bg-[#e8e8e5] px-4">
                                <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
                                <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                                <div className="ml-4 h-1.5 w-24 rounded-full bg-black/[0.08]" />
                            </div>

                            <div className="p-5 md:p-7">
                                {/* Navigation */}
                                <div className="flex items-center justify-between">
                                    <div className="h-2 w-16 rounded-full bg-black/70" />

                                    <div className="flex gap-3">
                                        <div className="h-1.5 w-8 rounded-full bg-black/[0.12]" />
                                        <div className="h-1.5 w-8 rounded-full bg-black/[0.12]" />
                                        <div className="h-1.5 w-8 rounded-full bg-black/[0.12]" />
                                    </div>
                                </div>

                                {/* Hero */}
                                <div className="py-12 md:py-16">
                                    <div className="h-2 w-20 rounded-full bg-primary/70" />

                                    <div className="mt-5 h-4 w-[82%] rounded-full bg-black/70" />
                                    <div className="mt-2.5 h-4 w-[65%] rounded-full bg-black/55" />

                                    <div className="mt-5 h-2 w-[72%] rounded-full bg-black/[0.12]" />
                                    <div className="mt-2 h-2 w-[55%] rounded-full bg-black/[0.12]" />

                                    <div className="mt-7 flex gap-3">
                                        <div className="h-9 w-28 rounded-md bg-primary" />
                                        <div className="h-9 w-24 rounded-md border border-black/[0.12]" />
                                    </div>
                                </div>

                                {/* Content blocks */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="h-24 rounded-lg border border-black/[0.08] bg-black/[0.025] p-4">
                                        <div className="h-2 w-10 rounded-full bg-black/45" />
                                        <div className="mt-3 h-1.5 w-[75%] rounded-full bg-black/[0.1]" />
                                        <div className="mt-2 h-1.5 w-[55%] rounded-full bg-black/[0.1]" />
                                    </div>

                                    <div className="h-24 rounded-lg border border-black/[0.08] bg-black/[0.025] p-4">
                                        <div className="h-2 w-12 rounded-full bg-black/35" />
                                        <div className="mt-3 h-1.5 w-[70%] rounded-full bg-black/[0.1]" />
                                        <div className="mt-2 h-1.5 w-[60%] rounded-full bg-black/[0.1]" />
                                    </div>
                                </div>

                                {/* Conversion path */}
                                <div className="mt-5 flex items-center gap-3 border-t border-black/[0.08] pt-5">
                                    <span className="h-2 w-2 rounded-full bg-black/20" />
                                    <span className="h-px flex-1 bg-black/[0.1]" />
                                    <span className="h-2 w-2 rounded-full bg-primary" />
                                </div>
                            </div>
                        </div>

                        {/* Measurement signal */}
                        <div className="absolute -bottom-5 right-4 flex items-center gap-2 rounded-[8px] border border-border-strong bg-surface px-3 py-2 shadow-xl md:-right-5">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <span className="text-[11px] font-medium text-text-secondary">
                                Action measured
                            </span>
                        </div>
                    </div>
                </div>

                {/* Related routes */}
                <div className="mt-16 pt-12 md:mt-20 md:pt-14">
                    <div className="mb-10 max-w-4xl md:mb-12">
                        <div className="mb-4 flex items-center gap-3">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-primary"
                            />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Keep improving
                            </p>
                        </div>

                        <h3 className="text-[clamp(2rem,3.5vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-text-primary">
                            Need more than a{" "}
                            <span className="text-primary">new website?</span>
                        </h3>

                        <p className="mt-5 max-w-2xl text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Explore the services that can help improve, strengthen and
                            support what comes next.
                        </p>
                    </div>

                    <div className="grid border-y border-border md:grid-cols-3">
                        {relatedServices.map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`group flex min-h-[210px] cursor-pointer flex-col justify-between py-7 transition-colors md:px-7 md:py-8 ${index !== relatedServices.length - 1
                                        ? "border-b border-border md:border-b-0 md:border-r"
                                        : ""
                                    }`}
                            >
                                <div>
                                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                        {item.label}
                                    </p>

                                    <p className="mt-4 max-w-[250px] text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                        {item.text}
                                    </p>
                                </div>

                                <span className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-text-secondary transition-colors group-hover:text-primary">
                                    {item.action}

                                    <span
                                        aria-hidden="true"
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    >
                                        →
                                    </span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}