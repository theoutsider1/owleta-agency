
import Image from "next/image";
import Link from "next/link";

const improvements = [
  "Local search structure",
  "Mobile enquiry journey",
  "Technical SEO",
  "Conversion measurement",
];

export default function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative overflow-hidden pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28"
    >
      <div className="site-container">
        {/* Section introduction */}
        <div className="grid gap-8 border-t border-border pt-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />

              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                Latest work
              </p>
            </div>

            <h2
              id="work-heading"
              className="max-w-[650px] text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em]"
            >
              Built around real
              <br />
              <span className="text-primary">business goals.</span>
            </h2>
          </div>

          <div className="max-w-[500px] lg:justify-self-end">
            <p className="text-[17px] leading-7 text-text-secondary md:text-[18px]">
              A website should help people find what they need and take the
              next step. Here&apos;s a recent project built with that in mind.
            </p>
          </div>
        </div>

        {/* Featured project */}
        <article className="grid gap-12 pt-16 md:pt-20 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">
          <div className="max-w-[440px]">
            <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-primary">
              Bournemouth · Poole · Christchurch
            </p>

            <h3 className="mt-5 text-[clamp(2.2rem,3.4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
              Lock Key
              <br />
              Locksmiths
            </h3>

            <p className="mt-7 text-[17px] leading-7 text-text-secondary md:text-[18px]">
              A website for an independent locksmith, designed to help
              local customers find relevant services and get in touch
              quickly.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-text-muted">
              <span>Web Design</span>
              <span>Local SEO</span>
              <span>Conversion Tracking</span>
            </div>

            <Link
              href="/work/bournemouth-locksmith"
              className="group mt-9 inline-flex items-center text-[14px] font-medium text-text-primary"
            >
              View case study
              <span
                aria-hidden="true"
                className="ml-2 transition-transform group-hover:translate-x-1"
              >
                ↗
              </span>
            </Link>
          </div>

          {/* Website screenshot */}
          <div className="w-full lg:max-w-[760px]">
            <div className="overflow-hidden rounded-[16px] border border-border-strong bg-surface shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
              {/* Browser chrome */}
              <div className="flex h-10 items-center border-b border-border bg-surface-raised px-4">
                <div className="flex gap-1.5" aria-hidden="true">
                  {[0, 1, 2].map((item) => (
                    <span
                      key={item}
                      className="h-1.5 w-1.5 rounded-full bg-white/15"
                    />
                  ))}
                </div>

                <div
                  aria-hidden="true"
                  className="mx-auto hidden h-4 w-[34%] rounded bg-white/[0.05] sm:block"
                />
              </div>

              <div className="relative overflow-hidden bg-[#05080d]">
                <Image
                  src="/work/bournemouth-locksmith.webp"
                  alt="Homepage of the Lock Key Locksmiths website"
                  width={1600}
                  height={1000}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="h-auto w-full"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/20 to-transparent"
                />
              </div>
            </div>
          </div>
        </article>

        {/* Project context */}
        <div className="mt-14 grid gap-8 border-t border-border pt-8 md:mt-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="max-w-[440px]">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
              The challenge
            </p>

            <p className="mt-4 text-[19px] font-medium leading-[1.4] tracking-[-0.025em] text-text-primary md:text-[21px]">
              Make it easier for local customers to reach the right
              service and take action.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
              What we worked on
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {improvements.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border-strong px-3 py-1.5 text-[11px] text-text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>

            <Link
              href="/work/bournemouth-locksmith"
              className="group mt-7 inline-flex items-center text-[14px] font-medium text-text-primary"
            >
              Explore the project
              <span
                aria-hidden="true"
                className="ml-2 transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
