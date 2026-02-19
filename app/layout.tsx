import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif-jp",
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerifJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
