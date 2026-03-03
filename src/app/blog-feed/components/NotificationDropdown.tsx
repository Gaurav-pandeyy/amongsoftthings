'use client';

import { useEffect, useRef } from 'react';
import type { Notification } from './mockData';

interface Props {
    notifications: Notification[];
    onClose: () => void;
}

export default function NotificationDropdown({ notifications, onClose }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [onClose]);

    const recent = notifications.slice(0, 5);

    return (
        <div
            ref={ref}
            className="notif-dropdown absolute right-0 top-full mt-3 w-80 rounded-2xl overflow-hidden"
            style={{
                background: '#FDF6F0',
                border: '1px solid #E8C5B0',
                boxShadow: '0 16px 48px rgba(44, 24, 16, 0.12)',
                zIndex: 50,
            }}
            role="dialog"
            aria-label="Notifications"
        >
            <div
                className="px-5 py-4 flex items-center justify-between"
                style={{ borderBottom: '1px solid #F2D7D0' }}
            >
                <span className="font-playfair text-sm" style={{ color: '#2C1810' }}>
                    Notifications
                </span>
                <button
                    onClick={onClose}
                    className="font-dm text-xs transition-colors duration-200"
                    style={{ color: '#A89080' }}
                    aria-label="Close notifications"
                >
                    ✕
                </button>
            </div>

            <div className="flex flex-col">
                {recent.length === 0 ? (
                    <div className="px-5 py-8 text-center">
                        <p className="font-lora italic text-sm" style={{ color: '#A89080' }}>
                            All quiet here.
                        </p>
                    </div>
                ) : (
                    recent.map((notif) => (
                        <div
                            key={notif.id}
                            className="px-5 py-3.5 flex flex-col gap-0.5 transition-colors duration-200"
                            style={{
                                borderLeft: notif.read ? '3px solid transparent' : '3px solid #F2D7D0',
                                background: notif.read ? 'transparent' : 'rgba(242, 215, 208, 0.15)',
                            }}
                        >
                            <span
                                className="font-lora text-xs leading-relaxed"
                                style={{ color: '#2C1810' }}
                            >
                                {notif.text}
                            </span>
                            <span
                                className="font-dm text-2xs"
                                style={{ color: '#A89080', fontSize: '10px' }}
                            >
                                {notif.time}
                            </span>
                        </div>
                    ))
                )}
            </div>

            <div
                className="px-5 py-3 text-center"
                style={{ borderTop: '1px solid #F2D7D0' }}
            >
                <button
                    onClick={onClose}
                    className="font-dm text-xs transition-colors duration-200"
                    style={{ color: '#C9847A' }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#2C1810'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#C9847A'}
                >
                    View all notifications →
                </button>
            </div>
        </div>
    );
}