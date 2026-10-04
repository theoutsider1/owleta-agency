import Link from "next/link";

export default function ProblemSection() {
    const problems = [
        {
            number: "01",
            title: "People visit, but don’t enquire.",
            description:
                "Your website gets attention, but too few visitors take the next step. That might mean calling, filling in a form or getting in touch.",
        },
        {
            number: "02",
            title: "You’re difficult to find.",
            description:
                "Potential customers are searching for what you offer, but competitors are showing up before you do.",
        },
        {
            number: "03",
            title: "The experience gets in the way.",
            description:
                "Slow pages, confusing navigation or a frustrating mobile experience can make people leave before they act.",
        },
        {
            number: "04",
            title: "Something is quietly broken.",
            description:
                "A form that doesn’t send, a button that goes nowhere or a broken link can cost enquiries without being obvious.",
        },
    ];

    return (
        <section className="relative pt-16 pb-8 md:pt-20 md:pb-10 lg:pt-24 lg:pb-12">
            <div className="site-container">
                <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
                    {/* Left: sticky statement */}
                    <div>
                        <div className="lg:sticky lg:top-28">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                                    When a website underperforms
                                </p>
                            </div>

                            <h2 className="max-w-[560px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
                                Your website can
                                <br />
                                look fine and still
                                <br />
                                <span className="text-primary">
                                    lose you business.
                                </span>
                            </h2>

                            <p className="mt-8 max-w-[500px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
                                A website doesn’t need to be completely broken to
                                underperform. Small problems can make it harder for people
                                to find you, trust you or get in touch.
                            </p>
                        </div>
                    </div>

                    {/* Right: diagnostic sequence */}
                    <div className="border-t border-border">
                        {problems.map((problem) => (
                            <div
                                key={problem.number}
                                className="group grid gap-5 border-b border-border py-8 transition-colors md:grid-cols-[52px_1fr] md:py-10"
                            >
                                <span className="font-mono text-[11px] text-text-subtle transition-colors group-hover:text-primary">
                                    {problem.number}
                                </span>

                                <div>
                                    <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                                        {problem.title}
                                    </h3>

                                    <p className="mt-3 max-w-[580px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                        {problem.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Diagnostic transition */}
                <div className="relative mt-14 overflow-hidden py-12 md:mt-16 md:py-16 lg:mt-20 lg:py-20">
                    <div className="mx-auto max-w-[1040px]">
                        {/* Journey / diagnostic line */}
                        <div className="relative mx-auto max-w-[900px] px-4 md:px-10">
                            {/* Labels */}
                            <div className="mb-5 flex items-center justify-between">
                                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
                                    Visit
                                </span>

                                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
                                    Enquiry
                                </span>
                            </div>

                            {/* Signal line */}
                            <div className="relative h-[88px]">
                                {/* Base line */}
                                <div className="absolute left-0 right-0 top-[10px] h-px bg-border" />

                                {/* Left signal */}
                                <div className="absolute left-0 top-[8px] h-[5px] w-[5px] rounded-full bg-text-muted" />

                                {/* Right signal */}
                                <div className="absolute right-0 top-[8px] h-[5px] w-[5px] rounded-full bg-text-muted" />

                                {/* Friction point */}
                                <div className="absolute left-1/2 top-[3px] -translate-x-1/2">
                                    <div className="relative flex h-[15px] w-[15px] items-center justify-center">
                                        <span className="absolute h-[15px] w-[15px] rounded-full border border-primary/40" />
                                        <span className="h-[5px] w-[5px] rounded-full bg-primary" />
                                    </div>
                                </div>

                                {/* Drop line */}
                                <div className="absolute left-1/2 top-[18px] h-[28px] w-px -translate-x-1/2 bg-gradient-to-b from-primary/70 to-primary/10" />

                                {/* Diagnostic label */}
                                <div className="absolute left-1/2 top-[54px] -translate-x-1/2 whitespace-nowrap">
                                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                                        Friction found
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Resolution */}
                        <div className="mx-auto mt-8 max-w-[760px] text-center md:mt-12">
                            <p className="text-[clamp(2rem,3.4vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.04em]">
                                Sometimes the answer is a new website.
                                <br className="hidden sm:block" />{" "}
                                <span className="text-primary">
                                    Sometimes it isn&apos;t.
                                </span>
                            </p>

                            <p className="mx-auto mt-6 max-w-[500px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
                                The first step is finding out what&apos;s actually getting
                                in the way.
                            </p>

                            <Link
                                href="/services/website-audit/?service=check#request"
                                className="group mt-7 inline-flex cursor-pointer items-center text-[15px] font-semibold text-primary transition-colors hover:text-primary-hover"
                            >
                                Get a website check
                                <span className="ml-2 transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}