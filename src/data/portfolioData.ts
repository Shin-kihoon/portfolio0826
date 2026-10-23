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
/**
 * 카드는 세 가지를 말한다 — 왜 했나 / 무엇이 달라졌나 / 무엇을 배웠나.
 * 어떻게 만들었는지는 저장소에 있다. 여기서 반복하지 않는다.
 */
export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'dividend-precision',
    kind: 'thesis',
    title: '배당금을 둥글게 끊지 않는 기업이 더 잘한다',
    subtitle: '석사학위논문 「배당금 금액 집중현상과 기업성과」 · 19,271 기업-연도',
    period: '2024.09 ~ 2026.08',
    role: '단독 연구',
    question:
      '경영진이 의사결정에 얼마나 공을 들이는지는 밖에서 볼 수 없다. 그런데 국내 배당금은 **끝자리 0·5에 98.1%가 몰려 있다.** 둥근 숫자에 기대는 건 편한 선택이고, 그 편의가 배당에서만 멈출 이유도 없다. 그렇다면 **이 관성을 따르지 않는 기업은 다른 결정에서도 다를 것인가**를 확인하고 싶었다.',
    impact:
      '누구나 공시에서 볼 수 있는 **끝자리 한 자리**만으로 이후 주가 성과와 이듬해 수익성의 차이를 설명했다. 둥글게 끊지 않는 기업이 위험조정 수익률 **월 +9.65bp**, 다음 해 산업조정 ROA **+0.68%p** 높았다.',
    learnings: [
      '**결론을 지키는 설계보다 무너뜨리는 설계가 강하다.** 경영진이 정하지 않는 EPS 끝자리를 위약 처치군으로 두고, 거기서 효과가 사라지는 것을 확인하고 나서야 결과를 믿을 수 있었다.',
      '**표본을 깎으면 검정력을 잃는다.** 매칭으로 583쌍까지 줄여 재검증했지만 그만큼 불확실해졌다. 그래서 전체 표본 회귀와 매칭 결과를 함께 제시해, 결론이 한 설계에만 기대지 않음을 보였다.',
    ],
    stack: ['Python', 'pandas', 'statsmodels', 'KIS-Value'],
    metrics: [
      { label: '분석 표본', value: '19,271', note: '기업-연도 · 2000~2025' },
      { label: '월간 초과수익', value: '+9.65bp', note: 'FF5 알파 (t = 3.22)', highlight: true },
      { label: '매칭 재검증', value: '583쌍', note: '+11.26bp/월 (t = 2.80)' },
      { label: '다음 해 수익성', value: '+0.68%p', note: '산업조정 ROA (t = 4.19)' },
    ],
    shots: [
      {
        src: 'shot-dps-mod10.png',
        caption:
          '배당금 끝자리 분포. 0이 89.6%, 5가 8.5%로 두 값에 98.1%가 몰려 있다. 이 관성을 따르지 않는 기업을 골라내 이후 성과를 추적했다.',
      },
      {
        src: 'shot-dps-mod100.png',
        caption:
          '끝 두 자리로 좁혀 본 분포. 00과 50에 68.9%가 몰려, 50원 단위 배당을 \'두드러진 금액\'으로 정의한 근거가 된다.',
      },
    ],
    limitation:
      '관측 데이터라 무작위 배정이 불가능하다. 매칭과 위약검정으로 좁혔지만 인과라고 단정하지는 않았고, 논문에서도 그렇게 적었다.',
    links: [],
  },
  {
    id: 'salary-doctor',
    kind: 'service',
    title: '연봉닥터 — 믿을 수 있는 숫자부터 만들기',
    subtitle: '개인 지출 구조 기준 물가로 실질 연봉 진단 · 팀 6인',
    period: '2026.08',
    role: '진단 로직 · 데이터 파이프라인 · 품질 검증',
    question:
      '전국 평균 물가로는 **개인이 체감하는 실질 연봉 변화**가 설명되지 않는다. 개인의 지출 구성으로 물가를 다시 계산하면 체감에 가까워질 것이라 봤다. 그런데 합류했을 때 팀 프로토타입에는 **난수와 사인파로 만든 가짜 값 3건**이 섞여 있었다. 숫자를 믿을 수 없는 서비스로는 어떤 진단도 할 수 없다고 생각했다.',
    impact:
      '**적자 상태인데 \'양호\' 판정이 나오는 지표 결함**을 찾아 지표 체계를 다시 설계했고, 데이터가 틀리면 배포가 멈추도록 검증을 자동화했다. 주 1회 갱신이 **20회 연속 정상 통과** 중이다.',
    learnings: [
      '**검증을 사람이 맡는 한 언젠가 빠뜨린다.** 검사를 배포 경로 안에 넣어야 실제로 지켜진다는 것을, 자동 갱신이 3일간 멈춘 뒤 원인을 추적하면서 알았다.',
      '**지표 하나가 두 가지를 재면 한쪽이 다른 쪽을 가린다.** 물가를 따라잡았는지와 수입이 지출을 넘는지를 한 숫자로 재고 있었던 게 오판의 원인이었다.',
    ],
    stack: ['Python', 'JavaScript', 'GitHub Actions', 'OECD SDMX API'],
    metrics: [
      { label: '자동 품질 검사', value: '4종', note: '관측치 · 연속성 · 이상치 · 수신', highlight: true },
      { label: '자동 갱신', value: '20회 연속', note: '주 1회 · 전부 통과' },
      { label: '가짜 데이터 제거', value: '3건', note: '난수 · 사인파 생성 코드' },
      { label: '기여 커밋', value: '56', note: '팀 6인 중' },
    ],
    shots: [
      {
        src: 'shot-yeonbong.png',
        caption:
          '진단 결과 화면. 내년 예상 연봉과 개인 지출 비중으로 다시 계산한 물가 유지선을 나란히 두고, 아래에 공식 물가 시계열을 함께 보여준다.',
      },
      {
        src: 'shot-ci.png',
        caption:
          '주 1회 자동 갱신 실행 기록. 수집·정제·검증을 거쳐 통과한 경우에만 데이터 갱신 PR이 열린다.',
      },
    ],
    contribution:
      '진단 로직과 데이터 파이프라인, 품질 검증을 맡았다. 팀 6인 중 **기여 커밋 56**. 지표 체계 재설계와 CI 검증 구성은 직접 수행했다.',
    limitation:
      'Tableau·Looker 같은 BI 도구 대신 차트를 직접 구현했다. 검증 대상도 외부 수집 데이터였고, 사용자 행동 로그를 기획 단계부터 정의해 보지는 못했다.',
    links: [
      { label: '서비스 열기', url: 'https://fintech-team-final.vercel.app/', kind: 'demo' },
      { label: '팀 저장소', url: 'https://github.com/SNU-Project/fintech-team-final', kind: 'repo' },
      { label: '코드 · 워크플로', url: 'https://github.com/Shin-kihoon/yeonbong-doctor', kind: 'repo' },
    ],
  },
  {
    id: 'lendingclub',
    kind: 'analysis',
    title: 'P2P 대출 — 많이 맞히는 모형과 돈이 되는 모형은 다르다',
    subtitle: 'LendingClub 위험조정 신용평가·대출선택 모형 · 팀 프로젝트 최종보고서',
    period: '2026.07',
    role: '분석 설계 · 모형 · 검증 · 보고서',
    question:
      '심사 모형은 보통 **부도를 얼마나 잘 맞히는지**로 평가한다. 그런데 투자자 입장에서 중요한 건 맞힌 횟수가 아니라, 그렇게 고른 대출 묶음이 **위험 대비 얼마를 벌어 주는가**다. 정확도가 높은 모형이 실제로 더 나은 포트폴리오를 만드는지 확인하고 싶었다.',
    impact:
      '부도확률만 보던 기준을 **국채 대비 초과수익 ÷ 수익 불확실성**으로 바꾸고, 여섯 모형을 같은 조건에서 비교했다. 검증 22,324건에서 기준선 τ를 먼저 고정한 뒤 테스트 **744,608건**에 그대로 적용해, 기존 10분위 기준 대비 Sharpe **0.1034 → 0.1249**로 개선했다.',
    learnings: [
      '**정확도 1등이 성과 1등이라는 보장은 없다.** XGBoost가 AUC와 위험조정 성과 모두 1위였지만, 그건 둘을 따로 계산해 확인한 결과이지 AUC만 보고 단정할 수 있는 것이 아니었다.',
      '**내 방법이 이겼다고 쓰지 않는 것도 결론이다.** 개별분산 정책의 Sharpe 이득은 +0.0003으로 95% 구간에 0이 포함됐고, 미래 구간에서는 기준정책을 확실히 이기지 못했다. 그래서 기존 기준을 운영안으로, 제안 정책을 검증 후보로 적었다.',
    ],
    stack: ['Python', 'scikit-learn', 'XGBoost', 'pandas'],
    metrics: [
      { label: '테스트 표본', value: '744,608', note: '확정 대출 · 혼합시점' },
      { label: 'Sharpe', value: '0.1034 → 0.1249', note: '10분위 기준 → 제안 정책', highlight: true },
      { label: 'ROC-AUC', value: '0.7253', note: 'XGBoost · 6개 모형 중 1위' },
      { label: '선택 기준 τ', value: '검증에서 고정', note: '테스트에 그대로 적용' },
    ],
    shots: [
      {
        src: 'shot-p2p-tau.png',
        caption:
          '선택 기준선 τ를 움직이며 본 위험조정 성과. 많이 고를수록 좋아지지도, 적게 고를수록 좋아지지도 않는 역U자다. 최대점을 검증자료에서 먼저 정하고 테스트에는 바꾸지 않고 적용했다.',
      },
      {
        src: 'shot-p2p-policy.png',
        caption: '테스트 표본에서 기존 10분위 기준과 제안 정책의 실현 Sharpe·Sortino 비교.',
      },
    ],
    contribution:
      '팀 6인 중 **분석 설계·모형 구현·검증·보고서 작성**을 맡았다. 팀원이 코드를 직접 읽고 발표할 수 있도록 방법 설명과 말할 때의 주의점을 함께 정리했다.',
    limitation:
      '월별 현금흐름이 없어 정확한 XIRR이 아니고, 거절 신청자와 비용 자료가 없어 실제 승인율·순이익은 추정하지 못했다. 관측기간 근사 수익률로 보면 기존 기준이 근소하게 앞선다.',
    links: [],
  },
  {
    id: 'bank-ppp-matching',
    kind: 'analysis',
    title: '규칙으로 안 되던 은행 매칭을 분류 문제로 바꾸기',
    subtitle: '미국 PPP 대출기관을 감독기관 식별번호(RSSD ID)에 연결',
    period: '2025',
    role: '연구 보조 (RA)',
    question:
      '자료마다 다르게 적힌 은행 이름을 같은 실체로 묶어야 했다. 이름 유사도 규칙을 썼지만 합병·개명에서 틀렸다. `Umpqua Bank`의 정답은 이름이 바뀐 `Columbia Bank`였고, 반대로 **이름이 완전히 일치하는 후보가 오답**인 경우도 있었다. 틀린 건 손으로 고치면 끝이지만, **왜 틀리는지**를 알고 싶었다.',
    impact:
      '오답을 하나씩 추적해 보니 **"비슷할수록 정답"이라는 전제 자체가 깨지는 구간**이 문제였다. 후보 집합의 맥락을 특징으로 넣어 매칭 정확도를 **98.3%에서 99.3%로** 올리고, 규칙이 틀렸던 7건 중 5건을 교정했다.',
    learnings: [
      '**틀린 사례를 세어 보는 것만으로 다음 설계가 정해졌다.** 모델을 먼저 고를 필요가 없었다.',
      '후보를 하나씩 따로 채점하면 **후보들 사이의 관계**를 표현할 수 없다. 1등과 2등의 격차처럼 집합을 봐야 보이는 정보가 있다.',
    ],
    stack: ['Python', 'scikit-learn', 'rapidfuzz', 'pandas', 'FDIC BankFind API'],
    metrics: [
      { label: '대출기관 명단', value: '5,625', note: '2020년 PPP 취급기관' },
      { label: '식별번호 연결', value: '461 / 605', note: 'CRA 보고 은행 기준' },
      { label: '매칭 정확도', value: '98.3% → 99.3%', note: '규칙 → 분류 모델', highlight: true },
      { label: '규칙 오답 교정', value: '7건 중 5건', note: '합병·개명 사례' },
    ],
    shots: [
      {
        src: 'shot-ppp-accuracy.png',
        caption:
          '후보 집합의 맥락을 특징으로 넣은 뒤의 top-1 정확도. 규칙 98.29% → GBDT 99.27%. 규칙이 틀린 7건 중 5건을 고치고 1건을 악화시켜 순증 4건이다.',
      },
    ],
    limitation:
      '정답 집합이 CRA 보고 은행 605곳으로 한정돼 있어, 보고 의무가 없는 소형 기관까지 같은 정확도가 나올지는 확인하지 못했다. 남은 2건은 이름·도시가 완전히 같은 동명 기관이라 모델도 고치지 못했다.',
    links: [
      { label: '코드 · 결과', url: 'https://github.com/Shin-kihoon/ppp-bank-matching', kind: 'repo' },
    ],
  },
  {
    id: 'moki-kiosk',
    kind: 'service',
    title: '모키 키오스크 — 바뀔 때마다 품질을 다시 재는 장치',
    subtitle: 'RAG 주문 키오스크 · 서울대 KDT 핀테크 AI 13기 4조',
    period: '2026.10',
    role: '개발 담당 · 검증 체계',
    question:
      '데이터·프롬프트·개발 세 파트가 각자 고치는 구조였다. 그런데 **무엇을 고치면 답변이 어떻게 변하는지** 아무도 추적하지 못했다. 좋아졌는지 나빠졌는지를 각자의 인상으로 말하고 있었다.',
    impact:
      '데이터팀이 써 둔 **검증 질문 47개**를 한 번에 돌려 기대와 실제를 한 표로 남기게 했다. 실패 사례가 기록으로 남아 프롬프트 수정의 근거가 됐고, 발표에서 약점을 추측이 아니라 자료로 제시할 수 있었다.',
    learnings: [
      '**기준선을 먼저 만들면 논쟁이 취향 싸움에서 비교로 바뀐다.** 품질 개선보다 품질 측정이 앞선다.',
      '비용이 드는 검증은 **전량과 표본을 나눠야** 실제로 돌아간다. 매번 47개를 다 돌리게 했다면 아무도 쓰지 않았을 것이다.',
    ],
    stack: ['Python', 'Streamlit', 'FAISS', 'OpenAI API'],
    metrics: [
      { label: '검증 질문', value: '47개', note: '데이터팀 작성 · 일괄 실행', highlight: true },
      { label: '기록 항목', value: '5종', note: '질문 · 기대 · 검색 · 답변 · 장바구니' },
      { label: '팀 구성', value: '6인 3파트', note: '데이터 · 프롬프트 · 개발' },
    ],
    contribution:
      '팀 6인 중 **개발 담당 2인 중 1인**. 검색·장바구니·주문 처리와 검증 러너를 맡았다.',
    limitation: '판정은 사람이 직접 적는 방식이라 자동 채점까지는 가지 못했다. 수업 과제 규모의 프로젝트다.',
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
