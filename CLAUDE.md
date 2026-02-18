# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server with Turbopack (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

This is a Next.js 16 project using the App Router with TypeScript and Tailwind CSS v4.

**Key Technologies:**
- React 19 with Server Components
- Tailwind CSS v4 (PostCSS-based configuration)
- Path alias: `@/*` maps to project root

## Custom Skills

- `/code-review [file-path]` - コードレビュー実施（品質・セキュリティ・パフォーマンス・アクセシビリティ・SEO・Next.js固有の6カテゴリ）
- `/summarize <file-path>` - ファイルを読み込み「タイトル・トピック3つ・結論」形式で要約
- `/char-counter` - テキストの文字数カウント（改行・スペース有無の4パターン）
- `/heading-analyzer` - 競合記事の見出し分析とSEO最適化見出し構成の提案
- `/skill-creator` - 新しいスキルの作成ガイド

---

## ぷよぷよゲーム 要件定義書

### 1. プロジェクト概要

| 項目 | 内容 |
|------|------|
| プロジェクト名 | ぷよぷよ - タイムアタック |
| 概要 | ブラウザで動作するぷよぷよ風パズルゲーム |
| ゲームモード | タイムアタック（2分間でハイスコアを目指す） |
| 対応デバイス | PC（キーボード操作）、モバイル（タッチ操作） |

### 2. ゲームルール

#### 2.1 基本ルール
- **ボードサイズ**: 12行 × 6列
- **ぷよの色**: 4色（赤、緑、青、黄）
- **落下形式**: 2つ1組のぷよが上から落下
- **消去条件**: 同色のぷよが4つ以上繋がると消える
- **連鎖**: 消去後に落下したぷよが再度4つ以上繋がると連鎖発生

#### 2.2 タイムアタックルール
- **制限時間**: 120秒（2分）
- **終了条件**: 時間切れ または ゲームオーバー（3列目最上段にぷよが固定）
- **スコア計算**: `消去数 × 基本点(10) × 連鎖倍率`
- **連鎖倍率**: 1連鎖=1倍, 2連鎖=4倍, 3連鎖=8倍, 4連鎖=16倍...

### 3. 操作方法

#### 3.1 キーボード操作（PC）
| キー | アクション |
|------|----------|
| ← | 左に移動 |
| → | 右に移動 |
| ↑ | 時計回りに回転 |
| ↓ | 反時計回りに回転 |
| Space | 高速落下 |

#### 3.2 タッチ操作（モバイル）
- 画面下部にコントロールパッドを表示
- 方向ボタンで左右移動
- 回転ボタンで時計回り回転
- 落下ボタン長押しで高速落下

### 4. UI/UX仕様

#### 4.1 画面構成
- **メイン画面**: ゲームボード（中央）
- **サイドパネル**: ネクストぷよ表示、スコア、タイマー、ハイスコア
- **オーバーレイ**: スタート画面、ゲームオーバー画面

#### 4.2 ビジュアルデザイン
- **テーマ**: ダークモード + ネオンカラー
- **ぷよ**: グラデーション + グロー効果
- **背景**: グラデーション（グレー〜パープル）
- **UI要素**: ガラスモーフィズム風（半透明 + ブラー）

#### 4.3 アニメーション
- **落下**: スムーズな落下アニメーション（200ms）
- **消去**: 拡大→縮小のポップアニメーション（300ms）
- **連鎖表示**: 連鎖数のバウンスアニメーション

### 5. ファイル構成

```
app/
├── page.tsx              # メインゲームページ（Client Component）
├── globals.css           # グローバルスタイル + アニメーション定義
├── layout.tsx            # レイアウト（メタデータ設定）
└── components/
    └── game/
        ├── Board.tsx         # ゲームボード描画
        ├── Puyo.tsx          # ぷよ単体のビジュアル
        ├── NextPuyo.tsx      # ネクストぷよ表示
        ├── ScoreBoard.tsx    # スコア・タイマー表示
        └── GameControls.tsx  # モバイル用コントロールパッド
lib/
├── types.ts              # 型定義（PuyoColor, Board, GameState等）
├── constants.ts          # 定数（サイズ、速度、色クラス等）
└── gameLogic.ts          # ゲームロジック（移動、回転、連鎖判定等）
hooks/
└── useGame.ts            # ゲーム状態管理カスタムフック
```

### 6. 技術仕様

#### 6.1 使用技術
- **フレームワーク**: Next.js 16 (App Router)
- **UI**: React 19 (Client Components)
- **スタイル**: Tailwind CSS v4
- **状態管理**: React Hooks (useState, useEffect, useCallback)
- **追加ライブラリ**: なし（依存関係最小化）

#### 6.2 パフォーマンス考慮
- CSS Gridによる効率的なボード描画
- useCallbackによる関数メモ化
- requestAnimationFrame不使用（setIntervalで十分な滑らかさ）

### 7. 今後の拡張可能性

- [ ] エンドレスモード追加
- [ ] 効果音・BGM追加
- [ ] ランキング機能（ローカルストレージ）
- [ ] 対戦モード
- [ ] おじゃまぷよ機能
