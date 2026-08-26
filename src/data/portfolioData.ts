import { Certification, EducationData, ProjectData, RegressionResult, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  nameKo: '신기훈',
  nameEn: 'Kihoon Shin',
  title: 'Financial Data Analyst',
  subtitle: '실증금융 · 계량 분석 · 데이터 파이프라인',
  email: 'kenny1008@snu.ac.kr',
  github: 'https://github.com/Shin-kihoon',
  githubHandle: 'Shin-kihoon',
  affiliation: '서울대학교 경영대학원 재무금융 석사',
  bio: '한국 상장기업 19,519 기업-연도 패널을 직접 구축해, 배당금의 끝자리라는 관측 가능한 신호가 기업의 미래 수익성을 예측하는지 검증한 석사논문을 썼습니다. 원자료 정제부터 포트폴리오 알파·매칭·패널회귀까지 Python 으로 직접 처리했고, 가장 오래 붙들었던 문제는 결과를 얻는 일이 아니라 통제변수 구성에 따라 계수 부호가 뒤집히는 지점을 추적해 원인을 특정하는 일이었습니다.',
  location: '서울대학교 경영대학',
};

export const THESIS_DATA = {
  title: '한국 상장기업의 배당 정밀도와 주식수익률',
  subTitle: 'Dennis & Weston (2025, JCF) 연구의 한국 자본시장 복제 및 확장 실증분석',
  period: '2024 ~ 2026',
  advisor: '서울대학교 경영대학원 석사학위논문',
  sampleSize: '19,519',
  sampleUnit: '상장사 firm-year (2년 연속 배당)',
  dataSources: ['KIS-Value', 'KSIC 한국표준산업분류', '한국거래소(KRX)', '외국인지분율', 'KCGS 한국ESG기준원'],
  stats: {
    scriptsCount: 16,
    paragraphsCount: 213,
    tablesCount: 18,
    matchedPairs: 615,
  },
  keyFindings: [
    {
      title: '정밀 배당 기업의 초과수익 (FF5 알파)',
      desc: '둥근 배당금(Round Dividends) 대비 정밀 배당을 지급하는 기업 포트폴리오에서 Fama-French 5요인 알파 α60 = +9.98bp/월 (t=3.38)의 통계적 초과수익률을 추정하였습니다.',
    },
    {
      title: 'Mahalanobis 615쌍 1:1 공변량 매칭',
      desc: '산업(KSIC 1자리) exact match 및 공변량(평균 배당금·평균 주가·ln 시가총액) 1:1 매칭 615쌍 포트폴리오에서도 +10.88bp/월 (t=2.61)의 초과수익률이 유지되었습니다.',
    },
    {
      title: 'Donut Placebo 가상 컷오프 검증',
      desc: '배당 정밀도 경계값 전후의 위약(Placebo) 검증을 통해 단순 데이터 마이닝에 의한 착시 효과를 점검하였습니다.',
    },
    {
      title: '계층적 회귀를 통한 누락변수 편의(ln DPS) 식별',
      desc: '통제변수 투입 시 발생하는 계수 부호 변화의 원인이 주당배당금 크기 ln(DPS)임을 확인하고 모형 사양을 교정하였습니다.',
    },
  ],
  regressions: [
    {
      model: 'Fama-French 5-Factor (α60)',
      dependentVar: 'Long Precise - Short Round Excess Return',
      alpha: '+9.98 bp / mo (+1.20% p.a.)',
      tStat: 3.38,
      significance: '***',
      obs: '19,519 firm-years',
      spec: 'FF5',
      description: '시장(Mkt-RF), 규모(SMB), 가치(HML), 수익성(RMW), 투자(CMA) 5요인을 통제한 60개월 보유기간 알파. 36개월 t=2.26, 48개월 t=3.25 로도 유지됨',
    },
    {
      model: 'Mahalanobis Matched Pairs (615 Pairs)',
      dependentVar: 'Matched Spread Portfolio Return',
      alpha: '+10.88 bp / mo (+1.31% p.a.)',
      tStat: 2.61,
      significance: '***',
      obs: '615 Matched Pairs',
      spec: 'Mahalanobis 1:1',
      description: 'KSIC 1자리 산업 exact matching + 평균 배당금·평균 주가·ln(시가총액) 3변수 Mahalanobis 거리 1:1 매칭. 대응표본 t검정',
    },
    {
      model: 'Predictive Panel FE (2-way Clustered SE)',
      dependentVar: 'Future ROA (t+1)',
      alpha: '차기 ROA 예측력 유의',
      tStat: 2.62,
      significance: '**',
      obs: '19,519 firm-years',
      spec: 'Firm & Year FE',
      description: '기업·연도 고정효과 및 2-way 군집표준오차(Firm & Year). 종속변수 3종 모두 유의 — NI/AT t=2.62, EBITDA1/AT t=2.65, EBITDA2/AT t=1.81',
    },
    {
      model: 'Donut Placebo Cutoff Test',
      dependentVar: 'Synthetic Dividend Boundary Spread',
      alpha: '전 항목 비유의',
      significance: 'n.s.',
      obs: '19,519 firm-years',
      spec: 'mod100 ∈ {10, 90}',
      description: '둥글지도 정밀하지도 않은 대조군(mod100 ∈ {10, 90})에서는 알파·Tobin Q·ROA 가 모두 비유의하고 부호도 반전. 결과가 배당 지급 여부가 아니라 끝자리 패턴에서 온다는 근거',
    },
  ] as RegressionResult[],
};

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'krw-deposit-token',
    title: '지역사랑상품권 예금토큰 (Local Currency Deposit Token)',
    subtitle: '사용처 제한을 사후 적발에서 사전 불가능성으로',
    summary:
      '지역사랑상품권의 사용처 규칙은 현재 가맹점을 등록해두고 위반을 나중에 적발하는 방식입니다. 이 프로젝트는 그 규칙을 스마트계약의 실행 조건으로 옮겨, 조건을 만족하지 못하는 결제가 적발되는 것이 아니라 애초에 성립하지 않도록 만들었습니다. 학습·포트폴리오 목적의 구현입니다.',
    badges: [
      { label: 'Solidity 0.8.26', tone: 'dark' },
      { label: '54 Tests Passed (29 EVM + 25 jsdom)', tone: 'emerald' },
    ],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/Shin-kihoon/krw-deposit-token', kind: 'repo' },
      { label: 'Live Demo', url: 'https://shin-kihoon.github.io/krw-deposit-token/', kind: 'demo' },
    ],
    keyPoints: [
      {
        icon: 'shield',
        title: '사용처를 실행 조건으로 강제',
        desc: '가맹점을 등록해두고 위반을 나중에 적발하는 대신, 업종(MCC)·지역 코드·유효기한을 계약의 실행 조건으로 확인해 조건을 만족하지 못하면 `revert` 합니다. 적발되는 것이 아니라 애초에 성립하지 않습니다.',
      },
      {
        icon: 'refresh',
        title: '기명증서 모델 & 소각-재발행(Burn & Remint)',
        desc: '토큰을 이용자가 자기 거래은행에 대해 갖는 청구권으로 정의했습니다. 임의 주소로의 이전이라는 개념이 없어 KYC 경계가 유지되고, 은행 간 결제는 지급인 은행에서 소각 후 수취인 은행에서 재발행하므로 **총 발행량이 변하지 않습니다**.',
      },
    ],
  },
  {
    id: 'salary-doctor',
    title: '연봉닥터 (Salary Doctor)',
    subtitle: '내 연봉 인상률은 물가를 이기고 있나',
    summary:
      '뉴스의 물가상승률은 전국 평균 지출 비중으로 가중한 값이라 사람마다 체감이 다릅니다. COICOP 12분류 기준 본인 지출 비중을 반영한 개인 물가를 따로 계산해 연봉 인상률과 비교합니다. 팀 프로젝트이며, 아래는 제가 맡은 부분입니다.',
    badges: [
      { label: '팀 프로젝트', tone: 'dark' },
      { label: '커밋 56 · 진단 로직 · 데이터 파이프라인', tone: 'indigo' },
      { label: 'OECD SDMX · Yahoo Finance · Frankfurter', tone: 'muted' },
    ],
    links: [
      { label: 'Live Service', url: 'https://fintech-team-final.vercel.app/', kind: 'demo' },
    ],
    keyPoints: [
      {
        icon: 'check',
        title: '적자인데 "양호"로 진단하던 문제',
        desc: '연봉 3,600만원에 생활비 연 6,000만원을 넣어도 "괜찮아요"로 진단됐습니다. 판정이 **"인상률이 물가를 이겼나"만 보고 수지 여부를 묻지 않은 것**이 원인이라, 물가 판정은 그대로 두고 수지 판정을 별도 축으로 추가했습니다.',
      },
      {
        icon: 'git',
        title: '봇 PR 데드락 해결과 가짜 데이터 차단',
        desc: 'GitHub은 봇이 만든 PR에 워크플로를 돌리지 않아, 필수 검사가 영영 통과되지 않고 데이터 자동 갱신이 3일간 멈췄습니다. 잡이 같은 검사를 직접 돌린 뒤 커밋 상태 API로 기록하도록 바꿨습니다. 함께 `np.random` 등 난수·하드코딩 수치를 PR 단계에서 차단하는 검사를 추가했습니다.',
      },
    ],
  },
];

export const EDUCATION_LIST: EducationData[] = [
  {
    institution: '서울대학교 경영대학원 (SNU Business School)',
    degree: '경영학 석사 (재무금융 전공)',
    major: '재무금융 (Finance)',
    period: '2024.09 ~ 2026.08 (졸업예정)',
    gpa: '3.92 / 4.3',
    details: [
      '석사학위논문: 한국 상장기업의 배당 정밀도와 주식수익률 실증분석',
      '주요 이수: 고급실증재무론, 자산가격결정론, 기업재무세미나, 금융계량경제학, 빅데이터재무분석',
    ],
  },
  {
    institution: '서울대학교 빅데이터 핀테크 전문가과정 (13기)',
    degree: '빅데이터 핀테크 전문가과정 수료',
    major: '금융 데이터 분석 · 블록체인 핀테크',
    period: '수료',
    status: '수료 완료',
    details: [
      '금융 데이터 분석, 분산원장 및 스마트계약 실습',
      '팀 프로젝트: 연봉닥터 실질임금 진단 웹앱 개발 (커밋 56)',
    ],
  },
  {
    institution: '건국대학교 (Konkuk University)',
    degree: '경제학사 / 경영학사 (복수전공)',
    major: '경제학사 (전공 평점 4.25 / 4.5)',
    submajor: '경영학사 (전공 평점 4.46 / 4.5)',
    period: '2018.03 ~ 2024.02 (학사 졸업)',
    gpa: '4.18 / 4.5',
    details: [
      '경제학사 전공 평점 4.25 / 4.5 · 경영학사 전공 평점 4.46 / 4.5 (전체 평점 4.18 / 4.5)',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages & Core Stack',
    description: '통계 분석, 계량 모형, 스마트계약',
    skills: [
      { name: 'Python', level: 'Advanced', note: 'pandas, NumPy, statsmodels, SciPy, matplotlib' },
      { name: 'R', level: 'Proficient', note: '공시 데이터 파싱 및 전처리 스크립트' },
      { name: 'SQL', level: 'Proficient', note: 'Window Function, Join, 집계 쿼리 (SQLD)' },
      { name: 'Solidity', level: 'Proficient', note: 'v0.8.26, 로컬 EVM 시나리오 테스트' },
      { name: 'JavaScript / TypeScript', level: 'Proficient', note: 'Node.js, jsdom, 의존성 없는 SVG 차트' },
    ],
  },
  {
    category: 'Finance & Econometrics',
    description: '자산가격결정 및 기업재무 실증 계량 분석',
    skills: [
      { name: 'Empirical Asset Pricing', level: 'Advanced', note: 'Fama-French 5요인, 포트폴리오 알파 추정' },
      { name: 'Panel Econometrics', level: 'Advanced', note: '2-way Clustered SE, Firm & Year FE' },
      { name: 'Matching & 강건성 검정', level: 'Advanced', note: 'Mahalanobis 매칭, 산업 exact match, Donut placebo' },
      { name: '모형 사양 진단', level: 'Advanced', note: '누락변수 편의 식별, VIF·조건수 다중공선성 검증' },
      { name: 'Corporate Finance', level: 'Proficient', note: '배당정책, 지배구조, ROA 예측' },
    ],
  },
  {
    category: 'Data & Financial APIs',
    description: '패널 데이터 수집·정제 및 금융 데이터 인터페이스',
    skills: [
      { name: 'KIS-Value', level: 'Advanced', note: '한국 상장사 재무·주가 패널 구축 (19,519 firm-years)' },
      { name: 'OECD SDMX API', level: 'Proficient', note: 'CPI·COICOP 품목별 물가 시계열 조회' },
      { name: 'KCGS ESG & 지분율', level: 'Proficient', note: '거버넌스 통제변수 병합' },
      { name: 'Git LFS', level: 'Proficient', note: '대용량 패널 데이터 버전 관리' },
    ],
  },
  {
    category: 'Engineering & CI/CD',
    description: '재현 가능한 분석 파이프라인과 데이터 무결성 검증',
    skills: [
      { name: 'GitHub Actions CI', level: 'Proficient', note: '데이터 수집 스케줄링, PR 상태 API 연동' },
      { name: '데이터 무결성 자동 검증', level: 'Proficient', note: '난수·하드코딩 수치 패턴 PR 단계 차단' },
      { name: '재현 가능한 파이프라인', level: 'Advanced', note: 'Python 스크립트 16개, 경로·설정 분리' },
      { name: '스마트계약 테스트', level: 'Proficient', note: 'EVM revert 시나리오 29 + UI 단언 25' },
    ],
  },
  {
    category: 'AI Workflow Engineering',
    description: 'AI 도구를 쓰는 연구 워크플로 구성',
    skills: [
      { name: 'Claude Code 워크플로', level: 'Advanced', note: 'CLAUDE.md 로 프로젝트 규칙·데이터 사양 정의' },
      { name: '구조화 메모리 관리', level: 'Proficient', note: '논문 작업 맥락을 .md 40여 개로 관리' },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: '금융투자분석사 (Certified Research Analyst)',
    issuer: '금융투자협회 (KOFIA)',
    category: 'Finance',
    status: '취득 완료',
  },
  {
    name: '투자자산운용사 (Certified Investment Manager)',
    issuer: '금융투자협회 (KOFIA)',
    category: 'Finance',
    status: '취득 완료',
  },
  {
    name: '빅데이터분석기사',
    issuer: '한국데이터산업진흥원 (K-DATA)',
    category: 'Data & Tech',
    status: '취득 완료',
  },
  {
    name: 'SQLD (SQL Developer)',
    issuer: '한국데이터산업진흥원 (K-DATA)',
    category: 'Data & Tech',
    status: '취득 완료',
  },
  {
    name: 'TEPS',
    issuer: '서울대학교 언어교육원',
    category: 'Language',
    status: '보유',
  },
];
