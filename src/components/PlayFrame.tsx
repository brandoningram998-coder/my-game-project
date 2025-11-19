"use client";

import type { Game } from '@/lib/types';

type PlayFrameProps = {
  game: Game;
};

export function PlayFrame({ game }: PlayFrameProps) {
  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <div className="relative h-[75vh] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-lg sm:h-auto sm:aspect-video lg:h-[55vh]">
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


