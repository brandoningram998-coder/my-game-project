import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how GameBox Arcade collects, stores, and processes data from visitors.',
  alternates: {
    canonical: canonicalUrl('/privacy')
  }
};

export default function PrivacyPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="text-sm text-slate-600">
        GameBox Arcade respects your privacy. We collect minimal analytics data to keep the site
        running smoothly and to improve our catalog. This document outlines what data we collect
        and how we use it.
      </p>
      <div className="space-y-4 text-sm text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Analytics</h2>
          <p>
            We use privacy-friendly analytics that store anonymized page view metrics. No personally
            identifiable information is retained.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Cookies</h2>
          <p>
            Essential cookies keep your preferences intact. Optional advertising cookies are clearly
            labeled and can be disabled anytime in the cookie banner.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
          <p>
            Questions about privacy? Email{' '}
            <a href="mailto:privacy@gamebox.example" className="text-primary hover:text-primary-dark">
              privacy@gamebox.example
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
