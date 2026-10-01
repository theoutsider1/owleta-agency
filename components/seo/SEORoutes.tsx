// components/seo/SEORoutes.tsx

import Link from "next/link";

const routes = [
    {
        number: "01",
        label: "SEO services",
        title: "Broader organic visibility",
        text: "For businesses that want to strengthen how their website is structured, understood and discovered across relevant organic searches.",
        detail: "You are here",
        href: null,
    },
    {
        number: "02",
        label: "Local SEO",
        title: "Visibility where you do business",
        text: "For businesses that depend on customers in specific locations and want to improve how they appear across relevant local searches.",
        detail: "Explore local SEO",
        href: "/services/local-seo",
    },
    {
        number: "03",
        label: "SEO Bournemouth",
        title: "SEO for Bournemouth businesses",
        text: "For businesses serving Bournemouth that need a more focused approach to local search visibility and website relevance.",
        detail: "Explore SEO Bournemouth",
        href: "/services/seo-bournemouth",
    },
];

export default function SEORoutes() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                {/* Intro */}
                <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Find the right route
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            The right SEO approach depends on{" "}
                            <span className="text-primary">where visibility matters.</span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-[620px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Some businesses need broader organic visibility. Others depend
                            heavily on customers searching within a particular area. The
                            starting point should reflect how people actually find and choose
                            your business.
                        </p>
                    </div>
                </div>

                {/* Routes */}
                <div className="mt-16 grid gap-y-10 border-y border-border py-10 lg:grid-cols-3 lg:gap-y-0 lg:py-0">
                    {routes.map((route) => {
                        const content = (
                            <div className="flex h-full flex-col lg:px-10 lg:py-10 xl:px-12">
                                <div className="flex items-center justify-between gap-5">
                                    <span className="text-[10px] font-medium text-text-muted">
                                        {route.number}
                                    </span>

                                    <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                        {route.label}
                                    </span>
                                </div>

                                <div className="mt-8">
                                    <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                        {route.title}
                                    </h3>

                                    <p className="mt-4 text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        {route.text}
                                    </p>
                                </div>

                                <div className="mt-auto pt-9">
                                    {route.href ? (
                                        <span className="inline-flex items-center text-[14px] font-medium text-text-secondary transition-colors group-hover:text-text-primary">
                                            {route.detail}

                                            <span className="ml-2 transition-transform group-hover:translate-x-1">
                                                →
                                            </span>
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-primary">
                                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                            {route.detail}
                                        </span>
                                    )}
                                </div>
                            </div>
                        );

                        return route.href ? (
                            <Link
                                key={route.number}
                                href={route.href}
                                className="group border-b border-border pb-10 transition-colors hover:bg-black/[0.015] lg:border-b-0 lg:border-r lg:pb-0">
                                {content}
                            </Link>
                        ) : (
                            <div
                                key={route.number}
                                className="border-b border-border pb-10 lg:border-b-0 lg:border-r lg:pb-0">
                                {content}
                            </div>
                        );
                    })}
                </div>

                {/* Clarification */}
                <div className="mt-8 grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
                    <div aria-hidden="true" />

                    <div className="flex gap-4 border-l-2 border-primary pl-5">
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            Local SEO is not a separate version of your website. It focuses the
                            wider SEO strategy on the locations and local searches that matter
                            to your business.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}