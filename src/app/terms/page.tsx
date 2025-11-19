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
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
      <p className="text-sm text-slate-600">
        These terms govern your access to and use of GameBox Arcade, including games delivered
        through iframes. Continued use of the site indicates your agreement to the policies below.
      </p>
      <div className="space-y-4 text-sm text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Acceptable Use</h2>
          <p>
            You may not misuse our services, attempt to disrupt game hosting, or scrape data beyond
            reasonable browsing activity. Automated querying is limited to rates clearly documented
            in our robots.txt file.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Content</h2>
          <p>
            Game assets remain the property of their respective creators. Embeds are provided with
            permission and may be removed if licensing changes or violations occur.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Liability</h2>
          <p>
            We provide the service on an &quot;as is&quot; basis without warranties. GameBox Arcade
            is not responsible for downtime caused by third-party hosting or network interruptions.
          </p>
        </section>
      </div>
    </div>
  );
}
