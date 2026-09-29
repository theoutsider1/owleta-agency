import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        name: "Lock Key Locksmiths",
        context: "Bournemouth · Poole · Christchurch",
        heading: "Designed around how local customers look for a locksmith.",
        description:
            "The website gives individual services and locations clearer routes from search to action, with mobile calls, enquiries and conversion measurement considered as part of the build.",
        services: ["Web Design", "Local SEO", "Conversion Tracking"],
        href: "/work/lock-key-locksmiths",

        // Replace with the same real project image path used on the homepage
        image: "/work/locksmith-homepage.png",
        alt: "Lock Key Locksmiths website homepage",
    },
    {
        name: "German Language Centre",
        context: "Education · Arabic-language website",
        heading:
            "Designed around the information prospective students need.",
        description:
            "The site organises the centre and its course information for an Arabic-speaking audience, with the structure and interface shaped around the content rather than forcing it into a generic template.",
        services: ["Web Design", "Development"],
        href: "/work/german-language-centre",

        // Replace with the actual homepage project image path
        image: "/work/german-language-centre-homepage.png",
        alt: "German Language Centre Arabic website homepage",
    },
];

export default function WebDesignWork() {
    return (
        <section className="section-space-tight">
            <div className="site-container">
                {/* Intro */}
                <div className="max-w-4xl">
                    <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-[#ff5a1f]">
                        Web design in practice
                    </p>

                    <h2 className="max-w-4xl text-[clamp(2.5rem,4vw,4.2rem)] font-medium leading-[0.98] tracking-[-0.045em] text-white">
                        Websites shaped around the business behind them.
                    </h2>

                    <p className="mt-7 max-w-3xl text-base leading-7 text-white/60 md:text-[17px]">
                        From a local locksmith serving Bournemouth, Poole and Christchurch
                        to a language centre serving an Arabic-speaking audience, each
                        website is structured around the people using it and what the
                        business needs them to do next.
                    </p>
                </div>

                {/* Projects */}
                <div className="mt-14 md:mt-16">
                    {projects.map((project, index) => (
                        <article
                            key={project.name}
                            className="grid gap-8 border-t border-white/[0.08] py-10 md:py-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16"
                        >
                            {/* Compact project identity */}
                            <div>
                                <div className="relative aspect-[16/10] max-w-[320px] overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.03]">
                                    <Image
                                        src={project.image}
                                        alt={project.alt}
                                        fill
                                        sizes="(max-width: 1024px) 320px, 320px"
                                        className="object-cover object-top"
                                    />
                                </div>

                                <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-[#ff5a1f]">
                                    {String(index + 1).padStart(2, "0")}
                                </p>

                                <h3 className="mt-3 text-xl font-medium tracking-[-0.02em] text-white">
                                    {project.name}
                                </h3>

                                <p className="mt-2 text-sm text-white/40">
                                    {project.context}
                                </p>
                            </div>

                            {/* What we actually designed around */}
                            <div className="lg:pt-3">
                                <p className="max-w-2xl text-2xl font-medium leading-[1.15] tracking-[-0.03em] text-white md:text-3xl">
                                    {project.heading}
                                </p>

                                <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 md:text-[17px]">
                                    {project.description}
                                </p>

                                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                                    {project.services.map((service) => (
                                        <span
                                            key={service}
                                            className="text-sm text-white/40"
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={project.href}
                                    className="group mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-white transition-colors hover:text-[#ff5a1f]"
                                >
                                    View project
                                    <span
                                        aria-hidden="true"
                                        className="transition-transform group-hover:translate-x-1"
                                    >
                                        →
                                    </span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}