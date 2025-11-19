import { gameJsonLd } from '@/lib/seo';
import type { Game } from '@/lib/types';

type GameStructuredDataProps = {
  game: Game;
  page?: 'game' | 'play';
};

export function GameStructuredData({ game, page = 'game' }: GameStructuredDataProps) {
  const jsonLd = gameJsonLd(game, page);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
