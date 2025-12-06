import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Articles - GameBox',
    description: 'Read the latest articles about games on GameBox.',
};

export default function ArticlesPage() {
    const articles = [
        {
            id: 'top-10-free-online-games',
            title: 'Top 4 Free Online Games You Can Play Right Now',
            description:
                'Looking for fun, fast, and addictive games you can play directly in your browser? We\'ve curated a list of 4 fantastic free online games that you can jump into immediately.',
            image: '/articles/top-4-games-cover.png',
            date: '2025-11-24',
        },
        {
            id: 'why-online-browser-games-are-becoming-popular-again',
            title: 'Why Online Browser Games Are Becoming Popular Again (Trends + Data Insight)',
            description:
                'Explore the resurgence of browser games, driven by new technologies, accessibility, and social trends.',
            image: '/articles/browser-games-trends-cover.png',
            date: '2025-11-25',
        },
        {
            id: 'myth-busted-can-you-actually-play-online-mini-games-offline',
            title: 'Myth Busted: Can You Actually Play "Online" Mini-Games Offline?',
            description:
                'We tested the most common types of online mini-games to see if they work without an internet connection.',
            image: '/articles/myth-busted-offline-games.png',
            date: '2025-11-26',
        },
    ];

    return (
        <div className="mx-auto max-w-6xl px-6 pt-0 pb-8">
            <div className="grid gap-8">
                {articles.map((article) => (
                    <Link
                        key={article.id}
                        href={`/articles/${article.id}` as any}
                        className="flex flex-col gap-4 overflow-hidden rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md md:flex-row"
                    >
                        <div className="shrink-0 md:w-1/3 lg:w-1/4">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="h-40 w-full rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="mb-2 text-xl font-bold text-slate-900">
                                {article.title}
                            </h2>
                            <p className="mb-3 text-base text-slate-600 line-clamp-3">
                                {article.description}
                            </p>
                            <div className="mt-auto">
                                <span className="text-xs text-slate-500">{article.date}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
