import React, { useState, useEffect } from 'react';
import { Mail, Github, FileText, Check, Layers, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenDesignSystem: () => void;
  onOpenCitation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDesignSystem, onOpenCitation }) => {
  const [copied, setCopied] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-zinc-50/90 backdrop-blur-md border-b border-zinc-200/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left branding / title */}
        <div className="flex items-center gap-3 min-w-0">
          <a
            id="header-home-link"
            href="#hero"
            className="group flex items-center gap-2.5 focus:outline-hidden min-w-0"
          >
            <span className="w-8 h-8 shrink-0 rounded-md bg-zinc-900 text-zinc-50 flex items-center justify-center font-serif-heading text-lg font-bold group-hover:bg-zinc-800 transition-colors">
              愼
            </span>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold text-zinc-900 tracking-tight flex items-center gap-1.5 whitespace-nowrap">
                {PERSONAL_INFO.nameKo}
                <span className="text-xs font-normal text-zinc-500 font-mono-code hidden sm:inline">
                  ({PERSONAL_INFO.nameEn})
                </span>
              </span>
              <span className="text-[11px] text-zinc-500 hidden sm:inline-block font-medium">
                SNU Business School · Empirical Finance
              </span>
            </div>
          </a>
        </div>

        {/* Center Nav Anchors */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-zinc-600">
          <a
            id="nav-link-research"
            href="#research"
            className="px-3 py-1.5 rounded-md hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
          >
            석사학위논문
          </a>
          <a
            id="nav-link-projects"
            href="#projects"
            className="px-3 py-1.5 rounded-md hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
          >
            연구·개발 프로젝트
          </a>
          <a
            id="nav-link-education"
            href="#education"
            className="px-3 py-1.5 rounded-md hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
          >
            학력
          </a>
          <a
            id="nav-link-skills"
            href="#skills"
            className="px-3 py-1.5 rounded-md hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
          >
            역량·스택
          </a>
          <a
            id="nav-link-certifications"
            href="#certifications"
            className="px-3 py-1.5 rounded-md hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
          >
            자격증
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Design System Spec button */}
          <button
            id="header-design-spec-btn"
            onClick={onOpenDesignSystem}
            className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono-code font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/80 transition-all cursor-pointer"
            title="설계 시스템 요약표 및 변경점"
          >
            <Layers className="w-3.5 h-3.5 text-zinc-600" />
            <span>설계 시스템 명세</span>
          </button>

          {/* Citation Button */}
          <button
            id="header-citation-btn"
            onClick={onOpenCitation}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-zinc-700 hover:bg-zinc-100 border border-zinc-200/80 transition-all cursor-pointer shrink-0"
            title="학술 논문 인용 정보"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-500" />
            <span className="hidden sm:inline">논문 인용</span>
          </button>

          {/* Copy Email */}
          <button
            id="header-copy-email-btn"
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-zinc-900 text-zinc-50 hover:bg-zinc-800 transition-all cursor-pointer active:scale-95"
            title="이메일 주소 복사"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                <span className="font-mono-code">복사 완료!</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span className="font-mono-code hidden md:inline">{PERSONAL_INFO.email}</span>
                <span className="font-mono-code md:hidden">이메일</span>
              </>
            )}
          </button>

          {/* GitHub Icon Link */}
          <a
            id="header-github-link"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-200/80 transition-colors shrink-0"
            title="GitHub 프로필 방문"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
