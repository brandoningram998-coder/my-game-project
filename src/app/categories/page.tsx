import type { Metadata } from 'next';
import Link from 'next/link';
import { getCategories } from '@/lib/data';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'All Categories',
  description: 'Explore every game category on GameBox Arcade and discover curated collections for any mood.',
  alternates: {
    canonical: canonicalUrl('/categories')
  },
  openGraph: {
    title: 'Browse Game Categories',
    description: 'Jump into curated HTML5 game categories that cover action, adventure, puzzle, sports, and more.',
    url: canonicalUrl('/categories')
  }
};

export default function CategoriesPage() {
  const categories = getCategories();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Browse Categories</h1>
      <p className="max-w-2xl text-sm text-slate-600">
        Each category is curated with games that meet our performance, accessibility, and fun
        benchmarks. Start exploring below and bookmark your favorites.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="group rounded-2xl border border-slate-200 bg-white px-6 py-6 transition hover:border-primary hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold text-slate-900 group-hover:text-primary">
              {category.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
