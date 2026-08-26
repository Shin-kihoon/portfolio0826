/**
 * 화면에 보이는 모든 문구를 여기 한 곳에 모은다.
 * 컴포넌트에는 문자열을 직접 쓰지 않는다 — 문구를 고치려면 이 파일만 고치면 된다.
 *
 * 구조:  content.<섹션>.<키>
 * 어떤 키가 어느 화면인지는 docs/content-edit-guide.md 참조.
 */

export const content = {
  /** 상단 고정 헤더 */
  header: {
    affiliation: 'SNU Business School · Empirical Finance',
    nav: [
      { id: 'nav-link-research', href: '#research', label: '논문' },
      { id: 'nav-link-projects', href: '#projects', label: '프로젝트' },
      { id: 'nav-link-education', href: '#education', label: '학력' },
      { id: 'nav-link-skills', href: '#skills', label: '역량' },
      { id: 'nav-link-interests', href: '#interests', label: '관심분야' },
      { id: 'nav-link-certifications', href: '#certifications', label: '자격증' },
    ],
    designSpecBtn: '설계 시스템 명세',
    citationBtn: '논문 인용',
    emailBtnShort: '이메일',
    copied: '복사 완료!',
  },

  /** 첫 화면 — 내가 누구인가 */
  hero: {
    degreeBadge: '서울대학교 경영대학원 재무금융 석사',
    period: '2024.09 ~ 2026.08 (GPA 3.92 / 4.3)',
    headline: 'Financial Data Analyst',
    tagline: '실증금융 · 계량 분석 · 데이터 파이프라인',
    bio: '금융 데이터에서 사람의 행태를 읽고, 그것을 코드로 검증합니다. 배당금의 끝자리에서 경영진의 무관심을 찾아낸 석사논문을 썼고, 분석에서 멈추지 않고 파이프라인과 서비스로 만드는 데까지 관심이 있습니다.',
    ctaPrimary: '석사학위논문 요약 보기',
    ctaSecondary: '프로젝트 명세',
    emailLabel: 'Email:',
    copyLabel: '복사',
  },

  /** 석사학위논문 */
  research: {
    eyebrow: "Master's Thesis Research",
    heading: '한국 상장기업의 배당 정밀도와 주식수익률',
    subheading: 'Dennis & Weston (2025, JCF) "Lazy Dividends" 연구의 한국 자본시장 복제 및 확장 분석',
    /** 가설을 세운 이유 */
    narrativeHypothesis:
      '배당금을 500원, 1,000원처럼 둥근 숫자에 맞추는 기업이 있고 끝자리까지 조정하는 기업이 있습니다. 앞의 선택은 배당 수준을 진지하게 계산한 결과라기보다 어림수로 맞춘 결과일 수 있습니다. 그렇다면 둥근 배당은 **관측 가능한 무관심의 대리변수**이고, 그 무관심이 배당 결정에만 머물지 않을 것이라는 가설을 검정했습니다.',
    /** 실제로 한 일 */
    narrativeWork:
      '원자료 정제부터 포트폴리오 알파·매칭표본·패널회귀까지 Python으로 직접 처리했습니다. 가장 오래 붙들었던 것은 결과를 얻는 일이 아니라, **통제변수 구성에 따라 계수 부호가 뒤집히는 지점을 추적해 원인을 특정하는 일**이었습니다.',
    affiliationChip: '서울대학교 경영대학원 석사학위논문',
  },

  /** 연구·개발 프로젝트 */
  projects: {
    eyebrow: 'Engineering & Systems Projects',
    heading: '연구·개발 프로젝트',
    subheading: '금융제도 주제를 실제 동작하는 코드로 옮긴 작업입니다',
    stackChip: 'Solidity · Python · JavaScript',
  },

  /** 관심분야 */
  interests: {
    eyebrow: 'Research Interests',
    heading: '관심분야',
    subheading: '지금 더 파고 싶은 주제와, 그렇게 된 계기입니다',
    items: [
      {
        keyword: '행태재무 · 경영진 의사결정',
        detail:
          '석사논문에서 배당금의 끝자리를 경영진 무관심의 대리변수로 놓고 검정했습니다. 관측 가능한 사소한 흔적이 실제 성과를 예측하는지가 계속 관심사입니다.',
      },
      {
        keyword: '지급정책 · 지배구조',
        detail:
          '배당 결정이 외국인 지분율·KCGS 등급 같은 거버넌스 지표와 어떻게 맞물리는지를 논문의 거버넌스 채널 분석에서 다뤘습니다.',
      },
      {
        keyword: '예금토큰 · 원화 스테이블코인',
        detail:
          '한국은행이 은행 중심 발행과 예금토큰의 상호 보완 구조를 논의하는 상황에서, 그 구조를 기명증서 모델로 직접 구현해보며 제도 설계의 트레이드오프를 정리했습니다.',
      },
      {
        keyword: '재현 가능한 분석 파이프라인',
        detail:
          '논문 작업을 저장소 하나로 동기화하고, 화면의 모든 수치가 실제 데이터에서 오도록 CI로 강제하는 방식을 프로젝트에 적용해 왔습니다.',
      },
    ],
  },

  education: {
    eyebrow: 'Academic Background & Training',
    heading: '학력 및 전문 교육과정',
    subheading: '재무금융 계량경제학 석사 연구 및 빅데이터 핀테크 심화 교육',
    detailsToggle: '주요 이수 내역 및 세부사항',
  },

  skills: {
    eyebrow: 'Technical & Domain Competencies',
    heading: '핵심 역량 및 기술 스택',
    subheading: '논문과 프로젝트에서 실제로 사용한 것만 적었습니다',
    allLabel: 'All',
  },

  certifications: {
    eyebrow: 'Certifications & Qualifications',
    heading: '전문 자격증 및 어학',
    subheading: '금융투자업계 법정 전문인력 자격 및 국가공인 데이터 분석 기사',
    statusLabel: '상태:',
    issuerLabel: '발급기관:',
  },
} as const;

export type SiteContent = typeof content;
