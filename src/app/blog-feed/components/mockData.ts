export interface Post {
    id: string;
    slug: string;
    title: string;
    category: string;
    excerpt: string;
    content: string;
    readTime: number;
    date: string;
    commentCount: number;
    status: 'published' | 'draft';
    imageGradient: string;
}

export interface Comment {
    id: string;
    postSlug: string;
    author: string;
    text: string;
    timestamp: string;
}

export interface Notification {
    id: string;
    text: string;
    time: string;
    read: boolean;
}

export const posts: Post[] = [
    {
        id: '1',
        slug: 'letters-i-never-sent',
        title: 'Letters I Never Sent',
        category: 'letters',
        excerpt:
            'There is a drawer in my mind where I keep all the things I meant to say. Words folded neatly into envelopes, addressed to people who have since become strangers.',
        content:
            'There is a drawer in my mind where I keep all the things I meant to say. Words folded neatly into envelopes, addressed to people who have since become strangers to me. I wonder sometimes if they know. If they feel the weight of what was never delivered.',
        readTime: 5,
        date: 'February 28, 2026',
        commentCount: 4,
        status: 'published',
        imageGradient: 'linear-gradient(135deg, #F5E2D6 0%, #E8C5B0 100%)',
    },
    {
        id: '2',
        slug: 'the-weight-of-small-things',
        title: 'The Weight of Small Things',
        category: 'little things',
        excerpt:
            'It is never the big events that break us open. It is the coffee mug left on the wrong side of the sink, the song that plays at exactly the wrong moment.',
        content:
            'It is never the big events that break us open. It is the coffee mug left on the wrong side of the sink, the song that plays at exactly the wrong moment. Grief, I have come to understand, lives in the small things.',
        readTime: 4,
        date: 'February 20, 2026',
        commentCount: 3,
        status: 'published',
        imageGradient: 'linear-gradient(135deg, #EDD5C5 0%, #D4A99A 100%)',
    },
    {
        id: '3',
        slug: 'october-rain',
        title: 'October Rain',
        category: 'seasons',
        excerpt:
            'October has a particular kind of light. It filters through leaves that have already decided to let go, and lands on everything with a golden resignation.',
        content:
            'October has a particular kind of light. It filters through leaves that have already decided to let go, and lands on everything with a golden resignation. I have always felt most like myself in autumn.',
        readTime: 6,
        date: 'February 14, 2026',
        commentCount: 5,
        status: 'published',
        imageGradient: 'linear-gradient(135deg, #F0D8CC 0%, #C9A88A 100%)',
    },
    {
        id: '4',
        slug: 'on-letting-people-go',
        title: 'On Letting People Go',
        category: 'grief',
        excerpt:
            'They tell you that letting go is an act of love. What they do not tell you is that it feels nothing like love. It feels like standing in a room after someone has left it.',
        content:
            'They tell you that letting go is an act of love. What they do not tell you is that it feels nothing like love. It feels like standing in a room after someone has left it — the air still warm from their presence, but the space already beginning to forget them.',
        readTime: 7,
        date: 'February 8, 2026',
        commentCount: 6,
        status: 'published',
        imageGradient: 'linear-gradient(135deg, #E8D5CC 0%, #B89080 100%)',
    },
    {
        id: '5',
        slug: 'things-i-learned-from-silence',
        title: 'Things I Learned from Silence',
        category: 'love',
        excerpt:
            'The most honest conversations I have ever had were with people who said nothing at all. There is a kind of love that exists only in comfortable silence.',
        content:
            'The most honest conversations I have ever had were with people who said nothing at all. There is a kind of love that exists only in comfortable silence. The kind where you do not need to fill every moment with words.',
        readTime: 5,
        date: 'January 30, 2026',
        commentCount: 3,
        status: 'published',
        imageGradient: 'linear-gradient(135deg, #F2D7D0 0%, #D4B8AC 100%)',
    },
    {
        id: '6',
        slug: 'how-gardens-teach-you-about-loss',
        title: 'How Gardens Teach You About Loss',
        category: 'grief',
        excerpt:
            'My grandmother had a garden that she tended with the same attention she gave her prayers. Every year, things died. Every year, she planted again.',
        content:
            'My grandmother had a garden that she tended with the same attention she gave her prayers. Every year, things died. Every year, she planted again without grief, without ceremony — just the quiet understanding that this is how living things work.',
        readTime: 8,
        date: 'January 22, 2026',
        commentCount: 4,
        status: 'published',
        imageGradient: 'linear-gradient(135deg, #E0D5C8 0%, #A89878 100%)',
    },
    {
        id: '7',
        slug: 'draft-morning-pages',
        title: 'Morning Pages (Unfinished)',
        category: 'little things',
        excerpt: 'Draft thoughts from early morning. Not yet ready.',
        content: 'Draft...',
        readTime: 3,
        date: 'March 1, 2026',
        commentCount: 0,
        status: 'draft',
        imageGradient: 'linear-gradient(135deg, #F5EDE6 0%, #E8D8CC 100%)',
    },
    {
        id: '8',
        slug: 'draft-what-remains',
        title: 'What Remains (Draft)',
        category: 'love',
        excerpt: 'Still working through this one.',
        content: 'Draft...',
        readTime: 4,
        date: 'March 2, 2026',
        commentCount: 0,
        status: 'draft',
        imageGradient: 'linear-gradient(135deg, #EEE0D8 0%, #D4C0B0 100%)',
    },
];

export const comments: Comment[] = [
    {
        id: 'c1',
        postSlug: 'letters-i-never-sent',
        author: 'Sofia M.',
        text: 'This one stayed with me all afternoon. The image of a mental drawer — I have one of those too.',
        timestamp: '2 hours ago',
    },
    {
        id: 'c2',
        postSlug: 'letters-i-never-sent',
        author: 'Nadia R.',
        text: 'You always find the exact right words for the things I cannot say.',
        timestamp: 'Yesterday',
    },
    {
        id: 'c3',
        postSlug: 'the-weight-of-small-things',
        author: 'Camille D.',
        text: 'The coffee mug detail — that is everything. Grief in the mundane.',
        timestamp: '3 days ago',
    },
    {
        id: 'c4',
        postSlug: 'october-rain',
        author: 'Sofia M.',
        text: 'October light is its own kind of grief and joy at once. You captured it.',
        timestamp: '1 week ago',
    },
];

export const notifications: Notification[] = [
    {
        id: 'n1',
        text: '✦ Sofia left a comment on "Letters I Never Sent"',
        time: '2 hours ago',
        read: false,
    },
    {
        id: 'n2',
        text: '✦ 3 new access requests pending',
        time: '5 hours ago',
        read: false,
    },
    {
        id: 'n3',
        text: '✦ Post "October Rain" was read 12 times today',
        time: 'Yesterday',
        read: false,
    },
    {
        id: 'n4',
        text: '✦ Nadia left a comment on "Letters I Never Sent"',
        time: 'Yesterday',
        read: true,
    },
    {
        id: 'n5',
        text: '✦ Post "October Rain" sent to 14 followers',
        time: '3 days ago',
        read: true,
    },
    {
        id: 'n6',
        text: '✦ Camille approved your access request',
        time: '5 days ago',
        read: true,
    },
    {
        id: 'n7',
        text: '✦ New follower: Isabelle joined',
        time: '1 week ago',
        read: true,
    },
    {
        id: 'n8',
        text: '✦ 2 new access requests pending',
        time: '1 week ago',
        read: true,
    },
];

export const tags = [
    'grief',
    'love',
    'little things',
    'letters',
    'seasons',
    'memory',
    'silence',
    'loss',
    'gardens',
    'october',
];

export const recentPosts = posts.filter((p) => p.status === 'published').slice(0, 4);