'use client';

import { PuyoColor } from '@/lib/types';
import { CELL_SIZE } from '@/lib/constants';
import { Puyo } from './Puyo';

interface NextPuyoProps {
  main: PuyoColor;
  sub: PuyoColor;
}

export function NextPuyo({ main, sub }: NextPuyoProps) {
  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 shadow-xl">
      <h3 className="text-gray-400 text-sm font-medium mb-3 text-center uppercase tracking-wider">
        Next
      </h3>
      <div className="flex flex-col items-center gap-1">
        <div
          className="p-[2px]"
          style={{ width: CELL_SIZE, height: CELL_SIZE }}
        >
          <Puyo color={sub} />
        </div>
        <div
          className="p-[2px]"
          style={{ width: CELL_SIZE, height: CELL_SIZE }}
        >
          <Puyo color={main} />
        </div>
      </div>
    </div>
  );
}
