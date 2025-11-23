import clsx from 'clsx';

import Link from 'next/link';
import type { Game } from '@/lib/types';

type GameCardProps = {
  game: Game;
  layout?: 'vertical' | 'horizontal';
  variant?: 'default' | 'borderless';
  hideTitleOnMobile?: boolean;
};

export function GameCard({
  game,
  layout = 'vertical',
  variant = 'default',
  hideTitleOnMobile = false
}: GameCardProps) {
  const isHorizontal = layout === 'horizontal';
  const isBorderlessVariant = variant === 'borderless' && !isHorizontal;

  const cardClasses = clsx(
    'group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
    isHorizontal
      ? 'flex gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg'
      : 'flex flex-col gap-2 rounded-3xl transition sm:gap-3',
    !isHorizontal &&
    (isBorderlessVariant
      ? 'bg-transparent p-0 shadow-none ring-0'
      : 'bg-white p-3 shadow-sm ring-1 ring-slate-100'),
    !isHorizontal &&
    'sm:bg-white sm:p-4 sm:shadow-sm sm:ring-1 sm:ring-slate-100 sm:hover:-translate-y-1 sm:hover:shadow-lg'
  );

  const imageWrapperClasses = clsx(
    'relative w-full overflow-hidden bg-slate-100',
    isHorizontal ? 'aspect-video rounded-2xl' : 'aspect-square',
    !isHorizontal && (isBorderlessVariant ? 'rounded-[34px]' : 'rounded-[30px]'),
    isHorizontal && 'rounded-2xl',
    'sm:rounded-3xl lg:rounded-[42px]'
  );

  const imageSizes = isHorizontal
    ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    : '(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 240px';

  return (
    <article className={cardClasses}>
      <Link href={`/game/${game.slug}`} className="focus-visible:outline-none" prefetch={false}>
        <div className={imageWrapperClasses}>
          <img
            src={game.thumbnail_url}
            alt={game.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            sizes={imageSizes}
            className="object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </div>
      </Link>

      <div className={clsx('flex flex-col', isHorizontal ? 'justify-center' : 'items-stretch')}>
        <Link
          href={`/game/${game.slug}`}
          className={clsx(
            'text-center text-sm font-semibold text-slate-900 transition group-hover:text-primary',
            hideTitleOnMobile && 'hidden sm:block',
            !hideTitleOnMobile && 'block',
            'mt-1 sm:mt-2'
          )}
          prefetch={false}
        >
          {game.title}
        </Link>
      </div>
    </article>
  );
}
