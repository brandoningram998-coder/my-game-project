
import Link from 'next/link';
import { GameGrid } from '@/components/GameGrid';
import { HeroCarousel } from '@/components/HeroCarousel';
import { GameHotList } from '@/components/GameHotList';
import { getAllGames, getCategories, type Game } from '@/lib/data';

const BROWSE_ICONS: Record<string, string> = {
  action: '⚔️',
  racing: '🏁',
  adventure: '🧭',
  puzzle: '🧩',
  casual: '🎮',
  arcade: '🕹️',
  simulation: '🛠️'
};

const SHOWCASE_SETS = [
  { slug: 'action', title: 'Action Games' },
  { slug: 'casual', title: 'Casual Games' },
  { slug: 'racing', title: 'Racing Games' }
] as const;

function normalizeCategory(value: string): string {
  return value.toLowerCase().replace(/[\s-]/g, '');
}

export default function HomePage() {
  const games = getAllGames();
  const categories = getCategories();
  const popularTopThirty = [...games]
    .sort((a, b) => b.play_count - a.play_count)
    .slice(0, 21);

  const featuredCategories = categories.filter((category) => category.slug in BROWSE_ICONS);

  // Curated Featured Games with High-Res Images
  // Curated Featured Games from New Batch
  const featuredGames = [
    {
      id: "draw-my-path-obby",
      slug: "draw-my-path-obby",
      title: "Draw My Path Obby",
      description: "Draw your path to victory in this creative obstacle course.",
      thumbnail_url: "/carousel/draw-my-path-obby.png",
      category: "Puzzle",
      play_count: 500
    },
    {
      id: "indoor-soccer",
      slug: "indoor-soccer",
      title: "Indoor Soccer",
      description: "Experience the fast-paced action of indoor soccer.",
      thumbnail_url: "/carousel/indoor-soccer.png",
      category: "Sports",
      play_count: 600
    },
    {
      id: "lurkers-io",
      slug: "lurkers-io",
      title: "Lurkers Io",
      description: "Survive and dominate in this multiplayer io game.",
      thumbnail_url: "/carousel/lurkers-io.png",
      category: "Multiplayer",
      play_count: 800
    },
    {
      id: "rumble-rush",
      slug: "rumble-rush",
      title: "Rumble Rush",
      description: "Join the rumble and rush to the finish line.",
      thumbnail_url: "/carousel/rumble-rush.png",
      category: "Action",
      play_count: 700
    },
    {
      id: "steal-and-run",
      slug: "steal-and-run",
      title: "Steal And Run",
      description: "Heist the treasure and run for your life.",
      thumbnail_url: "/carousel/steal-and-run.png",
      category: "Action",
      play_count: 450
    },
    {
      id: "subway-surfers",
      slug: "subway-surfers",
      title: "Subway Surfers",
      description: "Dash as fast as you can in this classic runner.",
      thumbnail_url: "/carousel/subway-surfers.png",
      category: "Arcade",
      play_count: 2000
    }
  ];

  // Curated Games for Hot List - 8 diverse games
  const hotListGames = [
    games.find(g => g.slug === "000094_rainbow-obby"),
    games.find(g => g.slug === "000109_Stickman-hook"),
    games.find(g => g.slug === "000116_sushi-party-io"),
    games.find(g => g.slug === "000239_happy-glass"),
    games.find(g => g.slug === "000351_mr-bullet"),
    games.find(g => g.slug === "000407_prankster-3d"),
    games.find(g => g.slug === "000514_sprint-league"),
    games.find(g => g.slug === "000602_marble-run-3d"),
  ].filter((g): g is Game => g !== undefined);



  return (
    <div className="flex flex-col gap-6 -mt-10 -mb-10 sm:-mt-12 sm:-mb-12">
      {/* Hero Carousel */}
      <section aria-label="Featured Games">
        <HeroCarousel games={featuredGames} />
      </section>

      <section aria-label="Popular Right Now" className="space-y-4">
        <h2 className="mb-6 text-2xl font-extrabold text-slate-900 sm:text-3xl">Top Games to Play</h2>
        <GameGrid
          games={popularTopThirty}
          mobileColumns="three"
          cardVariant="borderless"
          hideMobileTitles
        />
      </section>



      {/* Game Hot List Section */}
      <section aria-label="App Hot List">
        <GameHotList games={hotListGames} />
      </section>

      <section className="space-y-6">
        {SHOWCASE_SETS.map((set) => {
          const categoryGames = games.filter((game) =>
            normalizeCategory(game.category).includes(normalizeCategory(set.slug))
          );
          if (!categoryGames.length) {
            return null;
          }
          // Casual, Action, and Racing show 14 games
          const gameCount = (set.slug === 'casual' || set.slug === 'action' || set.slug === 'racing') ? 14 : 7;
          const showcaseGames = categoryGames.slice(0, gameCount);
          return (
            <div
              key={set.slug}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900">{set.title}</h3>

              </div>
              <div className="grid grid-cols-3 gap-6 sm:hidden">
                {showcaseGames.map((game) => (
                  <Link
                    key={`${game.id}-mobile`}
                    href={`/game/${game.slug}`}
                    className="group text-center transition hover:-translate-y-1 max-sm:bg-transparent max-sm:p-0 max-sm:shadow-none"
                  >
                    <div className="relative mx-auto aspect-square w-full max-w-[110px] overflow-hidden rounded-[28px] bg-slate-100">
                      <img
                        src={game.thumbnail_url}
                        alt={game.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        sizes="(max-width: 640px) 100px"
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

              <div className="hidden grid-cols-3 gap-8 sm:grid sm:grid-cols-5 lg:grid-cols-7">
                {showcaseGames.map((game) => (
                  <Link
                    key={game.id}
                    href={`/game/${game.slug}`}
                    className="group text-center transition hover:-translate-y-1 max-sm:bg-transparent max-sm:p-0 max-sm:shadow-none"
                  >
                    <div className="relative mx-auto aspect-square w-full max-w-[110px] overflow-hidden rounded-[28px] bg-slate-100 sm:max-w-none sm:rounded-[36px]">
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
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-slate-900">Category</h2>
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

