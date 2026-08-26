import { Certification, EducationData, ProjectData, RegressionResult, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  nameKo: '신기훈',
  nameEn: 'Kihoon Shin',
  title: '실증금융 · 금융 데이터 분석',
  subtitle: 'Empirical Finance & Quantitative Data Analysis',
  email: 'kenny1008@snu.ac.kr',
  github: 'https://github.com/Shin-kihoon',
  githubHandle: 'Shin-kihoon',
  affiliation: '서울대학교 경영대학원 재무금융 석사',
  bio: '재무금융과 계량 데이터 분석을 전공했습니다. 석사학위논문에서는 한국 상장기업의 배당 정밀도와 주식수익률 간의 관계를 실증 분석했으며, 파이썬 기반 데이터 분석 및 스마트계약 개발 역량을 갖추고 있습니다.',
  location: '서울대학교 경영대학',
};

export const THESIS_DATA = {
  title: '한국 상장기업의 배당 정밀도와 주식수익률',
  subTitle: 'Dennis & Weston (2025, JCF) 연구의 한국 자본시장 복제 및 확장 실증분석',
  period: '2024 ~ 2026',
  advisor: '서울대학교 경영대학원 석사학위논문',
  sampleSize: '19,519',
  sampleUnit: '상장사 firm-year 관측치',
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
      desc: '산업 및 주요 공변량(시가총액, B/M, 과거수익률) 1:1 매칭 615쌍 포트폴리오에서도 +10.88bp/월 (t=2.61)의 초과수익률이 유지되었습니다.',
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
      model: 'Fama-French 5-Factor + Momentum (α60)',
      dependentVar: 'Long Precise - Short Round Excess Return',
      alpha: '+9.98 bp / mo (+1.20% p.a.)',
      tStat: 3.38,
      significance: '***',
      obs: '19,519 firm-years',
      rSquared: '0.842',
      description: '시장(Mkt-RF), 규모(SMB), 가치(HML), 수익성(RMW), 투자(CMA) 및 모멘텀(MOM) 요인을 통제한 60개월 롤링 알파',
    },
    {
      model: 'Mahalanobis Matched Pairs (615 Pairs)',
      dependentVar: 'Matched Spread Portfolio Return',
      alpha: '+10.88 bp / mo (+1.31% p.a.)',
      tStat: 2.61,
      significance: '***',
      obs: '615 Matched Pairs',
      rSquared: '0.791',
      description: 'KSIC 3자리 산업 exact matching + Log Size, B/M, Pre-Return Mahalanobis Distance 1:1 매칭',
    },
    {
      model: 'Predictive Panel FE (2-way Clustered SE)',
      dependentVar: 'Future ROA (t+1, t+2)',
      alpha: 'β = +0.024 (t=3.12)',
      tStat: 3.12,
      significance: '***',
      obs: '17,402 firm-years',
      rSquared: '0.418',
      description: '기업 고정효과(Firm FE) 및 연도 고정효과(Year FE) 포함, Firm & Year 2-way 군집표준오차(Clustered SE)',
    },
    {
      model: 'Donut Placebo Cutoff Test',
      dependentVar: 'Synthetic Dividend Boundary Spread',
      alpha: '+0.42 bp / mo (Statistically Zero)',
      tStat: 0.28,
      significance: 'n.s.',
      obs: '19,519 firm-years',
      rSquared: '0.835',
      description: '경계값 인위적 교란(Donut Shift) 시 알파 완전 소멸 확인으로 인과적 식별성(Identification) 확보',
    },
  ] as RegressionResult[],
};

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'krw-deposit-token',
    title: '지역사랑상품권 예금토큰 (Local Currency Deposit Token)',
    subtitle: '스마트계약 기반 온체인 사용처 강제 및 기명증서 은행 간 결제 시스템',
    role: 'Smart Contract Architecture & EVM Implementation',
    stack: ['Solidity 0.8.26', 'Hardhat / Foundry', 'TypeScript', 'jsdom', 'OpenZeppelin'],
    repoUrl: 'https://github.com/Shin-kihoon/krw-deposit-token',
    demoUrl: 'https://shin-kihoon.github.io/krw-deposit-token/',
    summary: '지역화폐 부정유통 및 목적 외 사용을 사후 적발이 아닌 온체인 스마트계약 실행 조건으로 원천 차단하는 기명식 예금토큰 프로토콜입니다.',
    keyPoints: [
      '사전 온체인 강제(Enforcement): 업종(MCC 코드), 가맹점 지역 코드, 유효 기한 위반 시 트랜잭션 즉각 revert 처리',
      '기명증서(Registered Certificate) 모델: 무기명 이전 차단으로 실명확인(KYC) 경계 유지 및 자금세탁방지 준수',
      '소각-재발행(Burn-and-Remint) 인터뱅크 결제: 은행 간 토큰 이동 시 원본 소각 후 동일 가치 재발행으로 총 통화량(Total Supply) 불변성 보장',
      '철저한 검증 파이프라인: 총 54개 테스트(EVM 시나리오 29건 + 데모 jsdom 브라우저 25건) 100% 통과 및 한계 항목 완비',
    ],
    architecturePoints: [
      {
        title: '상태 검증 인터셉터',
        desc: '모든 transfer / transferFrom 호출 시 Sender/Receiver의 KYC 화이트리스트와 가맹점 상권 분류 코드를 On-Chain Resolver로 원자적(Atomic) 검증',
      },
      {
        title: '통화량 보존 불변식',
        desc: 'Σ(Bank_i.issued) == Σ(User_balances) 불변식을 만족하며, 은행 간 청산 시 발행 한도 및 담보 예치금 비율을 엄격히 동기화',
      },
    ],
    testMetric: {
      total: 54,
      evmScenario: 29,
      jsdom: 25,
    },
  },
  {
    id: 'salary-doctor',
    title: '연봉닥터 (Salary Doctor)',
    subtitle: '실질임금 진단 및 거시경제 지표 연동 자산배분 시뮬레이터',
    role: 'Diagnosis Core Logic & Automated Multi-Source Data Pipeline',
    stack: ['Python', 'TypeScript / React', 'OECD SDMX API', 'Yahoo Finance', 'Frankfurter FX', 'GitHub Actions CI'],
    demoUrl: 'https://fintech-team-final.vercel.app/',
    summary: '물가상승률을 반영한 실질 구매력 변동과 개인 재무건전성을 진단하고 최적 자산배분 포트폴리오를 시뮬레이션하는 핀테크 웹 애플리케이션입니다 (팀 프로젝트, 커밋 56회).',
    keyPoints: [
      '진단 로직 결함 수정: 적자 가계 상태를 "양호"로 오판하던 기존 알고리즘을 물가 변동성 판정과 현금흐름 수지 판정으로 명확히 분리하여 정합성 확보',
      '데이터 무결성 가드(Anti-Mock Guard): PR 단계에서 np.random 등 임의 난수 생성 데이터의 프로덕션 유입을 차단하는 AST 기반 CI 룰 구축',
      'GitHub Actions CI 데드락 해결: 외부 봇 자동 PR 생성 시 커밋 상태 API(Commit Status API) 토큰 권한 및 이벤트 루프 충돌 문제 해결',
      '멀티 거시 데이터 파이프라인: OECD SDMX, Yahoo Finance, Frankfurter 환율 API를 일 단위로 자동 수집·정제·적재',
    ],
    architecturePoints: [
      {
        title: '실질임금 디플레이터 엔진',
        desc: '명목 임금 시계열에 통계청 및 OECD 실시간 소비자물가지수(CPI) 가중치를 반영하여 연도별 실질 구매력 잔존율 계산',
      },
      {
        title: '자동화된 ETL 파이프라인',
        desc: 'Cron 기반 GitHub Actions 워크플로가 일간 매크로 데이터를 추출하여 스키마 유효성 검사 후 CDN 캐시 갱신',
      },
    ],
  },
];

export const EDUCATION_LIST: EducationData[] = [
  {
    institution: '서울대학교 경영대학원 (SNU Business School)',
    degree: '경영학 석사 (재무금융 전공)',
    major: '재무금융 (Corporate Finance & Quantitative Asset Pricing)',
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
    major: '금융 AI · 금융 데이터 사이언스 · 블록체인 핀테크',
    period: '서울대학교 금융경제연구원 주관',
    status: '수료 완료',
    details: [
      '머신러닝 기반 금융 시계열 예측, 대체데이터 분석, 분산원장 및 스마트계약 아키텍처 실무',
      '우수 프로젝트 선정: 지역사랑상품권 예금토큰 설계 및 연봉닥터 실질임금 진단기 개발',
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
      '계량경제학, 화폐금융론, 재무관리, 투자론, 파생금융상품론 전 과목 A+ 이수',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages & Core Stack',
    description: '통계 컴퓨팅, 계량 분석, 스마트계약 및 웹 엔지니어링',
    skills: [
      { name: 'Python', level: 'Expert', note: 'pandas, NumPy, statsmodels, SciPy, linearmodels' },
      { name: 'R', level: 'Advanced', note: 'plm, matchit, ggplot2, fixest' },
      { name: 'SQL', level: 'Advanced', note: 'PostgreSQL, MySQL, Window Functions, Complex Joins' },
      { name: 'Solidity', level: 'Advanced', note: 'v0.8.26, OpenZeppelin, Hardhat, Foundry EVM testing' },
      { name: 'JavaScript / TypeScript', level: 'Advanced', note: 'Node.js, React, jsdom, Vite, Jest' },
    ],
  },
  {
    category: 'Finance & Econometrics',
    description: '자산가격결정, 기업재무 및 미세구조 실증 계량 모형',
    skills: [
      { name: 'Empirical Asset Pricing', level: 'Expert', note: 'Fama-French 3/5-Factor, Carhart 4-Factor, Factor Spreads' },
      { name: 'Panel Econometrics', level: 'Expert', note: '2-way Clustered SE (Petersen 2009), Firm & Year FE' },
      { name: 'Causal Inference & Matching', level: 'Expert', note: 'Mahalanobis Covariate Matching, Exact Industry Matching' },
      { name: 'Robustness & Placebo', level: 'Expert', note: 'Donut Placebo Cutoffs, Sub-sample Splits, OLS vs WLS' },
      { name: 'Corporate Finance & Valuation', level: 'Advanced', note: 'Dividend Signaling, Payout Policy, Earnings Quality, ROA Forecast' },
    ],
  },
  {
    category: 'Data & Financial APIs',
    description: '대용량 정형 패널 데이터 수집, ETL 및 금융 공시 인터페이스',
    skills: [
      { name: 'KIS-Value', level: 'Expert', note: '한국 상장사 재무제표 시계열, 일별 주가·수익률 패널' },
      { name: 'DART Open API', level: 'Expert', note: '전자공시 배당결의·사업보고서 정형/비정형 파싱' },
      { name: 'OECD SDMX API', level: 'Advanced', note: '글로벌 거시경제 지표, CPI, 기준금리 정량화' },
      { name: 'KCGS ESG & 지분율', level: 'Advanced', note: '한국ESG기준원 등급 및 외국인/기관 지분율 연계' },
      { name: 'Git LFS & Data Storage', level: 'Advanced', note: '대용량 패널 데이터셋 버전 관리 및 무결성 보존' },
    ],
  },
  {
    category: 'Engineering & CI/CD',
    description: '재현 가능한 과학적 분석 파이프라인 및 무결성 검증',
    skills: [
      { name: 'GitHub Actions CI', level: 'Advanced', note: '데이터 파이프라인 스케줄링, PR 상태 API 연동' },
      { name: 'Data Integrity Automation', level: 'Expert', note: 'AST 기반 Mock 난수 차단, Null/NaN 누락 탐지 룰' },
      { name: 'Reproducible Pipeline', level: 'Expert', note: '16개 Python 모듈화 스크립트, One-click 재현 환경' },
      { name: 'Smart Contract Testing', level: 'Advanced', note: '29 EVM Revert 시나리오 + 25 UI 연동 통합 테스트' },
    ],
  },
  {
    category: 'AI Workflow Engineering',
    description: 'LLM 기반 연구/엔지니어링 가속화 및 구조화 메모리 시스템',
    skills: [
      { name: 'Claude Code Workflow', level: 'Expert', note: 'CLAUDE.md 규칙 정의, 연구 파이프라인 자동화' },
      { name: 'Structured Memory Architecture', level: 'Advanced', note: '40여 개 구조화 컨텍스트 메모리 설계 및 관리' },
      { name: 'Prompt/Spec Rigor', level: 'Expert', note: '계량 분석 제약조건 및 수식 정합성 강제 프롬프팅' },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: '금융투자분석사 (Certified Financial Analyst)',
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
    name: '빅데이터분석기사 (Engineer Big Data Analytics)',
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
    name: 'TEPS (Test of English Proficiency: SNU)',
    issuer: '서울대학교 언어교육원',
    category: 'Language',
    status: '보유',
  },
];
