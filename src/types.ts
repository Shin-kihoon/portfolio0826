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

/** 결과물 화면. 말로 설명한 것을 눈으로 확인시키는 용도라 한두 장이면 충분하다. */
export interface ProjectShot {
  /** public/ 아래 경로 */
  src: string;
  /** 무엇을 보고 있는지. 이미지가 안 뜨면 이 문장이 대신 남는다. */
  caption: string;
}

export interface ProjectData {
  id: string;
  kind: ProjectKind;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  /** 왜 했는지. 한 줄. 설명하지 말고 문제만 적는다. */
  question: string;
  stack: string[];
  metrics: ProjectMetric[];
  keyPoints: ProjectKeyPoint[];
  shots?: ProjectShot[];
  /** 팀 프로젝트에서 내가 맡은 범위. 혼자 한 일은 비워 둔다. */
  contribution?: string;
  /** 아쉬운 점. 숨기면 면접에서 더 크게 걸린다. */
  limitation?: string;
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
