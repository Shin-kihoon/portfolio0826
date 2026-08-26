import React from 'react';
import { GraduationCap, Award, BookCheck, Sparkles, Calendar, CheckCircle } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 border-b border-zinc-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono-code">
              Academic Background & Training
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-serif-heading">
            학력 및 전문 교육과정
          </h2>
          <p className="text-base text-zinc-600 font-sans">
            재무금융 계량경제학 석사 연구 및 빅데이터 핀테크 심화 교육
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {EDUCATION_LIST.map((edu, idx) => {
            const isSNU = idx === 0;
            return (
              <div
                key={idx}
                id={`education-card-${idx}`}
                className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  isSNU
                    ? 'bg-zinc-50/80 border-zinc-300 shadow-xs'
                    : 'bg-white border-zinc-200'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono-code font-bold px-2.5 py-0.5 rounded bg-zinc-900 text-zinc-50">
                        {edu.period}
                      </span>
                      {edu.status && (
                        <span className="text-xs font-mono-code font-medium px-2.5 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                          {edu.status}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-zinc-700">
                      {edu.degree} · <span className="text-zinc-600 font-normal">{edu.major}</span>
                      {edu.submajor && (
                        <span className="text-zinc-600 font-normal"> / {edu.submajor}</span>
                      )}
                    </p>
                  </div>

                  {/* GPA Badges (if available) */}
                  {edu.gpa && (
                    <div className="flex flex-wrap items-center gap-2 font-mono-code text-xs">
                      <div className="px-3 py-2 rounded-xl bg-white border border-zinc-200 shadow-2xs">
                        <span className="text-zinc-400 text-[10px] block uppercase">Cumulative GPA</span>
                        <span className="text-base font-bold text-zinc-900">{edu.gpa}</span>
                      </div>
                      {edu.credits && (
                        <div className="px-3 py-2 rounded-xl bg-white border border-zinc-200 shadow-2xs">
                          <span className="text-zinc-400 text-[10px] block uppercase">Completed</span>
                          <span className="text-base font-bold text-zinc-900">{edu.credits}</span>
                        </div>
                      )}
                      {edu.gpaConverted && (
                        <div className="px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-200 shadow-2xs">
                          <span className="text-emerald-700 text-[10px] block uppercase">Converted</span>
                          <span className="text-base font-bold text-emerald-950">{edu.gpaConverted}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Details List */}
                {edu.details && (
                  <div className="mt-5 pt-5 border-t border-zinc-200/80 space-y-2">
                    <div className="text-xs font-bold text-zinc-500 font-mono-code uppercase tracking-wider">
                      주요 이수 내역 및 세부사항
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-zinc-700">
                      {edu.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
