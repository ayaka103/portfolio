# Code Review: SEO チェックリスト

検索エンジン最適化・SNS シェア対応に関するチェック項目。

## チェック項目

### 1. メタデータ

- [ ] `title` が設定されているか（60文字以内推奨）
- [ ] `description` が設定されているか（120〜160文字推奨）
- [ ] `canonical` URL が設定されているか
- [ ] `robots` メタタグが適切か（noindex が不要に設定されていないか）

### 2. OGP (Open Graph Protocol)

- [ ] `og:title` が設定されているか
- [ ] `og:description` が設定されているか
- [ ] `og:image` が設定されているか（1200x630px 推奨）
- [ ] `og:url` が設定されているか
- [ ] `og:type` が設定されているか（website / article）
- [ ] `og:locale` が設定されているか（ja_JP）

**実例（ポートフォリオレビュー）**: `metadata` に `title` と `description` しか設定されておらず、OGP タグが全て未設定。SNS シェア時にプレビューが表示されない状態だった。

### 3. Twitter Card

- [ ] `twitter:card` が設定されているか（summary_large_image 推奨）
- [ ] `twitter:title` が設定されているか
- [ ] `twitter:description` が設定されているか
- [ ] `twitter:image` が設定されているか

### 4. 構造化データ

- [ ] JSON-LD で構造化データが提供されているか
- [ ] `@type` が適切に設定されているか（Person, WebSite, Portfolio 等）
- [ ] Google Rich Results テストで検証済みか

### 5. HTML セマンティクス

- [ ] `h1` がページに1つだけ存在するか
- [ ] 見出しレベルが正しい順序か（h1 → h2 → h3、飛ばさない）
- [ ] セマンティック要素（`header`, `nav`, `main`, `section`, `footer`）が適切に使われているか
- [ ] 画像に `alt` テキストがあるか（SEO 的にも重要）

### 6. パフォーマンス（SEO 影響）

- [ ] Core Web Vitals（LCP, FID, CLS）が良好か
- [ ] ページの読み込み速度が3秒以内か
- [ ] モバイルフレンドリーか
