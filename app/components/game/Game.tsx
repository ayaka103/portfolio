'use client';

import { Board } from './Board';
import { NextPuyo } from './NextPuyo';
import { ScoreBoard } from './ScoreBoard';
import { GameControls } from './GameControls';
import { useGame } from '@/hooks/useGame';

export default function Game() {
  const {
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
  } = useGame();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 flex flex-col items-center justify-center p-4">
      {/* タイトル */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        ぷよぷよ
      </h1>

      {/* ゲームエリア */}
      <div className="flex flex-col md:flex-row items-start gap-4">
        {/* ボード */}
        <Board board={board} currentPuyo={currentPuyo} />

        {/* サイドパネル */}
        <div className="flex flex-row md:flex-col gap-4">
          <NextPuyo main={nextPuyo.main} sub={nextPuyo.sub} />
          <ScoreBoard
            score={score}
            highScore={highScore}
            timeRemaining={timeRemaining}
            chainCount={chainCount}
          />
        </div>
      </div>

      {/* コントロール（モバイル） */}
      <GameControls
        onMoveLeft={handleMoveLeft}
        onMoveRight={handleMoveRight}
        onRotate={handleRotate}
        onFastDrop={handleFastDrop}
        disabled={gameState !== 'playing'}
      />

      {/* スタート/リトライ画面 */}
      {(gameState === 'idle' || gameState === 'gameover') && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-900/90 rounded-2xl p-8 border border-gray-700/50 shadow-2xl text-center max-w-sm mx-4">
            {gameState === 'gameover' ? (
              <>
                <h2 className="text-3xl font-bold text-red-400 mb-4">Time Up!</h2>
                <p className="text-gray-300 mb-2">Your Score</p>
                <p className="text-4xl font-bold text-cyan-400 mb-4">{score.toLocaleString()}</p>
                {score >= highScore && score > 0 && (
                  <p className="text-yellow-400 text-lg mb-4 animate-pulse">New High Score!</p>
                )}
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-white mb-4">タイムアタックモード</h2>
                <p className="text-gray-400 mb-2">2分間でハイスコアを目指せ!</p>
              </>
            )}

            <div className="text-gray-500 text-sm mb-6 space-y-1">
              <p>← → : 移動</p>
              <p>↑ ↓ : 回転</p>
              <p>Space : 高速落下</p>
            </div>

            <button
              onClick={startGame}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full
                         shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50
                         transform hover:scale-105 transition-all duration-200"
            >
              {gameState === 'gameover' ? 'もう一度プレイ' : 'ゲームスタート'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
