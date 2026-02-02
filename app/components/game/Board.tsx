'use client';

import { Board as BoardType, FallingPuyo } from '@/lib/types';
import { BOARD_COLS, BOARD_ROWS, CELL_SIZE } from '@/lib/constants';
import { Puyo } from './Puyo';

interface BoardProps {
  board: BoardType;
  currentPuyo: FallingPuyo | null;
}

export function Board({ board, currentPuyo }: BoardProps) {
  return (
    <div
      className="relative bg-gray-900/80 backdrop-blur-sm rounded-lg p-2 border border-gray-700/50 shadow-2xl"
      style={{
        width: BOARD_COLS * CELL_SIZE + 16,
        height: BOARD_ROWS * CELL_SIZE + 16,
      }}
    >
      {/* グリッド背景 */}
      <div
        className="grid gap-[1px] bg-gray-800/50 rounded"
        style={{
          gridTemplateColumns: `repeat(${BOARD_COLS}, ${CELL_SIZE}px)`,
          gridTemplateRows: `repeat(${BOARD_ROWS}, ${CELL_SIZE}px)`,
        }}
      >
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="bg-gray-900/60 border border-gray-800/30 rounded-sm flex items-center justify-center p-[2px]"
            >
              {cell && (
                <Puyo
                  color={cell.color}
                  isDropping={cell.isDropping}
                  isPopping={cell.isPopping}
                  chainNumber={cell.chainNumber}
                />
              )}
            </div>
          ))
        )}
      </div>

      {/* 落下中のぷよ */}
      {currentPuyo && (
        <>
          {/* メインぷよ */}
          {currentPuyo.mainRow >= 0 && (
            <div
              className="absolute p-[2px] transition-all duration-50"
              style={{
                width: CELL_SIZE,
                height: CELL_SIZE,
                left: currentPuyo.mainCol * CELL_SIZE + 8,
                top: currentPuyo.mainRow * CELL_SIZE + 8,
              }}
            >
              <Puyo color={currentPuyo.mainColor} />
            </div>
          )}
          {/* サブぷよ */}
          {currentPuyo.subRow >= 0 && (
            <div
              className="absolute p-[2px] transition-all duration-50"
              style={{
                width: CELL_SIZE,
                height: CELL_SIZE,
                left: currentPuyo.subCol * CELL_SIZE + 8,
                top: currentPuyo.subRow * CELL_SIZE + 8,
              }}
            >
              <Puyo color={currentPuyo.subColor} />
            </div>
          )}
        </>
      )}

      {/* 危険ゾーン表示（3列目の最上段） */}
      <div
        className="absolute border-2 border-red-500/30 rounded-sm pointer-events-none animate-pulse"
        style={{
          width: CELL_SIZE - 2,
          height: CELL_SIZE - 2,
          left: 2 * CELL_SIZE + 9,
          top: 9,
        }}
      />
    </div>
  );
}
