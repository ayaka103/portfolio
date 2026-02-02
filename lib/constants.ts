import { PuyoColor } from './types';

// ボードサイズ
export const BOARD_ROWS = 12;
export const BOARD_COLS = 6;

// セルサイズ（px）
export const CELL_SIZE = 40;

// ぷよの色リスト
export const PUYO_COLORS: PuyoColor[] = ['red', 'green', 'blue', 'yellow'];

// 色に対応するTailwindクラス
export const COLOR_CLASSES: Record<NonNullable<PuyoColor>, {
  bg: string;
  glow: string;
  gradient: string;
}> = {
  red: {
    bg: 'bg-red-500',
    glow: 'shadow-[0_0_20px_rgba(239,68,68,0.8)]',
    gradient: 'bg-gradient-to-br from-red-400 via-red-500 to-red-600',
  },
  green: {
    bg: 'bg-green-500',
    glow: 'shadow-[0_0_20px_rgba(34,197,94,0.8)]',
    gradient: 'bg-gradient-to-br from-green-400 via-green-500 to-green-600',
  },
  blue: {
    bg: 'bg-blue-500',
    glow: 'shadow-[0_0_20px_rgba(59,130,246,0.8)]',
    gradient: 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600',
  },
  yellow: {
    bg: 'bg-yellow-400',
    glow: 'shadow-[0_0_20px_rgba(250,204,21,0.8)]',
    gradient: 'bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500',
  },
};

// ゲーム速度
export const DROP_INTERVAL = 500; // ミリ秒
export const FAST_DROP_INTERVAL = 50;
export const POP_ANIMATION_DURATION = 300;
export const FALL_ANIMATION_DURATION = 200;

// スコア計算
export const BASE_SCORE = 10;
export const CHAIN_MULTIPLIER = [0, 1, 4, 8, 16, 32, 64, 128, 256, 512, 999];

// タイムアタック
export const GAME_DURATION = 120; // 秒

// 回転に対応するサブぷよのオフセット
export const ROTATION_OFFSETS: Record<0 | 1 | 2 | 3, { row: number; col: number }> = {
  0: { row: -1, col: 0 },  // 上
  1: { row: 0, col: 1 },   // 右
  2: { row: 1, col: 0 },   // 下
  3: { row: 0, col: -1 },  // 左
};
