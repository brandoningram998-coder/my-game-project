import games from '@data/games.json';
import type { Game } from './types';

const gameDataset: Game[] = games as Game[];

const byCategory = (category: string) =>
  gameDataset
    .filter((game) => game.category.toLowerCase().includes(category.toLowerCase()))
    .map((game) => game.slug);

export const ONLINEGAMES_DEFAULT: string[] = gameDataset.map((game) => game.slug);

export const ONLINEGAMES_VARIANTS: Record<string, string[]> = {
  action: byCategory('action'),
  casual: byCategory('casual'),
  puzzle: byCategory('puzzle'),
  roblox: byCategory('roblox')
};
