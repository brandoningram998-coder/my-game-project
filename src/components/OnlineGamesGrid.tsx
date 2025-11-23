
import Link from 'next/link';
import clsx from 'clsx';
import type { Game } from '@/lib/types';

type OnlineGamesGridProps = {
  games: Game[];
};

export function OnlineGamesGrid({ games }: OnlineGamesGridProps) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-10">
      {games.map((game, index) => (
        <Link
          key={game.slug}
          href={`/game/${game.slug}`}
          className={clsx(
            'group relative block overflow-hidden rounded-[1.25rem] bg-white shadow-sm transition-transform duration-300 hover:z-10 hover:scale-105 hover:shadow-md',
            index === 0 && 'col-span-2 row-span-2'
          )}
        >
          <div className="relative w-full pb-[100%]">
            <img
              src={game.thumbnail_url}
              alt={game.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 12vw"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
