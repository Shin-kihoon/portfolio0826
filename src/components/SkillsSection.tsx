import React, { useState } from 'react';
import { Terminal, Database, TrendingUp, GitMerge, Bot, CheckCircle, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Languages & Core Stack': <Terminal className="w-4 h-4 text-emerald-600" />,
    'Finance & Econometrics': <TrendingUp className="w-4 h-4 text-indigo-600" />,
    'Data & Financial APIs': <Database className="w-4 h-4 text-cyan-600" />,
    'Engineering & CI/CD': <GitMerge className="w-4 h-4 text-amber-600" />,
    'AI Workflow Engineering': <Bot className="w-4 h-4 text-rose-600" />,
  };

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-zinc-200/80 bg-zinc-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono-code">
              Technical & Domain Competencies
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-serif-heading">
                핵심 역량 및 기술 스택
              </h2>
              <p className="text-base text-zinc-600 font-sans">
                논문과 프로젝트에서 실제로 사용한 것만 적었습니다
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1 bg-zinc-200/60 p-1 rounded-lg text-xs font-medium">
              {categories.map((cat) => (
                <button
                  key={cat}
                  id={`skill-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-white text-zinc-950 font-bold shadow-2xs'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs space-y-4 hover:border-zinc-300 transition-all"
            >
              <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                <div className="flex items-center gap-2">
                  {categoryIcons[group.category] || <Terminal className="w-4 h-4 text-zinc-600" />}
                  <h3 className="text-sm font-bold text-zinc-900">{group.category}</h3>
                </div>
                <span className="text-[10px] text-zinc-400 font-mono-code">
                  {group.skills.length} skills
                </span>
              </div>

              <p className="text-xs text-zinc-500">{group.description}</p>

              <div className="space-y-2.5 pt-1">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-100 space-y-1 hover:bg-zinc-100/70 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-zinc-900 font-mono-code">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span
                          className={`text-[10px] font-mono-code font-semibold px-2 py-0.5 rounded ${
                            skill.level === 'Expert'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-zinc-200 text-zinc-700'
                          }`}
                        >
                          {skill.level}
                        </span>
                      )}
                    </div>
                    {skill.note && (
                      <p className="text-[11px] text-zinc-600 leading-snug font-sans">
                        {skill.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
