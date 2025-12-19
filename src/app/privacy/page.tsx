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
    <div className="mx-auto w-full max-w-4xl space-y-8 px-4 sm:px-6 lg:px-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Privacy Policy</h1>
        <p className="text-lg text-slate-600">
          DrKabuda Arcade collects the minimum amount of information necessary to keep the catalog
          running smoothly. Below is a snapshot of what we record, how those details are used, and
          how you can reach us with any concerns.
        </p>
      </header>

      <div className="space-y-6 text-base leading-relaxed text-slate-700 sm:text-lg">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">1. Information We Log</h2>
          <p>
            We collect aggregate metrics—page views, browser type, screen size, and rough location
            derived from IP truncation. This helps us understand which games perform best and where
            bugs may appear. We do not build personal profiles or store full IP addresses.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">2. Cookies & Preferences</h2>
          <p>
            Essential cookies remember language selections, audio toggles, or fullscreen choices so
            your experience remains consistent. Optional cookies tied to ads or third-party stats
            appear only after you grant consent via the cookie banner and can be withdrawn anytime.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">3. Third Parties</h2>
          <p>
            Some games run inside iframes hosted by partner studios or ad networks. Those partners
            may set their own cookies or request additional permissions. Their policies govern such
            data, so please review them separately if you wish to learn more.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">4. Young Players</h2>
          <p>
            The site is built for users aged 13 and older. Players under 13 should browse only with
            a parent or guardian. If a guardian believes we inadvertently gathered personal details
            from a child, contact us so we can erase the information promptly.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">5. Data Requests</h2>
          <p>
            You may request a copy of the session data associated with your visit or ask us to wipe
            previously submitted contact details. Email{' '}
            <a href="mailto:admin@drkabuda.com" className="text-primary underline">
              admin@drkabuda.com
            </a>{' '}
            with enough context to identify your session, and we will respond as quickly as
            possible.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">6. Your Data Protection Rights</h2>
          <p>
            Users covered by GDPR, CCPA, or similar regulations may request access, correction,
            deletion, or portability of their personal information. You also have the right to
            object to certain processing or withdraw consent for optional cookies. Send requests to
            <a href="mailto:admin@drkabuda.com" className="text-primary underline">
              {' '}
              admin@drkabuda.com
            </a>{' '}
            and we will respond within the timeframe required by law.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">7. Security Measures</h2>
          <p>
            We use HTTPS, limited-access databases, and log monitoring to keep session information
            safe. While no system can promise perfect security, we continuously review best
            practices to reduce exposure to unauthorized access.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">8. Policy Changes</h2>
          <p>
            We may update this policy when launching new features or when regulations evolve. The
            date at the top of the page shows the latest revision. Continuing to browse the site
            after updates go live means you accept the new policy, so revisit this page
            periodically.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">9. Questions & Feedback</h2>
          <p>
            For privacy-related questions, bug reports, or general feedback, email{' '}
            <a href="mailto:admin@drkabuda.com" className="text-primary underline">
              admin@drkabuda.com
            </a>
            . Please include details about the relevant game or device so we can troubleshoot more
            efficiently.
          </p>
        </section>
      </div>
    </div>
  );
}
