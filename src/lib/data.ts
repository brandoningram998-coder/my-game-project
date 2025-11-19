import games from '@data/games.json';
import type { CategorySummary, Game } from './types';
import { CATEGORY_BATCH_SIZE } from './constants';

function slugifyCategory(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const gameCache: Game[] = games as Game[];

export function getAllGames(): Game[] {
  return gameCache;
}

export function getGameBySlug(slug: string): Game | undefined {
  return gameCache.find((game) => game.slug === slug);
}

export function getGamesByCategory(slug: string): Game[] {
  const target = slugifyCategory(slug);
  return gameCache.filter((game) => slugifyCategory(game.category) === target);
}

export function getCategories(): CategorySummary[] {
  const categorized = new Map<string, CategorySummary>();

  for (const game of gameCache) {
    const key = game.category.toLowerCase();
    if (!categorized.has(key)) {
      categorized.set(key, {
        slug: slugifyCategory(game.category),
        title: game.category,
        description: buildCategoryDescription(game.category)
      });
    }
  }

  return Array.from(categorized.values()).sort((a, b) => a.title.localeCompare(b.title));
}

export function getCategoryBatch(slug: string, page: number): Game[] {
  const gamesByCategory = getGamesByCategory(slug);
  const start = page * CATEGORY_BATCH_SIZE;
  const end = start + CATEGORY_BATCH_SIZE;
  return gamesByCategory.slice(start, end);
}

function buildCategoryDescription(category: string): string {
  switch (category.toLowerCase()) {
    case 'action':
      return 'Adrenaline-packed action games that keep reflexes sharp and heart rates high.';
    case 'adventure':
      return 'Story-driven adventures filled with atmospheric exploration and memorable companions.';
    case 'arcade':
      return 'Quick-hit arcade classics and rhythm challenges with instant replay value.';
    case 'puzzle':
      return 'Brainy puzzle favorites mixing satisfyingly clever mechanics with calming aesthetics.';
    case 'racing':
      return 'High-speed racers covering hover circuits, neon drifts, and split-route sprints.';
    case 'simulation':
      return 'Simulation sandboxes that dive deep into strategy, management, and creative building.';
    case 'sports':
      return 'Competitive sports titles spanning street leagues, skate parks, and scenic trails.';
    case 'strategy':
      return 'Decision-driven strategy games focusing on tactics, planning, and clever counters.';
    default:
      return `${category} games curated to highlight fresh gameplay and standout polish.`;
  }
}
