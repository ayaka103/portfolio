export type Category = "all" | "webapp" | "gem" | "data" | "content" | "automation";

export interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  image: string;
  tags: string[];
  url?: string;
}

export const CONTACT = {
  email: "qiantianayaka618@gmail.com",
} as const;

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
    image: "/neon-tetris.png",
    tags: ["Game", "AI対戦", "Manus"],
  },
  {
    id: "puyo-puyo",
    title: "ぷよぷよ タイムアタック",
    category: "webapp",
    description: "2分間でハイスコアを目指すぷよぷよ風パズルゲーム。連鎖判定・スコアシステム搭載。",
    image: "/puyo-puyo.png",
    tags: ["Game", "Next.js", "React"],
  },
  {
    id: "trend-research",
    title: "TrendResearch",
    category: "webapp",
    description: "Gemini Grounding APIを活用し、最新トレンド情報を根拠付きで即座に要約・整理するリサーチツール。",
    image: "/trend-research.png",
    tags: ["Gemini API", "Search", "SaaS"],
  },
  {
    id: "mermaidflow",
    title: "MermaidFlow JP",
    category: "webapp",
    description: "文章をパッとフローチャートに変換するツール。AIによる賢い図解機能搭載。",
    image: "/mermaidflow.png",
    tags: ["Mermaid.js", "AI図解", "Tool"],
  },
  {
    id: "hakata-ai-ocr",
    title: "博多弁AI 褒め上手OCR",
    category: "webapp",
    description: "漫画画像をOCRで読み取り、博多弁で内容を要約＆褒めてくれるユニークなAIツール。",
    image: "/hakata-ai-ocr.png",
    tags: ["OCR", "AI", "方言"],
  },
  {
    id: "ai-sns-analysis",
    title: "AI SNS Analysis",
    category: "webapp",
    description: "SNS分析からフォロワー獲得戦略まで、データをもとに次の一手を提案するサービスのLPを制作。分析レポート作成時間を約60%短縮。",
    image: "/ai-sns-analysis.png",
    tags: ["SNS", "AI分析", "LP"],
  },
  {
    id: "text-generator",
    title: "AI テキスト生成ツール",
    category: "webapp",
    description: "広告コピー・SNS投稿・動画台本など、用途に合わせたテキストをAIで量産。制作コストを約60%削減。",
    image: "/text-generator.png",
    tags: ["AI生成", "YouTube", "Dashboard"],
  },
  {
    id: "line-chatbot",
    title: "LINE風チャットボット",
    category: "webapp",
    description: "LINE風UIのカスタムチャットボット。会話設定やキャプチャ機能を搭載。",
    image: "/line-chatbot.png",
    tags: ["Chatbot", "LINE UI", "AI"],
  },
  {
    id: "food-review",
    title: "FoodReview",
    category: "webapp",
    description: "ログイン不要のグルメレビュー投稿アプリ。店舗検索と正直なレビューが特徴。",
    image: "/food-review.png",
    tags: ["Review", "Web App", "グルメ"],
  },
  {
    id: "pomodoro-timer",
    title: "ポモドーロタイマー",
    category: "webapp",
    description: "セッション管理付きのポモドーロタイマーアプリ。タスク・履歴・設定機能搭載。",
    image: "/pomodoro-timer.png",
    tags: ["Mobile App", "Timer", "生産性"],
  },
  {
    id: "chatgpt-guide",
    title: "ChatGPT 初心者ガイド",
    category: "webapp",
    description: "難しいテーマをやさしく伝えるLP設計が得意。ターゲットに刺さるビジュアルとコピーをAIで高速制作。LP1本の制作期間を約40%短縮。",
    image: "/chatgpt-guide.png",
    tags: ["LP", "ChatGPT", "教育"],
  },
  {
    id: "nexis-dynamics",
    title: "Nexis Dynamics LP",
    category: "webapp",
    description: "AI×データ活用でオンラインビジネスを加速させるSaaS企業のランディングページ。",
    image: "/nexis-dynamics.png",
    tags: ["LP", "SaaS", "Enterprise"],
  },

  // === Gemini GEM (業務効率化) ===
  {
    id: "gem-job-posting",
    title: "求人票生成Gem",
    category: "gem",
    description: "媒体ごとの勝ちパターンを学習させたAIが求人票を自動生成。1件あたりの作成時間を約75%削減。",
    image: "/gem-job-posting.png",
    tags: ["採用", "ライティング", "Gemini"],
  },
  {
    id: "gem-insta-planning",
    title: "インスタ企画生成BOT",
    category: "gem",
    description: "競合リサーチから投稿企画まで、AIで一気通貫。企画立案にかかる時間を約70%削減できます。",
    image: "/gem-insta-planning.png",
    tags: ["Instagram", "企画", "マーケ"],
  },
  {
    id: "gem-line-reply",
    title: "LINEの達人：ちょうどいい返信くん",
    category: "gem",
    description: "遊び心を加えたLINEの返信内容を、様々なシチュエーションとスタイルで一緒に考えてくれるGEM。",
    image: "/gem-line-reply.png",
    tags: ["LINE", "コミュニケーション", "Gemini"],
  },
  {
    id: "gem-strength-finder",
    title: "強み発見&鑑定書作成BOT",
    category: "gem",
    description: "MBTIや深掘りをもとに、あなたの強みと強みを活かせる職種を鑑定書として作成・提案。副業・フリーランス向け。",
    image: "/gem-strength-finder.png",
    tags: ["キャリア", "MBTI", "自己分析"],
  },
  {
    id: "gem-x-post",
    title: "Xポスト作成BOT",
    category: "gem",
    description: "クライアントのトンマナに合ったXポストをAIで即生成。投稿1本あたりの制作時間を約80%カット。",
    image: "/gem-x-post.png",
    tags: ["X / Twitter", "SNS", "ライティング"],
  },
  {
    id: "gem-lateral-thinking",
    title: "水平思考トレーニングBOT",
    category: "gem",
    description: "ユーザーの固定観念を壊し、多角的な視点を養うための対話型トレーニングBOT。回答を数値化してフィードバック。",
    image: "/gem-lateral-thinking.png",
    tags: ["思考力", "教育", "トレーニング"],
  },
  {
    id: "gem-avatar-image",
    title: "擬人化ショート画像生成BOT",
    category: "gem",
    description: "台本を入れるとそのキャラクター画像を自動生成。ショート動画制作のビジュアル作成を効率化。",
    image: "/gem-avatar-image.png",
    tags: ["画像生成", "ショート動画", "Gemini"],
  },
  {
    id: "gem-avatar-script",
    title: "擬人化ショート動画台本作成gem",
    category: "gem",
    description: "ライフハック擬人化ショート動画の台本を対話型で作成。テーマ選定から場面構成まで一気通貫。",
    image: "/gem-avatar-script.png",
    tags: ["台本", "ショート動画", "Gemini"],
  },

  // === Data Analysis ===
  {
    id: "ai-tool-comparison",
    title: "AIツール比較分析",
    category: "data",
    description: "主要AIツール（ChatGPT, Claude, Gemini等）のいいね数・インプレッションを比較分析。",
    image: "/ai-tool-comparison.png",
    tags: ["データ分析", "比較", "Chart"],
  },
  {
    id: "line-ad-chart",
    title: "LINE広告データ可視化",
    category: "data",
    description: "広告データをビジュアル化し、クライアントへの報告・改善提案をスピードアップ。レポート作成時間を約50%短縮。",
    image: "/line-ad-chart.png",
    tags: ["LINE広告", "可視化", "マーケ"],
  },
  {
    id: "sales-pivot",
    title: "売上ピボットテーブル",
    category: "data",
    description: "Notionデータベースを活用した売上管理。カテゴリ別集計とレコード詳細ビュー。",
    image: "/sales-pivot.png",
    tags: ["Notion", "売上管理", "DB"],
  },

  // === Content ===
  {
    id: "freelance-infographic",
    title: "フリーランスの働き方",
    category: "content",
    description: "フリーランスのメリット・デメリットや必要なスキルを分かりやすくまとめたインフォグラフィック。",
    image: "/freelance-infographic.png",
    tags: ["インフォグラフィック", "SNS", "AI画像"],
  },
  {
    id: "freelance-comic",
    title: "フリーランス×AI 4コマ漫画",
    category: "content",
    description: "AI活用でフリーランスの働き方が変わるストーリーを4コマ漫画で表現。",
    image: "/freelance-comic.png",
    tags: ["漫画", "SNS", "AI画像"],
  },
  {
    id: "pdca-infographic",
    title: "PDCAサイクル イラスト",
    category: "content",
    description: "PDCAサイクルの概念をかわいいイラストで視覚的に解説した教育コンテンツ。",
    image: "/pdca-infographic.png",
    tags: ["イラスト", "教育", "AI画像"],
  },
  {
    id: "ai-skills-guide",
    title: "AI活用スキル解説図",
    category: "content",
    description: "AIを魔法の杖に変えるための必須スキルとプロンプト設計の要素を解説したインフォグラフィック。",
    image: "/ai-skills-guide.png",
    tags: ["AI活用", "教育", "NotebookLM"],
  },
  {
    id: "antigravity-guide",
    title: "Google Antigravity IDE ガイド",
    category: "content",
    description: "Google発の次世代IDE「Antigravity」の12のポイントを図解で完全ガイド。",
    image: "/antigravity-guide.png",
    tags: ["IDE", "解説", "NotebookLM"],
  },
  {
    id: "freelance-story",
    title: "フリーランス女子の変身物語",
    category: "content",
    description: "ターゲットの感情に寄り添うストーリーコンテンツをAIで制作。共感・拡散を狙ったSNS設計で、制作時間を約65%削減。",
    image: "/freelance-story.png",
    tags: ["ストーリー", "SNS", "NotebookLM"],
  },
  {
    id: "picture-book",
    title: "子供向けAI絵本",
    category: "content",
    description: "AIで生成した水彩風イラストによる子供向け絵本。物を大切にすることを教える優しい物語。",
    image: "/picture-book-1.png",
    tags: ["絵本", "AI画像", "教育"],
  },
  {
    id: "gutaika-note",
    title: "「具体化力」note記事",
    category: "content",
    description: "専門知識をわかりやすく言語化し、読者の行動を促すオウンドメディア記事を執筆。AIを活用し記事1本あたりの執筆時間を約50%短縮。",
    image: "/gutaika-note.png",
    tags: ["note", "記事", "思考法"],
  },

  // === AI Automation ===
  {
    id: "youtube-analysis",
    title: "YouTube動画解析エージェント",
    category: "automation",
    description: "ブラウザエージェントを活用し、YouTube動画の構成・ランキングを自動解析しレポート化。",
    image: "/youtube-analysis.png",
    tags: ["エージェント", "自動化", "YouTube"],
  },
];

export const categoryCounts: Record<Category, number> = categories.reduce(
  (acc, cat) => {
    acc[cat.key] =
      cat.key === "all"
        ? projects.length
        : projects.filter((p) => p.category === cat.key).length;
    return acc;
  },
  {} as Record<Category, number>
);

const findProject = (id: string) => projects.find((p) => p.id === id)!;

export const worksGroups: { subtitle: string; projects: Project[] }[] = [
  {
    subtitle: "データとAIで、SNSの成果を最大化できます",
    projects: [
      findProject("gem-insta-planning"),
      findProject("ai-sns-analysis"),
      findProject("gem-x-post"),
    ],
  },
  {
    subtitle: "デザインから文章まで、コンテンツ制作を一気通貫で支援できます",
    projects: [
      findProject("freelance-story"),
      findProject("gutaika-note"),
      findProject("chatgpt-guide"),
    ],
  },
  {
    subtitle: "AIツール導入で、業務コストを大幅に削減できます",
    projects: [
      findProject("gem-job-posting"),
      findProject("text-generator"),
      findProject("line-ad-chart"),
    ],
  },
];
