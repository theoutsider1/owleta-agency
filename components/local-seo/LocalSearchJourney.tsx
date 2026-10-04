const signals = [
    {
        number: "01",
        label: "Service",
        value: "What they need",
    },
    {
        number: "02",
        label: "Location",
        value: "Where they need it",
    },
    {
        number: "03",
        label: "Relevance",
        value: "Why your business fits",
    },
];

export default function LocalSearchJourney() {
    return (
        <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
            <div className="border border-border bg-background">
                {/* Header */}
                <div className="flex items-center justify-between gap-6 border-b border-border px-6 py-4">
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-text-muted">
                        Local search
                    </p>

                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-primary">
                        Nearby intent
                    </span>
                </div>

                {/* Search */}
                <div className="border-b border-border p-6 md:p-7">
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                        Someone searches
                    </p>

                    <div className="mt-4 flex items-center gap-3 border border-border px-4 py-3.5">
                        <span
                            aria-hidden="true"
                            className="h-2 w-2 shrink-0 rounded-full border border-text-muted"
                        />

                        <p className="text-[14px] text-text-secondary md:text-[15px]">
                            service in my area
                        </p>
                    </div>
                </div>

                {/* Signals */}
                <div>
                    {signals.map((signal) => (
                        <div
                            key={signal.number}
                            className="grid grid-cols-[38px_0.72fr_1.28fr] gap-4 border-b border-border px-6 py-5 md:px-7"
                        >
                            <span className="pt-0.5 text-[10px] font-medium text-text-muted">
                                {signal.number}
                            </span>

                            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted">
                                {signal.label}
                            </span>

                            <span className="text-[14px] font-medium text-text-secondary">
                                {signal.value}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Outcome */}
                <div className="px-6 py-6 md:px-7">
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                        Goal
                    </p>

                    <div className="mt-3 flex items-center justify-between gap-6">
                        <p className="text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                            Stronger local visibility
                        </p>

                        <span
                            aria-hidden="true"
                            className="shrink-0 text-primary"
                        >
                            ↗
                        </span>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-border px-6 py-4 md:px-7">
                    <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-text-muted">
                        Search intent → location → relevance
                    </p>
                </div>
            </div>
        </div>
    );
}