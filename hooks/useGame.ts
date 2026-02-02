'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Board, FallingPuyo, GameState, PuyoColor } from '@/lib/types';
import {
  createEmptyBoard,
  createNextPuyo,
  moveLeft,
  moveRight,
  moveDown,
  rotateClockwise,
  rotateCounterClockwise,
  lockPuyo,
  applyGravity,
  findPuyosToRemove,
  removePuyos,
  markPuyosAsPopping,
  clearDroppingFlags,
  calculateScore,
  isGameOver,
} from '@/lib/gameLogic';
import {
  DROP_INTERVAL,
  FAST_DROP_INTERVAL,
  POP_ANIMATION_DURATION,
  FALL_ANIMATION_DURATION,
  GAME_DURATION,
  ROTATION_OFFSETS,
} from '@/lib/constants';

export function useGame() {
  const [board, setBoard] = useState<Board>(() => createEmptyBoard());
  const [currentPuyo, setCurrentPuyo] = useState<FallingPuyo | null>(null);
  const [nextPuyo, setNextPuyo] = useState<{ main: PuyoColor; sub: PuyoColor }>(() => createNextPuyo());
  const [score, setScore] = useState(0);
  const [chainCount, setChainCount] = useState(0);
  const [gameState, setGameState] = useState<GameState>('idle');
  const [timeRemaining, setTimeRemaining] = useState(GAME_DURATION);
  const [highScore, setHighScore] = useState(0);
  const [isFastDropping, setIsFastDropping] = useState(false);

  const dropIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const gameTimerRef = useRef<NodeJS.Timeout | null>(null);
  const processingRef = useRef(false);

  // ゲーム開始
  const startGame = useCallback(() => {
    setBoard(createEmptyBoard());
    setScore(0);
    setChainCount(0);
    setTimeRemaining(GAME_DURATION);
    setGameState('playing');

    const first = createNextPuyo();
    const next = createNextPuyo();

    const newPuyo: FallingPuyo = {
      mainRow: 0,
      mainCol: 2,
      mainColor: first.main,
      subRow: -1,
      subCol: 2,
      subColor: first.sub,
      rotation: 0,
    };

    setCurrentPuyo(newPuyo);
    setNextPuyo(next);
  }, []);

  // 次のぷよをスポーン
  const spawnNextPuyo = useCallback(() => {
    const offset = ROTATION_OFFSETS[0];
    const newPuyo: FallingPuyo = {
      mainRow: 0,
      mainCol: 2,
      mainColor: nextPuyo.main,
      subRow: 0 + offset.row,
      subCol: 2 + offset.col,
      subColor: nextPuyo.sub,
      rotation: 0,
    };

    setCurrentPuyo(newPuyo);
    setNextPuyo(createNextPuyo());
    setChainCount(0);
  }, [nextPuyo]);

  // 連鎖処理
  const processChains = useCallback(async (currentBoard: Board, chain: number) => {
    if (processingRef.current) return;
    processingRef.current = true;

    let workingBoard = currentBoard;
    let currentChain = chain;

    while (true) {
      // 重力適用
      const gravityResult = applyGravity(workingBoard);
      if (gravityResult.fell) {
        setBoard(gravityResult.board);
        await new Promise(resolve => setTimeout(resolve, FALL_ANIMATION_DURATION));
        workingBoard = clearDroppingFlags(gravityResult.board);
        setBoard(workingBoard);
      }

      // 消えるぷよを検出
      const toRemove = findPuyosToRemove(workingBoard);

      if (toRemove.length === 0) {
        break;
      }

      currentChain++;
      setChainCount(currentChain);

      // スコア加算
      const points = calculateScore(toRemove.length, currentChain);
      setScore(prev => prev + points);

      // 消去アニメーション
      workingBoard = markPuyosAsPopping(workingBoard, toRemove, currentChain);
      setBoard(workingBoard);
      await new Promise(resolve => setTimeout(resolve, POP_ANIMATION_DURATION));

      // 実際に消去
      workingBoard = removePuyos(workingBoard, toRemove);
      setBoard(workingBoard);
    }

    processingRef.current = false;

    // ゲームオーバーチェック
    if (isGameOver(workingBoard)) {
      setGameState('gameover');
      setHighScore(prev => Math.max(prev, score));
      return;
    }

    // 次のぷよをスポーン
    setGameState('playing');
  }, [score]);

  // ぷよを固定
  const lockCurrentPuyo = useCallback(() => {
    if (!currentPuyo) return;

    const newBoard = lockPuyo(board, currentPuyo);
    setBoard(newBoard);
    setCurrentPuyo(null);
    setGameState('checking');

    // 連鎖処理を開始
    setTimeout(() => {
      processChains(newBoard, 0).then(() => {
        spawnNextPuyo();
      });
    }, 50);
  }, [board, currentPuyo, processChains, spawnNextPuyo]);

  // 自動落下
  useEffect(() => {
    if (gameState !== 'playing' || !currentPuyo) return;

    const interval = isFastDropping ? FAST_DROP_INTERVAL : DROP_INTERVAL;

    dropIntervalRef.current = setInterval(() => {
      setCurrentPuyo(prev => {
        if (!prev) return null;

        const moved = moveDown(board, prev);
        if (moved) {
          return moved;
        } else {
          // 着地
          setTimeout(() => lockCurrentPuyo(), 0);
          return prev;
        }
      });
    }, interval);

    return () => {
      if (dropIntervalRef.current) {
        clearInterval(dropIntervalRef.current);
      }
    };
  }, [gameState, currentPuyo, board, isFastDropping, lockCurrentPuyo]);

  // ゲームタイマー
  useEffect(() => {
    if (gameState !== 'playing' && gameState !== 'checking') return;

    gameTimerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setGameState('gameover');
          setHighScore(prevHigh => Math.max(prevHigh, score));
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (gameTimerRef.current) {
        clearInterval(gameTimerRef.current);
      }
    };
  }, [gameState, score]);

  // キーボード操作
  useEffect(() => {
    if (gameState !== 'playing' || !currentPuyo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          setCurrentPuyo(prev => prev ? moveLeft(board, prev) || prev : null);
          break;
        case 'ArrowRight':
          e.preventDefault();
          setCurrentPuyo(prev => prev ? moveRight(board, prev) || prev : null);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setCurrentPuyo(prev => prev ? rotateClockwise(board, prev) || prev : null);
          break;
        case 'ArrowDown':
          e.preventDefault();
          setCurrentPuyo(prev => prev ? rotateCounterClockwise(board, prev) || prev : null);
          break;
        case ' ':
          e.preventDefault();
          setIsFastDropping(true);
          break;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        setIsFastDropping(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameState, currentPuyo, board]);

  // タッチ操作用のハンドラー
  const handleMoveLeft = useCallback(() => {
    if (gameState !== 'playing' || !currentPuyo) return;
    setCurrentPuyo(prev => prev ? moveLeft(board, prev) || prev : null);
  }, [gameState, currentPuyo, board]);

  const handleMoveRight = useCallback(() => {
    if (gameState !== 'playing' || !currentPuyo) return;
    setCurrentPuyo(prev => prev ? moveRight(board, prev) || prev : null);
  }, [gameState, currentPuyo, board]);

  const handleRotate = useCallback(() => {
    if (gameState !== 'playing' || !currentPuyo) return;
    setCurrentPuyo(prev => prev ? rotateClockwise(board, prev) || prev : null);
  }, [gameState, currentPuyo, board]);

  const handleFastDrop = useCallback((active: boolean) => {
    setIsFastDropping(active);
  }, []);

  return {
    board,
    currentPuyo,
    nextPuyo,
    score,
    chainCount,
    gameState,
    timeRemaining,
    highScore,
    startGame,
    handleMoveLeft,
    handleMoveRight,
    handleRotate,
    handleFastDrop,
  };
}
