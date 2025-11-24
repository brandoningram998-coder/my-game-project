import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Top 10 Free Online Games You Can Play Right Now - GameBox',
    description: 'Discover the best free online games you can play instantly in your browser. No downloads, no installation required.',
};

interface GameItem {
    id: number;
    icon: string;
    title: string;
    description: string;
    listTitle: string;
    listItems: string[];
}

const games: GameItem[] = [
    {
        id: 1,
        icon: '🎮',
        title: 'Blocky Blast Puzzle',
        description: 'A colorful and satisfying puzzle game where you match blocks, trigger combos, and clear the board. Simple to learn but challenging to master, this is perfect for players who enjoy relaxing logic games with bright visuals.',
        listTitle: 'Why you’ll love it:',
        listItems: ['Great for short breaks', 'Smooth animations', 'Increasing difficulty keeps it engaging'],
    },
    {
        id: 2,
        icon: '🔨',
        title: 'Whack the Boss',
        description: 'Feeling stressed? This classic stress-relief game lets you creatively “deal with” your annoying boss using all kinds of funny interactive tools. It’s a cult favorite for a reason.',
        listTitle: 'Best for:',
        listItems: ['Humor lovers', 'Fans of point-and-click games', 'Quick, chaotic fun'],
    },
    {
        id: 3,
        icon: '🍬',
        title: 'Cut the Rope',
        description: 'A physics-based puzzle where you cut ropes to feed candy to a cute monster named Om Nom. It’s charming, clever, and surprisingly tricky.',
        listTitle: 'Players love:',
        listItems: ['Cute animation', 'Smooth physics', 'Hundreds of levels'],
    },
    {
        id: 4,
        icon: '🧠',
        title: '2048',
        description: 'A simple yet addictive number-merging puzzle. Swipe tiles to combine numbers and reach the elusive 2048 tile — easier said than done!',
        listTitle: 'Why it’s popular:',
        listItems: ['Fast rounds', 'Extremely addictive', 'Great for developing strategy'],
    },
    {
        id: 5,
        icon: '🏃',
        title: 'Slope Game',
        description: 'Guide a fast-rolling ball down an endless neon slope. The speed increases, the obstacles get harder, and every second counts — it’s one of the most intense endless runners online.',
        listTitle: 'Highlights:',
        listItems: ['Stylish neon visuals', 'High-speed gameplay', 'Great challenge for reflex gamers'],
    },
    {
        id: 6,
        icon: '🧩',
        title: 'Mahjong Relax',
        description: 'A calming tile-matching game perfect for players who want something slow and meditative. Great music, clean graphics, satisfying gameplay.',
        listTitle: 'Perfect for:',
        listItems: ['Relaxation', 'Brain training', 'Fans of traditional puzzle games'],
    },
    {
        id: 7,
        icon: '🚗',
        title: 'Drift Hunters',
        description: 'For driving fans, this browser-based drifting game offers customizable cars, smooth physics, and stunning 3D tracks — surprisingly high quality for a web game.',
        listTitle: 'Top features:',
        listItems: ['Realistic car handling', 'Customizable vehicles', 'Smooth 3D graphics'],
    },
    {
        id: 8,
        icon: '👻',
        title: 'Friday Night Funkin’ (Web Version)',
        description: 'The popular rhythm game is fully playable online! Follow the beat, hit the arrows, and challenge quirky characters in this energetic musical showdown.',
        listTitle: 'Players enjoy:',
        listItems: ['Catchy music', 'Fun characters', 'Accessible gameplay'],
    },
    {
        id: 9,
        icon: '🧨',
        title: 'Bomb It!',
        description: 'A Bomberman-style action puzzle game where you place bombs, clear paths, and outsmart your opponents. Suitable for all ages.',
        listTitle: 'Why it stands out:',
        listItems: ['Colorful and fun', 'Multiple maps', 'Great for short sessions'],
    },
    {
        id: 10,
        icon: '🐸',
        title: 'Crossy Road Web',
        description: 'Help your character cross roads, rivers, and tracks in this endless arcade classic. Simple controls, fast action, and hilarious moments.',
        listTitle: 'Great for:',
        listItems: ['Casual players', 'Quick rounds', 'Kids and adults alike'],
    },
];

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white pb-20">
            {/* Hero Section */}
            <div className="relative bg-slate-50 py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <Link
                        href="/articles"
                        className="mb-8 inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-slate-100 hover:text-primary"
                    >
                        &larr; Back to Articles
                    </Link>
                    <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
                        Top 10 Free Online Games <br className="hidden md:block" />
                        <span className="text-primary">You Can Play Right Now</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-slate-600 md:text-xl">
                        No downloads. No installation. Just pure fun directly in your browser.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="mx-auto max-w-4xl px-6 -mt-12 relative z-10">
                <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-slate-900/5 bg-white mb-16">
                    <img
                        src="/articles/top-10-games.png"
                        alt="Top 10 Free Online Games"
                        className="h-auto w-full object-cover"
                    />
                </div>

                <div className="prose prose-lg prose-slate mx-auto mb-16 max-w-none">
                    <p className="lead text-xl md:text-2xl text-slate-700 leading-relaxed">
                        Looking for fun, fast, and addictive games? Whether you’re taking a break, relaxing after school, or just looking for something entertaining, online web games are the perfect option.
                    </p>
                    <p className="text-lg text-slate-600">
                        At <strong>DrKabuda.com</strong>, you can enjoy hundreds of free games instantly — no installation, no login, no ads that interrupt gameplay. Here are <strong>10 of the best web games you can play right now</strong>.
                    </p>
                </div>

                {/* Games List */}
                <div className="space-y-12">
                    {games.map((game) => (
                        <div
                            key={game.id}
                            className="group relative overflow-hidden rounded-2xl bg-slate-50 p-8 transition hover:bg-slate-100 md:p-10"
                        >
                            <div className="absolute -right-6 -top-6 text-9xl font-black text-white text-opacity-50 select-none group-hover:text-white group-hover:text-opacity-80 transition-colors">
                                {game.id}
                            </div>

                            <div className="relative z-10">
                                <div className="mb-4 flex items-center gap-4">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm ring-1 ring-slate-900/5">
                                        {game.icon}
                                    </span>
                                    <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                                        {game.title}
                                    </h2>
                                </div>

                                <p className="mb-8 text-lg leading-relaxed text-slate-600">
                                    {game.description}
                                </p>

                                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                                    <h3 className="mb-4 font-bold text-slate-900">
                                        {game.listTitle}
                                    </h3>
                                    <ul className="space-y-3">
                                        {game.listItems.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-slate-600">
                                                <svg className="mt-1 h-5 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Conclusion */}
                <div className="mt-20 rounded-3xl bg-slate-900 px-6 py-12 text-center text-white md:px-12">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                        Ready to Start Playing?
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
                        Visit DrKabuda.com now to play these games and hundreds more. No signup, no downloads, just pure fun.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-bold text-white transition hover:bg-primary/90 hover:scale-105"
                    >
                        Play Now on DrKabuda
                    </Link>
                </div>
            </div>
        </article>
    );
}
