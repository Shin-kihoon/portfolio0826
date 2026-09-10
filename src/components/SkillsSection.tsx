import React from 'react';
import { Terminal, Sigma, Database, LineChart } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { content } from '../data/siteContent';

const CATEGORY_ICON: Record<string, React.ReactNode> = {
  '언어 · 도구': <Terminal className="w-4 h-4 text-emerald-600" />,
  '통계 · 계량 분석': <Sigma className="w-4 h-4 text-indigo-600" />,
  '데이터 처리': <Database className="w-4 h-4 text-cyan-600" />,
  '재무 · 도메인': <LineChart className="w-4 h-4 text-amber-600" />,
};

export const SkillsSection: React.FC = () => (
  <section id="skills" className="py-16 md:py-24 border-b border-zinc-200/80 bg-zinc-50/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono-code">
            {content.skills.eyebrow}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-serif-heading">
          {content.skills.heading}
        </h2>
        <p className="text-base text-zinc-600">{content.skills.subheading}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {SKILL_CATEGORIES.map((group) => (
          <div
            key={group.category}
            className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs space-y-4"
          >
            <div className="flex items-center gap-2 border-b border-zinc-100 pb-3">
              {CATEGORY_ICON[group.category] ?? <Terminal className="w-4 h-4 text-zinc-600" />}
              <h3 className="text-sm font-bold text-zinc-900">{group.category}</h3>
              <span className="text-[11px] text-zinc-400 ml-auto">{group.description}</span>
            </div>

            <dl className="space-y-2.5">
              {group.skills.map((skill) => (
                <div key={skill.name} className="grid grid-cols-1 sm:grid-cols-3 gap-x-3 gap-y-0.5">
                  <dt className="text-xs font-bold text-zinc-900 font-mono-code sm:col-span-1">
                    {skill.name}
                  </dt>
                  <dd className="text-[11px] text-zinc-600 leading-snug sm:col-span-2">
                    {skill.note}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  </section>
);
