"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { CategorySummary } from '@/lib/types';

type CategoryDropdownProps = {
  categories: CategorySummary[];
};

export function CategoryDropdown({ categories }: CategoryDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 transition hover:text-primary focus-visible:outline-none"
      >
        Categories
        <span aria-hidden>{open ? '∧' : '∨'}</span>
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-3 w-56 rounded-xl border border-slate-100 bg-white shadow-xl">
          <ul className="max-h-[20rem] overflow-y-auto py-3">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/category/${category.slug}`}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm text-slate-600 transition hover:bg-primary/10 hover:text-primary"
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
