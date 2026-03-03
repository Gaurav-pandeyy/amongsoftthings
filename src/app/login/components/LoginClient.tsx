'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginClient() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (!email.trim() || !password.trim()) {
            setError('Please fill in both fields.');
            return;
        }
        setLoading(true);
        // Mock auth — any credentials work
        setTimeout(() => {
            setLoading(false);
            router.push('/blog-feed');
        }, 1000);
    };

    return (
        <main
            className="min-h-screen paper-texture flex flex-col items-center justify-center px-6 py-16"
            style={{ fontFamily: 'Lora, serif' }}
        >
            {/* Ambient decorations */}
            <div
                className="absolute top-16 right-12 text-3xl opacity-8 animate-float"
                aria-hidden="true"
                style={{ animationDelay: '1.5s' }}
            >
                🌿
            </div>
            <div
                className="absolute bottom-24 left-10 text-2xl opacity-8 animate-float"
                aria-hidden="true"
                style={{ animationDelay: '0.5s' }}
            >
                🌸
            </div>

            <div className="w-full max-w-sm flex flex-col items-center">
                {/* Blog name */}
                <div className="animate-fade-in-up text-center mb-12">
                    <div
                        className="font-dm text-2xs uppercase tracking-widest mb-3"
                        style={{ color: '#A89080', letterSpacing: '0.2em' }}
                    >
                        welcome back to
                    </div>
                    <h1
                        className="font-playfair italic text-3xl md:text-4xl font-normal"
                        style={{ color: '#2C1810' }}
                    >
                        Among Soft Things
                    </h1>
                    <div
                        className="mt-3 mx-auto"
                        style={{
                            width: '40px',
                            height: '1px',
                            background: 'linear-gradient(90deg, transparent, #C9847A, transparent)',
                        }}
                    />
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="animate-fade-in-up delay-200 w-full flex flex-col gap-8"
                    noValidate
                >
                    {/* Email field */}
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="email"
                            className="font-dm text-2xs uppercase tracking-widest"
                            style={{ color: '#A89080', letterSpacing: '0.15em' }}
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="input-underline"
                            autoComplete="email"
                            aria-required="true"
                        />
                    </div>

                    {/* Password field */}
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="password"
                            className="font-dm text-2xs uppercase tracking-widest"
                            style={{ color: '#A89080', letterSpacing: '0.15em' }}
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="your password"
                            className="input-underline"
                            autoComplete="current-password"
                            aria-required="true"
                        />
                    </div>

                    {/* Error message */}
                    {error && (
                        <p
                            className="font-dm text-xs text-center animate-fade-in"
                            style={{ color: '#C9847A' }}
                            role="alert"
                        >
                            {error}
                        </p>
                    )}

                    {/* Forgot password */}
                    <div className="text-right -mt-4">
                        <button
                            type="button"
                            className="font-dm text-xs transition-colors duration-200"
                            style={{ color: '#A89080' }}
                            onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#C9847A'}
                            onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#A89080'}
                        >
                            Forgot password?
                        </button>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="font-dm font-medium text-sm tracking-wide text-white rounded-full px-8 py-3 mt-2 transition-all duration-300 disabled:opacity-60"
                        style={{
                            background: '#C9847A',
                            boxShadow: '0 4px 20px rgba(201, 132, 122, 0.3)',
                        }}
                        onMouseEnter={(e) => {
                            if (!loading) (e.target as HTMLButtonElement).style.background = '#b8726a';
                        }}
                        onMouseLeave={(e) => {
                            if (!loading) (e.target as HTMLButtonElement).style.background = '#C9847A';
                        }}
                    >
                        {loading ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>

                {/* Back to gate */}
                <p
                    className="animate-fade-in-up delay-400 font-dm text-xs mt-10"
                    style={{ color: '#A89080' }}
                >
                    Don&rsquo;t have access?{' '}
                    <Link
                        href="/gate-page"
                        className="transition-colors duration-200"
                        style={{ color: '#C9847A' }}
                        onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = '#2C1810'}
                        onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = '#C9847A'}
                    >
                        Request it here →
                    </Link>
                </p>
            </div>
        </main>
    );
}