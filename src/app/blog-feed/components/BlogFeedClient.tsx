'use client';

import { useState } from 'react';
import BlogNavbar from './BlogNavbar';
import HeroBanner from './HeroBanner';
import PostCard from './PostCard';
import Sidebar from './SideBar';
import BlogFooter from './BlogFooter';
import { posts } from './mockData';

export default function BlogFeedClient() {
    const [activeTag, setActiveTag] = useState<string | null>(null);
    const [mobileTagOpen, setMobileTagOpen] = useState(false);

    const publishedPosts = posts?.filter((p) => p?.status === 'published');

    const filteredPosts = activeTag
        ? publishedPosts?.filter((p) => p?.category === activeTag)
        : publishedPosts;

    return (
        <div
            className="min-h-screen"
            style={{ background: '#FDF6F0', fontFamily: 'Lora, serif' }}
        >
            <BlogNavbar />
            <HeroBanner />
            {/* Main content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Post grid */}
                    <main className="flex-1 min-w-0">
                        {/* Feed header */}
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2
                                    className="font-playfair text-2xl md:text-3xl font-normal"
                                    style={{ color: '#2C1810' }}
                                >
                                    {activeTag ? (
                                        <>
                                            <span className="font-lora italic" style={{ color: '#C9847A' }}>
                                                #{activeTag}
                                            </span>
                                        </>
                                    ) : (
                                        'All Entries'
                                    )}
                                </h2>
                                <p
                                    className="font-dm text-xs mt-1"
                                    style={{ color: '#A89080' }}
                                >
                                    {filteredPosts?.length} {filteredPosts?.length === 1 ? 'entry' : 'entries'}
                                </p>
                            </div>

                            {/* Mobile tag filter toggle */}
                            <button
                                className="lg:hidden font-dm text-xs rounded-full px-4 py-2 transition-colors duration-200"
                                style={{ background: '#F2D7D0', color: '#8B7355' }}
                                onClick={() => setMobileTagOpen((prev) => !prev)}
                                aria-expanded={mobileTagOpen}
                                aria-label="Filter by tag"
                            >
                                {activeTag ? `#${activeTag}` : 'Filter'} ↓
                            </button>
                        </div>

                        {/* Mobile tag cloud */}
                        {mobileTagOpen && (
                            <div className="lg:hidden mb-6 flex flex-wrap gap-2 animate-fade-in">
                                <button
                                    onClick={() => { setActiveTag(null); setMobileTagOpen(false); }}
                                    className="tag-pill"
                                    style={{
                                        background: activeTag === null ? '#C9847A' : '#F2D7D0',
                                        color: activeTag === null ? '#fff' : '#8B7355',
                                    }}
                                >
                                    all
                                </button>
                                {['grief', 'love', 'little things', 'letters', 'seasons']?.map((tag) => (
                                    <button
                                        key={tag}
                                        onClick={() => { setActiveTag(tag === activeTag ? null : tag); setMobileTagOpen(false); }}
                                        className="tag-pill"
                                        style={{
                                            background: tag === activeTag ? '#C9847A' : '#F2D7D0',
                                            color: tag === activeTag ? '#fff' : '#8B7355',
                                        }}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Posts grid */}
                        {filteredPosts?.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {filteredPosts?.map((post, i) => (
                                    <PostCard key={post?.id} post={post} index={i} />
                                ))}
                            </div>
                        ) : (
                            <div
                                className="flex flex-col items-center justify-center py-24 text-center"
                                aria-live="polite"
                            >
                                <div className="text-4xl mb-6" aria-hidden="true">🌿</div>
                                <p
                                    className="font-lora italic text-lg"
                                    style={{ color: '#8B7355' }}
                                >
                                    Nothing here yet under &ldquo;{activeTag}&rdquo;.
                                </p>
                                <p
                                    className="font-lora text-sm mt-2"
                                    style={{ color: '#A89080' }}
                                >
                                    Some things take time to find their words.
                                </p>
                                <button
                                    onClick={() => setActiveTag(null)}
                                    className="mt-6 font-dm text-xs rounded-full px-6 py-2 transition-colors duration-200"
                                    style={{ background: '#F2D7D0', color: '#8B7355' }}
                                >
                                    View all entries
                                </button>
                            </div>
                        )}
                    </main>

                    {/* Sidebar — desktop only */}
                    <div className="hidden lg:block w-72 xl:w-80 shrink-0">
                        <Sidebar activeTag={activeTag} onTagClick={setActiveTag} />
                    </div>
                </div>
            </div>
            <BlogFooter />
        </div>
    );
}