
import Link from 'next/link';
import { GameGrid } from '@/components/GameGrid';
import { getAllGames, getCategories } from '@/lib/data';

const BROWSE_ICONS: Record<string, string> = {
  action: '⚔️',
  adventure: '🧭',
  arcade: '🕹️',
  box2d: '📦',
  casual: '☁️',
  funny: '😄',
  'hidden-object': '🔍',
  hypercasual: '🚀',
  multiplayer: '🤝',
  platformer: '🪜',
  puzzle: '🧩',
  racing: '🏁',
  simulation: '🛠️',
  sports: '🏅'
};

const SHOWCASE_SETS = [
  { slug: 'action', title: 'Action Games' },
  { slug: 'racing', title: 'Racing Games' },
  { slug: 'adventure', title: 'Adventure Games' }
] as const;

function normalizeCategory(value: string): string {
  return value.toLowerCase().replace(/[\s-]/g, '');
}

export default function HomePage() {
  const games = getAllGames();
  const categories = getCategories();
  const popularTopThirty = [...games]
    .sort((a, b) => b.play_count - a.play_count)
    .slice(0, 30);

  const featuredCategories = categories.filter((category) => category.slug in BROWSE_ICONS);

  return (
    <div className="flex flex-col gap-16 -mt-10 -mb-10 sm:-mt-12 sm:-mb-12">
      <section aria-label="Popular Right Now" className="space-y-4">
        <h2 className="sr-only">Popular Right Now</h2>
        <GameGrid
          games={popularTopThirty}
          mobileColumns="three"
          cardVariant="borderless"
          hideMobileTitles
        />
      </section>

      <section className="space-y-6">
        {SHOWCASE_SETS.map((set) => {
          const categoryGames = games.filter((game) =>
            normalizeCategory(game.category).includes(normalizeCategory(set.slug))
          );
          if (!categoryGames.length) {
            return null;
          }
          const showcaseGames = categoryGames.slice(0, 7);
          return (
            <div
              key={set.slug}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900">{set.title}</h3>
                <Link
                  href={`/category/${set.slug}`}
                  className="rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                >
                  View more
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4 sm:hidden">
                {categoryGames.map((game) => (
                ))}
              </div>

              <div className="hidden grid-cols-3 gap-5 sm:grid sm:grid-cols-5 lg:grid-cols-7">
                {showcaseGames.map((game) => (
                  <Link
                    key={game.id}
                    href={`/game/${game.slug}`}
                    className="group rounded-2xl bg-white p-3 text-center shadow-sm transition hover:-translate-y-1 max-sm:bg-transparent max-sm:p-0 max-sm:shadow-none"
                  >
                    <div className="relative mx-auto aspect-square w-full max-w-[110px] overflow-hidden rounded-[28px] bg-slate-100 sm:h-48 sm:w-48 sm:max-w-none sm:rounded-3xl">
                      <img
                        src={game.thumbnail_url}
                        alt={game.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        sizes="(max-width: 640px) 100px, (max-width: 1024px) 160px, 200px"
                        className="object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <p className="mt-2 text-sm font-semibold text-slate-900 group-hover:text-primary max-sm:hidden">
                      {game.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Category</h2>
          <Link href="/categories" className="text-sm font-medium text-primary hover:text-primary-dark">
            All categories
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-4 transition hover:border-primary hover:shadow-lg max-sm:flex-col max-sm:items-start max-sm:gap-3 max-sm:px-4 max-sm:py-3"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-2xl max-sm:h-12 max-sm:w-12 max-sm:text-xl">
                {BROWSE_ICONS[category.slug] ?? category.title.slice(0, 1)}
              </div>
              <h3 className="text-left text-base font-semibold leading-tight text-slate-900 group-hover:text-primary sm:text-lg break-words">
                {category.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

