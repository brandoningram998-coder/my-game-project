"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Game } from '@/lib/types';

type PlayFrameProps = {
  game: Game;
};

export function PlayFrame({ game }: PlayFrameProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(async () => {
    if (!containerRef.current) return;
    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error('Fullscreen request failed', error);
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleRequest = () => {
      toggleFullscreen();
    };
    window.addEventListener('playframe-fullscreen', handleRequest);
    return () => window.removeEventListener('playframe-fullscreen', handleRequest);
  }, [toggleFullscreen]);

  return (
    <div className="flex flex-col gap-3 lg:gap-4" ref={containerRef}>
      <div className="relative h-[60vh] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-lg sm:h-auto sm:aspect-video lg:h-[55vh]">
        <iframe
          src={game.file_url}
          title={`${game.title} - Play now`}
          className="h-full w-full"
          loading="lazy"
          allowFullScreen
          allow="fullscreen; gamepad; autoplay; encrypted-media; clipboard-read; clipboard-write; screen-wake-lock; xr-spatial-tracking"
          sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-popups allow-top-navigation-by-user-activation"
        />
      </div>
    </div>
  );
}


