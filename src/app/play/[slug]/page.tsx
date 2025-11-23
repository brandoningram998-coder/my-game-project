
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllGames, getGameBySlug } from '@/lib/data';
import { playMetadata } from '@/lib/seo';
import { RecommendationRail } from '@/components/RecommendationRail';
import { getRecommendations } from '@/lib/recommendations';
import { GameStructuredData } from '@/components/GameStructuredData';
import { buildHowToPlay } from '@/lib/narrative';
import { PlayHero } from '@/components/PlayHero';

type PlayPageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: PlayPageProps): Metadata {
  const game = getGameBySlug(params.slug);
  if (!game) {
    return {
      title: 'Game not found'
    };
  }
  return playMetadata(game);
}

export default function PlayPage({ params }: PlayPageProps) {
  const game = getGameBySlug(params.slug);
  if (!game) {
    notFound();
  }

  const allGames = getAllGames();
  const recommendations = getRecommendations(`play-${game.slug}`, game.category);
  const desiredHotPickCount = 22;
  const hotPicks = [...recommendations];

  if (hotPicks.length < desiredHotPickCount) {
    const fallbackPool = allGames.filter(
      (candidate) =>
        candidate.slug !== game.slug && !hotPicks.some((existing) => existing.slug === candidate.slug)
    );
    for (const candidate of fallbackPool) {
      hotPicks.push(candidate);
      if (hotPicks.length >= desiredHotPickCount) {
        break;
      }
    }
  }
  const howToPlay = buildHowToPlay(game);
  const shuffledAllGames = [...allGames].sort(() => Math.random() - 0.5).slice(0, 21);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 -mt-10 -mb-10 sm:gap-8 sm:-mt-12 sm:-mb-12">
      <GameStructuredData game={game} page="play" />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="space-y-2 sm:space-y-3">
          <PlayHero game={game} />
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-slate-900">How to Play</h2>
            <div className="space-y-3 text-base leading-relaxed text-slate-700">
              {howToPlay.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            {hotPicks.slice(0, desiredHotPickCount).map((recommended) => (
              <Link
                key={recommended.slug}
                href={`/game/${recommended.slug}`}
                className="overflow-hidden rounded-2xl border border-slate-200 transition hover:-translate-y-1 hover:border-primary"
              >
                <img
                  src={recommended.thumbnail_url}
                  alt={recommended.title}
                  width={400}
                  height={400}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <span className="sr-only">{recommended.title}</span>
              </Link>
            ))}
          </div>
        </aside>
      </div>

      <RecommendationRail games={shuffledAllGames} heading="More Games" />
    </div>
  );
}
