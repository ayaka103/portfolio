"use client";

import { useState } from "react";
import { projects, categories, categoryCounts, CONTACT, type Category } from "./portfolio/data";
import ProjectCard from "./portfolio/components/ProjectCard";

function SectionDivider() {
  return <div className="w-12 h-[3px] rounded-full bg-[#e8a4b8] mx-auto mb-6" />;
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const navItems = ["About", "Works", "Skills", "Contact"];

  return (
    <div className="min-h-screen bg-white text-[#333333] font-[var(--font-noto-serif-jp)]">
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-[#333333] focus:rounded focus:shadow-md"
      >
        メインコンテンツへスキップ
      </a>

      {/* Navigation */}
      <nav aria-label="メインナビゲーション" className="sticky top-0 z-40 bg-white border-b border-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <span className="text-lg font-bold text-[#333333] tracking-[0.05em]">
            Portfolio
          </span>
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-sm text-[#333333]">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#e8a4b8] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#333333]"
            aria-label="メニューを開く"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#f5f5f5] bg-white">
            <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-[#333333] hover:text-[#e8a4b8] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main id="main-content">
        {/* Hero */}
        <section className="pt-24 pb-20 px-6 md:px-10 bg-[#faf9f5]">
          <div className="max-w-[1200px] mx-auto text-center">
            <p className="text-[#e8a4b8] text-sm font-semibold tracking-[0.05em] uppercase mb-6">
              AI Developer & Creator
            </p>
            <h1 className="text-[32px] md:text-[48px] font-normal leading-[1.8] tracking-[0.15em] text-[#333333] mb-6">
              AIで、つくる。
            </h1>
            <p className="text-[#666666] text-base md:text-lg max-w-xl mx-auto leading-[1.8] mb-10">
              AIを活用したWebアプリ開発、データ分析、コンテンツ制作まで。
              <br className="hidden md:block" />
              テクノロジーとクリエイティブの力で、アイデアを形にします。
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#works"
                className="px-6 py-2.5 rounded-full bg-[#e8a4b8] border border-[#e8a4b8] text-white font-medium text-sm hover:bg-[#d48fa3] hover:shadow-[0_10px_30px_rgba(232,164,184,0.4)] transition-all duration-300"
              >
                Works を見る
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-full border border-[#eeeeee] text-[#666666] font-medium text-sm hover:border-[#e8a4b8] hover:text-[#e8a4b8] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-6 md:px-10">
          <div className="max-w-[1200px] mx-auto">
            <SectionDivider />
            <h2 className="text-2xl font-bold text-center tracking-[0.05em] mb-16">
              About
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-[#333333] leading-[1.8] mb-6">
                  フリーランスとして、AIを活用したプロダクト開発やコンテンツ制作を行っています。
                  ChatGPT・Claude・Gemini・Manusなど複数のAIツールを駆使し、
                  Webアプリケーション開発からデータ分析、SNSコンテンツまで幅広く対応。
                </p>
                <p className="text-[#333333] leading-[1.8]">
                  「AIで業務を効率化したい」「AIを使って新しいプロダクトを作りたい」
                  そんなニーズに、企画から実装まで一気通貫でお応えします。
                </p>
              </div>
              <div>
                <h3 className="text-[#333333] font-bold text-lg mb-4">使用AIツール</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "ChatGPT",
                    "Claude",
                    "Gemini",
                    "Manus",
                    "NotebookLM",
                    "v0",
                    "Cursor",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-1.5 text-xs font-semibold rounded-full bg-[#fff0f3] text-[#e8a4b8]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <h3 className="text-[#333333] font-bold text-lg mb-4">技術スタック</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Python",
                    "Notion API",
                    "Vercel",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 text-xs font-semibold rounded-full bg-[#f5f5f5] text-[#666666] border border-[#eeeeee]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Works */}
        <section id="works" className="py-20 px-6 md:px-10 bg-[#fafafa]">
          <div className="max-w-[1200px] mx-auto">
            <SectionDivider />
            <h2 className="text-2xl font-bold text-center tracking-[0.05em] mb-4">
              Works
            </h2>
            <p className="text-[#666666] text-center text-sm mb-12">
              AIを活用して制作したプロジェクト一覧
            </p>

            {/* Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat.key
                      ? "bg-[#e8a4b8] text-white border border-[#e8a4b8] shadow-[0_10px_30px_rgba(232,164,184,0.4)]"
                      : "bg-transparent text-[#666666] border border-[#eeeeee] hover:border-[#e8a4b8] hover:text-[#e8a4b8]"
                  }`}
                >
                  {cat.label}
                  <span className="ml-1.5 text-xs opacity-60">
                    {categoryCounts[cat.key]}
                  </span>
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 px-6 md:px-10">
          <div className="max-w-[1200px] mx-auto">
            <SectionDivider />
            <h2 className="text-2xl font-bold text-center tracking-[0.05em] mb-16">
              Skills
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Web開発",
                  items: ["Next.js / React", "TypeScript", "Tailwind CSS", "Vercel Deploy"],
                },
                {
                  title: "AI活用",
                  items: ["プロンプト設計", "AIエージェント構築", "API連携", "マルチAI活用"],
                },
                {
                  title: "データ分析",
                  items: ["データ可視化", "SNS分析", "広告データ分析", "Notion DB設計"],
                },
                {
                  title: "コンテンツ制作",
                  items: ["SNS投稿デザイン", "インフォグラフィック", "AI画像生成", "記事執筆"],
                },
              ].map((skill) => (
                <div
                  key={skill.title}
                  className="p-6 rounded-lg bg-[#fafafa] border border-[#eeeeee] hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  <h3 className="text-[#333333] font-bold text-lg mb-4">
                    {skill.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {skill.items.map((item) => (
                      <li key={item} className="text-[#666666] text-sm flex items-center gap-2.5 leading-[1.6]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffc0cb] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6 md:px-10 bg-[#faf9f5]">
          <div className="max-w-[1200px] mx-auto text-center">
            <SectionDivider />
            <h2 className="text-2xl font-bold tracking-[0.05em] mb-4">
              Contact
            </h2>
            <p className="text-[#666666] mb-10 max-w-lg mx-auto leading-[1.8]">
              お仕事のご依頼・ご相談はお気軽にどうぞ。
              <br />
              AIを活用したプロジェクトのご提案も承ります。
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="px-8 py-3 rounded-full bg-[#e8a4b8] border border-[#e8a4b8] text-white font-medium text-sm hover:bg-[#d48fa3] hover:shadow-[0_10px_30px_rgba(232,164,184,0.4)] transition-all duration-300"
              >
                メールで問い合わせ
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#eeeeee]">
        <div className="max-w-[1200px] mx-auto text-center text-[#666666] text-xs tracking-[0.05em]">
          &copy; 2026 Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
