import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        name: "Lock Key Locksmiths",
        context: "Bournemouth · Poole · Christchurch",
        heading: "Designed around how local customers look for a locksmith.",
        description:
            "The website gives individual services and locations clearer routes from search to action, with mobile calls, enquiries and conversion measurement considered as part of the build.",
        services: ["Web Design", "Local SEO", "Conversion Tracking"],
        href: "/work/bournemouth-locksmith",
        image: "/work/bournemouth-locksmith.webp",
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
        image: "/work/german-language-centre.webp",
        alt: "German Language Centre Arabic website homepage",
    },
];

export default function WebDesignWork() {
    return (
        <section className="section-space-tight">
            <div className="site-container">
                {/* Intro */}
                <div className="max-w-4xl">
                    <div className="mb-5 flex items-center gap-3">
                        <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-primary"
                        />

                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                            Web design in practice
                        </p>
                    </div>

                    <h2 className="max-w-4xl text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                        Websites shaped around{" "}
                        <span className="text-primary">
                            the business behind them.
                        </span>
                    </h2>

                    <p className="mt-7 max-w-3xl text-[17px] leading-7 text-text-secondary md:text-[18px]">
                        From a local locksmith serving Bournemouth, Poole and
                        Christchurch to a language centre serving an Arabic-speaking
                        audience, each website is structured around the people using it
                        and what the business needs them to do next.
                    </p>
                    <Link
                        href="/work"
                        className="group mt-6 inline-flex shrink-0 cursor-pointer items-center gap-2 text-[14px] font-medium text-text-primary transition-colors hover:text-primary"
                    >
                        See all work

                        <span
                            aria-hidden="true"
                            className="transition-transform group-hover:translate-x-1"
                        >
                            →
                        </span>
                    </Link>
                </div>

                {/* Projects */}
                <div className="mt-14 md:mt-16">
                    {projects.map((project, index) => (
                        <article
                            key={project.name}
                            className="grid gap-8 border-t border-border py-10 md:py-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16"
                        >
                            {/* Project identity */}
                            <div>
                                <div className="relative aspect-[16/10] max-w-[320px] overflow-hidden rounded-[10px] border border-border bg-surface">
                                    <Image
                                        src={project.image}
                                        alt={project.alt}
                                        fill
                                        sizes="(max-width: 1024px) 320px, 320px"
                                        className="object-cover object-top"
                                    />
                                </div>

                                <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.14em] text-primary">
                                    {String(index + 1).padStart(2, "0")}
                                </p>

                                <h3 className="mt-3 text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                    {project.name}
                                </h3>

                                <p className="mt-2 text-[13px] leading-5 text-text-muted">
                                    {project.context}
                                </p>
                            </div>

                            {/* Project story */}
                            <div className="lg:pt-3">
                                <p className="max-w-2xl text-[clamp(1.6rem,2.5vw,2rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-text-primary">
                                    {project.heading}
                                </p>

                                <p className="mt-5 max-w-2xl text-[17px] leading-7 text-text-secondary md:text-[18px]">
                                    {project.description}
                                </p>

                                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                                    {project.services.map((service) => (
                                        <span
                                            key={service}
                                            className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-muted"
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={project.href}
                                    className="group mt-8 inline-flex cursor-pointer items-center gap-2 text-[14px] font-medium text-text-primary transition-colors hover:text-primary"
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