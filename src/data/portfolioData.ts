import { Certification, EducationData, ProjectData, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  nameKo: '신기훈',
  nameEn: 'Kihoon Shin',
  title: '데이터 분석가',
  titleEn: 'Data Analyst',
  tagline: 'Python · SQL · 통계 분석 — 금융 데이터',
  email: 'kenny1008@naver.com',
  github: 'https://github.com/Shin-kihoon',
  githubHandle: 'Shin-kihoon',
  affiliation: '서울대학교 대학원 경영학과 재무금융 석사',
  /**
   * 첫 문장으로 무슨 일을 하는 사람인지 말하고, 뒤에서 그 문장을 실제 작업으로 받친다.
   * 스택 나열은 아래 기술 스택 섹션이 하므로 여기서 반복하지 않는다.
   */
  bio: '금융 데이터 분석가. 사람이 남긴 숫자에서 행동을 읽고, 그 숫자를 믿어도 되는지까지 확인합니다.',
};

/** 카드는 짧게. 문제 한 줄 → 숫자 → 막힌 지점 → 도구. 설명하지 않는다. */
export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'dividend-precision',
    kind: 'thesis',
    title: '배당금을 둥글게 끊지 않는 기업이 더 잘한다',
    subtitle: '석사학위논문 「배당금 금액 집중현상과 기업성과」 · 19,271 기업-연도',
    period: '2024.09 ~ 2026.08',
    role: '단독 연구',
    question: '배당금 끝자리로 경영진의 의사결정 태도를 읽을 수 있는가',
    stack: ['Python', 'pandas', 'statsmodels', 'KIS-Value'],
    metrics: [
      { label: '분석 표본', value: '19,271', note: '기업-연도 · 2000~2025' },
      { label: '월간 초과수익', value: '+9.65bp', note: 'FF5 알파 (t = 3.22)', highlight: true },
      { label: '매칭 재검증', value: '583쌍', note: '+11.26bp/월 (t = 2.80)' },
      { label: '다음 해 수익성', value: '+0.68%p', note: '산업조정 ROA (t = 4.19)' },
    ],
    keyPoints: [
      {
        icon: 'search',
        title: '끝자리에 숨은 신호',
        desc: '국내 배당금은 끝자리 0·5에 **98%가 몰려 있다**. 이 관성을 따르지 않는 기업을 골라내 이후 성과를 추적',
      },
      {
        icon: 'check',
        title: '위약검정으로 확인',
        desc: '경영진이 직접 정하지 않는 **EPS 끝자리로 바꾸면 효과가 사라진다** — 배당 결정에 특유한 행동',
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
    stack: ['Python', 'scikit-learn', 'rapidfuzz', 'pandas', 'FDIC BankFind API'],
    metrics: [
      { label: '대출기관 명단', value: '5,625', note: '2020년 PPP 취급기관' },
      { label: '식별번호 연결', value: '461 / 605', note: 'CRA 보고 은행 기준' },
      { label: '매칭 정확도', value: '98.3% → 99.3%', note: '규칙 → 분류 모델', highlight: true },
      { label: '규칙 오답 교정', value: '7건 중 5건', note: '합병·개명 사례' },
    ],
    keyPoints: [
      {
        icon: 'search',
        title: '이름이 비슷할수록 정답이라는 가정이 깨지는 지점',
        desc: '`Umpqua Bank` 의 정답은 합병으로 이름이 바뀐 `Columbia Bank`. 반대로 이름이 **완전일치하는 후보가 오답**인 건도 있었다',
      },
      {
        icon: 'check',
        title: '후보 집합 맥락을 특징으로',
        desc: '후보 수 · 이름점수 순위 · 1등과의 격차를 추가. 후보를 하나씩 독립 채점하는 규칙이 표현하지 못하던 부분',
      },
    ],
    links: [
      { label: '코드 · 결과', url: 'https://github.com/Shin-kihoon/ppp-bank-matching', kind: 'repo' },
    ],
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
    role: '진단 로직 · 데이터 파이프라인 · 품질 검증',
    question: '전국 평균이 아닌 개인 지출 기준 물가 산출',
    stack: ['Python', 'JavaScript', 'GitHub Actions', 'OECD SDMX API'],
    metrics: [
      { label: '물가 분류', value: 'COICOP 12', note: '지출 비중 재가중' },
      { label: '데이터 출처', value: '3곳', note: 'OECD · Yahoo Finance · Frankfurter' },
      { label: '자동 품질 검사', value: '4종', note: '관측치 · 연속성 · 이상치 · 수신', highlight: true },
      { label: '가짜 데이터 제거', value: '3건', note: '난수 · 사인파 생성 코드' },
      { label: '기여 커밋', value: '56', note: '진단 로직 · 파이프라인' },
    ],
    keyPoints: [
      {
        icon: 'check',
        title: '지표 정의 결함을 찾아 축을 나눔',
        desc: '적자 상태에서 "양호" 판정 발생. 원인은 **지표 하나로 물가와 수지를 동시에 재던 구조** → 물가 축과 수지 축 분리',
      },
      {
        icon: 'search',
        title: '검증을 통과해야만 데이터가 배포된다',
        desc: '관측치 24개월 · **월 시계열 연속성** · CAGR/변동성/MDD 이상치 범위 · 물가 12품목 수신을 자동 검사하고, 하나라도 걸리면 갱신을 중단. 원/달러 2017-09 **단일 오류 틱**(전월 대비 0.0001배 후 복귀)을 탐지해 제외하고 사유를 `meta.json`에 기록',
      },
      {
        icon: 'git',
        title: '데이터를 지어내는 코드를 CI에서 차단',
        desc: '팀 프로토타입의 난수·사인파 가짜 데이터 3건을 걷어내고, 재유입을 막는 가드를 PR 검사에 추가. **수집 실패 시 값을 만들지 않고 항목을 제외한 뒤 사유를 남긴다**',
      },
      {
        icon: 'git',
        title: '자동 갱신 3일 중단 — 원인 추적과 복구',
        desc: '보호 브랜치 정책상 봇 PR에는 필수 검사가 실행되지 않아 병합 조건이 영원히 충족되지 않았다. 같은 검사를 갱신 잡에서 수행한 뒤 **커밋 상태 API로 결과를 기록**해 해결',
      },
    ],
    links: [
      { label: '서비스 열기', url: 'https://fintech-team-final.vercel.app/', kind: 'demo' },
      { label: '코드 · 워크플로', url: 'https://github.com/Shin-kihoon/yeonbong-doctor', kind: 'repo' },
    ],
  },
  {
    id: 'moki-kiosk',
    kind: 'service',
    title: '모키 키오스크 — 바뀔 때마다 품질을 다시 재는 장치',
    subtitle: 'RAG 주문 키오스크 · 서울대 KDT 핀테크 AI 13기 4조',
    period: '2026.10',
    role: '개발 담당 · 검증 체계',
    question: '프롬프트·데이터를 고칠 때마다 답변 품질이 어떻게 변하는지 추적',
    stack: ['Python', 'Streamlit', 'FAISS', 'OpenAI API'],
    metrics: [
      { label: '검증 질문', value: '47개', note: '데이터팀 작성 · 일괄 실행', highlight: true },
      { label: '기록 항목', value: '5종', note: '질문 · 기대 · 검색 · 답변 · 장바구니' },
      { label: '팀 구성', value: '6인 3파트', note: '데이터 · 프롬프트 · 개발' },
    ],
    keyPoints: [
      {
        icon: 'check',
        title: '회귀 점검 러너',
        desc: '검증 질문 47개를 앱에 돌려 **기대 처리와 실제 답변을 한 표로** 남긴다. 실패 사례가 기록으로 남아 프롬프트 수정의 근거가 된다',
      },
      {
        icon: 'git',
        title: '비전공 팀원이 파이썬을 안 건드리게',
        desc: '프롬프트를 `prompts/*.md`로 분리하고, 호출 비용을 고려해 **기본은 표본 실행 · 전체 실행은 옵션**으로 나눔',
      },
    ],
    links: [
      { label: '코드 · 검증 러너', url: 'https://github.com/Shin-kihoon/moki-kiosk', kind: 'repo' },
    ],
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
      { name: '패널 데이터 구축', note: '19,271 기업-연도 · 대출 111만 건 규모' },
      { name: '전처리', note: '결측 처리, 윈저라이징, 이상치 점검' },
      { name: '데이터 누출 차단', note: '시점 기준 분할, 학습 표본 내 전처리 학습' },
      { name: 'API 수집', note: 'OECD SDMX, FRED, Yahoo Finance, Frankfurter, FDIC' },
      { name: '정합성 검증 자동화', note: '시계열 연속성·이상치 범위 검사, 실패 시 배포 중단' },
      { name: '파이프라인 운영', note: 'GitHub Actions 주기 갱신, 메타데이터·가정 기록, 장애 복구' },
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
