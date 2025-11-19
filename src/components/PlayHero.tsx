"use client";

import { useCallback } from 'react';
import type { Game } from '@/lib/types';
import { PlayFrame } from './PlayFrame';
import { PlayTitleBar } from './PlayTitleBar';

type PlayHeroProps = {
  game: Game;
};

export function PlayHero({ game }: PlayHeroProps) {
  const handleOpenInNewWindow = useCallback(() => {
    window.open(game.file_url, '_blank', 'noopener,noreferrer');
  }, [game.file_url]);

  return (
    <>
      <PlayFrame game={game} />
      <PlayTitleBar title={game.title} onRequestFullscreen={handleOpenInNewWindow} />
    </>
  );
}
