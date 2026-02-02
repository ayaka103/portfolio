import { Board, FallingPuyo, Position, PuyoColor } from './types';
import { BOARD_COLS, BOARD_ROWS, PUYO_COLORS, BASE_SCORE, CHAIN_MULTIPLIER, ROTATION_OFFSETS } from './constants';

// 空のボードを作成
export function createEmptyBoard(): Board {
  return Array(BOARD_ROWS).fill(null).map(() => Array(BOARD_COLS).fill(null));
}

// ランダムな色を取得
export function getRandomColor(): PuyoColor {
  return PUYO_COLORS[Math.floor(Math.random() * PUYO_COLORS.length)];
}

// 新しい落下ぷよを生成
export function createFallingPuyo(): FallingPuyo {
  return {
    mainRow: 0,
    mainCol: 2,
    mainColor: getRandomColor(),
    subRow: -1,
    subCol: 2,
    subColor: getRandomColor(),
    rotation: 0,
  };
}

// 次のぷよを生成
export function createNextPuyo(): { main: PuyoColor; sub: PuyoColor } {
  return {
    main: getRandomColor(),
    sub: getRandomColor(),
  };
}

// 衝突判定
export function isValidPosition(
  board: Board,
  mainRow: number,
  mainCol: number,
  subRow: number,
  subCol: number
): boolean {
  // メインぷよのチェック
  if (mainCol < 0 || mainCol >= BOARD_COLS) return false;
  if (mainRow >= BOARD_ROWS) return false;
  if (mainRow >= 0 && board[mainRow][mainCol] !== null) return false;

  // サブぷよのチェック
  if (subCol < 0 || subCol >= BOARD_COLS) return false;
  if (subRow >= BOARD_ROWS) return false;
  if (subRow >= 0 && board[subRow][subCol] !== null) return false;

  return true;
}

// ぷよを左に移動
export function moveLeft(board: Board, puyo: FallingPuyo): FallingPuyo | null {
  const offset = ROTATION_OFFSETS[puyo.rotation];
  const newMainCol = puyo.mainCol - 1;
  const newSubCol = newMainCol + offset.col;

  if (isValidPosition(board, puyo.mainRow, newMainCol, puyo.subRow, newSubCol)) {
    return {
      ...puyo,
      mainCol: newMainCol,
      subCol: newSubCol,
    };
  }
  return null;
}

// ぷよを右に移動
export function moveRight(board: Board, puyo: FallingPuyo): FallingPuyo | null {
  const offset = ROTATION_OFFSETS[puyo.rotation];
  const newMainCol = puyo.mainCol + 1;
  const newSubCol = newMainCol + offset.col;

  if (isValidPosition(board, puyo.mainRow, newMainCol, puyo.subRow, newSubCol)) {
    return {
      ...puyo,
      mainCol: newMainCol,
      subCol: newSubCol,
    };
  }
  return null;
}

// ぷよを時計回りに回転
export function rotateClockwise(board: Board, puyo: FallingPuyo): FallingPuyo | null {
  const newRotation = ((puyo.rotation + 1) % 4) as 0 | 1 | 2 | 3;
  const offset = ROTATION_OFFSETS[newRotation];
  const newSubRow = puyo.mainRow + offset.row;
  const newSubCol = puyo.mainCol + offset.col;

  // 通常回転
  if (isValidPosition(board, puyo.mainRow, puyo.mainCol, newSubRow, newSubCol)) {
    return {
      ...puyo,
      rotation: newRotation,
      subRow: newSubRow,
      subCol: newSubCol,
    };
  }

  // 壁蹴り（左にずらす）
  if (isValidPosition(board, puyo.mainRow, puyo.mainCol - 1, newSubRow - 1, newSubCol)) {
    return {
      ...puyo,
      mainCol: puyo.mainCol - 1,
      rotation: newRotation,
      subRow: newSubRow,
      subCol: newSubCol - 1,
    };
  }

  // 壁蹴り（右にずらす）
  if (isValidPosition(board, puyo.mainRow, puyo.mainCol + 1, newSubRow - 1, newSubCol)) {
    return {
      ...puyo,
      mainCol: puyo.mainCol + 1,
      rotation: newRotation,
      subRow: newSubRow,
      subCol: newSubCol + 1,
    };
  }

  return null;
}

// ぷよを反時計回りに回転
export function rotateCounterClockwise(board: Board, puyo: FallingPuyo): FallingPuyo | null {
  const newRotation = ((puyo.rotation + 3) % 4) as 0 | 1 | 2 | 3;
  const offset = ROTATION_OFFSETS[newRotation];
  const newSubRow = puyo.mainRow + offset.row;
  const newSubCol = puyo.mainCol + offset.col;

  if (isValidPosition(board, puyo.mainRow, puyo.mainCol, newSubRow, newSubCol)) {
    return {
      ...puyo,
      rotation: newRotation,
      subRow: newSubRow,
      subCol: newSubCol,
    };
  }

  // 壁蹴り
  if (isValidPosition(board, puyo.mainRow, puyo.mainCol - 1, newSubRow, newSubCol - 1)) {
    return {
      ...puyo,
      mainCol: puyo.mainCol - 1,
      rotation: newRotation,
      subRow: newSubRow,
      subCol: newSubCol - 1,
    };
  }

  if (isValidPosition(board, puyo.mainRow, puyo.mainCol + 1, newSubRow, newSubCol + 1)) {
    return {
      ...puyo,
      mainCol: puyo.mainCol + 1,
      rotation: newRotation,
      subRow: newSubRow,
      subCol: newSubCol + 1,
    };
  }

  return null;
}

// ぷよを1段下に移動
export function moveDown(board: Board, puyo: FallingPuyo): FallingPuyo | null {
  const offset = ROTATION_OFFSETS[puyo.rotation];
  const newMainRow = puyo.mainRow + 1;
  const newSubRow = newMainRow + offset.row;

  if (isValidPosition(board, newMainRow, puyo.mainCol, newSubRow, puyo.subCol)) {
    return {
      ...puyo,
      mainRow: newMainRow,
      subRow: newSubRow,
    };
  }
  return null;
}

// ぷよをボードに固定
export function lockPuyo(board: Board, puyo: FallingPuyo): Board {
  const newBoard = board.map(row => [...row]);

  if (puyo.mainRow >= 0 && puyo.mainRow < BOARD_ROWS) {
    newBoard[puyo.mainRow][puyo.mainCol] = { color: puyo.mainColor };
  }
  if (puyo.subRow >= 0 && puyo.subRow < BOARD_ROWS) {
    newBoard[puyo.subRow][puyo.subCol] = { color: puyo.subColor };
  }

  return newBoard;
}

// ぷよを落下させる（重力適用）
export function applyGravity(board: Board): { board: Board; fell: boolean } {
  const newBoard = board.map(row => [...row]);
  let fell = false;

  for (let col = 0; col < BOARD_COLS; col++) {
    let writeRow = BOARD_ROWS - 1;

    for (let row = BOARD_ROWS - 1; row >= 0; row--) {
      if (newBoard[row][col] !== null) {
        if (writeRow !== row) {
          newBoard[writeRow][col] = { ...newBoard[row][col]!, isDropping: true };
          newBoard[row][col] = null;
          fell = true;
        }
        writeRow--;
      }
    }
  }

  return { board: newBoard, fell };
}

// 連結グループを探索（BFS）
function findConnectedGroup(
  board: Board,
  startRow: number,
  startCol: number,
  visited: boolean[][]
): Position[] {
  const color = board[startRow][startCol]?.color;
  if (!color) return [];

  const group: Position[] = [];
  const queue: Position[] = [{ row: startRow, col: startCol }];
  visited[startRow][startCol] = true;

  const directions = [
    { row: -1, col: 0 },
    { row: 1, col: 0 },
    { row: 0, col: -1 },
    { row: 0, col: 1 },
  ];

  while (queue.length > 0) {
    const current = queue.shift()!;
    group.push(current);

    for (const dir of directions) {
      const newRow = current.row + dir.row;
      const newCol = current.col + dir.col;

      if (
        newRow >= 0 &&
        newRow < BOARD_ROWS &&
        newCol >= 0 &&
        newCol < BOARD_COLS &&
        !visited[newRow][newCol] &&
        board[newRow][newCol]?.color === color
      ) {
        visited[newRow][newCol] = true;
        queue.push({ row: newRow, col: newCol });
      }
    }
  }

  return group;
}

// 消えるぷよを検出
export function findPuyosToRemove(board: Board): Position[] {
  const visited = Array(BOARD_ROWS).fill(null).map(() => Array(BOARD_COLS).fill(false));
  const toRemove: Position[] = [];

  for (let row = 0; row < BOARD_ROWS; row++) {
    for (let col = 0; col < BOARD_COLS; col++) {
      if (!visited[row][col] && board[row][col] !== null) {
        const group = findConnectedGroup(board, row, col, visited);
        if (group.length >= 4) {
          toRemove.push(...group);
        }
      }
    }
  }

  return toRemove;
}

// ぷよを消去
export function removePuyos(board: Board, positions: Position[]): Board {
  const newBoard = board.map(row => [...row]);

  for (const pos of positions) {
    newBoard[pos.row][pos.col] = null;
  }

  return newBoard;
}

// ぷよに消去アニメーションフラグをセット
export function markPuyosAsPopping(board: Board, positions: Position[], chainNumber: number): Board {
  const newBoard = board.map(row => row.map(cell => cell ? { ...cell } : null));

  for (const pos of positions) {
    if (newBoard[pos.row][pos.col]) {
      newBoard[pos.row][pos.col] = {
        ...newBoard[pos.row][pos.col]!,
        isPopping: true,
        chainNumber,
      };
    }
  }

  return newBoard;
}

// 落下フラグをクリア
export function clearDroppingFlags(board: Board): Board {
  return board.map(row =>
    row.map(cell =>
      cell ? { ...cell, isDropping: false } : null
    )
  );
}

// スコア計算
export function calculateScore(removedCount: number, chainCount: number): number {
  const multiplier = CHAIN_MULTIPLIER[Math.min(chainCount, CHAIN_MULTIPLIER.length - 1)];
  return removedCount * BASE_SCORE * multiplier;
}

// ゲームオーバー判定
export function isGameOver(board: Board): boolean {
  // 3列目（0-indexed: 2）の最上段にぷよがあればゲームオーバー
  return board[0][2] !== null;
}

// ぷよがすべて設置済みか確認（アニメーション中でないか）
export function hasFloatingPuyos(board: Board): boolean {
  for (let col = 0; col < BOARD_COLS; col++) {
    let foundEmpty = false;
    for (let row = BOARD_ROWS - 1; row >= 0; row--) {
      if (board[row][col] === null) {
        foundEmpty = true;
      } else if (foundEmpty) {
        return true;
      }
    }
  }
  return false;
}
