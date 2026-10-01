import Image from "next/image";

const challenges = [
    {
        number: "01",
        title: "Make the services clearer",
        description:
            "Visitors needed to understand quickly what help was available, from emergency lockouts to lock changes, repairs and other residential locksmith services.",
    },
    {
        number: "02",
        title: "Focus the local coverage",
        description:
            "The website needed a clearer relationship with the areas the business actually wanted to serve, particularly Bournemouth, Poole and Christchurch.",
    },
    {
        number: "03",
        title: "Create a stronger enquiry path",
        description:
            "For someone who may need a locksmith quickly, contact options and the next step needed to be obvious without making visitors search through the website.",
    },
];

export default function LocksmithChallenge() {
    return (
        <section className="section-space border-t border-border">
            <div className="site-container">
                {/* Challenge introduction */}
                <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                The challenge
                            </p>
                        </div>

                        <h2 className="max-w-[620px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary">
                            Turn a broad website into a{" "}
                            <span className="text-primary">
                                more focused local journey.
                            </span>
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-[650px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                            The project was not simply about giving the business a new visual
                            design. The website needed to communicate the locksmith&apos;s
                            services more clearly, focus attention on the areas that mattered
                            most and make it easier for potential customers to take action.
                        </p>
                    </div>
                </div>

                {/* Challenge body */}
                <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
                    {/* Project visual */}
                    <div>
                        <div className="flex items-center justify-between border-b border-border pb-3">
                            <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                Website
                            </span>

                            <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                                Bournemouth · UK
                            </span>
                        </div>

                        <Image
                            src="/work/bournemouth-locksmith.webp"
                            alt="Bournemouth locksmith website"
                            width={1600}
                            height={900}
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="mt-4 h-auto w-full"
                        />
                    </div>

                    {/* Challenges */}
                    <div className="border-t border-border">
                        {challenges.map((challenge) => (
                            <div
                                key={challenge.number}
                                className="grid grid-cols-[38px_1fr] gap-4 border-b border-border py-6 first:pt-5"
                            >
                                <span className="pt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                                    {challenge.number}
                                </span>

                                <div>
                                    <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                        {challenge.title}
                                    </h3>

                                    <p className="mt-2 max-w-[520px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        {challenge.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}