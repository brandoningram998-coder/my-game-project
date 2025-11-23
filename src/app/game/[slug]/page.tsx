import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Link from 'next/link';
import { getGameBySlug } from '@/lib/data';
import { gameMetadata } from '@/lib/seo';
import { GameStructuredData } from '@/components/GameStructuredData';
import { getRecommendations } from '@/lib/recommendations';
import { buildEditorsReview, buildMainDescription } from '@/lib/narrative';

type GamePageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: GamePageProps): Metadata {
  const game = getGameBySlug(params.slug);
  if (!game) {
    return {
      title: 'Game not found'
    };
  }
  return gameMetadata(game);
}

export default function GamePage({ params }: GamePageProps) {
  const game = getGameBySlug(params.slug);

  if (!game) {
    notFound();
  }

  const mainDescription = buildMainDescription(game);
  const editorsReview = buildEditorsReview(game);
  const recommendations = getRecommendations(game.slug, game.category);

  return (
    <article className="mx-auto flex w-full max-w-6xl flex-col gap-10 -mt-10 -mb-10 sm:-mt-12 sm:-mb-12">
      <GameStructuredData game={game} />

      <div className="grid gap-8 items-start lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="h-32 w-32 overflow-hidden rounded-2xl border border-slate-200">
                <img
                  src={game.thumbnail_url}
                  alt={game.title}
                  width={576}
                  height={576}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">{game.title}</h1>
                <div className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                  <span>4.5</span>
                  <div className="flex gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>{index < 4 ? '★' : '☆'}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Link
              href={`/play/${game.slug}`}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-base font-semibold text-white shadow-md transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:self-center"
            >
              Play Now
            </Link>
          </div>

          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full border-collapse text-sm text-slate-700">
              <tbody>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Updated
                  </th>
                  <td className="px-4 py-3">{new Date(game.updated_at).toLocaleDateString('en-US')}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Category
                  </th>
                  <td className="px-4 py-3">{game.category}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Published
                  </th>
                  <td className="px-4 py-3">{new Date(game.created_at).toLocaleDateString('en-US')}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Play Count
                  </th>
                  <td className="px-4 py-3">{Intl.NumberFormat('en-US').format(game.play_count)}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-50 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Platform
                  </th>
                  <td className="px-4 py-3">Mobile / Tablet / Desktop</td>
                </tr>
                <tr>
                  <th className="bg-slate-50 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Tags
                  </th>
                  <td className="px-4 py-3">{game.tags?.[0] ?? game.category}</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Editor&apos;s Tips</h2>
                {editorsReview.map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed text-slate-700">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Description</h2>
                {mainDescription.map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed text-slate-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Recommended Games</h2>
          <div className="grid grid-cols-2 gap-3">
            {recommendations.slice(0, 20).map((recommended) => (
              <Link
                key={recommended.id}
                href={`/game/${recommended.slug}`}
                className="overflow-hidden rounded-2xl border border-slate-200 transition hover:-translate-y-1 hover:border-primary"
              >
                <img
                  src={recommended.thumbnail_url}
                  alt={recommended.title}
                  width={320}
                  height={320}
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
    </article>
  );
}
