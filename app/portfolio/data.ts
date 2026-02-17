export type Category = "all" | "webapp" | "gem" | "data" | "content" | "automation";

export interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  image: string;
  tags: string[];
}

export const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "webapp", label: "Web App / Tool" },
  { key: "gem", label: "Gemini GEM" },
  { key: "data", label: "Data Analysis" },
  { key: "content", label: "Content" },
  { key: "automation", label: "AI Automation" },
];

export const projects: Project[] = [
  // === Web App / Tool ===
  {
    id: "neon-tetris",
    title: "ネオンテトリス",
    category: "webapp",
    description: "人間 vs AI のリアルタイム対戦テトリス。ネオンUIでサイバーパンクな世界観を表現。",
    image: "/portfolio/neon-tetris.png",
    tags: ["Game", "AI対戦", "Manus"],
  },
  {
    id: "puyo-puyo",
    title: "ぷよぷよ タイムアタック",
    category: "webapp",
    description: "2分間でハイスコアを目指すぷよぷよ風パズルゲーム。連鎖判定・スコアシステム搭載。",
    image: "/portfolio/puyo-puyo.png",
    tags: ["Game", "Next.js", "React"],
  },
  {
    id: "trend-research",
    title: "TrendResearch",
    category: "webapp",
    description: "Gemini Grounding APIを活用し、最新トレンド情報を根拠付きで即座に要約・整理するリサーチツール。",
    image: "/portfolio/trend-research.png",
    tags: ["Gemini API", "Search", "SaaS"],
  },
  {
    id: "mermaidflow",
    title: "MermaidFlow JP",
    category: "webapp",
    description: "文章をパッとフローチャートに変換するツール。AIによる賢い図解機能搭載。",
    image: "/portfolio/mermaidflow.png",
    tags: ["Mermaid.js", "AI図解", "Tool"],
  },
  {
    id: "hakata-ai-ocr",
    title: "博多弁AI 褒め上手OCR",
    category: "webapp",
    description: "漫画画像をOCRで読み取り、博多弁で内容を要約＆褒めてくれるユニークなAIツール。",
    image: "/portfolio/hakata-ai-ocr.png",
    tags: ["OCR", "AI", "方言"],
  },
  {
    id: "ai-sns-analysis",
    title: "AI SNS Analysis",
    category: "webapp",
    description: "AIでSNSデータを分析し、フォロワー獲得戦略やデータドリブンな投稿設計を支援するサービスLP。",
    image: "/portfolio/ai-sns-analysis.png",
    tags: ["SNS", "AI分析", "LP"],
  },
  {
    id: "text-generator",
    title: "AI テキスト生成ツール",
    category: "webapp",
    description: "YouTube台本など、目的に合わせたテキストをAIで自動生成するダッシュボード型ツール。",
    image: "/portfolio/text-generator.png",
    tags: ["AI生成", "YouTube", "Dashboard"],
  },
  {
    id: "line-chatbot",
    title: "LINE風チャットボット",
    category: "webapp",
    description: "LINE風UIのカスタムチャットボット。会話設定やキャプチャ機能を搭載。",
    image: "/portfolio/line-chatbot.png",
    tags: ["Chatbot", "LINE UI", "AI"],
  },
  {
    id: "food-review",
    title: "FoodReview",
    category: "webapp",
    description: "ログイン不要のグルメレビュー投稿アプリ。店舗検索と正直なレビューが特徴。",
    image: "/portfolio/food-review.png",
    tags: ["Review", "Web App", "グルメ"],
  },
  {
    id: "pomodoro-timer",
    title: "ポモドーロタイマー",
    category: "webapp",
    description: "セッション管理付きのポモドーロタイマーアプリ。タスク・履歴・設定機能搭載。",
    image: "/portfolio/pomodoro-timer.png",
    tags: ["Mobile App", "Timer", "生産性"],
  },
  {
    id: "chatgpt-guide",
    title: "ChatGPT 初心者ガイド",
    category: "webapp",
    description: "ChatGPTの使い方を初心者向けに解説するランディングページ。パステルカラーの可愛いデザイン。",
    image: "/portfolio/chatgpt-guide.png",
    tags: ["LP", "ChatGPT", "教育"],
  },
  {
    id: "nexis-dynamics",
    title: "Nexis Dynamics LP",
    category: "webapp",
    description: "AI×データ活用でオンラインビジネスを加速させるSaaS企業のランディングページ。",
    image: "/portfolio/nexis-dynamics.png",
    tags: ["LP", "SaaS", "Enterprise"],
  },

  // === Gemini GEM (業務効率化) ===
  {
    id: "gem-job-posting",
    title: "求人票生成Gem",
    category: "gem",
    description: "Wantedly、Indeed、リクナビなど媒体ごとの「勝ちパターン」に沿った求人票を自動ライティング。採用業務を大幅に効率化。",
    image: "/portfolio/gem-job-posting.png",
    tags: ["採用", "ライティング", "Gemini"],
  },
  {
    id: "gem-insta-planning",
    title: "インスタ企画生成BOT",
    category: "gem",
    description: "Instagram競合アカウントをリサーチし、自社の企画立案まで対話型で実行。ステップ式でマーケ戦略を構築。",
    image: "/portfolio/gem-insta-planning.png",
    tags: ["Instagram", "企画", "マーケ"],
  },
  {
    id: "gem-line-reply",
    title: "LINEの達人：ちょうどいい返信くん",
    category: "gem",
    description: "遊び心を加えたLINEの返信内容を、様々なシチュエーションとスタイルで一緒に考えてくれるGEM。",
    image: "/portfolio/gem-line-reply.png",
    tags: ["LINE", "コミュニケーション", "Gemini"],
  },
  {
    id: "gem-strength-finder",
    title: "強み発見&鑑定書作成BOT",
    category: "gem",
    description: "MBTIや深掘りをもとに、あなたの強みと強みを活かせる職種を鑑定書として作成・提案。副業・フリーランス向け。",
    image: "/portfolio/gem-strength-finder.png",
    tags: ["キャリア", "MBTI", "自己分析"],
  },
  {
    id: "gem-x-post",
    title: "Xポスト作成BOT",
    category: "gem",
    description: "分析から導いたX（Twitter）のポスト（140文字）を簡単に作成できるBOT。SNS運用の効率化に。",
    image: "/portfolio/gem-x-post.png",
    tags: ["X / Twitter", "SNS", "ライティング"],
  },
  {
    id: "gem-lateral-thinking",
    title: "水平思考トレーニングBOT",
    category: "gem",
    description: "ユーザーの固定観念を壊し、多角的な視点を養うための対話型トレーニングBOT。回答を数値化してフィードバック。",
    image: "/portfolio/gem-lateral-thinking.png",
    tags: ["思考力", "教育", "トレーニング"],
  },
  {
    id: "gem-avatar-image",
    title: "擬人化ショート画像生成BOT",
    category: "gem",
    description: "台本を入れるとそのキャラクター画像を自動生成。ショート動画制作のビジュアル作成を効率化。",
    image: "/portfolio/gem-avatar-image.png",
    tags: ["画像生成", "ショート動画", "Gemini"],
  },
  {
    id: "gem-avatar-script",
    title: "擬人化ショート動画台本作成gem",
    category: "gem",
    description: "ライフハック擬人化ショート動画の台本を対話型で作成。テーマ選定から場面構成まで一気通貫。",
    image: "/portfolio/gem-avatar-script.png",
    tags: ["台本", "ショート動画", "Gemini"],
  },

  // === Data Analysis ===
  {
    id: "ai-tool-comparison",
    title: "AIツール比較分析",
    category: "data",
    description: "主要AIツール（ChatGPT, Claude, Gemini等）のいいね数・インプレッションを比較分析。",
    image: "/portfolio/ai-tool-comparison.png",
    tags: ["データ分析", "比較", "Chart"],
  },
  {
    id: "line-ad-chart",
    title: "LINE広告データ可視化",
    category: "data",
    description: "LINE広告のカテゴリ別パフォーマンスをチャートで可視化。データドリブンな広告戦略分析。",
    image: "/portfolio/line-ad-chart.png",
    tags: ["LINE広告", "可視化", "マーケ"],
  },
  {
    id: "sales-pivot",
    title: "売上ピボットテーブル",
    category: "data",
    description: "Notionデータベースを活用した売上管理。カテゴリ別集計とレコード詳細ビュー。",
    image: "/portfolio/sales-pivot.png",
    tags: ["Notion", "売上管理", "DB"],
  },

  // === Content ===
  {
    id: "freelance-infographic",
    title: "フリーランスの働き方",
    category: "content",
    description: "フリーランスのメリット・デメリットや必要なスキルを分かりやすくまとめたインフォグラフィック。",
    image: "/portfolio/freelance-infographic.png",
    tags: ["インフォグラフィック", "SNS", "AI画像"],
  },
  {
    id: "freelance-comic",
    title: "フリーランス×AI 4コマ漫画",
    category: "content",
    description: "AI活用でフリーランスの働き方が変わるストーリーを4コマ漫画で表現。",
    image: "/portfolio/freelance-comic.png",
    tags: ["漫画", "SNS", "AI画像"],
  },
  {
    id: "pdca-infographic",
    title: "PDCAサイクル イラスト",
    category: "content",
    description: "PDCAサイクルの概念をかわいいイラストで視覚的に解説した教育コンテンツ。",
    image: "/portfolio/pdca-infographic.png",
    tags: ["イラスト", "教育", "AI画像"],
  },
  {
    id: "ai-skills-guide",
    title: "AI活用スキル解説図",
    category: "content",
    description: "AIを魔法の杖に変えるための必須スキルとプロンプト設計の要素を解説したインフォグラフィック。",
    image: "/portfolio/ai-skills-guide.png",
    tags: ["AI活用", "教育", "NotebookLM"],
  },
  {
    id: "antigravity-guide",
    title: "Google Antigravity IDE ガイド",
    category: "content",
    description: "Google発の次世代IDE「Antigravity」の12のポイントを図解で完全ガイド。",
    image: "/portfolio/antigravity-guide.png",
    tags: ["IDE", "解説", "NotebookLM"],
  },
  {
    id: "freelance-story",
    title: "フリーランス女子の変身物語",
    category: "content",
    description: "どん底からAIという魔法を掴むまでの23歳フリーランス女子のストーリーをファンタジー風に表現。",
    image: "/portfolio/freelance-story.png",
    tags: ["ストーリー", "SNS", "NotebookLM"],
  },
  {
    id: "picture-book",
    title: "子供向けAI絵本",
    category: "content",
    description: "AIで生成した水彩風イラストによる子供向け絵本。物を大切にすることを教える優しい物語。",
    image: "/portfolio/picture-book-1.png",
    tags: ["絵本", "AI画像", "教育"],
  },
  {
    id: "gutaika-note",
    title: "「具体化力」note記事",
    category: "content",
    description: "思考を具体化するスキルについてのnote記事。深掘りとビジュアライズの習慣を解説。",
    image: "/portfolio/gutaika-note.png",
    tags: ["note", "記事", "思考法"],
  },

  // === AI Automation ===
  {
    id: "youtube-analysis",
    title: "YouTube動画解析エージェント",
    category: "automation",
    description: "ブラウザエージェントを活用し、YouTube動画の構成・ランキングを自動解析しレポート化。",
    image: "/portfolio/youtube-analysis.png",
    tags: ["エージェント", "自動化", "YouTube"],
  },
];
