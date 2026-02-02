'use client';

interface ScoreBoardProps {
  score: number;
  highScore: number;
  timeRemaining: number;
  chainCount: number;
}

export function ScoreBoard({ score, highScore, timeRemaining, chainCount }: ScoreBoardProps) {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  const isLowTime = timeRemaining <= 30;

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 shadow-xl space-y-4">
      {/* タイマー */}
      <div className="text-center">
        <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Time</div>
        <div
          className={`text-3xl font-bold font-mono ${
            isLowTime ? 'text-red-500 animate-pulse' : 'text-white'
          }`}
        >
          {timeString}
        </div>
      </div>

      {/* スコア */}
      <div className="text-center">
        <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Score</div>
        <div className="text-2xl font-bold text-cyan-400 font-mono">
          {score.toLocaleString()}
        </div>
      </div>

      {/* ハイスコア */}
      <div className="text-center">
        <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">High Score</div>
        <div className="text-lg font-bold text-yellow-400 font-mono">
          {highScore.toLocaleString()}
        </div>
      </div>

      {/* 連鎖表示 */}
      {chainCount > 0 && (
        <div className="text-center animate-bounce">
          <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Chain</div>
          <div className="text-2xl font-bold text-purple-400">
            {chainCount}連鎖!
          </div>
        </div>
      )}
    </div>
  );
}
