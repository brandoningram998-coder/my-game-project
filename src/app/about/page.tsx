import type { Metadata } from 'next';
import Link from 'next/link';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About GameBox Arcade',
  description:
    'Learn about the GameBox Arcade mission, curation process, and how to partner or get in touch with the team.',
  alternates: {
    canonical: canonicalUrl('/about')
  }
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-8 px-4 sm:px-6 lg:px-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">About</h1>
        <p className="text-lg text-slate-600">
          GameBox Arcade curates high-quality HTML5 browser games primed for SEO visibility and
          seamless play on modern devices. We evaluate each submission for performance, accessibility,
          monetization readiness, and long-term content support before featuring it on the site.
        </p>
      </header>
      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-lg leading-relaxed text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How we choose games</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Fast-loading HTML5 builds with responsive controls and WebGL fallbacks.</li>
          <li>Accessible UX with color-safe palettes, readable typography, and remappable inputs.</li>
          <li>Reliable hosting via Cloudflare R2 or approved third-party distributors.</li>
          <li>Regular updates that keep metadata, branding, and live-ops hooks fresh.</li>
        </ul>
      </section>


    </div>
  );
}
