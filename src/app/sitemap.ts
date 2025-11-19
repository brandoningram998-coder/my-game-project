import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { getAllGames, getCategories, getGamesByCategory } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1
    },
    {
      url: `${SITE_URL}/popular`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily'
    },
    {
      url: `${SITE_URL}/new`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily'
    },
    {
      url: `${SITE_URL}/categories`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly'
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly'
    }
  ];

  const categories = getCategories();
  for (const category of categories) {
    const categoryGames = getGamesByCategory(category.slug);
    const latestUpdate = categoryGames
      .map((game) => new Date(game.updated_at).getTime())
      .sort((a, b) => b - a)[0];
    routes.push({
      url: `${SITE_URL}/category/${category.slug}`,
      lastModified: latestUpdate ? new Date(latestUpdate).toISOString() : new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8
    });
  }

  const games = getAllGames();
  for (const game of games) {
    const lastModified = new Date(game.updated_at).toISOString();
    routes.push(
      {
        url: `${SITE_URL}/game/${game.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7
      },
      {
        url: `${SITE_URL}/play/${game.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7
      }
    );
  }

  return routes;
}
