import { NextResponse } from 'next/server';
import { CATEGORY_BATCH_SIZE, CATEGORY_MAX_BATCHES } from '@/lib/constants';
import { getCategoryBatch, getGamesByCategory } from '@/lib/data';

type RouteParams = {
  params: {
    slug: string;
  };
};

export function GET(request: Request, { params }: RouteParams) {
  const { slug } = params;
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page') ?? '0');

  if (Number.isNaN(page) || page < 0) {
    return NextResponse.json({ error: 'Invalid page' }, { status: 400 });
  }

  const games = getGamesByCategory(slug);
  const maxItems = CATEGORY_BATCH_SIZE * CATEGORY_MAX_BATCHES;
  const limitedGames = games.slice(0, maxItems);
  const batch = limitedGames.slice(page * CATEGORY_BATCH_SIZE, (page + 1) * CATEGORY_BATCH_SIZE);

  const totalFetched = (page + 1) * CATEGORY_BATCH_SIZE;
  const hasMore = totalFetched < Math.min(games.length, maxItems);

  return NextResponse.json({
    games: batch,
    hasMore
  });
}
