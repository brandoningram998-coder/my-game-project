import type { Metadata } from 'next';
import { GameGrid } from '@/components/GameGrid';
import { getAllGames } from '@/lib/data';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'New Games',
  description: 'Fresh HTML5 games recently added to GameBox Arcade. Launch instantly in your browser.',
  alternates: {
    canonical: canonicalUrl('/new')
  },
  openGraph: {
    title: 'New Browser Games',
    description: 'Explore the newest additions to our curated HTML5 catalog.',
    url: canonicalUrl('/new')
  }
};

export default function NewGamesPage() {
  const games = [...getAllGames()]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 40);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">New Games</h1>
      <p className="max-w-2xl text-sm text-slate-600">
        These titles are hot off the press. We spotlight new releases each week so you can try them
        before anyone else and keep your rotation feeling fresh.
      </p>
      <GameGrid games={games} />
    </div>
  );
}
