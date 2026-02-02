'use client';

interface GameControlsProps {
  onMoveLeft: () => void;
  onMoveRight: () => void;
  onRotate: () => void;
  onFastDrop: (active: boolean) => void;
  disabled?: boolean;
}

export function GameControls({
  onMoveLeft,
  onMoveRight,
  onRotate,
  onFastDrop,
  disabled = false,
}: GameControlsProps) {
  return (
    <div className="flex flex-col items-center gap-3 mt-4 md:hidden">
      {/* 回転ボタン */}
      <button
        className="w-16 h-16 rounded-full bg-purple-600/80 text-white text-2xl font-bold
                   shadow-lg shadow-purple-500/30 active:scale-95 active:bg-purple-700
                   disabled:opacity-50 disabled:cursor-not-allowed
                   border border-purple-400/30 backdrop-blur-sm
                   flex items-center justify-center"
        onTouchStart={() => !disabled && onRotate()}
        onClick={() => !disabled && onRotate()}
        disabled={disabled}
      >
        ↻
      </button>

      {/* 方向ボタン */}
      <div className="flex items-center gap-4">
        {/* 左 */}
        <button
          className="w-14 h-14 rounded-full bg-gray-700/80 text-white text-xl font-bold
                     shadow-lg active:scale-95 active:bg-gray-600
                     disabled:opacity-50 disabled:cursor-not-allowed
                     border border-gray-500/30 backdrop-blur-sm
                     flex items-center justify-center"
          onTouchStart={() => !disabled && onMoveLeft()}
          onClick={() => !disabled && onMoveLeft()}
          disabled={disabled}
        >
          ←
        </button>

        {/* 落下 */}
        <button
          className="w-16 h-16 rounded-full bg-cyan-600/80 text-white text-xl font-bold
                     shadow-lg shadow-cyan-500/30 active:scale-95 active:bg-cyan-700
                     disabled:opacity-50 disabled:cursor-not-allowed
                     border border-cyan-400/30 backdrop-blur-sm
                     flex items-center justify-center"
          onTouchStart={() => !disabled && onFastDrop(true)}
          onTouchEnd={() => onFastDrop(false)}
          onMouseDown={() => !disabled && onFastDrop(true)}
          onMouseUp={() => onFastDrop(false)}
          onMouseLeave={() => onFastDrop(false)}
          disabled={disabled}
        >
          ↓
        </button>

        {/* 右 */}
        <button
          className="w-14 h-14 rounded-full bg-gray-700/80 text-white text-xl font-bold
                     shadow-lg active:scale-95 active:bg-gray-600
                     disabled:opacity-50 disabled:cursor-not-allowed
                     border border-gray-500/30 backdrop-blur-sm
                     flex items-center justify-center"
          onTouchStart={() => !disabled && onMoveRight()}
          onClick={() => !disabled && onMoveRight()}
          disabled={disabled}
        >
          →
        </button>
      </div>
    </div>
  );
}
