'use client';

import { PuyoColor } from '@/lib/types';
import { COLOR_CLASSES } from '@/lib/constants';

interface PuyoProps {
  color: PuyoColor;
  isDropping?: boolean;
  isPopping?: boolean;
  chainNumber?: number;
}

export function Puyo({ color, isDropping, isPopping, chainNumber }: PuyoProps) {
  if (!color) return null;

  const colorClass = COLOR_CLASSES[color];

  return (
    <div
      className={`
        w-full h-full rounded-full
        ${colorClass.gradient}
        ${colorClass.glow}
        ${isDropping ? 'animate-fall' : ''}
        ${isPopping ? 'animate-pop' : ''}
        transition-all duration-100
        relative
        before:content-['']
        before:absolute
        before:top-[15%]
        before:left-[20%]
        before:w-[30%]
        before:h-[25%]
        before:bg-white/50
        before:rounded-full
        before:blur-[1px]
      `}
    >
      {/* 連鎖数表示 */}
      {isPopping && chainNumber && chainNumber > 1 && (
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg drop-shadow-lg animate-bounce">
          {chainNumber}
        </span>
      )}
    </div>
  );
}
