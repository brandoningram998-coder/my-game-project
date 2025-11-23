import type { Game } from './types';

type SearchParams = {
  game?: string;
  variant?: string;
};

export function getOnlineGamesForRequest(
  allGames: Game[],
  defaultSlugs: string[],
  variants: Record<string, string[]>,
  searchParams: SearchParams
): Game[] {
  const slugToGame = new Map(allGames.map((game) => [game.slug, game] as const));

  const fallbackOrder = defaultSlugs.length ? defaultSlugs : allGames.map((game) => game.slug);

  const variantSlugs = searchParams.variant ? variants[searchParams.variant] : undefined;
  const baseSlugs = variantSlugs && variantSlugs.length ? variantSlugs : fallbackOrder;

  const orderedSlugs = baseSlugs.filter((slug) => slugToGame.has(slug));

  const targetSlug = searchParams.game;
  if (targetSlug && slugToGame.has(targetSlug)) {
    const currentIndex = orderedSlugs.indexOf(targetSlug);
    if (currentIndex >= 0) {
      orderedSlugs.splice(currentIndex, 1);
    }
    orderedSlugs.unshift(targetSlug);
  }

  // Append any remaining games not covered by base order so the grid is always filled.
  const used = new Set(orderedSlugs);
  for (const game of allGames) {
    if (!used.has(game.slug)) {
      orderedSlugs.push(game.slug);
      used.add(game.slug);
    }
  }

  return orderedSlugs.map((slug) => slugToGame.get(slug)).filter((game): game is Game => Boolean(game));
}
