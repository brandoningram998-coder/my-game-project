import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';
import { getCategories } from '@/lib/data';
import { NavLinks } from './NavLinks';

export async function NavBar() {
  const categories = getCategories();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/kabuda.png" alt={SITE_NAME} className="h-12 w-auto" />
        </Link>
        <NavLinks categories={categories} />
      </div>
    </header>
  );
}
