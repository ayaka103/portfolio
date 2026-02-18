---
paths:
  - "app/**/*.{ts,tsx}"
  - "lib/**/*.ts"
  - "hooks/**/*.ts"
  - "next.config.{ts,js,mjs}"
---

# Code Review: Next.js / React チェックリスト

Next.js App Router および React 固有のベストプラクティスに関するチェック項目。

## チェック項目

### 1. basePath / assetPrefix の整合性

- [ ] `next.config.ts` の `basePath` 設定と、コード内のパス参照が整合しているか
- [ ] 画像パスに `basePath` が二重に適用されていないか
- [ ] `NEXT_PUBLIC_BASE_PATH` 環境変数と `data.ts` のパス定義が矛盾していないか
- [ ] `next/image` の `src` に手動で `basePath` を連結する場合、データ側のパスにプレフィックスが含まれていないことを確認しているか

**実例（ポートフォリオレビュー）**: `data.ts` の画像パスが `/portfolio/neon-tetris.png` と basePath を含んでいるのに、`ProjectCard.tsx` でさらに `NEXT_PUBLIC_BASE_PATH`（`"/portfolio"`）を連結し、`/portfolio/portfolio/neon-tetris.png` になる二重連結バグが発生していた。

### 2. レイアウトとメタデータ

- [ ] `app/layout.tsx`（ルート）と各ルートの `layout.tsx` で設定が重複していないか
- [ ] フォントが複数レイアウトで独立してインスタンス化されていないか
- [ ] `metadata` エクスポートが各ルートで適切に設定されているか
- [ ] `<html lang="...">` が正しいか

**実例（ポートフォリオレビュー）**: `Noto_Serif_JP` が `app/layout.tsx` と `app/portfolio/layout.tsx` の両方で `next/font` を呼び出して独立インスタンス化されていた。

### 3. Server Components vs Client Components

- [ ] `"use client"` が必要最小限のコンポーネントにのみ付与されているか
- [ ] Server Component で実行可能な処理が Client Component に含まれていないか
- [ ] Client Component の境界が適切に設計されているか

### 4. globals.css の影響範囲

- [ ] `body` や `html` に設定されたグローバルスタイルが特定ページと干渉していないか
- [ ] テーマ（ダーク/ライト）がグローバルに固定されていないか
- [ ] CSS 変数の定義がページ間で競合していないか

**実例（ポートフォリオレビュー）**: `globals.css` の `body { background: #0a0a0a }` がぷよぷよゲーム用のダークテーマだが、ポートフォリオページでは `bg-white` で上書きが必要になっていた。

### 5. 静的エクスポート (`output: "export"`)

- [ ] `output: "export"` 使用時に動的ルートが `generateStaticParams` を持っているか
- [ ] API Route が使用されていないか（静的エクスポートでは不可）
- [ ] `next/image` に `unoptimized: true` が設定されているか（外部画像最適化サーバーがない場合）
- [ ] GitHub Pages デプロイ時の `basePath` が本番/開発で適切に切り替えられるか

### 6. React パターン

- [ ] イベントハンドラの伝播制御が正しいか（`e.stopPropagation()` の適切な使用）
- [ ] `key` prop がリストレンダリングで一意に設定されているか
- [ ] 副作用が `useEffect` 内に適切に閉じ込められているか
- [ ] カスタムフックが適切に抽出されているか
