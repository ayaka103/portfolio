import Image from "next/image";
import Link from "next/link";

function SectionDivider() {
  return <div className="w-12 h-[3px] rounded-full bg-[#e8a4b8] mx-auto mb-6" />;
}

export default function MypagePage() {
  return (
    <div className="min-h-screen bg-white text-[#333333] font-[var(--font-noto-serif-jp)]">
      {/* Navigation */}
      <nav aria-label="ページナビゲーション" className="sticky top-0 z-40 bg-white border-b border-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-[#666666] hover:text-[#e8a4b8] transition-colors flex items-center gap-2"
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Portfolio に戻る
          </Link>
          <span className="text-lg font-bold text-[#333333] tracking-[0.05em]">
            Mypage
          </span>
        </div>
      </nav>

      <main>
        {/* Profile Hero */}
        <section className="pt-24 pb-20 px-6 md:px-10 bg-[#faf9f5]">
          <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-[#fff0f3] shadow-[0_10px_40px_rgba(232,164,184,0.2)] mb-8">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/profile.png`}
                alt="プロフィール写真"
                width={208}
                height={208}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
            <p className="text-[#e8a4b8] text-sm font-semibold tracking-[0.05em] uppercase mb-3">
              AI Developer & Creator
            </p>
            <h1 className="text-[28px] md:text-[36px] font-bold leading-[1.6] tracking-[0.1em] mb-4">
              Ayaka
            </h1>
            <p className="text-[#666666] text-base md:text-lg max-w-xl leading-[1.8]">
              AIを活用したプロダクト開発・コンテンツ制作を行うフリーランス
            </p>
          </div>
        </section>

        {/* About Me */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-[800px] mx-auto">
            <SectionDivider />
            <h2 className="text-2xl font-bold text-center tracking-[0.05em] mb-12">
              About Me
            </h2>
            <p className="text-[#333333] leading-[2] text-base">
              はじめまして、前田純花です。現在、AI活用やSNS運用、スクール講師など個人事業主として活動しております。短期大学卒業後保育士として福岡市の認可保育園で3年間勤め、その後個人事業主として独立。これまでSNSのクリエイティブ作成や、AIでのアプリ開発やクリエイティブ作成など多岐にわたって活動しております。
            </p>
          </div>
        </section>

        {/* Career */}
        <section className="py-20 px-6 md:px-10 bg-[#faf9f5]">
          <div className="max-w-[800px] mx-auto">
            <SectionDivider />
            <h2 className="text-2xl font-bold text-center tracking-[0.05em] mb-4">
              Career
            </h2>
            <p className="text-[#666666] text-center text-sm mb-16">
              保育士からSNS運用、そしてAI活用へ
            </p>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-[#f0d4dd]" />

              {/* Entry 1: 2020-2023 */}
              <div className="relative flex flex-col md:flex-row md:items-center mb-16">
                <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#fff0f3] text-[#e8a4b8] text-xs font-semibold mb-3">
                    2020 - 2023
                  </span>
                  <h3 className="text-[#333333] font-bold text-lg mb-2">保育リーダー</h3>
                  <p className="text-[#666666] text-sm leading-[1.8]">
                    認可保育園にて保育リーダーとして勤務。
                    <br />
                    子どもたちの成長を支えながら、チームマネジメントや保護者対応を経験。
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#e8a4b8] border-[3px] border-white shadow-[0_0_0_2px_#f0d4dd] z-10" />
                <div className="pl-8 md:hidden">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#fff0f3] text-[#e8a4b8] text-xs font-semibold mb-3">
                    2020 - 2023
                  </span>
                  <h3 className="text-[#333333] font-bold text-lg mb-2">保育リーダー</h3>
                  <p className="text-[#666666] text-sm leading-[1.8]">
                    認可保育園にて保育リーダーとして勤務。
                    <br />
                    子どもたちの成長を支えながら、チームマネジメントや保護者対応を経験。
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2 md:pl-12" />
              </div>

              {/* Entry 2: 2023 */}
              <div className="relative flex flex-col md:flex-row md:items-center mb-16">
                <div className="hidden md:block md:w-1/2 md:pr-12" />
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#e8a4b8] border-[3px] border-white shadow-[0_0_0_2px_#f0d4dd] z-10" />
                <div className="pl-8 md:pl-12 md:w-1/2">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#fff0f3] text-[#e8a4b8] text-xs font-semibold mb-3">
                    2023
                  </span>
                  <h3 className="text-[#333333] font-bold text-lg mb-2">
                    個人事業主 /<br />SNS運用・クリエイティブ制作
                  </h3>
                  <p className="text-[#666666] text-sm leading-[1.8]">
                    個人事業主として独立し、SNS運用やスクール運営講師など多岐に渡り経験を積む。
                  </p>
                </div>
              </div>

              {/* Entry 3: Present */}
              <div className="relative flex flex-col md:flex-row md:items-center">
                <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#e8a4b8] text-white text-xs font-semibold mb-3">
                    現在
                  </span>
                  <h3 className="text-[#333333] font-bold text-lg mb-2">個人事業主 / AI活用</h3>
                  <p className="text-[#666666] text-sm leading-[1.8]">
                    AI開発について学び、スキルを習得。企業様に対して業務効率化やクリエイティブ提案などを行う。
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#e8a4b8] border-[3px] border-white shadow-[0_0_0_2px_#f0d4dd] z-10" />
                <div className="pl-8 md:hidden">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#e8a4b8] text-white text-xs font-semibold mb-3">
                    現在
                  </span>
                  <h3 className="text-[#333333] font-bold text-lg mb-2">個人事業主 / AI活用</h3>
                  <p className="text-[#666666] text-sm leading-[1.8]">
                    AI開発について学び、スキルを習得。企業様に対して業務効率化やクリエイティブ提案などを行う。
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2 md:pl-12" />
              </div>
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-[800px] mx-auto">
            <SectionDivider />
            <h2 className="text-2xl font-bold text-center tracking-[0.05em] mb-12">
              強み
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "圧倒的なスピード感",
                  description:
                    "AIの最大の武器であるスピードを活かし、期待を上回る速さで納品いたします。また、プロジェクトを停滞させないよう、迅速かつ密なコミュニケーションを徹底します。",
                },
                {
                  title: "一歩先を行くプラスαの提案",
                  description:
                    "貴社の課題に合わせて「AIを使えばもっとこう良くなる」という改善案を積極的に提示します。貴社のビジネスを加速させるパートナーとして動きます。",
                },
                {
                  title: "誠実に対話しながら遂行",
                  description:
                    "難しい技術用語は使わず、常に「何が解決するのか」を分かりやすくご説明し、納得感を持ってプロジェクトを進めていただくことをお約束します。",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-lg bg-[#fafafa] border border-[#eeeeee]"
                >
                  <h3 className="text-[#333333] font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#e8a4b8] shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-[1.8] pl-4">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Tools */}
        <section className="py-20 px-6 md:px-10 bg-[#faf9f5]">
          <div className="max-w-[800px] mx-auto">
            <SectionDivider />
            <h2 className="text-2xl font-bold text-center tracking-[0.05em] mb-12">
              使用AIツール
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Claude",
                "Claude Code",
                "Gemini",
                "Manus",
                "NotebookLM",
                "Antigravity",
                "Cursor",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-5 py-2.5 text-sm font-semibold rounded-full bg-[#fff0f3] text-[#e8a4b8]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Hobbies */}
        <section className="py-20 px-6 md:px-10 bg-[#faf9f5]">
          <div className="max-w-[800px] mx-auto">
            <SectionDivider />
            <h2 className="text-2xl font-bold text-center tracking-[0.05em] mb-12">
              趣味・好きなこと
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { emoji: "\u26BE", title: "野球観戦", description: "ソフトバンクホークスファン歴6年" },
                { emoji: "\u{1F4DA}", title: "読書", description: "ビジネス書や自己啓発本をよく読みます" },
                { emoji: "\u{1F680}", title: "新しいツールを試す", description: "最新のAIツールをいち早く触ってみます" },
                { emoji: "\u{1F373}", title: "料理", description: "毎日Instagramを見て自炊しています" },
                { emoji: "\u{1F3D5}\uFE0F", title: "アクティビティ", description: "釣りや渡島、キャンプなどが好きです" },
                { emoji: "\u{1F4DD}", title: "ジャーナリング", description: "日々の思考や気づきを書き留めています" },
              ].map((hobby) => (
                <div
                  key={hobby.title}
                  className="p-6 rounded-lg bg-white border border-[#eeeeee] hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 text-center"
                >
                  <span className="text-3xl mb-3 block">{hobby.emoji}</span>
                  <h3 className="text-[#333333] font-bold text-base mb-2">{hobby.title}</h3>
                  <p className="text-[#666666] text-sm leading-[1.6]">{hobby.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Message */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-[800px] mx-auto text-center">
            <p className="text-[#333333] leading-[2] text-base">
              「AIで業務を効率化したい」「AIを使って新しいプロダクトを作りたい」
              <br />
              そんなニーズに、企画から実装まで一気通貫でお応えします。
              <br />
              AIとクリエイティブの力で、あなたのアイデアを形にするお手伝いをさせてください。
            </p>
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
