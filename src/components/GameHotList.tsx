import Link from 'next/link';
import { Game } from '@/lib/data';

type GameHotListProps = {
    games: Game[];
};

export function GameHotList({ games }: GameHotListProps) {
    // Use top 8 games
    const hotGames = games.slice(0, 8);

    return (
        <div className="rounded-3xl bg-white bg-opacity-50 p-4 shadow-sm sm:p-6 lg:p-8">
            <h2 className="mb-4 text-xl font-extrabold text-slate-900 sm:mb-6 sm:section-title">Games Hot List</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-2">
                {hotGames.map((game, index) => {
                    const rank = index + 1;
                    const isTop3 = rank <= 3;

                    // Pseudo-rating for visual match
                    const rating = (5 - (index * 0.1)).toFixed(1);

                    return (
                        <Link
                            key={game.id}
                            href={`/game/${game.slug}`}
                            className="group flex items-center gap-4 rounded-3xl p-3 transition-colors hover:bg-slate-50 sm:gap-6 sm:p-4"
                        >
                            <div className="flex w-10 shrink-0 items-center justify-center font-bold sm:w-12">
                                {isTop3 ? (
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-base text-white shadow-sm sm:h-10 sm:w-10 sm:text-lg">
                                        {rank}
                                    </span>
                                ) : (
                                    <span className="text-lg text-slate-400 sm:text-xl">{rank}</span>
                                )}
                            </div>

                            {/* Game Icon */}
                            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[30px] bg-slate-100 shadow-sm sm:h-32 sm:w-32 sm:rounded-[36px] lg:h-40 lg:w-40">
                                <img
                                    src={game.thumbnail_url}
                                    alt={game.title}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            {/* Details */}
                            <div className="flex flex-col justify-center gap-1.5 sm:gap-2">
                                <h3 className="line-clamp-2 text-lg font-bold text-slate-900 sm:text-2xl">{game.title}</h3>
                                <p className="text-sm text-slate-500 sm:text-lg">{game.category}</p>

                                {/* Rating */}
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <span className="text-sm text-orange-400 sm:text-base">&#9733;</span>
                                    <span className="text-base font-semibold text-slate-600 sm:text-lg">{rating}</span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
