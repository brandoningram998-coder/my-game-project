"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

// Define a subset of Game properties required for the carousel
export type CarouselGame = {
    id: string;
    slug: string;
    title: string;
    thumbnail_url: string;
};

type HeroCarouselProps = {
    games: CarouselGame[];
};

export function HeroCarousel({ games }: HeroCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % games.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [games.length]);

    if (!games.length) return null;

    const currentGame = games[currentIndex];

    // Navigation Handlers
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + games.length) % games.length);
    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % games.length);

    return (
        <div className="mx-auto w-full select-none px-0 sm:w-[80%] sm:px-0">

            {/* ============================================================================
                DESKTOP VIEW: Nintendo Switch Style (Hidden on Mobile)
               ============================================================================ */}
            <div className="hidden sm:block">
                <div className="flex aspect-[16/7] w-full items-stretch shadow-2xl drop-shadow-2xl">
                    {/* LEFT JOY-CON */}
                    <div className="relative flex w-[15%] min-w-[60px] flex-col items-center justify-center rounded-l-[2.5rem] bg-[#00C3E3] shadow-[inset_-5px_0px_10px_rgba(0,0,0,0.2)]">
                        <div className="absolute right-4 top-6 h-1 w-4 bg-slate-700 opacity-80" />
                        <div className="mb-6 h-12 w-12 rounded-full bg-slate-800 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.1),0px_5px_10px_rgba(0,0,0,0.3)] border-4 border-slate-700" />
                        <div className="grid grid-cols-3 gap-1">
                            <div /><div className="h-5 w-5 rounded-full bg-slate-700 shadow-sm" /><div />
                            <div className="h-5 w-5 rounded-full bg-slate-700 shadow-sm" /><div /><div className="h-5 w-5 rounded-full bg-slate-700 shadow-sm" />
                            <div /><div className="h-5 w-5 rounded-full bg-slate-700 shadow-sm" /><div />
                        </div>
                    </div>

                    {/* SCREEN CONSOLE */}
                    <div className="relative flex-1 bg-black p-[2%] shadow-[0px_0px_0px_2px_#333]">
                        <div className="group relative h-full w-full overflow-hidden rounded-md bg-slate-900">
                            {/* Sliding Image Container */}
                            <div
                                className="flex h-full transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {games.map((game) => (
                                    <div key={game.id} className="h-full min-w-full">
                                        <img
                                            src={game.thumbnail_url}
                                            alt={game.title}
                                            className="h-full w-full object-cover"
                                            draggable={false}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Buttons */}
                            <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-sm transition hover:scale-110 hover:bg-white/40 sm:h-12 sm:w-12">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                            </button>
                            <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-sm transition hover:scale-110 hover:bg-white/40 sm:h-12 sm:w-12">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                            </button>

                            {/* Play Button */}
                            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <Link href={`/game/${currentGame.slug}`} className="transform rounded-full bg-red-600 p-6 text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-red-500 hover:shadow-red-600/50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10 pl-1"><path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" /></svg>
                                </Link>
                            </div>

                            {/* Indicators */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                                {games.map((_, idx) => (
                                    <button key={idx} onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }} className={clsx("h-1.5 rounded-full transition-all shadow-sm", idx === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80")} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT JOY-CON */}
                    <div className="relative flex w-[15%] min-w-[60px] flex-col items-center justify-center rounded-r-[2.5rem] bg-[#FF4554] shadow-[inset_5px_0px_10px_rgba(0,0,0,0.2)]">
                        {/* JoyCon Decorative Elements */}
                        <div className="absolute left-4 top-6 relative h-4 w-4">
                            <div className="absolute left-1.5 h-4 w-1 bg-slate-700 opacity-80" /><div className="absolute top-1.5 h-1 w-4 bg-slate-700 opacity-80" />
                        </div>
                        <div className="mb-6 grid grid-cols-3 gap-1">
                            <div /><div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-[8px] font-bold text-slate-400 shadow-[0px_2px_0px_rgba(0,0,0,0.5)]">X</div><div />
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-[8px] font-bold text-slate-400 shadow-[0px_2px_0px_rgba(0,0,0,0.5)]">Y</div><div /><div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-[8px] font-bold text-slate-400 shadow-[0px_2px_0px_rgba(0,0,0,0.5)]">A</div>
                            <div /><div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-[8px] font-bold text-slate-400 shadow-[0px_2px_0px_rgba(0,0,0,0.5)]">B</div><div />
                        </div>
                        <div className="h-12 w-12 rounded-full bg-slate-800 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.1),0px_5px_10px_rgba(0,0,0,0.3)] border-4 border-slate-700" />
                        <div className="mt-8 flex h-6 w-6 items-center justify-center rounded-full border border-slate-600 bg-slate-800/50 shadow-inner">
                            <div className="h-4 w-4 rounded-full bg-slate-900" />
                        </div>
                    </div>
                </div>
                {/* Reflection */}
                <div className="mx-auto mt-4 h-4 w-[80%] rounded-[100%] bg-black/20 blur-xl filter" />
            </div>


            {/* ============================================================================
                MOBILE VIEW: Retro Handheld Style (Visible on Mobile)
               ============================================================================ */}
            <div className="block sm:hidden">
                {/* Main Chassis - Full Width on Mobile */}
                <div className="relative mx-auto aspect-[1/1] w-full rounded-[3rem] bg-[#1a237e] p-3 shadow-xl border-b-8 border-[#0d1350]">

                    {/* Darker Inner Bezel Area that holds the screen */}
                    <div className="flex h-full w-full flex-col rounded-[2rem] bg-[#b2ff59] p-4 shadow-inner relative overflow-hidden">

                        {/* THE SCREEN - Larger Aspect Ratio (4/3) */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black border-4 border-[#8cc63f] shadow-sm mb-3">
                            {/* Sliding Image Container */}
                            <div
                                className="flex h-full transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {games.map((game) => (
                                    <div key={game.id} className="h-full min-w-full">
                                        <Link href={`/game/${game.slug}`} className="block h-full w-full">
                                            <img
                                                src={game.thumbnail_url}
                                                alt={game.title}
                                                className="h-full w-full object-cover"
                                                draggable={false}
                                            />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Controls Area Below Screen */}
                        <div className="relative flex flex-1 flex-col items-center justify-center">

                            {/* REMOVED TITLE AS REQUESTED */}

                            {/* START Button */}
                            <Link
                                href={`/game/${currentGame.slug}`}
                                className="font-mono text-xl font-black tracking-[0.2em] text-[#1a237e] hover:text-[#000] border-b-4 border-[#1a237e] pb-1 active:border-b-0 active:translate-y-1 transition-all"
                            >
                                START
                            </Link>

                            {/* Speaker Vents (Decoration) */}
                            <div className="absolute right-0 bottom-1 flex gap-1">
                                <div className="h-6 w-1 rounded-full bg-[#1a237e]/20 -rotate-45" />
                                <div className="h-6 w-1 rounded-full bg-[#1a237e]/20 -rotate-45" />
                                <div className="h-6 w-1 rounded-full bg-[#1a237e]/20 -rotate-45" />
                            </div>
                        </div>

                        {/* Navigation Arrows (Absolute on Faceplate sides) */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                            className="absolute left-1 top-[40%] text-[#1a237e] hover:scale-110 active:scale-95 transition-transform"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 drop-shadow-md">
                                <path d="M15.75 19.5L8.25 12l7.5-7.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                            className="absolute right-1 top-[40%] text-[#1a237e] hover:scale-110 active:scale-95 transition-transform"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 drop-shadow-md">
                                <path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                    </div>

                    {/* Left Red Dot (Power Light) */}
                    <div className="absolute left-3 top-1/2 h-3 w-3 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.8)] animate-pulse" />

                    {/* Bottom Right Logo (Decoration) */}
                    <div className="absolute right-4 bottom-4 w-8 h-8 opacity-50 flex flex-col gap-1 items-end">
                        <div className="w-6 h-1 bg-white/20 rounded-full -rotate-45" />
                        <div className="w-4 h-1 bg-white/20 rounded-full -rotate-45" />
                    </div>

                </div>
            </div>

        </div>
    );
}
