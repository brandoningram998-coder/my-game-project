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
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">About / Contact</h1>
      <p className="max-w-3xl text-base text-slate-600">
        GameBox Arcade curates high-quality HTML5 browser games primed for SEO visibility and
        seamless play on modern devices. We evaluate each submission for performance, accessibility,
        monetization readiness, and long-term content support before featuring it on the site.
      </p>
      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">How we choose games</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
          <li>Fast-loading HTML5 builds with responsive controls and WebGL fallbacks.</li>
          <li>Accessible UX with color-safe palettes, readable typography, and remappable inputs.</li>
          <li>Reliable hosting via Cloudflare R2 or approved third-party distributors.</li>
          <li>Regular updates that keep metadata, branding, and live-ops hooks fresh.</li>
        </ul>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Contact us</h2>
        <p className="text-sm text-slate-600">
          Submit partnership inquiries, advertising questions, or media kits through the channels
          below. We respond to most requests within two business days.
        </p>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>
            Email:{' '}
            <a href="mailto:hello@gamebox.example" className="text-primary hover:text-primary-dark">
              hello@gamebox.example
            </a>
          </li>
          <li>
            Press:{' '}
            <a href="mailto:press@gamebox.example" className="text-primary hover:text-primary-dark">
              press@gamebox.example
            </a>
          </li>
          <li>
            Discord:{' '}
            <Link href="https://discord.gg/gamebox" className="text-primary hover:text-primary-dark">
              Join our community
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
