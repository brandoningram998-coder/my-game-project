import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CategoryInfiniteClient } from '@/components/CategoryInfiniteClient';
import { RecommendationRail } from '@/components/RecommendationRail';
import { getCategories, getCategoryBatch, getGamesByCategory } from '@/lib/data';
import { canonicalUrl, baseMetadata } from '@/lib/seo';
import { getRecommendations } from '@/lib/recommendations';
import { CATEGORY_BATCH_SIZE, CATEGORY_MAX_BATCHES } from '@/lib/constants';

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const categoryEntry = getCategories().find((category) => category.slug === params.slug);
  if (!categoryEntry) {
    return baseMetadata({
      title: 'Category not found'
    });
  }

  const description = `Play curated ${categoryEntry.title} games online. Discover high-quality browser titles with no downloads required.`;
  const canonical = canonicalUrl(`/category/${categoryEntry.slug}`);

  return {
    title: `${categoryEntry.title} Games`,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title: `${categoryEntry.title} Games - Play Online`,
      description,
      url: canonical
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryEntry.title} Games`,
      description
    }
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categories = getCategories();
  const categoryEntry = categories.find((category) => category.slug === params.slug);
  if (!categoryEntry) {
    notFound();
  }

  const totalGames = getGamesByCategory(categoryEntry.slug).length;
  const initialGames = getCategoryBatch(categoryEntry.slug, 0);
  const recommendations = getRecommendations(`category-${categoryEntry.slug}`, categoryEntry.title);
  const maxItems = CATEGORY_BATCH_SIZE * CATEGORY_MAX_BATCHES;

  return (
    <div className="flex flex-col gap-10">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-wide text-primary">Category</p>
        <h1 className="text-4xl font-bold text-slate-900">{categoryEntry.title}</h1>
        <p className="max-w-3xl text-lg text-slate-600">{categoryEntry.description}</p>
        <p className="text-sm text-slate-500">
          Showing {Math.min(initialGames.length, totalGames)} of {Math.min(totalGames, maxItems)} games.
        </p>
      </section>
      <CategoryInfiniteClient
        slug={categoryEntry.slug}
        initialGames={initialGames}
        totalGames={totalGames}
      />
      <noscript>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4 text-sm text-amber-700">
          Enable JavaScript to load more games in this category.
        </div>
      </noscript>
      <RecommendationRail games={recommendations} heading="Trending in This Genre" />
    </div>
  );
}
