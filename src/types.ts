export type ProjectIcon = 'chart' | 'check' | 'git' | 'search';
export type ProjectKind = 'thesis' | 'analysis' | 'service';

export interface ProjectLink {
  label: string;
  url: string;
  kind: 'repo' | 'demo';
}

/** 프로젝트 카드 상단의 숫자 스트립. 결과 하나당 하나. */
export interface ProjectMetric {
  label: string;
  value: string;
  note: string;
  highlight?: boolean;
}

/** title / desc 는 **굵게** 와 `코드` 표기를 지원한다 (renderRich). */
export interface ProjectKeyPoint {
  icon: ProjectIcon;
  title: string;
  desc: string;
}

export interface ProjectData {
  id: string;
  kind: ProjectKind;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  /** 왜 이 프로젝트를 했는지. 한두 문장으로 문제의식만. */
  question: string;
  /** 무엇을 했고 무엇이 나왔는지. 2~3줄. */
  summary: string;
  stack: string[];
  metrics: ProjectMetric[];
  keyPoints: ProjectKeyPoint[];
  links: ProjectLink[];
  /** 아직 정리 중인 프로젝트는 카드에 표식을 단다. */
  draft?: boolean;
}

export interface EducationData {
  institution: string;
  degree: string;
  major: string;
  period: string;
  gpa?: string;
  gpaNote?: string;
  status?: string;
  details?: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; note: string }[];
}

export interface Certification {
  name: string;
  issuer: string;
  category: 'Finance' | 'Data' | 'Language';
}
