import React from 'react';
import { Award, Shield, Globe } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { content } from '../data/siteContent';

const CATEGORY_STYLE = {
  Finance: { icon: <Award className="w-4 h-4 text-emerald-600" />, chip: 'bg-emerald-100 text-emerald-800' },
  Data: { icon: <Shield className="w-4 h-4 text-indigo-600" />, chip: 'bg-indigo-100 text-indigo-800' },
  Language: { icon: <Globe className="w-4 h-4 text-amber-600" />, chip: 'bg-amber-100 text-amber-800' },
} as const;

export const CertificationsSection: React.FC = () => (
  <section id="certifications" className="py-16 md:py-24 border-b border-zinc-200/80 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono-code">
            {content.certifications.eyebrow}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-serif-heading">
          {content.certifications.heading}
        </h2>
        <p className="text-base text-zinc-600">{content.certifications.subheading}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {CERTIFICATIONS.map((cert, idx) => {
          const style = CATEGORY_STYLE[cert.category];
          return (
            <div
              key={idx}
              id={`cert-card-${idx}`}
              className="p-4 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:border-zinc-300 transition-all flex items-center gap-3 shadow-2xs"
            >
              <div className="p-2 rounded-lg bg-white border border-zinc-200 shadow-2xs shrink-0">
                {style.icon}
              </div>
              <div className="min-w-0 space-y-0.5">
                <h3 className="text-sm font-bold text-zinc-900 leading-snug">{cert.name}</h3>
                <p className="text-[11px] text-zinc-500">{cert.issuer}</p>
              </div>
              <span
                className={`ml-auto shrink-0 text-[10px] font-mono-code font-bold px-2 py-0.5 rounded ${style.chip}`}
              >
                {cert.category}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
