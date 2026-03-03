import GatePageClient from './components/GatePageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Among Soft Things — Private',
    description: 'This space is curated. Access is by invitation only.',
    icons: { icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌸</text></svg>' },
};

export default function GatePage() {
    return <GatePageClient />;
}