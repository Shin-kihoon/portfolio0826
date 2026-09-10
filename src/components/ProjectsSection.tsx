import React from 'react';
import {
  Search,
  CheckCircle2,
  GitBranch,
  BarChart3,
  ExternalLink,
  Github,
  Play,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { renderRich } from './ProjectRich';
import { content } from '../data/siteContent';
import type { ProjectIcon, ProjectKind } from '../types';

const KEYPOINT_ICON: Record<ProjectIcon, React.ReactNode> = {
  chart: <BarChart3 className="w-4 h-4 text-zinc-500 shrink-0" />,
  check: <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />,
  git: <GitBranch className="w-4 h-4 text-indigo-600 shrink-0" />,
  search: <Search className="w-4 h-4 text-amber-600 shrink-0" />,
};

const KIND_LABEL: Record<ProjectKind, string> = {
  thesis: '석사학위논문',
  analysis: '데이터 분석',
  service: '웹 서비스',
};

export const ProjectsSection: React.FC = () => (
  <section id="projects" className="py-16 md:py-24 bg-zinc-50/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono-code">
            {content.projects.eyebrow}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-serif-heading">
          {content.projects.heading}
        </h2>
        <p className="text-base text-zinc-600">{content.projects.subheading}</p>
      </div>

      <div className="space-y-6">
        {PROJECTS_DATA.map((project) => (
          <article
            key={project.id}
            id={`project-${project.id}`}
            className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 space-y-5 shadow-xs"
          >
            {/* 제목줄 */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
              <div className="space-y-2 min-w-0">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono-code">
                  <span className="px-2.5 py-0.5 rounded bg-zinc-900 text-zinc-100 font-bold">
                    {KIND_LABEL[project.kind]}
                  </span>
                  <span className="text-zinc-500">{project.period}</span>
                  <span className="text-zinc-300">·</span>
                  <span className="text-zinc-600">{project.role}</span>
                  {project.draft && (
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
                      {content.projects.draftLabel}
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-600">{project.subtitle}</p>
              </div>

              {project.links.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold font-mono-code transition-colors ${
                        link.kind === 'demo'
                          ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-50 shadow-xs'
                          : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200'
                      }`}
                    >
                      {link.kind === 'demo' ? (
                        <Play className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Github className="w-3.5 h-3.5" />
                      )}
                      <span>{link.label}</span>
                      {link.kind === 'demo' && <ExternalLink className="w-3.5 h-3.5" />}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* 왜 했는가 — 한 줄. 설명은 붙이지 않는다. */}
            <p className="border-l-2 border-zinc-900 pl-3 text-sm font-medium text-zinc-800">
              {project.question}
            </p>

            {/* 결과 숫자 */}
            {project.metrics.length > 0 && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className={`p-3.5 rounded-xl border space-y-1 ${
                      metric.highlight
                        ? 'bg-emerald-50/70 border-emerald-200'
                        : 'bg-zinc-50 border-zinc-200/80'
                    }`}
                  >
                    <div
                      className={`text-[10px] font-mono-code uppercase tracking-wider ${
                        metric.highlight ? 'text-emerald-700' : 'text-zinc-500'
                      }`}
                    >
                      {metric.label}
                    </div>
                    <div
                      className={`text-lg font-bold font-mono-code leading-tight ${
                        metric.highlight ? 'text-emerald-950' : 'text-zinc-900'
                      }`}
                    >
                      {metric.value}
                    </div>
                    <div
                      className={`text-[11px] leading-snug ${
                        metric.highlight ? 'text-emerald-800' : 'text-zinc-500'
                      }`}
                    >
                      {metric.note}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 막혔던 지점과 푼 방법 */}
            {project.keyPoints.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.keyPoints.map((point) => (
                  <div
                    key={point.title}
                    className="p-4 rounded-xl bg-white border border-zinc-200 space-y-2"
                  >
                    <div className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
                      {KEYPOINT_ICON[point.icon]}
                      <span>{point.title}</span>
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {renderRich(point.desc)}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* 사용 도구 */}
            {project.stack.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-zinc-100">
                <span className="text-[10px] font-mono-code uppercase tracking-wider text-zinc-400 mr-1 mt-3">
                  사용 도구
                </span>
                {project.stack.map((tool) => (
                  <span
                    key={tool}
                    className="mt-3 px-2 py-0.5 rounded text-[11px] font-mono-code bg-zinc-100 text-zinc-700 border border-zinc-200/60"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
);
