export default function CustomerJourney() {
    return (
        <div className="relative mx-auto w-full max-w-[620px] lg:mx-0 lg:ml-auto">
            <div className="relative min-h-[560px]">
                {/* Search */}
                <div className="absolute left-[2%] top-[2%] w-[72%] max-w-[390px]">
                    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-primary-hover">
                        01 / Search
                    </p>

                    <div className="flex items-center justify-between rounded-xl border border-border-strong bg-surface-raised/90 px-5 py-4 shadow-2xl backdrop-blur">
                        <span className="text-[14px] text-text-secondary">
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
                <div className="absolute left-[20%] top-[120px] h-[65px] w-px bg-gradient-to-b from-primary/70 to-white/10" />

                {/* Website */}
                <div className="absolute left-[10%] top-[185px] w-[84%]">
                    <div className="overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
                        {/* Browser bar */}
                        <div className="flex h-11 items-center gap-2 border-b border-border px-4">
                            <span className="h-2 w-2 rounded-full bg-white/15" />
                            <span className="h-2 w-2 rounded-full bg-white/15" />
                            <span className="h-2 w-2 rounded-full bg-white/15" />

                            <div className="ml-4 h-5 w-[45%] rounded-md bg-white/[0.05]" />
                        </div>

                        <div className="grid min-h-[240px] grid-cols-[1.15fr_0.85fr]">
                            <div className="flex flex-col justify-center p-7 md:p-9">
                                <p className="mb-4 text-[9px] uppercase tracking-[0.15em] text-primary-hover">
                                    Your website
                                </p>

                                <p className="max-w-[260px] text-[25px] font-semibold leading-[1.08] tracking-[-0.035em] md:text-[30px]">
                                    Clear enough to understand.
                                    <br />
                                    Easy enough to act.
                                </p>

                                <div className="mt-6 h-9 w-28 rounded-lg bg-primary" />
                            </div>

                            <div className="relative overflow-hidden border-l border-border bg-surface-raised">
                                <div className="absolute left-[18%] top-[20%] h-[58%] w-[64%] rounded-xl border border-border bg-white/[0.025]" />
                                <div className="absolute left-[30%] top-[32%] h-2 w-[40%] rounded-full bg-white/15" />
                                <div className="absolute left-[30%] top-[41%] h-2 w-[29%] rounded-full bg-white/[0.08]" />
                                <div className="absolute bottom-[28%] left-[30%] h-8 w-[34%] rounded-md border border-border" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Website → Enquiry connector */}
                <div className="absolute bottom-[83px] right-[24%] h-[55px] w-px bg-gradient-to-b from-white/10 to-primary/60" />

                {/* Enquiry */}
                <div className="absolute bottom-[12px] right-[1%] w-[72%] max-w-[350px]">
                    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-primary-hover">
                        03 / Action
                    </p>

                    <div className="flex items-center gap-4 rounded-xl border border-border-strong bg-surface-raised/95 px-5 py-4 shadow-2xl backdrop-blur">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--primary-border)] bg-[var(--primary-soft)] text-primary-hover">
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