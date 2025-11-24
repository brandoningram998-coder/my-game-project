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
            title: 'Top 10 Free Online Games You Can Play Right Now (No Download Required!)',
            description:
                'Looking for fun, fast, and addictive games you can play directly in your browser? Whether you’re taking a break, relaxing after school, or just looking for something entertaining on your phone or computer, online web games are the perfect option.',
            image: '/articles/top-10-games.png',
            date: '2025-11-24',
        },
    ];

    return (
        <div className="mx-auto max-w-6xl px-6 py-8">
            <h1 className="mb-8 text-3xl font-bold text-slate-900">Articles</h1>
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
