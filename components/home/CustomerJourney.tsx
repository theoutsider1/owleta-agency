export default function CustomerJourney() {
    return (
        <div className="relative mx-auto w-full max-w-[620px] lg:mx-0 lg:ml-auto">
            <div className="relative min-h-[500px] sm:min-h-[530px] lg:min-h-[560px]">
                {/* Search */}
                <div className="absolute left-0 top-[2%] w-[82%] max-w-[390px] sm:left-[2%] sm:w-[72%]">
                    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-primary-hover">
                        01 / Search
                    </p>

                    <div className="flex items-center justify-between rounded-xl border border-border-strong bg-surface-raised/90 px-4 py-3.5 shadow-2xl backdrop-blur sm:px-5 sm:py-4">
                        <span className="text-[13px] text-text-secondary sm:text-[14px]">
                            service near me
                        </span>

                        <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4 text-text-muted"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            aria-hidden="true"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <path d="m20 20-3.5-3.5" />
                        </svg>
                    </div>
                </div>

                {/* Search → Website connector */}
                <div className="absolute left-[18%] top-[108px] h-[52px] w-px bg-gradient-to-b from-primary/70 to-white/10 sm:left-[20%] sm:top-[120px] sm:h-[65px]" />

                {/* Website */}
                <div className="absolute left-[4%] top-[160px] w-[92%] sm:left-[10%] sm:top-[185px] sm:w-[84%]">
                    <div className="overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
                        {/* Browser bar */}
                        <div className="flex h-10 items-center gap-2 border-b border-border px-4 sm:h-11">
                            <span className="h-2 w-2 rounded-full bg-white/15" />
                            <span className="h-2 w-2 rounded-full bg-white/15" />
                            <span className="h-2 w-2 rounded-full bg-white/15" />

                            <div className="ml-3 h-5 w-[45%] rounded-md bg-white/[0.05] sm:ml-4" />
                        </div>

                        <div className="grid min-h-[210px] grid-cols-[1.25fr_0.75fr] sm:min-h-[240px] sm:grid-cols-[1.15fr_0.85fr]">
                            <div className="flex flex-col justify-center p-5 sm:p-7 md:p-9">
                                <p className="mb-3 text-[9px] uppercase tracking-[0.15em] text-primary-hover sm:mb-4">
                                    02 / website
                                </p>

                                <p className="max-w-[260px] text-[20px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[25px] md:text-[30px]">
                                    Clear enough to understand.
                                    <br />
                                    Easy enough to act.
                                </p>

                                <div className="mt-5 h-8 w-24 rounded-lg bg-primary sm:mt-6 sm:h-9 sm:w-28" />
                            </div>

                            <div className="relative overflow-hidden border-l border-border bg-surface-raised">
                                <div className="absolute left-[14%] top-[20%] h-[58%] w-[72%] rounded-xl border border-border bg-white/[0.025] sm:left-[18%] sm:w-[64%]" />
                                <div className="absolute left-[26%] top-[32%] h-2 w-[48%] rounded-full bg-white/15 sm:left-[30%] sm:w-[40%]" />
                                <div className="absolute left-[26%] top-[41%] h-2 w-[36%] rounded-full bg-white/[0.08] sm:left-[30%] sm:w-[29%]" />
                                <div className="absolute bottom-[28%] left-[26%] h-8 w-[42%] rounded-md border border-border sm:left-[30%] sm:w-[34%]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Website → Enquiry connector */}
                <div className="absolute bottom-[72px] right-[20%] h-[45px] w-px bg-gradient-to-b from-white/10 to-primary/60 sm:bottom-[83px] sm:right-[24%] sm:h-[55px]" />

                {/* Enquiry */}
                <div className="absolute bottom-[8px] right-0 w-[82%] max-w-[350px] sm:bottom-[12px] sm:right-[1%] sm:w-[72%]">
                    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-primary-hover">
                        03 / Action
                    </p>

                    <div className="flex items-center gap-3 rounded-xl border border-border-strong bg-surface-raised/95 px-4 py-3.5 shadow-2xl backdrop-blur sm:gap-4 sm:px-5 sm:py-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--primary-border)] bg-[var(--primary-soft)] text-primary-hover sm:h-9 sm:w-9">
                            ✓
                        </span>

                        <div>
                            <p className="text-[13px] font-medium text-text-primary">
                                Enquiry received
                            </p>

                            <p className="mt-0.5 text-[11px] text-text-muted">
                                Customer took the next step
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}