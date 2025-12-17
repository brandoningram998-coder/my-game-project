"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export function NavLinks() {
    const pathname = usePathname();

    // Helper to check if link is active
    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <nav className="hidden gap-8 text-lg font-medium text-slate-900 md:flex items-center">
            {/* Home */}
            <NavLink href="/" label="Home" active={isActive('/')} />

            {/* Other Links */}

            {/* Other Links */}

            <NavLink href="/articles" label="Articles" active={isActive('/articles')} />
            <NavLink href="/about" label="About" active={isActive('/about')} />
        </nav >
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
