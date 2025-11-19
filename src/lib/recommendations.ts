import crypto from 'crypto';
import { MAX_RECOMMENDATIONS } from './constants';
import type { Game } from './types';
import { getAllGames } from './data';

function buildHotPool(): Game[] {
  const all = getAllGames();
  const byPlayCount = [...all].sort((a, b) => b.play_count - a.play_count).slice(0, 50);
  const byNewest = [...all]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 50);

  const merged = new Map<string, Game>();
  for (const game of [...byPlayCount, ...byNewest]) {
    if (!merged.has(game.slug)) {
      merged.set(game.slug, game);
    }
  }

  return Array.from(merged.values());
}

let hotPoolCache: Game[] | null = null;

export function getHotPool(): Game[] {
  if (!hotPoolCache) {
    hotPoolCache = buildHotPool();
  }
  return hotPoolCache;
}

function shuffleDeterministic<T>(items: T[], seed: string): T[] {
  const hash = crypto.createHash('sha256').update(seed).digest();
  let i = 0;
  const arr = [...items];

  for (let current = arr.length - 1; current > 0; current -= 1) {
    const swapIndex = hash[i % hash.length] % (current + 1);
    [arr[current], arr[swapIndex]] = [arr[swapIndex], arr[current]];
    i += 1;
  }
  return arr;
}

export function getRecommendations(currentSlug: string, category?: string): Game[] {
  const seed = `${currentSlug}-${category ?? 'all'}`;
  const hotPool = getHotPool().filter((game) => game.slug !== currentSlug);
  const categoryMatches = category
    ? hotPool.filter((game) => game.category.toLowerCase() === category.toLowerCase())
    : [];
  const global = hotPool.filter((game) => !category || game.category.toLowerCase() !== category.toLowerCase());

  const orderedCategory = shuffleDeterministic(categoryMatches, `${seed}-category`).slice(0, 5);
  const orderedGlobal = shuffleDeterministic(global, `${seed}-global`).slice(
    0,
    MAX_RECOMMENDATIONS
  );

  const combined: Game[] = [];
  const seen = new Set<string>();

  const addGame = (game: Game) => {
    if (!seen.has(game.slug) && combined.length < MAX_RECOMMENDATIONS) {
      combined.push(game);
      seen.add(game.slug);
    }
  };

  orderedCategory.forEach(addGame);
  orderedGlobal.forEach(addGame);

  if (combined.length < MAX_RECOMMENDATIONS) {
    const fallback = shuffleDeterministic(
      getAllGames().filter((game) => game.slug !== currentSlug),
      `${seed}-fallback`
    );
    for (const game of fallback) {
      addGame(game);
      if (combined.length >= MAX_RECOMMENDATIONS) {
        break;
      }
    }
  }

  return combined;
}
