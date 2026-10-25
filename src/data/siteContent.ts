/**
 * 화면에 보이는 모든 문구를 여기 한 곳에 모은다.
 * 컴포넌트에는 문자열을 직접 쓰지 않는다 — 문구를 고치려면 이 파일만 고치면 된다.
 */

export const content = {
  header: {
    affiliation: '서울대 대학원 경영학과 재무금융 석사',
    nav: [
      { id: 'nav-link-education', href: '#education', label: '학력' },
      { id: 'nav-link-skills', href: '#skills', label: '기술' },
      { id: 'nav-link-certifications', href: '#certifications', label: '자격증' },
      { id: 'nav-link-projects', href: '#projects', label: '프로젝트' },
    ],
    emailBtnShort: '이메일',
    copied: '복사 완료',
  },

  hero: {
    /** 비워 두면 줄 자체가 그려지지 않는다. */
    availability: '',
    ctaPrimary: '프로젝트 보기',
    ctaSecondary: '기술 스택',
    emailLabel: 'Email',
  },

  education: {
    eyebrow: 'Education',
    heading: '학력',
    subheading: '재무금융 석사 · 경제학사/경영학사 다전공',
  },

  skills: {
    eyebrow: 'Skills',
    heading: '기술 스택',
    subheading: '논문·프로젝트에서 실제 사용한 스택',
  },

  certifications: {
    eyebrow: 'Certifications',
    heading: '자격증',
    subheading: '금융투자 전문인력 자격 · 국가공인 데이터 분석 자격',
  },

  projects: {
    eyebrow: 'Projects',
    heading: '프로젝트',
    subheading: '연구 1건 · 연구조교 2건 · 데이터 프로젝트 3건 · 학회 운영 1건',
    draftLabel: '내용 정리 중',
  },

  contact: {
    eyebrow: 'Contact',
    heading: '연락 주세요',
    /** 비워 두면 문단 자체가 그려지지 않는다. */
    body: '',
  },
} as const;

export type SiteContent = typeof content;
