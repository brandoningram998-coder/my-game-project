import type { Metadata } from 'next';
import Link from 'next/link';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact GameBox Arcade',
  description:
    'Reach the GameBox Arcade team for partnerships, support, or developer submissions.',
  alternates: {
    canonical: canonicalUrl('/contact')
  }
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
      <p className="max-w-2xl text-sm text-slate-600">
        We love hearing from players, developers, and partners. Use the resources below to get in
        touch or jump to the <Link href="/about">About page</Link> for more details about our
        process.
      </p>
      <div className="space-y-4 text-sm text-slate-600">
        <p>
          Support:{' '}
          <a href="mailto:support@gamebox.example" className="text-primary hover:text-primary-dark">
            support@gamebox.example
          </a>
        </p>
        <p>
          Partnerships:{' '}
          <a href="mailto:partners@gamebox.example" className="text-primary hover:text-primary-dark">
            partners@gamebox.example
          </a>
        </p>
        <p>
          DMCA:{' '}
          <a href="mailto:dmca@gamebox.example" className="text-primary hover:text-primary-dark">
            dmca@gamebox.example
          </a>
        </p>
      </div>
    </div>
  );
}
