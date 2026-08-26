import React, { useState } from 'react';
import { Mail, Github, Copy, Check, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-16 md:py-20 bg-zinc-950 text-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left: Heading & Intro */}
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono-code">
                Contact & Collaboration
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-serif-heading">
              학술 연구 및 프로젝트 협업 문의
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans max-w-xl">
              자산가격결정(Empirical Asset Pricing), 배당 이례현상 계량 분석, 핀테크 스마트계약 시스템 관련 연구 및 포지션 논의를 환영합니다.
            </p>
          </div>

          {/* Right: Direct Contact Action Cards */}
          <div className="md:col-span-5 space-y-3">
            {/* Email Direct Box */}
            <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-800 text-zinc-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 font-mono-code block">Direct Email</span>
                  <span className="text-sm font-mono-code font-bold text-zinc-100 select-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>

              <button
                id="footer-copy-email-btn"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg text-xs font-mono-code bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors flex items-center gap-1.5 cursor-pointer active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>복사 완료</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>복사</span>
                  </>
                )}
              </button>
            </div>

            {/* GitHub Link */}
            <a
              id="footer-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between hover:bg-zinc-900/60 hover:border-zinc-700 transition-all group shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-800 text-zinc-300 group-hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 font-mono-code block">GitHub</span>
                  <span className="text-sm font-mono-code font-bold text-zinc-100">
                    github.com/Shin-kihoon
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
            </a>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono-code">
          <div>
            © 2026 Kihoon Shin (신기훈). All rights reserved.
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Seoul National University Business School</span>
            <span>·</span>
            <span>Empirical Finance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
