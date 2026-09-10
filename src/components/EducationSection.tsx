import React from 'react';
import { CheckCircle } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';
import { content } from '../data/siteContent';

export const EducationSection: React.FC = () => (
  <section id="education" className="py-16 md:py-24 border-b border-zinc-200/80 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono-code">
            {content.education.eyebrow}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-serif-heading">
          {content.education.heading}
        </h2>
        <p className="text-base text-zinc-600">{content.education.subheading}</p>
      </div>

      <div className="space-y-4">
        {EDUCATION_LIST.map((edu, idx) => (
          <div
            key={idx}
            id={`education-card-${idx}`}
            className={`p-6 sm:p-7 rounded-2xl border ${
              idx === 0 ? 'bg-zinc-50/80 border-zinc-300 shadow-xs' : 'bg-white border-zinc-200'
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
              <div className="space-y-2 min-w-0">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono-code">
                  <span className="font-bold px-2.5 py-0.5 rounded bg-zinc-900 text-zinc-50">
                    {edu.period}
                  </span>
                  {edu.status && (
                    <span className="font-medium px-2.5 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                      {edu.status}
                    </span>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
                  {edu.institution}
                </h3>
                <p className="text-sm font-semibold text-zinc-700">
                  {edu.degree} · <span className="text-zinc-600 font-normal">{edu.major}</span>
                </p>
              </div>

              {edu.gpa && (
                <div className="px-4 py-2.5 rounded-xl bg-white border border-zinc-200 shadow-2xs shrink-0 font-mono-code">
                  <span className="text-zinc-400 text-[10px] block uppercase tracking-wider">
                    GPA
                  </span>
                  <span className="text-base font-bold text-zinc-900">{edu.gpa}</span>
                  {edu.gpaNote && (
                    <span className="block text-[10px] text-zinc-500 mt-0.5">{edu.gpaNote}</span>
                  )}
                </div>
              )}
            </div>

            {edu.details && (
              <ul className="mt-5 pt-5 border-t border-zinc-200/80 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-zinc-700">
                {edu.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
