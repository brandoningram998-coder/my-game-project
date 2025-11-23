import type { Metadata } from 'next';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from './constants';
import type { Game } from './types';

export function canonicalUrl(pathname: string): string {
  const url = new URL(pathname, SITE_URL);
  return url.toString();
}

export function baseMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      template: `%s | ${SITE_NAME}`,
      default: `${SITE_NAME} - Play Free Online HTML5 Games`
    },
    description: SITE_DESCRIPTION,
    alternates: {
      canonical: SITE_URL
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
      ],
      other: []
    },
    manifest: '/site.webmanifest',
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: `${SITE_NAME} - Play Free HTML5 Games`,
      description: SITE_DESCRIPTION,
      url: SITE_URL
    },
    twitter: {
      card: 'summary_large_image',
      site: '@gamebox',
      creator: '@gamebox'
    },
    ...overrides
  };
}

export function gameMetadata(game: Game): Metadata {
  const url = canonicalUrl(`/game/${game.slug}`);
  const description = `${game.description} Play ${game.title} free in your browser.`;

  return {
    title: `${game.title} - Play Online`,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      type: 'website',
      title: `${game.title} - Play Online`,
      description,
      url,
      images: [
        {
          url: game.thumbnail_url,
          width: 640,
          height: 360,
          alt: `${game.title} thumbnail`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${game.title} - Play Online`,
      description,
      images: [game.thumbnail_url]
    }
  };
}

export function playMetadata(game: Game): Metadata {
  const url = canonicalUrl(`/play/${game.slug}`);
  const description = `Play ${game.title} instantly in full-screen mode. Enjoy browser-based gameplay with no downloads required.`;
  return {
    title: `Play ${game.title} Online`,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      type: 'website',
      title: `Play ${game.title} Online`,
      description,
      url,
      images: [
        {
          url: game.thumbnail_url,
          width: 640,
          height: 360,
          alt: `${game.title} gameplay`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `Play ${game.title} Online`,
      description,
      images: [game.thumbnail_url]
    }
  };
}

export function gameJsonLd(game: Game, page: 'game' | 'play' = 'game') {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: game.title,
    description: game.description,
    genre: game.category,
    operatingSystem: 'Web Browser',
    applicationCategory: 'Game',
    image: game.thumbnail_url,
    url: canonicalUrl(`/${page === 'game' ? 'game' : 'play'}/${game.slug}`),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '12000'
    }
  };
}
