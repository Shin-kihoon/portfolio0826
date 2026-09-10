import React, { useState, useEffect } from 'react';
import { Mail, Github, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { content } from '../data/siteContent';

export const Header: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a
          id="header-home-link"
          href="#hero"
          className="group flex items-center gap-2.5 focus:outline-hidden min-w-0"
        >
          <span className="w-8 h-8 shrink-0 rounded-md bg-zinc-900 text-zinc-50 flex items-center justify-center font-serif-heading text-lg font-bold group-hover:bg-zinc-800 transition-colors">
            愼
          </span>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-bold text-zinc-900 tracking-tight whitespace-nowrap">
              {PERSONAL_INFO.nameKo}
              <span className="text-xs font-normal text-zinc-500 font-mono-code hidden sm:inline ml-1.5">
                {PERSONAL_INFO.nameEn}
              </span>
            </span>
            <span className="text-[11px] text-zinc-500 hidden xl:inline-block font-medium whitespace-nowrap">
              {content.header.affiliation}
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-0.5 text-xs font-medium text-zinc-600 shrink-0">
          {content.header.nav.map((item) => (
            <a
              key={item.id}
              id={item.id}
              href={item.href}
              className="px-3 py-1.5 rounded-md whitespace-nowrap hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button
            id="header-copy-email-btn"
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-zinc-900 text-zinc-50 hover:bg-zinc-800 transition-all cursor-pointer active:scale-95"
            title="이메일 주소 복사"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                <span className="font-mono-code">{content.header.copied}</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span className="font-mono-code hidden lg:inline">{PERSONAL_INFO.email}</span>
                <span className="font-mono-code lg:hidden">{content.header.emailBtnShort}</span>
              </>
            )}
          </button>

          <a
            id="header-github-link"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-200/80 transition-colors shrink-0"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
