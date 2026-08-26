import React from 'react';
import { ShieldCheck, Play, ExternalLink, Github, CheckCircle2, RefreshCw, GitBranch } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { renderRich } from './ProjectRich';
import { DepositTokenSimulator } from './DepositTokenSimulator';
import { SalaryDoctorPipeline } from './SalaryDoctorPipeline';
import type { ProjectBadgeTone, ProjectIcon } from '../types';
import { content } from '../data/siteContent';

const BADGE_TONE: Record<ProjectBadgeTone, string> = {
  dark: 'bg-zinc-900 text-zinc-100 font-bold',
  emerald: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
  indigo: 'bg-indigo-50 text-indigo-800 border border-indigo-200',
  muted: 'bg-zinc-100 text-zinc-700',
};

const KEYPOINT_ICON: Record<ProjectIcon, React.ReactNode> = {
  shield: <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />,
  refresh: <RefreshCw className="w-4 h-4 text-indigo-600 shrink-0" />,
  check: <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />,
  git: <GitBranch className="w-4 h-4 text-indigo-600 shrink-0" />,
};

/** 프로젝트별 고유 UI. 여기 없는 프로젝트는 껍데기만 그려진다. */
const EXTRAS: Record<string, React.ReactNode> = {
  'krw-deposit-token': <DepositTokenSimulator />,
  'salary-doctor': <SalaryDoctorPipeline />,
};

export const ProjectsSection: React.FC = () => (
  <section id="projects" className="py-16 md:py-24 border-b border-zinc-200/80 bg-zinc-50/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono-code">
            {content.projects.eyebrow}
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-serif-heading">
              {content.projects.heading}
            </h2>
            <p className="text-base text-zinc-600 font-sans">
              {content.projects.subheading}
            </p>
          </div>
          <span className="text-xs font-mono-code text-zinc-500 bg-white px-3 py-1.5 rounded-lg border border-zinc-200">
            {content.projects.stackChip}
          </span>
        </div>
      </div>

      {PROJECTS_DATA.map((project) => (
        <div
          key={project.id}
          className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 space-y-8 shadow-xs"
        >
          {/* 헤더 — 뱃지 · 제목 · 부제 · 링크 */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-zinc-100 pb-6">
            <div className="space-y-2 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                {project.badges.map((badge) => (
                  <span
                    key={badge.label}
                    className={`px-2.5 py-0.5 rounded text-xs font-mono-code ${BADGE_TONE[badge.tone]}`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-zinc-950">{project.title}</h3>
              <p className="text-sm font-medium text-zinc-600">{project.subtitle}</p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-1 shrink-0">
              {project.links.map((link) =>
                link.kind === 'repo' ? (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200 transition-colors font-mono-code"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>{link.label}</span>
                  </a>
                ) : (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-50 transition-colors font-mono-code shadow-xs"
                  >
                    <Play className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{link.label}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* 개요 */}
          <p className="text-sm text-zinc-600 leading-relaxed max-w-3xl">{project.summary}</p>

          {/* 핵심 포인트 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.keyPoints.map((point) => (
              <div
                key={point.title}
                className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-2"
              >
                <div className="text-xs font-bold text-zinc-800 flex items-center gap-1.5">
                  {KEYPOINT_ICON[point.icon]}
                  <span>{point.title}</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">{renderRich(point.desc)}</p>
              </div>
            ))}
          </div>

          {EXTRAS[project.id]}
        </div>
      ))}
    </div>
  </section>
);
