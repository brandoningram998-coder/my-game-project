import type { Metadata } from 'next';
import { getAllGames } from '@/lib/data';
import { ONLINEGAMES_DEFAULT, ONLINEGAMES_VARIANTS } from '@/lib/onlinegames.config';
import { getOnlineGamesForRequest } from '@/lib/onlinegames.sort';
import { OnlineGamesGrid } from '@/components/OnlineGamesGrid';

type OnlineGamesPageProps = {
  searchParams?: {
    game?: string;
    variant?: string;
  };
};

export const metadata: Metadata = {
  title: 'Play Online Games | DrKabuda Arcade',
  description:
    'Browse a fast-loading wall of HTML5 games. Tap any logo to jump into the playable page instantly.'
};

export default function OnlineGamesPage({ searchParams }: OnlineGamesPageProps) {
  const allGames = getAllGames();
  const gamesForPage = getOnlineGamesForRequest(
    allGames,
    ONLINEGAMES_DEFAULT,
    ONLINEGAMES_VARIANTS,
    searchParams ?? {}
  );

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-white">
      <div className="min-h-full w-full p-4 sm:p-6 lg:p-8">
        <OnlineGamesGrid games={gamesForPage} />
      </div>
    </div>
  );
}
