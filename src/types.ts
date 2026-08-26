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

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
  summary: string;
  keyPoints: string[];
  architecturePoints: { title: string; desc: string }[];
  testMetric?: { total: number; evmScenario: number; jsdom: number };
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
