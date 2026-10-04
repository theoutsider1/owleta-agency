export default function SEOSearchJourney() {
    return (
        <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:ml-auto">
            <div className="overflow-hidden rounded-[12px] border border-border bg-background">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border px-5 py-4">
                    <div className="flex items-center gap-2">
                        <span
                            aria-hidden="true"
                            className="h-2 w-2 rounded-full bg-primary"
                        />

                        <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-text-muted">
                            Organic search
                        </span>
                    </div>

                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                        SEO
                    </span>
                </div>

                {/* Search */}
                <div className="border-b border-border px-5 py-6 md:px-6">
                    <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-text-muted">
                        Someone searches
                    </p>

                    <div className="mt-3 flex items-center gap-3 rounded-[9px] border border-border px-4 py-3">
                        <SearchIcon />

                        <span className="text-[15px] leading-6 text-text-secondary">
                            service for my business
                        </span>
                    </div>
                </div>

                {/* Journey */}
                <div className="px-5 py-6 md:px-6">
                    <JourneyStep
                        number="01"
                        label="Search demand"
                        text="Understand what people are looking for."
                    />

                    <Connector />

                    <JourneyStep
                        number="02"
                        label="Right page"
                        text="Match the search with useful, relevant content."
                    />

                    <Connector />

                    <JourneyStep
                        number="03"
                        label="Clear relevance"
                        text="Help search engines understand the page."
                    />

                    <Connector />

                    <JourneyStep
                        number="04"
                        label="Technical access"
                        text="Make sure technical issues are not getting in the way."
                    />

                    {/* Outcome */}
                    <div className="mt-5 flex items-center justify-between gap-5 rounded-[9px] border border-primary/25 bg-primary/[0.03] px-4 py-4">
                        <div>
                            <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-primary">
                                Outcome
                            </p>

                            <p className="mt-1 text-[15px] font-semibold tracking-[-0.02em] text-text-primary">
                                Better organic visibility
                            </p>
                        </div>

                        <span
                            aria-hidden="true"
                            className="text-[20px] text-primary"
                        >
                            →
                        </span>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-border px-5 py-4 md:px-6">
                    <div className="flex items-center gap-2">
                        <span
                            aria-hidden="true"
                            className="h-1 w-1 rounded-full bg-primary"
                        />

                        <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-text-muted">
                            Search → relevance → visibility
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function JourneyStep({
    number,
    label,
    text,
}: {
    number: string;
    label: string;
    text: string;
}) {
    return (
        <div className="grid grid-cols-[34px_1fr] gap-3">
            <span className="pt-0.5 text-[9px] font-medium text-text-muted">
                {number}
            </span>

            <div>
                <p className="text-[14px] font-semibold text-text-primary">
                    {label}
                </p>

                <p className="mt-1 text-[13px] leading-5 text-text-secondary">
                    {text}
                </p>
            </div>
        </div>
    );
}

function Connector() {
    return (
        <div
            aria-hidden="true"
            className="ml-[5px] h-5 border-l border-border"
        />
    );
}

function SearchIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="shrink-0 text-text-muted"
        >
            <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="1.7"
            />

            <path
                d="M16.5 16.5L21 21"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
            />
        </svg>
    );
}