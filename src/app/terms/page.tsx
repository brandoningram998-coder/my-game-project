import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Review the GameBox Arcade terms of service and usage guidelines.',
  alternates: {
    canonical: canonicalUrl('/terms')
  }
};

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-8 px-4 sm:px-6 lg:px-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Terms of Use</h1>
        <p className="text-lg text-slate-600">
          Welcome to DrKabuda Arcade. By visiting or interacting with our catalog of HTML5 games,
          you agree to the rules below as well as our Privacy Policy. If you disagree with any
          portion, please discontinue using the site.
        </p>
      </header>

      <div className="space-y-6 text-lg leading-relaxed text-slate-700">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">1. Eligibility & Updates</h2>
          <p>
            DrKabuda Arcade is designed for players who are at least 13 years old. Younger visitors
            must browse only with a parent or guardian present. We update these terms from time to
            time; continuing to use the site after changes go live means you accept the revised
            version, so check back periodically.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">2. Game Ownership & Removal</h2>
          <p>
            Many titles are provided by outside studios or licensors. All logos, artwork, code, and
            gameplay remain the property of their creators. If you believe something on
            drkabuda.com infringes your rights, send details to{' '}
            <a href="mailto:hello@drkabuda.com" className="text-primary underline">
              hello@drkabuda.com
            </a>{' '}
            and we will review and take appropriate action, which may include removing the game or
            disabling embeds.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">3. Third-Party Ads & Links</h2>
          <p>
            Some pages contain advertising networks or external links. We do not control or endorse
            those third parties, so any purchases or interactions you have with them are strictly
            between you and the advertiser or merchant.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">4. Disclaimer & Liability</h2>
          <p>
            The site, its services, and all hosted games are provided on an &quot;as is&quot; basis
            without warranties of any kind. DrKabuda Arcade and its team are not liable for indirect
            or consequential damages arising from gameplay, downtime, or third-party code embedded
            within our platform.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">5. Acceptable Use</h2>
          <p>
            You agree not to attempt security breaches, reverse-engineer our infrastructure, or use
            automated tools to harvest data outside of normal browsing. We may suspend access to any
            account or device that disrupts gameplay quality for other visitors.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">6. Service Changes</h2>
          <p>
            We regularly update our catalog and infrastructure. Games may be retired, replaced, or
            temporarily unavailable while maintenance occurs. We are not obligated to store or
            restore archived saves or high scores once a title leaves the platform.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">7. Contact & Feedback</h2>
          <p>
            If you need clarification about these terms, encounter technical issues, or want to
            request takedowns, contact{' '}
            <a href="mailto:hello@drkabuda.com" className="text-primary underline">
              hello@drkabuda.com
            </a>
            . Messages should include enough detail for us to investigate and respond quickly.
          </p>
        </section>
      </div>
    </div>
  );
}
