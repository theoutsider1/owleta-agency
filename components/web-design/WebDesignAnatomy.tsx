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

export default function WebDesignAnatomy() {
    return (
        <section className="section-space">
            <div className="site-container">
                {/* Intro */}
                <div className="max-w-3xl">
                    <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-[#ff5a1f]">
                        What goes into the website
                    </p>

                    <h2 className="text-[clamp(2.5rem,4vw,4.2rem)] font-medium leading-[0.98] tracking-[-0.045em] text-white">
                        Built as one connected experience.
                    </h2>

                    <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 md:text-[17px]">
                        Design, development, search foundations and measurement work better
                        when they're considered together from the start. We bring them
                        together around the journey your customers need to take.                 </p>
                </div>

                {/* Anatomy */}
                <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">
                    {/* Capability list */}
                    <div className="grid gap-x-10 md:grid-cols-2">
                        {capabilities.map((capability) => (
                            <div
                                key={capability.number}
                                className="border-t border-white/[0.1] py-7"
                            >
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="text-xs font-medium text-[#ff5a1f]">
                                        {capability.number}
                                    </span>

                                    <span
                                        aria-hidden="true"
                                        className="h-px w-6 bg-white/[0.15]"
                                    />
                                </div>

                                <h3 className="text-xl font-medium tracking-[-0.025em] text-white md:text-[22px]">
                                    {capability.title}
                                </h3>

                                <p className="mt-3 max-w-sm text-base leading-7 text-white/55">
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
                        <div className="absolute -inset-5 border border-white/[0.04] md:-inset-8" />

                        {/* Website frame */}
                        <div className="relative overflow-hidden rounded-xl border border-white/[0.12] bg-[#f2f2f0] shadow-2xl shadow-black/40">                            {/* Browser bar */}
                            <div className="flex h-11 items-center gap-2 border-b border-black/[0.08] bg-[#e8e8e5] px-4">
                                <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
                                <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
                                <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]" />

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
                                    <div className="h-2 w-20 rounded-full bg-[#ff5a1f]/70" />

                                    <div className="mt-5 h-4 w-[82%] rounded-full bg-black/70" />
                                    <div className="mt-2.5 h-4 w-[65%] rounded-full bg-black/55" />

                                    <div className="mt-5 h-2 w-[72%] rounded-full bg-black/[0.12]" />
                                    <div className="mt-2 h-2 w-[55%] rounded-full bg-black/[0.12]" />

                                    <div className="mt-7 flex gap-3">
                                        <div className="h-9 w-28 rounded-md bg-[#ff5a1f]" />
                                        <div className="h-9 w-24 rounded-md border border-white/[0.12]" />
                                    </div>
                                </div>

                                {/* Content blocks */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="h-24 rounded-lg border border-black/[0.08] bg-black/[0.025] p-4">
                                        <div className="h-2 w-10 rounded-full bg-black/45" />
                                        <div className="mt-3 h-1.5 w-[75%] rounded-full bg-black/[0.1]" />
                                        <div className="mt-2 h-1.5 w-[55%] rounded-full bg-black/[0.1]" />
                                    </div>

                                    <div className="h-24 rounded-lg border border-white/[0.08] bg-black/[0.025] p-4">
                                        <div className="h-2 w-12 rounded-full bg-black/[0.025]" />
                                        <div className="mt-3 h-1.5 w-[70%] rounded-full bg-black/[0.1]" />
                                        <div className="mt-2 h-1.5 w-[60%] rounded-full bg-black/[0.1]" />
                                    </div>
                                </div>

                                {/* Conversion path */}
                                <div className="mt-5 flex items-center gap-3 border-t border-black/[0.08] pt-5">
                                    <span className="h-2 w-2 rounded-full bg-black/20" />
                                    <span className="h-px flex-1 bg-black/[0.1]" />
                                    <span className="h-2 w-2 rounded-full bg-[#ff5a1f]" />
                                </div>
                            </div>
                        </div>

                        {/* Measurement signal */}
                        <div className="absolute -bottom-5 right-4 flex items-center gap-2 rounded-md border border-white/[0.1] bg-[#111] px-3 py-2 shadow-xl md:-right-5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]" />
                            <span className="text-xs font-medium text-white/65">
                                Action measured
                            </span>
                        </div>
                    </div>
                </div>

                {/* Related routes */}
                <div className="mt-14 pt-8 md:mt-16 md:pt-10 lg:mt-20">
                    <div className="mb-10 max-w-4xl md:mb-14">
                        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[#ff5a1f]">
                            Keep improving
                        </p>

                        <h3 className="text-[clamp(2rem,3.5vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-white">
                            Need more than a new website?
                        </h3>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 md:text-[17px]">
                            Explore the services that can help improve, strengthen and support what
                            comes next.
                        </p>
                    </div>

                    <div className="grid gap-px overflow-hidden rounded-xl bg-white/[0.08] md:grid-cols-3">
                        {[
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
                        ].map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden bg-[#0d0d0d] p-7 transition-colors duration-300 hover:bg-[#111] md:p-8"
                            >
                                {/* Hover graphic */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                >
                                    <div
                                        className="absolute -right-8 -top-8 h-44 w-44 opacity-40"
                                        style={{
                                            backgroundImage:
                                                "radial-gradient(circle, rgba(255,255,255,0.28) 1px, transparent 1px)",
                                            backgroundSize: "12px 12px",
                                        }}
                                    />

                                    <div className="absolute right-10 top-10 h-2 w-2 rounded-full bg-[#ff5a1f]" />

                                    <div className="absolute right-10 top-[43px] h-px w-16 origin-right scale-x-0 bg-[#ff5a1f]/50 transition-transform duration-500 group-hover:scale-x-100" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/40 transition-colors group-hover:text-white/55">
                                        {item.label}
                                    </p>

                                    <p className="mt-4 max-w-[250px] text-lg font-medium leading-7 text-white">
                                        {item.text}
                                    </p>
                                </div>

                                <span className="relative z-10 mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-white/65 transition-colors group-hover:text-[#ff5a1f]">
                                    {item.action}

                                    <span
                                        aria-hidden="true"
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    >
                                        →
                                    </span>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}