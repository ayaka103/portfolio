import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | AI Developer & Creator",
  description:
    "AIを活用したWebアプリ開発・データ分析・コンテンツ制作を行うフリーランスのポートフォリオ。ChatGPT・Claude・Geminiなど複数のAIツールを駆使し、企画から実装まで一気通貫で対応します。",
  openGraph: {
    title: "Portfolio | AI Developer & Creator",
    description:
      "AIを活用したWebアプリ開発・データ分析・コンテンツ制作のポートフォリオ",
    url: "https://ayaka103.github.io/portfolio/",
    siteName: "Portfolio",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | AI Developer & Creator",
    description:
      "AIを活用したWebアプリ開発・データ分析・コンテンツ制作のポートフォリオ",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
