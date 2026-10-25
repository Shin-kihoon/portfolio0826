import React, { useState } from 'react';
import { Github, ArrowUpRight, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { content } from '../data/siteContent';

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
    <section id="hero" className="relative pt-10 pb-14 md:pt-16 md:pb-20 border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
            {content.hero.availability && (
              <p className="text-xs text-zinc-500 font-mono-code">{content.hero.availability}</p>
            )}

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
                  <Check className="w-3.5 h-3.5 text-zinc-900" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span>{copied ? '복사됨' : '복사'}</span>
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};
