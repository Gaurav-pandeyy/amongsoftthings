'use client';

import { useState, useEffect } from 'react';

const quotes = [
    'words are how I hold things',
    'some things only exist in writing',
    'to write is to remember what was almost forgotten',
    'the page is the only place I am fully honest',
    'beauty is in the noticing',
];

export default function HeroBanner() {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % quotes?.length);
                setVisible(true);
            }, 500);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="hero-banner w-full py-16 md:py-24 px-6 flex flex-col items-center justify-center text-center relative"
            style={{ minHeight: '220px' }}
        >
            {/* Decorative top border */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #C9847A, transparent)' }}
            />
            {/* Small botanical accents */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 text-2xl opacity-20 hidden md:block" aria-hidden="true">
                🌿
            </div>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-2xl opacity-20 hidden md:block" aria-hidden="true">
                🌸
            </div>
            <p
                className="font-dm text-2xs uppercase tracking-widest mb-4"
                style={{ color: '#8B7355', letterSpacing: '0.2em' }}
            >
                Among Soft Things
            </p>
            <div
                className="transition-all duration-500"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(8px)',
                }}
            >
                <blockquote
                    className="font-lora italic text-xl md:text-2xl lg:text-3xl"
                    style={{
                        color: '#2C1810',
                        maxWidth: '500px',
                        lineHeight: '1.6',
                    }}
                >
                    &ldquo;{quotes?.[index]}&rdquo;
                </blockquote>
            </div>
            {/* Quote dots indicator */}
            <div className="flex gap-1.5 mt-6">
                {quotes?.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => { setIndex(i); setVisible(true); }}
                        className="rounded-full transition-all duration-300"
                        style={{
                            width: i === index ? '16px' : '6px',
                            height: '6px',
                            background: i === index ? '#C9847A' : '#E8C5B0',
                        }}
                        aria-label={`Quote ${i + 1}`}
                    />
                ))}
            </div>
            {/* Decorative bottom border */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #C9847A, transparent)' }}
            />
        </div>
    );
}