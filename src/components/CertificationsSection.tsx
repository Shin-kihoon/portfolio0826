import React from 'react';
import { Award, Shield, CheckCircle2, Globe } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { content } from '../data/siteContent';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-16 md:py-24 border-b border-zinc-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono-code">
              Certifications & Qualifications
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-serif-heading">
            {content.certifications.heading}
          </h2>
          <p className="text-base text-zinc-600 font-sans">
            금융투자업계 법정 전문인력 자격 및 국가공인 데이터 분석 기사
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, idx) => {
            const isFinance = cert.category === 'Finance';
            const isData = cert.category === 'Data & Tech';
            const isLang = cert.category === 'Language';

            return (
              <div
                key={idx}
                id={`cert-card-${idx}`}
                className="p-5 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:border-zinc-300 transition-all space-y-3 shadow-2xs"
              >
                <div className="flex items-start justify-between">
                  <div className="p-2 rounded-lg bg-white border border-zinc-200 shadow-2xs">
                    {isFinance ? (
                      <Award className="w-5 h-5 text-emerald-600" />
                    ) : isData ? (
                      <Shield className="w-5 h-5 text-indigo-600" />
                    ) : (
                      <Globe className="w-5 h-5 text-amber-600" />
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-mono-code font-bold px-2 py-0.5 rounded ${
                      isFinance
                        ? 'bg-emerald-100 text-emerald-800'
                        : isData
                        ? 'bg-indigo-100 text-indigo-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {cert.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-zinc-900 leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-zinc-500 font-sans">
                    발급기관: {cert.issuer}
                  </p>
                </div>

                <div className="pt-2 border-t border-zinc-200/60 flex items-center justify-between text-xs font-mono-code">
                  <span className="text-zinc-500">상태:</span>
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{cert.status}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
