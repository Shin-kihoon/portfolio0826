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
  affiliation: '서울대학교 경영대학원 재무금융 석사',
  /** 두 문장. 무엇을 다뤘고 무엇을 할 수 있는지. */
  bio: '금융 데이터를 직접 모으고 정제해 가설을 검정하는 일을 해왔습니다. 상장기업 19,519개 기업-연도 패널, 대출 110만 건처럼 큰 원자료를 다루면서 전처리부터 모형 추정, 결과 검증까지 Python으로 처리합니다.',
};

/** 프로젝트는 "왜 했는지"를 먼저 말한다. 방법과 스택은 그 뒤에 짧게. */
export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'dividend-precision',
    kind: 'thesis',
    title: '배당금 끝자리로 기업의 미래 수익성 예측',
    subtitle: '석사학위논문',
    period: '2024.09 ~ 2026.08',
    role: '단독 연구',
    question:
      '경영진이 배당을 대충 정하는지 아닌지를 밖에서 알아볼 방법이 있을까? 배당금을 어림수로 맞추는 게 그 신호라면, 같은 무관심이 실적에도 나타나야 한다고 봤습니다.',
    summary:
      '배당금을 500원·1,000원처럼 둥글게 맞추는 기업과 끝자리까지 조정하는 기업을 나눠 비교했습니다. 후자의 주가수익률과 이후 수익성이 실제로 더 높았고, 매칭 표본과 위약 검정으로 결과가 유지되는지 확인했습니다.',
    stack: ['Python', 'pandas', 'statsmodels', 'KIS-Value'],
    metrics: [
      { label: '분석 표본', value: '19,519', note: '기업-연도, 직접 구축' },
      { label: '초과수익 (FF5 알파)', value: '+9.98bp/월', note: 't = 3.38', highlight: true },
      { label: '매칭 표본 재검증', value: '615쌍', note: '+10.88bp/월 (t = 2.61)' },
      { label: '차기 ROA 예측', value: 't = 2.62', note: '기업·연도 고정효과' },
    ],
    keyPoints: [
      {
        icon: 'search',
        title: '계수 부호가 뒤집힌 원인을 찾은 것',
        desc: '통제변수를 넣자 계수가 양에서 음으로 반전됐습니다. 변수를 하나씩 넣어보며 원인이 **배당금 크기 `ln(DPS)`** 임을 특정하고 모형을 고쳤습니다.',
      },
      {
        icon: 'check',
        title: '우연이 아님을 확인한 방법',
        desc: '산업·규모를 맞춘 **615쌍 매칭 표본**에서도 결과가 유지됐고, 가짜 기준으로 나눈 대조군에서는 전부 비유의했습니다.',
      },
    ],
    links: [],
  },
  {
    id: 'bank-ppp-matching',
    kind: 'analysis',
    title: '규칙으로 안 되던 은행 매칭을 분류 모델로 해결',
    subtitle: '미국 중소기업 대출 자료의 대출기관을 감독기관 식별번호에 연결',
    period: '2025',
    role: '연구 보조 (RA)',
    question:
      '정부의 중소기업 대출 자료에 나오는 대출기관을 감독기관이 부여한 고유 식별번호에 연결해야 했습니다. 그런데 같은 은행이 자료마다 다른 이름과 번호로 적혀 있었고, 합병하거나 이름이 바뀌면 번호 자체가 달라져 한 은행이 둘로 쪼개지거나 다른 은행이 하나로 묶였습니다.',
    summary:
      '이름을 비교하는 규칙으로 시작했지만 합병·개명 앞에서 계속 어긋났고, 규칙을 다듬어도 예외가 남았습니다. 애매한 건은 은행 이력을 직접 찾아 확인했고, 그렇게 검증한 사례를 정답으로 삼아 두 기록이 같은 은행인지 판단하는 분류 모델을 학습시켜 다시 풀었습니다. 규칙만으로는 놓치던 잘못된 연결을 추가로 바로잡을 수 있었습니다.',
    stack: ['Python', 'pandas', 'rapidfuzz', 'FDIC BankFind API'],
    metrics: [
      { label: '대출기관 명단', value: '5,625', note: '2020년 PPP 고유 취급기관' },
      { label: '연결 대상 은행', value: '605', note: 'CRA 보고 은행 · 식별번호 보유' },
      { label: '해결 방식', value: '규칙 → 분류 모델', note: '수작업 검증 사례를 학습 데이터로', highlight: true },
    ],
    keyPoints: [
      {
        icon: 'search',
        title: '규칙이 계속 어긋난 이유',
        desc: '표기 차이는 이름 정규화로 잡히지만, **합병·개명은 식별번호 자체를 바꿉니다**. 문자열이 아무리 비슷해도 다른 은행이고, 전혀 달라 보여도 같은 은행인 경우가 남았습니다.',
      },
      {
        icon: 'check',
        title: '손으로 확인한 것을 학습 데이터로',
        desc: '유사도로 후보를 좁히고 감독기관 조회 API로 이력을 대조한 뒤, 경계 사례를 하나씩 판정했습니다. 그 판정을 **정답 라벨로 삼아 모델을 학습**시키니 규칙이 놓친 오연결이 잡혔습니다.',
      },
    ],
    links: [],
  },
  {
    id: 'lendingclub',
    kind: 'analysis',
    title: 'P2P 대출 심사 모형으로 부도율 24% → 3.4%',
    subtitle: 'LendingClub 대출 111만 건 신용위험 분석',
    period: '2026.07',
    role: '데이터 정제 · 모형 학습 · 성과 평가',
    question:
      'P2P 대출에 전부 투자하면 넷 중 하나가 부도납니다. 대출 신청 시점에 알 수 있는 정보만으로 떼일 대출을 미리 걸러낼 수 있는지 확인하고 싶었습니다.',
    summary:
      '상환이 끝난 대출 111만 건으로 부도 예측 모형을 만들고, 점수 상위 3%만 골라 투자했을 때 성과를 확인했습니다. 전체 투자 시 24.0%였던 부도율이 선별 후 3.4%로 떨어졌습니다.',
    stack: ['Python', 'scikit-learn', 'pandas', 'FRED API'],
    metrics: [
      { label: '분석 표본', value: '1,117,839', note: '상환 확정 대출' },
      { label: '부도율', value: '24.0% → 3.4%', note: '상위 3% 선별 시', highlight: true },
      { label: 'Test AUC', value: '0.707', note: '2018년 표본' },
      { label: '비교 모형', value: '5종', note: '로지스틱 · 트리 · 배깅 · RF · 부스팅' },
    ],
    keyPoints: [
      {
        icon: 'search',
        title: '이자율과 신용등급을 일부러 뺐습니다',
        desc: 'LendingClub이 이미 위험을 반영해 매긴 값이라, 넣으면 성능은 오르지만 **모형이 답을 베끼는 셈**입니다. 신청 시점에 확인 가능한 정보만 남겼습니다.',
      },
      {
        icon: 'check',
        title: '미래 정보가 새지 않게 시점으로 분할',
        desc: '학습 2016년 이전 · 검증 2017년 · 평가 2018년으로 나누고, 결측 대체와 표준화도 **학습 표본 안에서만** 학습시켰습니다.',
      },
    ],
    links: [],
  },
  {
    id: 'salary-doctor',
    kind: 'service',
    title: '연봉닥터 — 내 연봉 인상률은 물가를 이기고 있나',
    subtitle: '개인별 체감물가 계산 웹서비스 (팀 프로젝트)',
    period: '2026.08',
    role: '진단 로직 · 데이터 파이프라인 (커밋 56)',
    question:
      '뉴스의 물가상승률이 내 체감과 다른 건 사람마다 돈 쓰는 데가 다르기 때문입니다. 그렇다면 개인별로 다시 계산해서 보여줄 수 있지 않을까 해서 만들었습니다.',
    summary:
      '품목별 물가를 본인 지출 비중으로 다시 가중해 개인 물가를 구하고, 연봉 인상률과 비교해 보여주는 서비스입니다. 팀 프로젝트에서 진단 로직과 데이터 수집 파이프라인을 맡았습니다.',
    stack: ['Python', 'JavaScript', 'GitHub Actions', 'OECD SDMX API'],
    metrics: [
      { label: '물가 분류', value: 'COICOP 12', note: '품목별 지출 비중 가중' },
      { label: '데이터 출처', value: '3곳', note: 'OECD · Yahoo Finance · Frankfurter' },
      { label: '기여 커밋', value: '56', note: '진단 로직 · 파이프라인' },
    ],
    keyPoints: [
      {
        icon: 'check',
        title: '적자인데 "양호"로 나오던 판정',
        desc: '연봉 3,600만원에 생활비 6,000만원을 넣어도 괜찮다고 나왔습니다. **물가만 보고 수지를 묻지 않은 것**이 원인이라 판정 축을 둘로 나눴습니다.',
      },
      {
        icon: 'git',
        title: '자동 갱신이 3일 멈춘 원인',
        desc: 'GitHub이 봇 PR에는 워크플로를 돌리지 않아 필수 검사가 통과되지 않았습니다. 검사를 직접 돌린 뒤 커밋 상태 API로 기록하도록 바꿔 해결했습니다.',
      },
    ],
    links: [{ label: '서비스 열기', url: 'https://fintech-team-final.vercel.app/', kind: 'demo' }],
  },
];

export const EDUCATION_LIST: EducationData[] = [
  {
    institution: '서울대학교 경영대학원',
    degree: '경영학 석사',
    major: '재무금융 전공',
    period: '2024.09 ~ 2026.08',
    gpa: '3.92 / 4.3',
    status: '졸업예정',
    details: [
      '석사학위논문: 한국 상장기업의 배당 정밀도와 주식수익률',
      '이수: 고급실증재무론, 자산가격결정론, 금융계량경제학, 빅데이터재무분석',
    ],
  },
  {
    institution: '건국대학교',
    degree: '경제학사 · 경영학사 (복수전공)',
    major: '경제학 / 경영학',
    period: '2018.03 ~ 2024.02',
    gpa: '4.18 / 4.5',
    gpaNote: '경제 전공 4.25 · 경영 전공 4.46',
  },
  {
    institution: '서울대학교 빅데이터 핀테크 전문가과정 (13기)',
    degree: '수료',
    major: '금융 데이터 분석 · 머신러닝',
    period: '2026',
    status: '수료',
    details: [
      '머신러닝·딥러닝, 자연어처리, 데이터베이스 등 실습 과정 이수',
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
