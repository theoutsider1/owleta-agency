const findings = [
    {
        priority: "HIGH",
        title: "Enquiry path",
        detail: "Friction found before contact",
    },
    {
        priority: "MEDIUM",
        title: "Search structure",
        detail: "Important pages need stronger signals",
    },
    {
        priority: "LOW",
        title: "Content clarity",
        detail: "Opportunity to improve the next step",
    },
];

export default function AuditSnapshot() {
    return (
        <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
            <div className="border border-white/15 bg-[#0b0b0b]">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                    <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
                            Owlixir
                        </p>
                        <p className="mt-1 text-sm font-medium text-white">
                            Website Audit
                        </p>
                    </div>

                    <span className="text-[10px] uppercase tracking-[0.16em] text-white/35">
                        Report preview
                    </span>
                </div>

                <div className="p-5 sm:p-6">
                    <div className="border-b border-white/10 pb-6">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">
                            Audit overview
                        </p>

                        <div className="mt-4 grid grid-cols-3 gap-3">
                            <Metric value="02" label="High" />
                            <Metric value="04" label="Medium" />
                            <Metric value="03" label="Opportunities" />
                        </div>
                    </div>

                    <div className="divide-y divide-white/10">
                        {findings.map((finding) => (
                            <div
                                key={finding.title}
                                className="grid grid-cols-[72px_1fr] gap-4 py-5"
                            >
                                <span
                                    className={`pt-0.5 text-[10px] font-medium tracking-[0.14em] ${finding.priority === "HIGH"
                                            ? "text-[#ff5a1f]"
                                            : "text-white/35"
                                        }`}
                                >
                                    {finding.priority}
                                </span>

                                <div>
                                    <p className="text-sm font-medium text-white">
                                        {finding.title}
                                    </p>
                                    <p className="mt-1 text-sm leading-6 text-white/45">
                                        {finding.detail}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-2 border-t border-white/10 pt-5">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">
                                    Deliverable
                                </p>
                                <p className="mt-1 text-sm text-white/70">
                                    Findings · Evidence · Priorities · Actions
                                </p>
                            </div>

                            <span className="shrink-0 border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-white/40">
                                PDF report
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-white/[0.06]" />
        </div>
    );
}

function Metric({ value, label }: { value: string; label: string }) {
    return (
        <div className="border border-white/10 p-3">
            <p className="text-xl font-medium tracking-[-0.03em] text-white">
                {value}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/35">
                {label}
            </p>
        </div>
    );
}