import type { Metadata } from 'next';
import { GameGrid } from '@/components/GameGrid';
import { getAllGames } from '@/lib/data';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Popular Games',
  description: 'Browse the most-played games on GameBox Arcade. Updated daily based on play counts.',
  alternates: {
    canonical: canonicalUrl('/popular')
  },
  openGraph: {
    title: 'Popular Games - Play Online',
    description: 'The hottest browser games on GameBox Arcade right now.',
    url: canonicalUrl('/popular')
  }
};

export default function PopularPage() {
  const games = [...getAllGames()].sort((a, b) => b.play_count - a.play_count).slice(0, 40);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Popular Games</h1>
      <p className="max-w-2xl text-sm text-slate-600">
        Updated each day based on player engagement. Discover the games our community cannot stop
        playing and jump straight into their most exciting modes.
      </p>
      <GameGrid games={games} />
    </div>
  );
}
