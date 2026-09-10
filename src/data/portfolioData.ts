import { Certification, EducationData, ProjectData, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  nameKo: '신기훈',
  nameEn: 'Kihoon Shin',
  title: '데이터 분석가',
  titleEn: 'Data Analyst',
  tagline: 'Python · SQL · 통계 분석 — 금융 데이터',
  email: 'kenny1008@snu.ac.kr',
  github: 'https://github.com/Shin-kihoon',
  githubHandle: 'Shin-kihoon',
  affiliation: '서울대학교 대학원 경영학과 재무금융 석사',
  /** 두 문장. 무엇을 다뤘고 무엇을 할 수 있는지. */
  bio: '금융 원자료 수집·정제부터 가설 검정까지 직접 수행. 상장기업 19,519 기업-연도 패널과 대출 111만 건을 Python으로 전처리·모형 추정·결과 검증.',
};

/** 카드는 짧게. 문제 한 줄 → 숫자 → 막힌 지점 → 도구. 설명하지 않는다. */
export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'dividend-precision',
    kind: 'thesis',
    title: '배당금 끝자리로 기업의 미래 수익성 예측',
    subtitle: '상장기업 19,519 기업-연도 패널 직접 구축',
    period: '2024.09 ~ 2026.08',
    role: '단독 연구',
    question: '외부에서 관측 가능한 경영진 무관심 신호 탐색',
    stack: ['Python', 'pandas', 'statsmodels', 'KIS-Value'],
    metrics: [
      { label: '분석 표본', value: '19,519', note: '기업-연도' },
      { label: 'FF5 알파', value: '+9.98bp/월', note: 't = 3.38', highlight: true },
      { label: '매칭 재검증', value: '615쌍', note: '+10.88bp/월 (t = 2.61)' },
      { label: '차기 ROA 예측', value: 't = 2.62', note: '기업·연도 고정효과' },
    ],
    keyPoints: [
      {
        icon: 'search',
        title: '계수 부호 반전 원인 규명',
        desc: '통제변수 투입 시 계수 부호 반전 → 원인을 **`ln(DPS)`** 로 특정, 모형 사양 수정',
      },
      {
        icon: 'check',
        title: '강건성 확인',
        desc: '615쌍 매칭 표본에서 결과 유지, 위약 대조군은 전 항목 비유의',
      },
    ],
    links: [],
  },
  {
    id: 'bank-ppp-matching',
    kind: 'analysis',
    title: '규칙으로 안 되던 은행 매칭을 분류 모델로 해결',
    subtitle: '미국 PPP 대출기관을 감독기관 식별번호(RSSD ID)에 연결',
    period: '2025',
    role: '연구 보조 (RA)',
    question: '자료마다 다르게 기재된 은행명의 동일 실체 식별',
    stack: ['Python', 'pandas', 'rapidfuzz', 'FDIC BankFind API'],
    metrics: [
      { label: '대출기관 명단', value: '5,625', note: '2020년 PPP 취급기관' },
      { label: '연결 대상', value: '605', note: 'CRA 보고 은행' },
      { label: '해결 방식', value: '규칙 → 분류 모델', note: '수작업 검증 사례로 학습', highlight: true },
    ],
    keyPoints: [
      {
        icon: 'search',
        title: '규칙 매칭의 한계',
        desc: '합병·개명 시 식별번호 자체가 변경 → 이름 유사도만으로는 식별 불가',
      },
      {
        icon: 'check',
        title: '분류 모델로 재적용',
        desc: '수작업 검증한 경계 사례를 **정답 라벨로 학습**, 규칙이 놓친 오연결 교정',
      },
    ],
    links: [],
  },
  {
    id: 'lendingclub',
    kind: 'analysis',
    title: 'P2P 대출 심사 모형으로 부도율 24% → 3.4%',
    subtitle: 'LendingClub 상환 확정 대출 111만 건',
    period: '2026.07',
    role: '데이터 정제 · 모형 학습 · 성과 평가',
    question: '신청 시점 정보만으로 부실 대출 선별 가능성 검증',
    stack: ['Python', 'scikit-learn', 'pandas', 'FRED API'],
    metrics: [
      { label: '분석 표본', value: '1,117,839', note: '상환 확정 대출' },
      { label: '부도율', value: '24.0% → 3.4%', note: '상위 3% 선별', highlight: true },
      { label: 'Test AUC', value: '0.707', note: '2018년 표본' },
      { label: '비교 모형', value: '5종', note: '로지스틱 · 트리 · 배깅 · RF · 부스팅' },
    ],
    keyPoints: [
      {
        icon: 'search',
        title: '데이터 누출 차단',
        desc: '이자율·신용등급 제외 — 플랫폼이 위험을 반영해 산정한 값',
      },
      {
        icon: 'check',
        title: '시점 기준 분할',
        desc: '학습 ~2016 / 검증 2017 / 평가 2018 시점 분할, 전처리도 **학습 표본 내에서만** 적합',
      },
    ],
    links: [],
  },
  {
    id: 'salary-doctor',
    kind: 'service',
    title: '연봉닥터 — 내 지출 기준 물가로 연봉 인상률 진단',
    subtitle: '팀 프로젝트',
    period: '2026.08',
    role: '진단 로직 · 데이터 파이프라인',
    question: '전국 평균이 아닌 개인 지출 기준 물가 산출',
    stack: ['Python', 'JavaScript', 'GitHub Actions', 'OECD SDMX API'],
    metrics: [
      { label: '물가 분류', value: 'COICOP 12', note: '지출 비중 재가중' },
      { label: '데이터 출처', value: '3곳', note: 'OECD · Yahoo Finance · Frankfurter' },
      { label: '기여 커밋', value: '56', note: '진단 로직 · 파이프라인' },
    ],
    keyPoints: [
      {
        icon: 'check',
        title: '진단 로직 오류 수정',
        desc: '적자 상태에서 "양호" 판정 발생 → **물가 축과 수지 축 분리**',
      },
      {
        icon: 'git',
        title: '자동 갱신 3일 중단 복구',
        desc: '봇 PR 워크플로 미실행으로 검사 미통과 → 커밋 상태 API로 우회',
      },
    ],
    links: [{ label: '서비스 열기', url: 'https://fintech-team-final.vercel.app/', kind: 'demo' }],
  },
];

export const EDUCATION_LIST: EducationData[] = [
  {
    institution: '서울대학교 대학원 경영학과',
    degree: '경영학석사',
    major: '재무금융',
    period: '2024.09 ~ 2026.08',
    gpa: '3.92 / 4.3',
    gpaNote: '이수 27학점 · 백분환산 96.2',
    status: '졸업',
    details: [
      '석사학위논문: 한국 상장기업의 배당 정밀도와 주식수익률',
      '주요 이수: 재무연구방법론 · 계량경제학연구 · 데이터사이언스의 원리와 응용 · 행태주의 재무론 · 투자론연구 · 포트폴리오관리연구 · 투자관리세미나',
    ],
  },
  {
    institution: '건국대학교',
    degree: '경제학사 · 경영학사 (다전공)',
    major: '경제학과 · 경영학과',
    period: '2018.03 ~ 2024.02',
    gpa: '4.17 / 4.5',
    gpaNote: '전공 4.25 · 다전공 4.46',
    details: [
      "Dean's List 4회 (2022-1 · 2022-2 · 2023-1 · 2023-2)",
      '취득학점 147 · 백분율 96.7',
    ],
  },
  {
    institution: '서울대학교 빅데이터 핀테크 전문가과정 (13기)',
    degree: '수료',
    major: '금융 데이터 분석 · 머신러닝',
    period: '2026',
    status: '수료',
    details: [
      '머신러닝·딥러닝, 자연어처리, 데이터베이스 실습 과정 이수',
      '팀 프로젝트: 연봉닥터 웹서비스 개발',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: '언어 · 도구',
    description: '분석에 직접 사용하는 스택',
    skills: [
      { name: 'Python', note: 'pandas, NumPy, statsmodels, scikit-learn, matplotlib' },
      { name: 'SQL', note: '조인, 집계, 윈도우 함수 (SQLD 취득)' },
      { name: 'R', note: '공시 데이터 파싱 및 전처리' },
      { name: 'Git / GitHub', note: '브랜치 운용, GitHub Actions, Git LFS' },
    ],
  },
  {
    category: '통계 · 계량 분석',
    description: '가설 검정과 모형 진단',
    skills: [
      { name: '회귀분석', note: '패널 고정효과, 2-way 군집표준오차' },
      { name: '인과 추론', note: '공변량 매칭, 플라세보 검정, 누락변수 편의 진단' },
      { name: '머신러닝', note: '로지스틱 회귀, 랜덤포레스트, 부스팅, AUC 평가' },
      { name: '다중공선성 진단', note: 'VIF, 조건수, 계층적 회귀' },
    ],
  },
  {
    category: '데이터 처리',
    description: '원자료를 분석 가능한 형태로',
    skills: [
      { name: '패널 데이터 구축', note: '19,519 기업-연도 · 대출 110만 건 규모' },
      { name: '전처리', note: '결측 처리, 윈저라이징, 이상치 점검' },
      { name: '데이터 누출 차단', note: '시점 기준 분할, 학습 표본 내 전처리 학습' },
      { name: 'API 수집', note: 'OECD SDMX, FRED, Yahoo Finance' },
    ],
  },
  {
    category: '재무 · 도메인',
    description: '금융 데이터를 읽는 배경지식',
    skills: [
      { name: '자산가격결정', note: 'Fama-French 요인 모형, 포트폴리오 알파' },
      { name: '기업재무', note: '배당정책, 지배구조, 수익성 지표' },
      { name: '신용위험', note: '부도 예측, 위험조정 수익률' },
      { name: '금융 데이터베이스', note: 'KIS-Value, KRX, KCGS' },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: '금융투자분석사', issuer: '금융투자협회', category: 'Finance' },
  { name: '투자자산운용사', issuer: '금융투자협회', category: 'Finance' },
  { name: '빅데이터분석기사', issuer: '한국데이터산업진흥원', category: 'Data' },
  { name: 'SQLD', issuer: '한국데이터산업진흥원', category: 'Data' },
  { name: 'TEPS', issuer: '서울대학교 언어교육원', category: 'Language' },
];
