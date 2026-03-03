'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { posts, comments as allComments, Comment } from '@/app/blog-feed/components/mockData';

export default function PostPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params?.slug as string;

    const post = posts.find((p) => p.slug === slug && p.status === 'published');
    const initialComments = allComments.filter((c) => c.postSlug === slug);

    const [comments, setComments] = useState<Comment[]>(initialComments);
    const [authorInput, setAuthorInput] = useState('');
    const [textInput, setTextInput] = useState('');
    const [submitted, setSubmitted] = useState(false);

    if (!post) {
        return (
            <main className="min-h-screen paper-texture flex flex-col items-center justify-center px-6">
                <p className="font-playfair text-2xl" style={{ color: '#2C1810' }}>
                    This page doesn't exist.
                </p>
                <Link href="/blog-feed" className="mt-4 font-dm text-sm" style={{ color: '#C9847A' }}>
                    ← Back to the blog
                </Link>
            </main>
        );
    }

    const handleComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (!authorInput.trim() || !textInput.trim()) return;
        const newComment: Comment = {
            id: `c${Date.now()}`,
            postSlug: slug,
            author: authorInput.trim(),
            text: textInput.trim(),
            timestamp: 'Just now',
        };
        setComments((prev) => [...prev, newComment]);
        setAuthorInput('');
        setTextInput('');
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    const handleDelete = (id: string) => {
        setComments((prev) => prev.filter((c) => c.id !== id));
    };

    return (
        <main className="min-h-screen paper-texture" style={{ fontFamily: 'Lora, serif' }}>

            {/* Minimal navbar */}
            <nav
                className="sticky top-0 z-30 flex items-center justify-between px-6 py-4"
                style={{ background: 'rgba(253, 246, 240, 0.92)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #E8C5B0' }}
            >
                <Link href="/blog-feed" className="font-playfair italic text-lg" style={{ color: '#2C1810' }}>
                    Among Soft Things
                </Link>
                <button
                    onClick={() => router.back()}
                    className="font-dm text-xs tracking-wide"
                    style={{ color: '#C9847A' }}
                >
                    ← Back
                </button>
            </nav>

            {/* Hero */}
            <div
                className="w-full flex items-end px-6 pb-10 pt-20"
                style={{ background: post.imageGradient, minHeight: '320px' }}
            >
                <div className="max-w-2xl mx-auto w-full">
                    <span className="tag-pill mb-4 inline-block">{post.category}</span>
                    <h1
                        className="font-playfair text-4xl md:text-5xl font-normal leading-tight mb-4"
                        style={{ color: '#2C1810' }}
                    >
                        {post.title}
                    </h1>
                    <p className="font-dm text-xs tracking-wide" style={{ color: '#8B7355' }}>
                        {post.date} &nbsp;·&nbsp; {post.readTime} min read
                    </p>
                </div>
            </div>

            {/* Body */}
            <article className="max-w-2xl mx-auto px-6 py-14">
                <p
                    className="font-lora text-lg leading-reading mb-8 italic"
                    style={{ color: '#8B7355' }}
                >
                    {post.excerpt}
                </p>

                <div
                    className="prose-blockquote mb-8"
                >
                    {post.content}
                </div>

                <p
                    className="font-lora text-base leading-reading"
                    style={{ color: '#2C1810', lineHeight: '1.9' }}
                >
                    {post.content}
                </p>

                {/* Divider */}
                <div
                    className="text-center my-14 font-dm text-sm tracking-widest"
                    style={{ color: '#D4B8AC' }}
                    aria-hidden="true"
                >
                    — ✦ —
                </div>

                {/* Comments */}
                <section>
                    <h2
                        className="font-playfair text-2xl font-normal mb-8"
                        style={{ color: '#2C1810' }}
                    >
                        Thoughts
                    </h2>

                    {comments.length === 0 ? (
                        <p
                            className="font-lora italic text-sm mb-10"
                            style={{ color: '#A89080' }}
                        >
                            Be the first to leave a thought.
                        </p>
                    ) : (
                        <div className="flex flex-col gap-6 mb-12">
                            {comments.map((c) => (
                                <div
                                    key={c.id}
                                    className="group flex gap-4 items-start p-4 rounded-2xl"
                                    style={{ background: '#FAF0E8' }}
                                >
                                    <div
                                        className="w-9 h-9 rounded-full flex items-center justify-center font-dm font-semibold text-sm flex-shrink-0"
                                        style={{ background: '#F2D7D0', color: '#C9847A' }}
                                    >
                                        {c.author[0]}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="font-dm font-semibold text-sm" style={{ color: '#2C1810' }}>
                                                {c.author}
                                            </span>
                                            <div className="flex items-center gap-3">
                                                <span className="font-dm text-xs" style={{ color: '#A89080' }}>
                                                    {c.timestamp}
                                                </span>
                                                <button
                                                    onClick={() => handleDelete(c.id)}
                                                    className="opacity-0 group-hover:opacity-100 transition-opacity font-dm text-xs"
                                                    style={{ color: '#C9847A' }}
                                                    title="Delete comment"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        </div>
                                        <p
                                            className="font-lora text-sm mt-1 leading-relaxed"
                                            style={{ color: '#5C4033' }}
                                        >
                                            {c.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Comment form */}
                    <form onSubmit={handleComment} className="flex flex-col gap-5">
                        <input
                            type="text"
                            value={authorInput}
                            onChange={(e) => setAuthorInput(e.target.value)}
                            placeholder="your name"
                            className="input-underline"
                            required
                        />
                        <textarea
                            value={textInput}
                            onChange={(e) => setTextInput(e.target.value)}
                            placeholder="leave a thought..."
                            rows={3}
                            required
                            className="input-underline resize-none"
                            style={{ paddingTop: '10px' }}
                        />
                        <div className="flex items-center gap-4">
                            <button
                                type="submit"
                                className="font-dm font-medium text-sm tracking-wide text-white rounded-full px-7 py-2.5 transition-all duration-300"
                                style={{ background: '#C9847A', boxShadow: '0 4px 16px rgba(201,132,122,0.3)' }}
                                onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.background = '#b8726a')}
                                onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.background = '#C9847A')}
                            >
                                Leave a thought
                            </button>
                            {submitted && (
                                <span
                                    className="font-lora italic text-sm animate-fade-in"
                                    style={{ color: '#8B7355' }}
                                >
                                    Thank you ✦
                                </span>
                            )}
                        </div>
                    </form>
                </section>
            </article>

            {/* Footer ornament */}
            <div
                className="text-center pb-10 font-dm text-xs tracking-widest"
                style={{ color: '#D4B8AC', letterSpacing: '0.15em' }}
                aria-hidden="true"
            >
                — among soft things —
            </div>
        </main>
    );
}