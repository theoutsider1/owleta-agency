export default function RedesignDecision() {
    return (
        <div className="mx-auto w-full max-w-[540px]">
            {/* Existing website */}
            <Node label="Existing website" />

            <VerticalConnector />

            {/* Diagnosis */}
            <div className="mx-auto max-w-[320px] border-y border-border py-5 text-center">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                    Diagnose first
                </p>

                <p className="mt-2 text-[15px] font-medium text-text-primary">
                    Understand what is actually getting in the way.
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
                    <MicroSignal>Customers</MicroSignal>
                    <MicroSignal>Search</MicroSignal>
                    <MicroSignal>Technical</MicroSignal>
                </div>
            </div>

            {/* Branch */}
            <BranchConnector />

            {/* Areas of work */}
            <div className="grid grid-cols-3 border-y border-border">
                <WorkArea label="Design" border />
                <WorkArea label="Functionality" border />
                <WorkArea label="SEO" />
            </div>

            {/* Merge */}
            <MergeConnector />

            {/* Decision */}
            <div className="text-center">
                <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-text-muted">
                    Decide what happens next
                </p>

                <div className="mt-4 flex items-center justify-center">
                    <Decision label="Keep" />

                    <span className="mx-3 h-px w-5 bg-border" />

                    <Decision label="Improve" active />

                    <span className="mx-3 h-px w-5 bg-border" />

                    <Decision label="Rebuild" />
                </div>
            </div>

            <VerticalConnector />

            {/* Outcome */}
            <div className="text-center">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                    Stronger website
                </p>

                <p className="mt-2 text-[15px] font-medium text-text-primary">
                    Better foundation. Clearer journey.
                </p>
            </div>
        </div>
    );
}

function Node({ label }: { label: string }) {
    return (
        <div className="flex justify-center">
            <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-text-muted">
                    {label}
                </p>
            </div>
        </div>
    );
}

function VerticalConnector() {
    return (
        <div className="flex h-10 justify-center">
            <div className="h-full w-px bg-border" />
        </div>
    );
}

function BranchConnector() {
    return (
        <div className="mx-auto mt-1 max-w-[420px]">
            <div className="relative h-12">
                <div className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-border" />

                <div className="absolute left-[16.66%] right-[16.66%] top-6 h-px bg-border" />

                <div className="absolute left-[16.66%] top-6 h-6 w-px bg-border" />
                <div className="absolute left-1/2 top-6 h-6 w-px -translate-x-1/2 bg-border" />
                <div className="absolute right-[16.66%] top-6 h-6 w-px bg-border" />
            </div>
        </div>
    );
}

function MergeConnector() {
    return (
        <div className="mx-auto max-w-[420px]">
            <div className="relative h-12">
                <div className="absolute left-[16.66%] top-0 h-6 w-px bg-border" />
                <div className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-border" />
                <div className="absolute right-[16.66%] top-0 h-6 w-px bg-border" />

                <div className="absolute left-[16.66%] right-[16.66%] top-6 h-px bg-border" />

                <div className="absolute left-1/2 top-6 h-6 w-px -translate-x-1/2 bg-border" />
            </div>
        </div>
    );
}

function WorkArea({
    label,
    border = false,
}: {
    label: string;
    border?: boolean;
}) {
    return (
        <div
            className={`min-w-0 px-2 py-6 text-center ${border ? "border-r border-border" : ""
                }`}
        >
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-primary sm:text-[11px]">
                {label}
            </p>
        </div>
    );
}

function Decision({
    label,
    active = false,
}: {
    label: string;
    active?: boolean;
}) {
    return (
        <div className="flex items-center gap-2">
            <span
                className={`h-1.5 w-1.5 rounded-full ${active ? "bg-primary" : "border border-text-muted"
                    }`}
            />

            <span
                className={`text-[10px] font-medium uppercase tracking-[0.15em] ${active ? "text-primary" : "text-text-muted"
                    }`}
            >
                {label}
            </span>
        </div>
    );
}

function MicroSignal({ children }: { children: React.ReactNode }) {
    return (
        <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-text-muted">
            {children}
        </span>
    );
}