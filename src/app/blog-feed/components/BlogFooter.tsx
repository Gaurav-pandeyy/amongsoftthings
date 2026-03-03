export default function BlogFooter() {
    return (
        <footer
            className="w-full mt-16 py-10 px-4 md:px-8"
            style={{ borderTop: '1px solid #E8C5B0' }}
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left: blog name */}
                <span
                    className="font-playfair italic text-lg"
                    style={{ color: '#8B7355' }}
                >
                    Among Soft Things
                </span>

                {/* Center: ornament */}
                <div
                    className="font-lora text-xs italic"
                    style={{ color: '#C9847A' }}
                    aria-hidden="true"
                >
                    — ✦ —
                </div>

                {/* Right: legal */}
                <div className="flex items-center gap-4">
                    <span
                        className="font-dm text-xs"
                        style={{ color: '#A89080', fontSize: '11px' }}
                    >
                        © 2026 Among Soft Things
                    </span>
                    <span style={{ color: '#E8C5B0' }}>·</span>
                    <button
                        className="font-dm text-xs transition-colors duration-200"
                        style={{ color: '#A89080', fontSize: '11px' }}
                        onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#C9847A'}
                        onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#A89080'}
                    >
                        Privacy
                    </button>
                    <span style={{ color: '#E8C5B0' }}>·</span>
                    <button
                        className="font-dm text-xs transition-colors duration-200"
                        style={{ color: '#A89080', fontSize: '11px' }}
                        onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#C9847A'}
                        onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#A89080'}
                    >
                        Terms
                    </button>
                </div>
            </div>
        </footer>
    );
}