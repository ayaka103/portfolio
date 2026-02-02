// ぷよの色
export type PuyoColor = 'red' | 'green' | 'blue' | 'yellow' | null;

// ぷよの状態
export interface Puyo {
  color: PuyoColor;
  isDropping?: boolean;
  isPopping?: boolean;
  chainNumber?: number;
}

// ボード上のセル
export type Cell = Puyo | null;

// ボード全体（12行 × 6列）
export type Board = Cell[][];

// 落下中のぷよペア
export interface FallingPuyo {
  // メインぷよの位置
  mainRow: number;
  mainCol: number;
  mainColor: PuyoColor;
  // サブぷよの相対位置（回転で変わる）
  subRow: number;
  subCol: number;
  subColor: PuyoColor;
  // 回転状態 (0: 上, 1: 右, 2: 下, 3: 左)
  rotation: 0 | 1 | 2 | 3;
}

// ゲームの状態
export type GameState = 'idle' | 'playing' | 'dropping' | 'checking' | 'popping' | 'falling' | 'gameover';

// ゲーム全体のステート
export interface GameStore {
  board: Board;
  currentPuyo: FallingPuyo | null;
  nextPuyo: { main: PuyoColor; sub: PuyoColor };
  score: number;
  chainCount: number;
  gameState: GameState;
  timeRemaining: number;
  highScore: number;
}

// 座標
export interface Position {
  row: number;
  col: number;
}
