import React, { useState } from 'react';
import { X, Copy, Check, FileText, BookOpen } from 'lucide-react';
import { THESIS_DATA, PERSONAL_INFO } from '../data/portfolioData';

interface CitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CitationModal: React.FC<CitationModalProps> = ({ isOpen, onClose }) => {
  const [copiedBib, setCopiedBib] = useState(false);
  const [copiedApa, setCopiedApa] = useState(false);

  if (!isOpen) return null;

  const bibtexCitation = `@mastersthesis{shin2026dividend,
  author  = {Shin, Kihoon (신기훈)},
  title   = {배당금의 정밀도와 미래 수익성 (Precision in Dividends and Future Profitability)},
  school  = {Graduate School of Business, Seoul National University},
  year    = {2026},
  type    = {Master's Thesis},
  address = {Seoul, Republic of Korea},
  note    = {Replication and extension of Dennis \\& Weston (2025, JCF) for Korean capital markets (N=19,519)}
}`;

  const apaCitation = `Shin, K. (2026). 배당금의 정밀도와 미래 수익성: Dennis & Weston (2025, JCF) 한국 데이터 복제 및 확장 실증 연구 (Master's thesis). Seoul National University Graduate School of Business.`;

  const handleCopyBib = () => {
    navigator.clipboard.writeText(bibtexCitation);
    setCopiedBib(true);
    setTimeout(() => setCopiedBib(false), 2000);
  };

  const handleCopyApa = () => {
    navigator.clipboard.writeText(apaCitation);
    setCopiedApa(true);
    setTimeout(() => setCopiedApa(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs">
      <div
        id="citation-modal"
        className="relative w-full max-w-2xl bg-white rounded-2xl border border-zinc-200 shadow-2xl p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-150"
      >
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-zinc-900" />
            <h3 className="text-lg font-bold text-zinc-950">
              학술 논문 인용 정보 (Citation & Metadata)
            </h3>
          </div>
          <button
            id="citation-modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {/* APA Format */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-700 font-mono-code">
                APA 7th Edition Format
              </span>
              <button
                id="copy-apa-btn"
                onClick={handleCopyApa}
                className="text-xs font-mono-code text-zinc-600 hover:text-zinc-950 flex items-center gap-1 cursor-pointer"
              >
                {copiedApa ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>복사됨</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>인용 복사</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs text-zinc-800 leading-relaxed font-serif">
              {apaCitation}
            </div>
          </div>

          {/* BibTeX Format */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-700 font-mono-code">
                BibTeX Format
              </span>
              <button
                id="copy-bib-btn"
                onClick={handleCopyBib}
                className="text-xs font-mono-code text-zinc-600 hover:text-zinc-950 flex items-center gap-1 cursor-pointer"
              >
                {copiedBib ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>복사됨</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>BibTeX 복사</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-3.5 rounded-lg bg-zinc-900 text-zinc-100 text-xs font-mono-code overflow-x-auto leading-relaxed">
              {bibtexCitation}
            </pre>
          </div>
        </div>

        <div className="flex justify-end pt-2 border-t border-zinc-100">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-900 text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            닫기 (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
