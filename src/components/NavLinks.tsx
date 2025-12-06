"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CategoryDropdown } from './CategoryDropdown';
import type { CategorySummary } from '@/lib/types';
import clsx from 'clsx';

type NavLinksProps = {
    categories: CategorySummary[];
};

export function NavLinks({ categories }: NavLinksProps) {
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/popular', label: 'Popular' },
        { href: '/new', label: 'New Games' },
        { href: '/articles', label: 'Articles' },
        { href: '/about', label: 'About' },
    ];

    // Helper to check if link is active
    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <nav className="hidden gap-8 text-lg font-medium text-slate-900 md:flex items-center">
            {/* Home */}
            <NavLink href="/" label="Home" active={isActive('/')} />

            {/* Categories Dropdown */}
            <CategoryDropdown categories={categories} />

            {/* Other Links */}
            <NavLink href="/popular" label="Popular" active={isActive('/popular')} />
            <NavLink href="/new" label="New Games" active={isActive('/new')} />
            <NavLink href="/articles" label="Articles" active={isActive('/articles')} />
            <NavLink href="/about" label="About" active={isActive('/about')} />
        </nav>
    );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
    return (
        <Link
            href={href as any}
            className={clsx(
                'relative py-2 transition-colors duration-200',
                active ? 'text-cyan-500 font-bold' : 'text-slate-900 hover:text-cyan-500'
            )}
        >
            {label}
            {active && (
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50" />
            )}
        </Link>
    );
}
