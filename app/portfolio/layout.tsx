import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif-jp",
});

export const metadata: Metadata = {
  title: "Portfolio | AI Developer & Creator",
  description:
    "AIを活用したWebアプリ開発、データ分析、コンテンツ制作のポートフォリオ",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${notoSerifJP.variable}`}>{children}</div>;
}
