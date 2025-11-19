"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Game } from '@/lib/types';
import { CATEGORY_BATCH_SIZE, CATEGORY_MAX_BATCHES } from '@/lib/constants';
import { GameGrid } from './GameGrid';

type CategoryInfiniteClientProps = {
  slug: string;
  initialGames: Game[];
  totalGames: number;
};

type ApiResponse = {
  games: Game[];
  hasMore: boolean;
};

export function CategoryInfiniteClient({ slug, initialGames, totalGames }: CategoryInfiniteClientProps) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [games, setGames] = useState<Game[]>(initialGames);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState<boolean>(() => {
    const limit = CATEGORY_BATCH_SIZE * CATEGORY_MAX_BATCHES;
    return totalGames > initialGames.length && initialGames.length < limit;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const maxItems = Math.min(totalGames, CATEGORY_BATCH_SIZE * CATEGORY_MAX_BATCHES);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        page: page.toString()
      });
      const res = await fetch(`/api/categories/${slug}/games?${params.toString()}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        cache: 'no-store'
      });
      if (!res.ok) {
        throw new Error('Failed to load more games.');
      }
      const data = (await res.json()) as ApiResponse;
      setGames((prev) => [...prev, ...data.games]);
      setHasMore(data.hasMore);
      setPage((prev) => prev + 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [page, slug, loading, hasMore]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      {
        rootMargin: '200px 0px'
      }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore, hasMore]);

  return (
    <div className="flex flex-col gap-8">
      <GameGrid games={games.slice(0, maxItems)} />
      {error && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {error} Please refresh the page to try again.
        </p>
      )}
      {hasMore && games.length < maxItems ? (
        <div
          ref={sentinelRef}
          className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center text-sm text-slate-500"
        >
          <span className="animate-pulse text-slate-400">Loading more games...</span>
          <span>Scroll to keep discovering new titles.</span>
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-100 bg-white px-6 py-8 text-center text-sm font-medium text-slate-500">
          {games.length >= maxItems
            ? "You've reached the end."
            : "We've reached the end of this category."}
        </div>
      )}
    </div>
  );
}
