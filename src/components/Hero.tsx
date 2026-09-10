import React, { useState } from 'react';
import { Github, ArrowUpRight, Copy, Check, Circle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { content } from '../data/siteContent';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

/** 이력서 상단처럼 읽히는 한눈 요약. 각 줄은 아래 섹션에서 다시 증명된다. */
const QUICK_FACTS: { label: string; value: string }[] = [
  { label: '학력', value: '서울대 대학원 경영학과 재무금융 석사 (2026.08 졸업)' },
  { label: '학부', value: '건국대 경제학사·경영학사 다전공 (GPA 4.17 / 4.5)' },
  { label: '자격증', value: '빅데이터분석기사 · SQLD · 금융투자분석사 · 투자자산운용사' },
  { label: '주력 도구', value: 'Python (pandas, statsmodels, scikit-learn) · SQL' },
];

export const Hero: React.FC<HeroProps> = ({ onScrollToSection }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-10 pb-14 md:pt-16 md:pb-20 border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* 왼쪽 — 이름과 소개 */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
              <Circle className="w-2 h-2 fill-emerald-500 text-emerald-500" />
              {content.hero.availability}
            </span>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 font-serif-heading">
                신기훈
                <span className="text-2xl sm:text-3xl text-zinc-400 font-sans font-normal ml-3">
                  Kihoon Shin
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-zinc-800 tracking-tight">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs font-mono-code text-zinc-500">{PERSONAL_INFO.tagline}</p>
            </div>

            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <button
                id="hero-cta-projects"
                onClick={() => onScrollToSection('projects')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-zinc-900 text-zinc-50 hover:bg-zinc-800 transition-all cursor-pointer shadow-xs active:scale-98"
              >
                <span>{content.hero.ctaPrimary}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                id="hero-cta-skills"
                onClick={() => onScrollToSection('skills')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-200 transition-all cursor-pointer"
              >
                <span>{content.hero.ctaSecondary}</span>
              </button>

              <a
                id="hero-github-link"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium bg-white hover:bg-zinc-100 text-zinc-800 border border-zinc-200 transition-all font-mono-code"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            <div className="inline-flex items-center gap-3 p-2.5 rounded-lg bg-zinc-100/90 border border-zinc-200/80 text-xs text-zinc-700">
              <span className="font-mono-code font-semibold text-zinc-900">
                {content.hero.emailLabel}
              </span>
              <code className="font-mono-code bg-white px-2 py-0.5 rounded text-zinc-900 border border-zinc-200/60 select-all">
                {PERSONAL_INFO.email}
              </code>
              <button
                id="hero-copy-email-btn"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 text-zinc-600 hover:text-zinc-950 font-medium transition-colors cursor-pointer"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span>{copied ? '복사됨' : '복사'}</span>
              </button>
            </div>
          </div>

          {/* 오른쪽 — 한눈 요약 */}
          <div className="lg:col-span-5 w-full">
            <dl className="rounded-xl bg-white border border-zinc-200/90 shadow-sm divide-y divide-zinc-100">
              {QUICK_FACTS.map((fact) => (
                <div key={fact.label} className="px-5 py-4 space-y-1">
                  <dt className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 font-mono-code">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-zinc-800 leading-snug">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
