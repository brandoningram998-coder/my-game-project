import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="mt-0 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-6 px-4 py-8 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="transition hover:text-primary">
            Privacy
          </Link>
          <Link href="/terms" className="transition hover:text-primary">
            Terms
          </Link>
          <Link href="/contact" className="transition hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
