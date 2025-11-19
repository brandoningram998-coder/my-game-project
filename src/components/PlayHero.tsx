"use client";

import { useCallback, useRef } from 'react';
import type { Game } from '@/lib/types';
import { PlayFrame } from './PlayFrame';
import { PlayTitleBar } from './PlayTitleBar';

type PlayHeroProps = {
  game: Game;
};

export function PlayHero({ game }: PlayHeroProps) {
  const fullscreenHandlerRef = useRef<(() => void) | null>(null);

  const handleRegister = useCallback((handler: () => void) => {
    fullscreenHandlerRef.current = handler;
  }, []);

  const handleFullscreenClick = useCallback(() => {
    fullscreenHandlerRef.current?.();
  }, []);

  return (
    <>
      <PlayFrame game={game} onFullscreenRegister={handleRegister} />
      <PlayTitleBar title={game.title} onRequestFullscreen={handleFullscreenClick} />
    </>
  );
}
