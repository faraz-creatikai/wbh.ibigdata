interface PageHeaderProps {
    title: string;
    subtitles?: string[];
}

export default function PageHeader({ title, subtitles = [] }: PageHeaderProps) {
    return (
        <div className="relative flex items-center gap-4 py-1 w-fit">

            {/* Glow blob behind title */}
            <div
                className="absolute -inset-x-3 -inset-y-2 rounded-2xl opacity-[0.07] dark:opacity-[0.12] blur-xl pointer-events-none"
                style={{ background: "var(--color-primary)" }}
            />

            {/* Icon mark */}
            <div
                className="relative shrink-0 flex items-center justify-center size-9 rounded-xl"
                style={{
                    background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary, var(--color-primary)))",
                    boxShadow: "0 3px 14px -3px color-mix(in srgb, var(--color-primary) 50%, transparent)",
                }}
            >
                {/* Grid dot pattern */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    {[0,5,10].map(x =>
                        [0,5,10].map(y => (
                            <rect key={`${x}-${y}`} x={x} y={y} width="2" height="2" rx="0.5" fill="white" opacity="0.9" />
                        ))
                    )}
                </svg>
            </div>

            {/* Text block */}
            <div className="relative flex items-baseline gap-0 flex-wrap">
                <h1
                    className="text-[1.2rem] font-bold tracking-[-0.02em] text-gray-900 max-sm:dark:text-white/90 leading-none"
                >
                    {title}
                </h1>

                {subtitles.length > 0 && (
                    <div className="flex items-center gap-1 ml-2">
                        {subtitles.map((sub, index) => (
                            <span key={sub + index} className="flex items-center gap-1">
                                {/* Chevron separator */}
                                <svg
                                    width="12" height="12" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2.5"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    className="text-gray-300 max-sm:dark:text-white/20 shrink-0"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                                <span
                                    className="text-[12px] font-semibold px-2 py-0.5 rounded-md tracking-wide"
                                    style={{
                                        color: "var(--color-primary)",
                                        background: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                                    }}
                                >
                                    {sub}
                                </span>
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}