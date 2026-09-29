import Image from "next/image";
import Link from "next/link";

export default function SelectedWork() {
    return (
        <section
            id="work"
            className="relative overflow-hidden pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
            <div className="site-container">
                {/* Section intro */}
                <div className="grid gap-8 border-t border-border pt-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                Selected work
                            </p>
                        </div>

                        <h2 className="max-w-[650px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.05em]">
                            Built around real
                            <br />
                            <span className="text-white/65">business goals.</span>
                        </h2>
                    </div>

                    <div className="max-w-[500px] lg:justify-self-end">
                        <p className="text-[16px] leading-7 text-text-secondary md:text-[17px]">
                            Different businesses need different things from their websites.
                            Here are two projects shaped around what each business actually
                            needed to achieve.
                        </p>

                        <Link
                            href="/work"
                            className="group mt-6 inline-flex items-center text-[13px] font-medium text-text-primary"
                        >
                            View all work
                            <span className="ml-2 transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </div>
                </div>

                {/* =====================================================
            PROJECT 01
            Text → Visual
        ====================================================== */}

                <article className="grid gap-12 py-24 md:py-28 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">
                    <div className="max-w-[440px]">
                        <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-primary">
                            Bournemouth · Poole · Christchurch
                        </p>

                        <h3 className="mt-5 text-[clamp(2.2rem,3.4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
                            Lock Key
                            <br />
                            Locksmiths
                        </h3>

                        <p className="mt-7 text-[16px] leading-7 text-text-secondary">
                            A local locksmith website built around a clearer journey from
                            search to service, then from service to enquiry.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-text-muted">
                            <span>Web Design</span>
                            <span>Local SEO</span>
                            <span>Conversion Tracking</span>
                        </div>

                        <Link
                            href="/work/lock-key-locksmiths"
                            className="group mt-9 inline-flex items-center text-[13px] font-medium text-text-primary"
                        >
                            View project
                            <span className="ml-2 transition-transform group-hover:translate-x-1">
                                ↗
                            </span>
                        </Link>
                    </div>

                    <ProjectPreview
                        src="/work/locksmith-homepage.png"
                        alt="Lock Key Locksmiths website homepage"
                        theme="dark"
                    />
                </article>

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* =====================================================
            PROJECT 02
            Visual → Text
        ====================================================== */}

                <article className="grid gap-12 py-24 md:py-28 lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:gap-20">
                    <ProjectPreview
                        src="/work/german-language-centre-homepage.png"
                        alt="German Language Centre Arabic website homepage"
                        theme="light"
                    />

                    <div className="max-w-[430px] lg:justify-self-end">
                        <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-primary">
                            Education · Arabic-language website
                        </p>

                        <h3 className="mt-5 text-[clamp(2.2rem,3.4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
                            German
                            <br />
                            Language Centre
                        </h3>

                        <p className="mt-7 text-[16px] leading-7 text-text-secondary">
                            An Arabic-language website designed to present the centre,
                            courses and learning opportunities clearly to prospective
                            students.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-text-muted">
                            <span>Web Design</span>
                            <span>Development</span>
                        </div>

                        <Link
                            href="/work/german-language-centre"
                            className="group mt-9 inline-flex items-center text-[13px] font-medium text-text-primary"
                        >
                            View project
                            <span className="ml-2 transition-transform group-hover:translate-x-1">
                                ↗
                            </span>
                        </Link>
                    </div>
                </article>
            </div>
        </section>
    );
}

function ProjectPreview({
    src,
    alt,
    theme,
}: {
    src: string;
    alt: string;
    theme: "dark" | "light";
}) {
    const isLight = theme === "light";

    return (
        <div className="w-full lg:max-w-[760px]">
            <div
                className={`group overflow-hidden rounded-[16px] border shadow-[0_24px_70px_rgba(0,0,0,0.28)] ${isLight
                    ? "border-black/10 bg-[#f1f1ef]"
                    : "border-border-strong bg-surface"
                    }`}
            >
                {/* Small browser chrome */}
                <div
                    className={`flex h-10 items-center px-4 ${isLight
                        ? "border-b border-black/[0.08] bg-[#e9e9e7]"
                        : "border-b border-border bg-surface-raised"
                        }`}
                >
                    <div className="flex gap-1.5">
                        <span
                            className={`h-1.5 w-1.5 rounded-full ${isLight ? "bg-black/15" : "bg-white/15"
                                }`}
                        />
                        <span
                            className={`h-1.5 w-1.5 rounded-full ${isLight ? "bg-black/15" : "bg-white/15"
                                }`}
                        />
                        <span
                            className={`h-1.5 w-1.5 rounded-full ${isLight ? "bg-black/15" : "bg-white/15"
                                }`}
                        />
                    </div>

                    <div
                        className={`mx-auto hidden h-4 w-[34%] rounded sm:block ${isLight ? "bg-black/[0.06]" : "bg-white/[0.05]"
                            }`}
                    />
                </div>

                {/* Controlled preview height */}
                <div
                    className={`relative aspect-[16/10] overflow-hidden ${isLight ? "bg-white" : "bg-[#05080d]"
                        }`}
                >
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.012]"
                    />

                    <div
                        className={`pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t ${isLight
                            ? "from-white/20 to-transparent"
                            : "from-black/20 to-transparent"
                            }`}
                    />
                </div>
            </div>
        </div>
    );
}