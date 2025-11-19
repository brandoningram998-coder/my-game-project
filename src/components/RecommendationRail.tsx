import Image from 'next/image';
import Link from 'next/link';
import type { Game } from '@/lib/types';

type RecommendationRailProps = {
  games: Game[];
  heading?: string;
};

export function RecommendationRail({ games, heading = 'Recommended Games' }: RecommendationRailProps) {
  if (!games.length) {
    return null;
  }

  return (
    <section aria-label="Recommended games">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">{heading}</h2>
        <p className="text-xs uppercase tracking-wide text-slate-500">
          Hot Picks | {games.length} games
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
        {games.map((game) => (
          <Link
            key={game.id}
            href={`/game/${game.slug}`}
            className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-lg"
          >
            <Image
              src={game.thumbnail_url}
              alt={game.title}
              width={600}
              height={600}
              className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              loading="lazy"
            />
            <span className="sr-only">{game.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
