import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, ArrowUpRight, GraduationCap, Database, BarChart3, ShieldCheck, Sparkles, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToSection }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900 text-zinc-100 tracking-tight">
            <GraduationCap className="w-3.5 h-3.5 text-zinc-300" />
            <span>서울대학교 경영대학원 재무금융 석사</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 border border-zinc-200/80 font-mono-code">
            <span>2024.09 ~ 2026.08 (GPA 3.92 / 4.3)</span>
          </span>
        </div>

        {/* Main Grid: Left Big Typography, Right Quantitative Snapshot Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading & Academic Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 font-serif-heading">
                신기훈 <span className="text-2xl sm:text-3xl text-zinc-400 font-sans font-normal ml-2">Kihoon Shin</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-zinc-800 tracking-tight">
                Financial Data Analyst
              </p>
              <p className="text-xs font-mono-code text-zinc-500">
                실증금융 · 계량 분석 · 데이터 파이프라인
              </p>
            </div>

            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed max-w-2xl font-normal">
              금융 데이터에서 사람의 행태를 읽고, 그것을 코드로 검증합니다. 배당금의 끝자리에서 경영진의 무관심을 찾아낸 석사논문을 썼고, 분석에서 멈추지 않고 파이프라인과 서비스로 만드는 데까지 관심이 있습니다.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                id="hero-cta-thesis"
                onClick={() => onScrollToSection('research')}
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg text-sm font-semibold bg-zinc-900 text-zinc-50 hover:bg-zinc-800 transition-all cursor-pointer shadow-xs active:scale-98"
              >
                <BarChart3 className="w-4 h-4 text-zinc-300" />
                <span>석사학위논문 요약 보기</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                id="hero-cta-projects"
                onClick={() => onScrollToSection('projects')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-200 transition-all cursor-pointer"
              >
                <span>프로젝트 명세</span>
              </button>

              <a
                id="hero-github-link"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium bg-white hover:bg-zinc-100 text-zinc-800 border border-zinc-200 transition-all font-mono-code"
              >
                <Github className="w-4 h-4" />
                <span>github.com/Shin-kihoon</span>
              </a>
            </div>

            {/* Email quick copy banner */}
            <div className="inline-flex items-center gap-3 p-2.5 rounded-lg bg-zinc-100/90 border border-zinc-200/80 text-xs text-zinc-700">
              <span className="font-mono-code font-semibold text-zinc-900">Email:</span>
              <code className="font-mono-code bg-white px-2 py-0.5 rounded text-zinc-900 border border-zinc-200/60 select-all">
                {PERSONAL_INFO.email}
              </code>
              <button
                id="hero-copy-email-sub"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 text-zinc-600 hover:text-zinc-950 font-medium transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? '복사됨' : '복사'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Master's Thesis Summary Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-white border border-zinc-200/90 shadow-sm p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-zinc-700" />
                  <span className="text-xs font-semibold tracking-wider text-zinc-900 font-mono-code">
                    석사학위논문 연구 요약
                  </span>
                </div>
                <span className="text-xs text-zinc-500 font-mono-code">SNU GSB (2024–2026)</span>
              </div>

              {/* Thesis Info & Key Econometric Results */}
              <div className="space-y-1">
                <div className="text-xs font-bold text-zinc-900 font-serif-heading">
                  한국 자본시장의 배당 정밀도와 주식수익률 실증분석
                </div>
                <p className="text-[11px] text-zinc-500 leading-snug">
                  Dennis & Weston (2025 JCF) 선행연구의 한국 상장기업 데이터 복제 및 확장
                </p>
              </div>

              {/* Empirical Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                  <div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider font-mono-code">
                    분석 표본 (Sample)
                  </div>
                  <div className="text-xl font-bold text-zinc-950 font-mono-code mt-0.5">
                    19,519 <span className="text-[11px] font-normal text-zinc-500">개</span>
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">
                    상장사 firm-years
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-50/60 border border-emerald-100">
                  <div className="text-[10px] font-medium text-emerald-800 uppercase tracking-wider font-mono-code">
                    FF5 알파 (α60)
                  </div>
                  <div className="text-xl font-bold text-emerald-950 font-mono-code mt-0.5">
                    +9.98 <span className="text-[11px] font-normal text-emerald-700">bp/월</span>
                  </div>
                  <div className="text-[10px] text-emerald-700 font-mono-code mt-0.5">
                    t = 3.38 (p &lt; 0.001) ***
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                  <div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider font-mono-code">
                    공변량 매칭 (Matching)
                  </div>
                  <div className="text-xl font-bold text-zinc-950 font-mono-code mt-0.5">
                    615 <span className="text-[11px] font-normal text-zinc-500">Pairs</span>
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono-code mt-0.5">
                    Mahalanobis 1:1 매칭
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                  <div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider font-mono-code">
                    분석 파이프라인 (Code)
                  </div>
                  <div className="text-xl font-bold text-zinc-950 font-mono-code mt-0.5">
                    16 <span className="text-[11px] font-normal text-zinc-500">Scripts</span>
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">
                    논문 본문 213¶ · 실증 표 18개
                  </div>
                </div>
              </div>

              {/* Research Methodology Pipeline Snippet */}
              <div className="pt-2 border-t border-zinc-100 space-y-2">
                <div className="text-xs font-semibold text-zinc-800 flex items-center justify-between">
                  <span>적용 계량 방법론 (Methodology)</span>
                  <span className="text-[10px] text-zinc-400 font-mono-code">Econometrics</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Fama-French 5-Factor',
                    'Mahalanobis Exact Match',
                    '2-way Clustered SE (Petersen)',
                    'Donut Placebo Test',
                    'ln(DPS) Omitted Variable Bias',
                  ].map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-zinc-100 text-zinc-700 border border-zinc-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
