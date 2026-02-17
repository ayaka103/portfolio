'use client';

import dynamic from 'next/dynamic';

// SSRを無効にしてクライアントサイドのみでレンダリング
const Game = dynamic(() => import('../components/game/Game'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        ぷよぷよ
      </h1>
      <div className="text-gray-400">Loading...</div>
    </div>
  ),
});

export default function PuyoPuyoPage() {
  return <Game />;
}
