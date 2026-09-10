/**
 * 화면에 보이는 모든 문구를 여기 한 곳에 모은다.
 * 컴포넌트에는 문자열을 직접 쓰지 않는다 — 문구를 고치려면 이 파일만 고치면 된다.
 */

export const content = {
  header: {
    affiliation: '서울대 경영대학원 재무금융 석사',
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
    availability: '2026년 하반기 입사 가능',
    ctaPrimary: '프로젝트 보기',
    ctaSecondary: '기술 스택',
    emailLabel: 'Email',
  },

  education: {
    eyebrow: 'Education',
    heading: '학력',
    subheading: '재무금융 석사 · 경제학/경영학 복수전공',
  },

  skills: {
    eyebrow: 'Skills',
    heading: '기술 스택',
    subheading: '논문과 프로젝트에서 실제로 사용한 것만 적었습니다',
  },

  certifications: {
    eyebrow: 'Certifications',
    heading: '자격증 및 어학',
    subheading: '금융투자 전문인력 자격 및 국가공인 데이터 분석 자격',
  },

  projects: {
    eyebrow: 'Projects',
    heading: '프로젝트',
    subheading: '데이터를 직접 모아 가설을 검정하거나 서비스로 만든 작업입니다',
    draftLabel: '내용 정리 중',
  },

  contact: {
    eyebrow: 'Contact',
    heading: '연락 주세요',
    body: '데이터 분석가 신입 포지션을 찾고 있습니다. 이메일로 연락 주시면 이력서와 논문 원문을 보내드리겠습니다.',
  },
} as const;

export type SiteContent = typeof content;
