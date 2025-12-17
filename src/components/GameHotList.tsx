import Link from 'next/link';
import { Game } from '@/lib/data';

type GameHotListProps = {
    games: Game[];
};

export function GameHotList({ games }: GameHotListProps) {
    // Use top 8 games
    const hotGames = games.slice(0, 8);

    return (
        <div className="rounded-3xl bg-white bg-opacity-50 p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 text-2xl font-extrabold text-slate-900 sm:section-title">Games Hot List</h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-2">
                {hotGames.map((game, index) => {
                    const rank = index + 1;
                    const isTop3 = rank <= 3;

                    // Pseudo-rating for visual match
                    const rating = (5 - (index * 0.1)).toFixed(1);

                    return (
                        <Link
                            key={game.id}
                            href={`/game/${game.slug}`}
                            className="group flex items-center gap-6 rounded-3xl p-4 transition-colors hover:bg-slate-50"
                        >
                            <div className="flex w-12 shrink-0 items-center justify-center font-bold">
                                {isTop3 ? (
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-lg text-white shadow-sm">
                                        {rank}
                                    </span>
                                ) : (
                                    <span className="text-xl text-slate-400">{rank}</span>
                                )}
                            </div>

                            {/* Game Icon */}
                            <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-[36px] bg-slate-100 shadow-sm">
                                <img
                                    src={game.thumbnail_url}
                                    alt={game.title}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            {/* Details */}
                            <div className="flex flex-col justify-center gap-2">
                                <h3 className="line-clamp-2 text-2xl font-bold text-slate-900">{game.title}</h3>
                                <p className="text-lg text-slate-500">{game.category}</p>

                                {/* Rating */}
                                <div className="flex items-center gap-2">
                                    <span className="text-base text-orange-400">★</span>
                                    <span className="text-lg font-semibold text-slate-600">{rating}</span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
