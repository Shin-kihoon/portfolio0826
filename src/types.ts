export interface ResearchMetric {
  label: string;
  value: string;
  subtext: string;
  highlight?: boolean;
}

export interface RegressionResult {
  model: string;
  dependentVar: string;
  alpha: string;
  tStat?: number;
  significance: '***' | '**' | '*' | 'n.s.';
  obs: string;
  spec: string;
  description: string;
}

export type ProjectBadgeTone = 'dark' | 'emerald' | 'indigo' | 'muted';
export type ProjectIcon = 'shield' | 'refresh' | 'check' | 'git';
export type ProjectLinkKind = 'repo' | 'demo';

export interface ProjectBadge {
  label: string;
  tone: ProjectBadgeTone;
}

export interface ProjectLink {
  label: string;
  url: string;
  kind: ProjectLinkKind;
}

/** title / desc 는 **굵게** 와 `코드` 표기를 지원한다 (renderRich). */
export interface ProjectKeyPoint {
  icon: ProjectIcon;
  title: string;
  desc: string;
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  badges: ProjectBadge[];
  links: ProjectLink[];
  keyPoints: ProjectKeyPoint[];
}

export interface EducationData {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  credits?: string;
  gpaConverted?: string;
  major: string;
  submajor?: string;
  details?: string[];
  status?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level?: 'Expert' | 'Advanced' | 'Proficient'; note?: string }[];
}

export interface Certification {
  name: string;
  issuer: string;
  category: 'Finance' | 'Data & Tech' | 'Language';
  date?: string;
  score?: string;
  status: string;
}
