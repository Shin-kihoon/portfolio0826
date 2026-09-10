import React, { useState } from 'react';
import { Mail, Github, Copy, Check, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { content } from '../data/siteContent';

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
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono-code">
                {content.contact.eyebrow}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-serif-heading">
              {content.contact.heading}
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">{content.contact.body}</p>
          </div>

          <div className="md:col-span-5 space-y-3">
            <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-lg bg-zinc-800 text-zinc-300 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-zinc-500 font-mono-code block">Email</span>
                  <span className="text-sm font-mono-code font-bold text-zinc-100 select-all break-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>
              <button
                id="footer-copy-email-btn"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg text-xs font-mono-code bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>복사됨</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>복사</span>
                  </>
                )}
              </button>
            </div>

            <a
              id="footer-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between hover:border-zinc-700 transition-all group shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-800 text-zinc-300 group-hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 font-mono-code block">GitHub</span>
                  <span className="text-sm font-mono-code font-bold text-zinc-100">
                    {PERSONAL_INFO.githubHandle}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-mono-code">
          <span>© 2026 신기훈 (Kihoon Shin)</span>
          <span>{PERSONAL_INFO.affiliation}</span>
        </div>
      </div>
    </footer>
  );
};
