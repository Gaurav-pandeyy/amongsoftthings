'use client';

import { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { notifications as initialNotifs } from './mockData';
import NotificationDropdown from './NotificationDropdown';

export default function BlogNavbar() {
    const [notifs, setNotifs] = useState(initialNotifs);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const unreadCount = notifs.filter((n) => !n.read).length;

    const handleBellClick = () => {
        setDropdownOpen((prev) => !prev);
        if (!dropdownOpen) {
            // Mark all as read when opened
            setTimeout(() => {
                setNotifs((prev) => prev.map((n) => ({ ...n, read: true })));
            }, 800);
        }
    };

    return (
        <nav
            className="sticky top-0 z-40 w-full"
            style={{
                background: 'rgba(253, 246, 240, 0.95)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid #E8C5B0',
            }}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
                {/* Blog title */}
                <Link href="/blog-feed" className="flex items-center gap-3">
                    <AppLogo
                        size={36}
                        text="Among Soft Things"
                        className="opacity-0 w-0 overflow-hidden"
                    />
                    <span
                        className="font-playfair italic text-xl md:text-2xl"
                        style={{ color: '#2C1810' }}
                    >
                        Among Soft Things
                    </span>
                </Link>

                {/* Right side */}
                <div className="flex items-center gap-4 md:gap-6">
                    {/* Bell */}
                    <div className="relative">
                        <button
                            onClick={handleBellClick}
                            className="relative p-2 rounded-full transition-colors duration-200"
                            style={{ color: '#8B7355' }}
                            aria-label={`Notifications, ${unreadCount} unread`}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#C9847A')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '#8B7355')}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                            {unreadCount > 0 && (
                                <span
                                    className="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center rounded-full font-dm text-white"
                                    style={{ background: '#C9847A', fontSize: '9px' }}
                                >
                                    {unreadCount}
                                </span>
                            )}
                        </button>

                        {/* Notification Dropdown */}
                        {dropdownOpen && (
                            <NotificationDropdown
                                notifications={notifs}
                                onClose={() => setDropdownOpen(false)}
                            />
                        )}
                    </div>

                    {/* Avatar + name */}
                    <div className="hidden md:flex items-center gap-2">
                        <div
                            className="w-8 h-8 rounded-full flex items-center justify-center font-dm font-semibold text-xs text-white"
                            style={{ background: '#C9847A' }}
                            aria-label="User avatar"
                        >
                            A
                        </div>
                        <span
                            className="font-dm text-sm"
                            style={{ color: '#8B7355' }}
                        >
                            Amara
                        </span>
                    </div>

                    {/* Logout */}
                    <Link
                        href="/login"
                        className="font-dm text-xs transition-colors duration-200"
                        style={{ color: '#A89080' }}
                        onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = '#C9847A'}
                        onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = '#A89080'}
                    >
                        Logout
                    </Link>
                </div>
            </div>
        </nav>
    );
}