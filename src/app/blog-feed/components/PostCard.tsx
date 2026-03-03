'use client';

import Link from 'next/link';
import type { Post } from './mockData';

interface Props {
    post: Post;
    index: number;
}

const categoryColors: Record<string, string> = {
    grief: '#D4A99A',
    love: '#C9847A',
    'little things': '#B8A898',
    letters: '#C4967A',
    seasons: '#A89878',
    memory: '#B4A090',
    silence: '#A8A098',
    loss: '#C0A090',
    gardens: '#A0A880',
    october: '#B89870',
};

export default function PostCard({ post, index }: Props) {
    const categoryColor = categoryColors[post.category] || '#C9847A';

    return (
        <Link href={`/post/${post.slug}`} className="block">
            <article
                className="post-card rounded-2xl overflow-hidden animate-fade-in-up"
                style={{
                    background: '#FAF0E8',
                    boxShadow: '0 4px 24px rgba(44, 24, 16, 0.07)',
                    animationDelay: `${index * 0.1}s`,
                }}
                tabIndex={0}
                role="article"
                aria-label={`Post: ${post.title}`}
            >
                {/* Gradient image area */}
                <div
                    className="w-full h-40 relative overflow-hidden"
                    style={{ background: post.imageGradient }}
                    aria-hidden="true"
                >
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(44,24,16,0.1) 0%, transparent 40%)',
                        }}
                    />
                    <div className="absolute top-4 left-4">
                        <span
                            className="font-dm text-white rounded-full px-3 py-1"
                            style={{
                                background: 'rgba(44, 24, 16, 0.25)',
                                backdropFilter: 'blur(8px)',
                                fontSize: '10px',
                                fontWeight: 500,
                                letterSpacing: '0.05em',
                                textTransform: 'lowercase',
                            }}
                        >
                            {post.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <span
                            className="tag-pill"
                            style={{ background: '#F2D7D0', color: categoryColor }}
                        >
                            {post.category}
                        </span>
                        <span
                            className="font-dm text-xs"
                            style={{ color: '#A89080', fontSize: '11px' }}
                        >
                            {post.readTime} min read
                        </span>
                    </div>

                    <h2
                        className="font-playfair text-xl md:text-2xl font-normal leading-tight mb-3"
                        style={{ color: '#2C1810' }}
                    >
                        {post.title}
                    </h2>

                    <p
                        className="font-lora text-sm leading-relaxed line-clamp-2 mb-4"
                        style={{ color: '#8B7355' }}
                    >
                        {post.excerpt}
                    </p>

                    <div
                        className="flex items-center justify-between pt-4"
                        style={{ borderTop: '1px solid #F2D7D0' }}
                    >
                        <span
                            className="font-dm text-xs"
                            style={{ color: '#A89080', fontSize: '11px' }}
                        >
                            {post.date}
                        </span>
                        <div className="flex items-center gap-1.5">
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#C9847A"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                            <span
                                className="font-dm text-xs"
                                style={{ color: '#C9847A', fontSize: '11px' }}
                            >
                                {post.commentCount}
                            </span>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}