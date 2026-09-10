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
    availability: '2026.08 석사 졸업 · 즉시 입사 가능',
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
    heading: '자격증 및 어학',
    subheading: '금융투자 전문인력 자격 · 국가공인 데이터 분석 자격',
  },

  projects: {
    eyebrow: 'Projects',
    heading: '프로젝트',
    subheading: '학위논문 1건 · 데이터 분석 2건 · 웹 서비스 1건',
    draftLabel: '내용 정리 중',
  },

  contact: {
    eyebrow: 'Contact',
    heading: '연락 주세요',
    body: '데이터 분석가 신입 포지션 지원 중. 이메일 주시면 이력서와 논문 원문 회신.',
  },
} as const;

export type SiteContent = typeof content;
