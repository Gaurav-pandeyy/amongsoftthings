'use client';


import { posts, tags, recentPosts } from './mockData';

interface Props {
    activeTag: string | null;
    onTagClick: (tag: string | null) => void;
}

export default function Sidebar({ activeTag, onTagClick }: Props) {
    return (
        <aside className="flex flex-col gap-8 w-full">
            {/* About section */}
            <div
                className="rounded-2xl p-6"
                style={{ background: '#FAF0E8', boxShadow: '0 4px 24px rgba(44, 24, 16, 0.06)' }}
            >
                <div className="flex flex-col items-center text-center gap-3 mb-4">
                    <div
                        className="w-16 h-16 rounded-full flex items-center justify-center font-playfair italic text-2xl text-white"
                        style={{ background: 'linear-gradient(135deg, #C9847A, #E8C5B0)' }}
                        aria-label="Author avatar"
                    >
                        A
                    </div>
                    <div>
                        <p className="font-playfair text-base" style={{ color: '#2C1810' }}>
                            Amara
                        </p>
                        <p
                            className="font-lora italic text-xs mt-1 leading-relaxed"
                            style={{ color: '#8B7355' }}
                        >
                            Writing to remember. Writing to let go.
                        </p>
                    </div>
                </div>
                <div
                    className="h-px w-full mb-4"
                    style={{ background: 'linear-gradient(90deg, transparent, #E8C5B0, transparent)' }}
                />
                <p
                    className="font-lora text-xs leading-relaxed text-center"
                    style={{ color: '#8B7355' }}
                >
                    A private space for words that need a home. If you are reading this, you were invited.
                </p>
            </div>

            {/* Tag cloud */}
            <div
                className="rounded-2xl p-6"
                style={{ background: '#FAF0E8', boxShadow: '0 4px 24px rgba(44, 24, 16, 0.06)' }}
            >
                <h3
                    className="font-playfair text-sm mb-4"
                    style={{ color: '#2C1810' }}
                >
                    Themes
                </h3>
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => onTagClick(null)}
                        className="tag-pill transition-all duration-200"
                        style={{
                            background: activeTag === null ? '#C9847A' : '#F2D7D0',
                            color: activeTag === null ? '#fff' : '#8B7355',
                        }}
                    >
                        all
                    </button>
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => onTagClick(tag === activeTag ? null : tag)}
                            className="tag-pill transition-all duration-200"
                            style={{
                                background: tag === activeTag ? '#C9847A' : '#F2D7D0',
                                color: tag === activeTag ? '#fff' : '#8B7355',
                            }}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Recent posts */}
            <div
                className="rounded-2xl p-6"
                style={{ background: '#FAF0E8', boxShadow: '0 4px 24px rgba(44, 24, 16, 0.06)' }}
            >
                <h3
                    className="font-playfair text-sm mb-4"
                    style={{ color: '#2C1810' }}
                >
                    Recent Entries
                </h3>
                <div className="flex flex-col gap-3">
                    {recentPosts.map((post) => (
                        <div
                            key={post.id}
                            className="flex flex-col gap-0.5 pb-3 cursor-pointer group"
                            style={{ borderBottom: '1px solid #F2D7D0' }}
                        >
                            <span
                                className="font-playfair text-sm leading-tight transition-colors duration-200 group-hover:text-rose-dark"
                                style={{ color: '#2C1810' }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9847A')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#2C1810')}
                            >
                                {post.title}
                            </span>
                            <span
                                className="font-dm text-2xs"
                                style={{ color: '#A89080', fontSize: '10px' }}
                            >
                                {post.date}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative quote */}
            <div
                className="rounded-2xl p-6 text-center"
                style={{ background: 'linear-gradient(135deg, #F5E2D6, #EDD5C5)' }}
            >
                <p
                    className="font-lora italic text-sm leading-relaxed"
                    style={{ color: '#8B7355' }}
                >
                    &ldquo;She was a girl who knew how to be happy even when she was sad. And that is important.&rdquo;
                </p>
                <p
                    className="font-dm text-2xs mt-3 uppercase tracking-widest"
                    style={{ color: '#A89080', fontSize: '10px' }}
                >
                    — Marilyn Monroe
                </p>
            </div>
        </aside>
    );
}