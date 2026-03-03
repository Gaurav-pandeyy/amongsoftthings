'use client';

import { useState } from 'react';
import Link from 'next/link';
import BotanicalIllustration from './BotanicalIllustration';

export default function GatePageClient() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;
        setLoading(true);
        // Mock submit
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1200);
    };

    return (
        <main
            className="min-h-screen paper-texture flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden"
            style={{ fontFamily: 'Lora, serif' }}
        >
            {/* Ambient background petals */}
            <div
                className="absolute top-12 left-10 text-4xl opacity-10 animate-float"
                aria-hidden="true"
                style={{ animationDelay: '0s' }}
            >
                🌸
            </div>
            <div
                className="absolute bottom-20 right-16 text-3xl opacity-10 animate-float"
                aria-hidden="true"
                style={{ animationDelay: '2s' }}
            >
                🌿
            </div>
            <div
                className="absolute top-1/3 right-8 text-2xl opacity-8 animate-float"
                aria-hidden="true"
                style={{ animationDelay: '1s' }}
            >
                🌷
            </div>

            <div className="w-full max-w-md flex flex-col items-center text-center">
                {/* Botanical SVG */}
                <div className="animate-fade-in-up mb-8">
                    <BotanicalIllustration />
                </div>

                {/* Title */}
                <h1
                    className="animate-fade-in-up delay-100 font-playfair text-3xl md:text-4xl font-normal leading-tight mb-4"
                    style={{ color: '#2C1810' }}
                >
                    You&rsquo;ve found something private.
                </h1>

                {/* Subtitle */}
                <p
                    className="animate-fade-in-up delay-200 font-lora italic text-base leading-relaxed mb-10"
                    style={{ color: '#8B7355', maxWidth: '320px' }}
                >
                    This space is curated. Access is by invitation only.
                </p>

                {/* Form or Success state */}
                {submitted ? (
                    <div
                        className="animate-fade-in w-full rounded-2xl p-8"
                        style={{ background: '#FAF0E8', border: '1px solid #E8C5B0' }}
                    >
                        <div className="text-3xl mb-4">✦</div>
                        <p
                            className="font-playfair italic text-lg mb-2"
                            style={{ color: '#2C1810' }}
                        >
                            Your request has been sent.
                        </p>
                        <p
                            className="font-lora text-sm"
                            style={{ color: '#8B7355' }}
                        >
                            If this space feels right for you, you&rsquo;ll hear from me soon.
                        </p>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="animate-fade-in-up delay-300 w-full flex flex-col gap-6"
                    >
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your email address"
                                required
                                className="input-underline text-center"
                                aria-label="Email address for access request"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="font-dm font-medium text-sm tracking-wide text-white rounded-full px-8 py-3 transition-all duration-300 disabled:opacity-60"
                            style={{
                                background: loading ? '#d9a49e' : '#C9847A',
                                boxShadow: '0 4px 16px rgba(201, 132, 122, 0.3)',
                            }}
                            onMouseEnter={(e) => {
                                if (!loading) (e.target as HTMLButtonElement).style.background = '#b8726a';
                            }}
                            onMouseLeave={(e) => {
                                if (!loading) (e.target as HTMLButtonElement).style.background = '#C9847A';
                            }}
                        >
                            {loading ? 'Sending...' : 'Request Access'}
                        </button>
                    </form>
                )}

                {/* Sign in link */}
                <p
                    className="animate-fade-in-up delay-400 font-dm text-xs mt-8"
                    style={{ color: '#A89080' }}
                >
                    Already have access?{' '}
                    <Link
                        href="/login"
                        className="transition-colors duration-200"
                        style={{ color: '#C9847A' }}
                        onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = '#2C1810'}
                        onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = '#C9847A'}
                    >
                        Sign in →
                    </Link>
                </p>
            </div>

            {/* Subtle corner ornament */}
            <div
                className="absolute bottom-6 left-0 right-0 text-center font-dm text-2xs"
                style={{ color: '#D4B8AC', letterSpacing: '0.15em' }}
                aria-hidden="true"
            >
                — among soft things —
            </div>
        </main>
    );
}