import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';
import { getCategories } from '@/lib/data';
import { CategoryDropdown } from './CategoryDropdown';

export async function NavBar() {
  const categories = getCategories();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary-dark">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            Play
          </span>
          {SITE_NAME}
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/" className="transition hover:text-primary">
            Home
          </Link>
          <CategoryDropdown categories={categories} />
          <Link href="/popular" className="transition hover:text-primary">
            Popular
          </Link>
          <Link href="/new" className="transition hover:text-primary">
            New Games
          </Link>
          <Link href="/about" className="transition hover:text-primary">
            About / Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
