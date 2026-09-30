const items = [
    {
        label: "Website",
        value: "Working",
    },
    {
        label: "Content",
        value: "Current",
    },
    {
        label: "Issues",
        value: "Supported",
    },
    {
        label: "Improvements",
        value: "Ongoing",
    },
];

export default function MaintenanceStatus() {
    return (
        <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
            <div className="border border-border bg-background">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border px-5 py-4">
                    <div className="flex items-center gap-3">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-30" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>

                        <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-text-muted">
                            Website care
                        </p>
                    </div>

                    <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-text-muted">
                        Ongoing
                    </span>
                </div>

                {/* Status */}
                <div className="px-5 py-7 md:px-7">
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-text-muted">
                        Your website
                    </p>

                    <p className="mt-3 text-[26px] font-medium tracking-[-0.035em] text-text-primary md:text-[30px]">
                        Looked after, not left behind.
                    </p>

                    <div className="mt-8">
                        {items.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center justify-between gap-6 border-t border-border py-4"
                            >
                                <span className="text-[12px] text-text-secondary">
                                    {item.label}
                                </span>

                                <div className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    <span className="text-[11px] font-medium text-text-primary">
                                        {item.value}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center gap-3 border-t border-border px-5 py-4 md:px-7">
                    <span className="h-px flex-1 bg-border" />

                    <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-text-muted">
                        Maintain · Support · Improve
                    </span>
                </div>
            </div>
        </div>
    );
}