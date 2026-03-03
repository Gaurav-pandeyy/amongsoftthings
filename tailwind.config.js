/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                paper: '#FDF6F0',
                'deep-brown': '#2C1810',
                rose: '#C9847A',
                blush: '#E8C5B0',
                taupe: '#8B7355',
                highlight: '#F2D7D0',
                muted: '#A89080',
                surface: '#FAF0E8',
                'rose-dark': '#b8726a',
            },
            fontFamily: {
                playfair: ['Playfair Display', 'serif'],
                lora: ['Lora', 'serif'],
                dm: ['DM Sans', 'sans-serif'],
            },
            fontSize: {
                '2xs': '10px',
            },
            lineHeight: {
                reading: '1.9',
            },
            boxShadow: {
                'card': '0 4px 24px rgba(44, 24, 16, 0.07)',
                'card-hover': '0 12px 40px rgba(44, 24, 16, 0.12)',
                'soft': '0 2px 12px rgba(44, 24, 16, 0.06)',
            },
            borderRadius: {
                'xl': '16px',
                '2xl': '24px',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'float': 'float 4s ease-in-out infinite',
                'slide-down': 'slideDown 0.25s cubic-bezier(0.22, 1, 0.36, 1) forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(24px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-6px)' },
                },
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-8px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}