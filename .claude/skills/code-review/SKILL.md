---
name: code-review
description: >
  コードレビューを実施するスキル。コードの品質・セキュリティ・パフォーマンス・アクセシビリティ・SEO・設計を
  包括的にチェックし、優先度付きのレビュー結果を出力する。
  「コードレビューして」「レビューして」「code review」などのリクエストで使用する。
  Trigger phrases: /code-review, コードレビュー, レビューして, review this code.
argument-hint: "[file-path or directory]"
allowed-tools: Read, Grep, Glob, Bash, WebFetch, Task
---

# Code Review Skill

指定されたファイル・ディレクトリ、またはプロジェクト全体のコードレビューを実施する。

## Usage

```
/code-review <file-path or directory>
```

引数 `$ARGUMENTS` からレビュー対象を取得する。引数がない場合は最近変更されたファイルをレビュー対象とする。

## Workflow

1. **対象の特定**: `$ARGUMENTS` からレビュー対象を特定（空なら `git diff --name-only` または `git status` で最近の変更を確認）
2. **コードの読み込み**: Read / Glob でレビュー対象ファイルを全て読み込む
3. **チェックリスト適用**: `.claude/rules/code-review/` 内の各ルールファイルに従いチェック
4. **結果の構造化**: `.claude/skills/code-review/templates/review-output.md` のフォーマットに従い出力

## Review Categories

以下の6カテゴリで包括的にレビューする。詳細は `.claude/rules/code-review/` を参照。

| カテゴリ | ルールファイル | 概要 |
|---------|-------------|------|
| 一般品質 | `general.md` | コード重複・命名・保守性・型設計 |
| セキュリティ | `security.md` | ハードコード・XSS・インジェクション |
| パフォーマンス | `performance.md` | 不要な再計算・リソース重複ロード |
| アクセシビリティ | `accessibility.md` | WAI-ARIA・キーボード操作・モバイル対応 |
| SEO | `seo.md` | メタデータ・OGP・構造化データ |
| フレームワーク固有 | `nextjs.md` | Next.js / React 固有のベストプラクティス |

## Review Process

### Step 1: 対象ファイルの収集

```
# 引数ありの場合
$ARGUMENTS のパスを読み込む

# 引数なしの場合
git diff --name-only HEAD~5 で最近の変更ファイルを取得
```

### Step 2: 各カテゴリのチェック実行

各ルールファイルのチェック項目に沿って、コードを精査する。
指摘は必ず **ファイルパス:行番号** を含めること。

### Step 3: 優先度の判定

各指摘に以下の優先度を付与する:

| 優先度 | 基準 | 例 |
|-------|------|-----|
| **即対応** | 本番環境でバグ・障害が発生している or する可能性が高い | パス二重連結、未定義変数参照 |
| **高** | 保守性・アクセシビリティに重大な影響がある | コード完全重複、ARIA属性欠如 |
| **中** | UX・パフォーマンス・SEOに影響がある | フォント二重ロード、OGP未設定 |
| **低** | 改善が望ましいが緊急性は低い | 定数の一元管理、型フィールド追加 |

### Step 4: 良い点の抽出

問題点だけでなく、良い設計・実装パターンも必ず3つ以上抽出する。

### Step 5: 結果出力

`.claude/skills/code-review/templates/review-output.md` のフォーマットに従い出力する。

## Rules

- 指摘には必ず **ファイルパス:行番号** を含める
- 改善案には具体的なコード例を提示する
- 指摘は優先度順に並べる（即対応 → 高 → 中 → 低）
- 良い点も必ず記載する（最低3つ）
- 日本語で出力する（コード例は英語）
- レビュー結果以外の余計な前置き・コメントは出力しない
- 推測ではなく、実際にコードを読んで確認した事実に基づいて指摘する
