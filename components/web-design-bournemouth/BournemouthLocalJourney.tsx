export default function BournemouthLocalJourney() {
    return (
        <div
            aria-hidden="true"
            className="relative mx-auto w-full max-w-[610px] select-none lg:mx-0"
        >
            <div className="relative flex min-h-[520px] flex-col items-center justify-center">
                {/* Search */}
                <div className="text-center">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-text-muted">
                        Local search
                    </p>

                    <p className="mt-2 text-[13px] text-text-secondary">
                        service in Bournemouth
                    </p>
                </div>

                <Connector />

                {/* Local focal point */}
                <div className="relative w-full">
                    <div className="flex items-center gap-5">
                        <div className="h-px flex-1 bg-border" />

                        <div className="relative text-center">
                            {/* <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_0_5px_rgba(255,90,31,0.08)]" /> */}

                            <p className="text-[clamp(2.8rem,5vw,4.7rem)] font-semibold leading-none tracking-[0.16em] text-text-primary">
                                LOCAL
                            </p>

                            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.22em] text-primary">
                                Bournemouth
                            </p>
                        </div>

                        <div className="h-px flex-1 bg-border" />
                    </div>
                </div>

                <Connector showDot={false} />

                {/* Website intersection */}
                <div className="relative w-full py-8">
                    <div className="absolute left-[16%] right-[16%] top-1/2 h-px bg-border" />

                    <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-border" />

                    <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-5">
                        <JourneyPoint
                            label="Right service"
                            description="What they need"
                        />

                        <div className="relative bg-background px-5 py-3 text-center">
                            <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />

                            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                                Your website
                            </p>
                        </div>

                        <JourneyPoint
                            label="Local relevance"
                            description="Where they need it"
                        />
                    </div>
                </div>

                <Connector />

                {/* Customer action */}
                <div className="text-center">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-text-muted">
                        Customer action
                    </p>

                    <div className="mt-3 flex items-center justify-center gap-5">
                        <Outcome label="Call" />

                        <span className="h-1 w-1 rounded-full bg-border" />

                        <Outcome label="Enquiry" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Connector({ showDot = true }: { showDot?: boolean }) {
    return (
        <div className="relative h-14 w-px bg-border">
            {showDot && (
                <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary" />
            )}
        </div>
    );
}

function JourneyPoint({
    label,
    description,
}: {
    label: string;
    description: string;
}) {
    return (
        <div className="text-center">
            <span className="mx-auto block h-1.5 w-1.5 rounded-full bg-primary" />

            <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.12em] text-text-primary">
                {label}
            </p>

            <p className="mt-1.5 text-[11px] text-text-muted">
                {description}
            </p>
        </div>
    );
}

function Outcome({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

            <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-text-secondary">
                {label}
            </span>
        </div>
    );
}