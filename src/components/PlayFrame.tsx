"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Game } from '@/lib/types';

type PlayFrameProps = {
  game: Game;
  onFullscreenRegister?: (handler: () => void) => void;
};

function requestElementFullscreen(element: HTMLElement) {
  const el = element as HTMLElement & {
    webkitRequestFullscreen?: () => Promise<void> | void;
    msRequestFullscreen?: () => Promise<void> | void;
  };
  if (el.requestFullscreen) {
    return el.requestFullscreen();
  }
  if (el.webkitRequestFullscreen) {
    return el.webkitRequestFullscreen();
  }
  if (el.msRequestFullscreen) {
    return el.msRequestFullscreen();
  }
  return Promise.resolve();
}

function exitDocumentFullscreen() {
  const doc = document as Document & {
    webkitExitFullscreen?: () => Promise<void> | void;
    msExitFullscreen?: () => Promise<void> | void;
  };
  if (doc.exitFullscreen) {
    return doc.exitFullscreen();
  }
  if (doc.webkitExitFullscreen) {
    return doc.webkitExitFullscreen();
  }
  if (doc.msExitFullscreen) {
    return doc.msExitFullscreen();
  }
  return Promise.resolve();
}

function isDocumentFullscreen() {
  const doc = document as Document & {
    webkitFullscreenElement?: Element | null;
    msFullscreenElement?: Element | null;
  };
  return Boolean(
    doc.fullscreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement
  );
}

export function PlayFrame({ game, onFullscreenRegister }: PlayFrameProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(async () => {
    if (!containerRef.current) return;
    try {
      if (!isDocumentFullscreen()) {
        await requestElementFullscreen(containerRef.current);
        setIsFullscreen(true);
      } else {
        await exitDocumentFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error('Fullscreen request failed', error);
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(isDocumentFullscreen());
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange as EventListener);
    document.addEventListener('msfullscreenchange', handleFullscreenChange as EventListener);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange as EventListener);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange as EventListener);
    };
  }, []);

  useEffect(() => {
    if (!onFullscreenRegister) {
      return;
    }
    onFullscreenRegister(toggleFullscreen);
  }, [onFullscreenRegister, toggleFullscreen]);

  return (
    <div className="flex flex-col gap-3 lg:gap-4" ref={containerRef}>
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


