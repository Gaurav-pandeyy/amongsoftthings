export default function BotanicalIllustration() {
    return (
        <svg
            width="120"
            height="100"
            viewBox="0 0 120 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
        >
            {/* Main stem */}
            <path
                d="M60 90 C60 70 58 50 62 30"
                stroke="#C9847A"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
            />
            {/* Left branch */}
            <path
                d="M59 65 C50 58 42 55 36 50"
                stroke="#C9847A"
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
            />
            {/* Right branch */}
            <path
                d="M61 55 C70 48 78 46 84 40"
                stroke="#C9847A"
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
            />
            {/* Left leaf */}
            <path
                d="M36 50 C32 44 28 40 34 36 C40 32 42 40 36 50Z"
                fill="#E8C5B0"
                stroke="#C9847A"
                strokeWidth="0.8"
            />
            {/* Right leaf */}
            <path
                d="M84 40 C88 34 94 30 96 36 C98 42 90 44 84 40Z"
                fill="#E8C5B0"
                stroke="#C9847A"
                strokeWidth="0.8"
            />
            {/* Small left leaf */}
            <path
                d="M59 75 C54 70 50 68 52 64 C54 60 58 64 59 75Z"
                fill="#F2D7D0"
                stroke="#C9847A"
                strokeWidth="0.7"
            />
            {/* Small right leaf */}
            <path
                d="M61 72 C66 67 70 65 72 68 C74 71 68 74 61 72Z"
                fill="#F2D7D0"
                stroke="#C9847A"
                strokeWidth="0.7"
            />
            {/* Flower center */}
            <circle cx="62" cy="26" r="6" fill="#F2D7D0" stroke="#C9847A" strokeWidth="1" />
            {/* Flower petals */}
            <ellipse cx="62" cy="16" rx="4" ry="6" fill="#E8C5B0" stroke="#C9847A" strokeWidth="0.8" />
            <ellipse cx="72" cy="22" rx="6" ry="4" fill="#E8C5B0" stroke="#C9847A" strokeWidth="0.8" />
            <ellipse cx="62" cy="36" rx="4" ry="6" fill="#E8C5B0" stroke="#C9847A" strokeWidth="0.8" />
            <ellipse cx="52" cy="22" rx="6" ry="4" fill="#E8C5B0" stroke="#C9847A" strokeWidth="0.8" />
            {/* Petal diagonals */}
            <ellipse cx="69.5" cy="16.5" rx="4" ry="6" fill="#F2D7D0" stroke="#C9847A" strokeWidth="0.7" transform="rotate(45 69.5 16.5)" />
            <ellipse cx="69.5" cy="35.5" rx="4" ry="6" fill="#F2D7D0" stroke="#C9847A" strokeWidth="0.7" transform="rotate(-45 69.5 35.5)" />
            <ellipse cx="54.5" cy="35.5" rx="4" ry="6" fill="#F2D7D0" stroke="#C9847A" strokeWidth="0.7" transform="rotate(45 54.5 35.5)" />
            <ellipse cx="54.5" cy="16.5" rx="4" ry="6" fill="#F2D7D0" stroke="#C9847A" strokeWidth="0.7" transform="rotate(-45 54.5 16.5)" />
            {/* Flower center dot */}
            <circle cx="62" cy="26" r="2.5" fill="#C9847A" />
            {/* Small dots / seeds */}
            <circle cx="38" cy="70" r="1.5" fill="#E8C5B0" />
            <circle cx="82" cy="60" r="1.5" fill="#E8C5B0" />
            <circle cx="44" cy="80" r="1" fill="#F2D7D0" />
            <circle cx="78" cy="72" r="1" fill="#F2D7D0" />
        </svg>
    );
}