import clsx from 'clsx';
import type { Game } from '@/lib/types';
import { GameCard } from './GameCard';

type GameGridProps = {
  games: Game[];
  mobileColumns?: 'one' | 'three';
  cardVariant?: 'default' | 'borderless';
  hideMobileTitles?: boolean;
};

export function GameGrid({
  games,
  mobileColumns = 'one',
  cardVariant = 'default',
  hideMobileTitles = false
}: GameGridProps) {
  const mobileClass = mobileColumns === 'three' ? 'grid-cols-3' : 'grid-cols-1';
  const smallScreenClass = mobileColumns === 'three' ? 'sm:grid-cols-3' : 'sm:grid-cols-2';

  return (
    <div
      className={clsx(
        'grid gap-3 sm:gap-4 lg:gap-3 xl:gap-4',
        mobileClass,
        smallScreenClass,
        'md:grid-cols-4 lg:grid-cols-7'
      )}
    >
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          variant={cardVariant}
          hideTitleOnMobile={hideMobileTitles}
        />
      ))}
    </div>
  );
}
