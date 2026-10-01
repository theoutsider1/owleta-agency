const signals = [
    {
        number: "01",
        title: "Service",
        text: "What they need",
    },
    {
        number: "02",
        title: "Bournemouth",
        text: "Where they need it",
    },
    {
        number: "03",
        title: "Relevance",
        text: "Why your page fits",
    },
];

export default function BournemouthSearchJourney() {
    return (
        <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
            <div className="border border-border">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border px-6 py-4">
                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                        Bournemouth search
                    </span>

                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-primary">
                        Local intent
                    </span>
                </div>

                {/* Search */}
                <div className="border-b border-border px-6 py-7">
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                        Someone searches
                    </p>

                    <div className="mt-4 border border-border px-4 py-4">
                        <p className="text-[15px] leading-6 text-text-primary md:text-[16px]">
                            service + Bournemouth
                        </p>
                    </div>
                </div>

                {/* Signals */}
                <div>
                    {signals.map((signal) => (
                        <div
                            key={signal.number}
                            className="grid grid-cols-[42px_1fr_auto] items-center gap-4 border-b border-border px-6 py-5 last:border-b-0"
                        >
                            <span className="text-[10px] font-medium text-text-muted">
                                {signal.number}
                            </span>

                            <div>
                                <p className="text-[14px] font-semibold text-text-primary">
                                    {signal.title}
                                </p>

                                <p className="mt-1 text-[13px] leading-5 text-text-muted">
                                    {signal.text}
                                </p>
                            </div>

                            <span className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                    ))}
                </div>

                {/* Outcome */}
                <div className="border-t border-border px-6 py-6">
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                        Goal
                    </p>

                    <p className="mt-2 text-[20px] font-semibold leading-7 tracking-[-0.025em] text-text-primary">
                        Stronger visibility in Bournemouth
                    </p>
                </div>

                {/* Footer */}
                <div className="border-t border-border px-6 py-4">
                    <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-text-muted">
                        Search intent → Bournemouth → relevance
                    </p>
                </div>
            </div>
        </div>
    );
}