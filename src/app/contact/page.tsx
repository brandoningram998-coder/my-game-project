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
    <div className="flex min-h-[60vh] w-full items-center justify-center px-4 sm:px-6 lg:px-10">
      <p className="text-center text-xl font-medium text-slate-700 sm:text-2xl">
        If you have any questions or inquiries, please reach us via{' '}
        <a href="mailto:games@drkabuda.com" className="text-primary hover:text-primary-dark">
          games@drkabuda.com
        </a>
      </p>
    </div>
  );
}
