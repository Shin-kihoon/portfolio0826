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
 * 카드는 왜 했고, 무엇이 달라졌고, 무엇을 배웠는지를 말한다.
 * 어떻게 만들었는지는 저장소에 있으니 여기서 반복하지 않는다.
 * 배운 점은 겪은 순서대로 적는다. 교훈처럼 다듬으면 겪은 일이 사라진다.
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
      '사람이 결정을 어떻게 내리는지가 숫자에 남는지 보고 싶었다. 국내 배당금은 **끝자리 0과 5에 98.1%가 몰려 있다.** 둥근 숫자로 끊는 건 편한 선택이고, 그 편의가 배당에서만 멈출 이유는 없다. 그렇다면 이 관성을 따르지 않는 기업은 다른 결정에서도 다르지 않을까 하는 생각에서 시작했다.',
    impact:
      '공시에서 누구나 볼 수 있는 끝자리 한 자리만으로 이후 성과 차이를 설명했다. 둥글게 끊지 않는 기업이 위험조정 수익률 **월 +9.65bp**(t = 3.22), 다음 해 산업조정 ROA **+0.68%p**(t = 4.19) 높았다.',
    learnings: [
      '처음 결과를 들고 갔을 때 교수님들은 잘 믿지 않으셨다. 우연 아니냐, 원래 잘하는 기업이 배당도 정밀하게 끊는 것 아니냐는 지적이 나왔다. 그래서 통제변수를 넣은 회귀, 성향점수·마할라노비스 매칭, 위약검정을 하나씩 붙였다. **설득은 말로 하는 게 아니라 반박을 하나씩 막는 일**이었다.',
      '지금 다시 한다면 매칭 기준을 여러 개로 바꿔 가며 돌려 보고 싶다. 583쌍 한 번으로는 표본이 달라져도 결과가 유지되는지를 보여주지 못했다.',
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
          "끝 두 자리로 좁혀 본 분포. 00과 50에 68.9%가 몰려, 50원 단위 배당을 '두드러진 금액'으로 정의한 근거가 된다.",
      },
    ],
    limitation:
      '관측 데이터라 무작위 배정이 불가능하다. 매칭과 위약검정으로 좁혔지만 인과라고 단정하지는 않았고, 논문에도 그렇게 적었다.',
    links: [],
  },
  {
    id: 'salary-doctor',
    kind: 'service',
    title: '연봉닥터 — 아무도 손대지 않아도 최신 숫자가 보이게',
    subtitle: '개인 지출 구조 기준 물가로 실질 연봉 진단 · 팀 6인',
    period: '2026.08',
    role: '금융 데이터 파이프라인',
    question:
      '팀에서 내가 맡은 건 금융 데이터 파이프라인이었다. 큰 DB를 붙이는 쪽이 아니라, **서버가 금융 API를 직접 불러서 사용자가 지금 값을 보게** 하는 쪽. 발표가 끝난 뒤에도 아무도 손대지 않고 계속 최신 상태로 굴러가는 앱을 만들고 싶었다.',
    impact:
      '출처를 성격에 따라 나눴다. 브라우저에서 직접 부를 수 있는 물가·환율·비트코인은 **접속할 때 바로 조회**하고, 그렇지 못한 시세와 품목별 물가는 **주 1회 모아 스냅샷으로 커밋**한다. 사람 손 없이 **20회 연속** 갱신됐다.',
    learnings: [
      'EDA를 하다 숫자가 이상해서 코드를 열어 봤더니 **난수와 사인파로 만든 값이 3건** 있었다. 화면은 멀쩡해 보였다. 그래서 수집에 실패하면 값을 만들지 않고 항목을 빼는 것을 원칙으로 두고, 난수를 쓰는 코드가 다시 들어오면 PR에서 걸리게 했다.',
      '자동 갱신이 3일 멈춘 적이 있다. 사람이 눈으로 확인하는 동안에는 멈춘 줄도 몰랐다. 원인은 봇이 만든 PR에 필수 검사가 돌지 않아 병합 조건이 영영 채워지지 않는 것이었다. 고치면서 **검사를 통과하지 못하면 아예 배포가 안 되도록** 순서를 바꿨다.',
    ],
    stack: ['Python', 'JavaScript', 'GitHub Actions', 'OECD SDMX API'],
    metrics: [
      { label: '데이터 출처', value: '5곳', note: '실시간 3 · 주간 스냅샷 2' },
      { label: '자동 갱신', value: '20회 연속', note: '주 1회 · 전부 통과', highlight: true },
      { label: '자동 품질 검사', value: '4종', note: '관측치 · 연속성 · 이상치 · 수신' },
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
      '팀 6인 중 **진단 로직과 데이터 파이프라인, 품질 검증**을 맡았다. 기여 커밋 56. 지표 체계 재설계와 CI 검증 구성은 직접 수행했다.',
    limitation:
      'DB를 구축한 게 아니라 API 호출과 파일 스냅샷으로 해결했다. 데이터가 더 커지면 이 방식으로는 버티지 못한다. 지금 다시 한다면 수집 결과를 테이블에 쌓고 거기서 읽는 구조로 가고 싶다. Tableau 같은 BI 도구 대신 차트도 직접 구현했다.',
    links: [
      { label: '서비스 열기', url: 'https://fintech-team-final.vercel.app/', kind: 'demo' },
      { label: '팀 저장소', url: 'https://github.com/SNU-Project/fintech-team-final', kind: 'repo' },
      { label: '코드 · 워크플로', url: 'https://github.com/Shin-kihoon/yeonbong-doctor', kind: 'repo' },
    ],
  },
  {
    id: 'lendingclub',
    kind: 'analysis',
    title: 'LendingClub — 정확한 모형이 돈이 되는 모형인가',
    subtitle: '위험조정 신용평가·대출선택 모형 · 팀 프로젝트 최종보고서',
    period: '2026.07',
    role: '분석 설계 · 모형 · 검증 · 보고서',
    question:
      'LendingClub 데이터로 부도를 예측하는 과제였다. 공개 데이터라 비슷한 분석이 이미 많다. 그래서 평가하는 눈을 바꿔 봤다. **대출 회사에 필요한 건 예측을 몇 % 맞혔는지가 아니라, 그렇게 고른 대출에 돈을 넣었을 때 위험 대비 얼마를 버는가**다. 정확도가 높은 모형이 실제로 더 나은 포트폴리오를 만드는지 확인하고 싶었다.',
    impact:
      '평가 기준을 국채 대비 초과수익 ÷ 수익 불확실성으로 바꾸고 여섯 모형을 같은 조건에서 비교했다. 검증 22,324건에서 선택 기준선을 먼저 고정한 뒤 테스트 **744,608건**에 바꾸지 않고 적용해, 기존 10분위 기준 대비 Sharpe **0.1034 → 0.1249**로 올렸다.',
    learnings: [
      '제안한 정책이 기존 기준을 확실히 이기지는 못했다. Sharpe 차이가 +0.0003이고 95% 구간에 0이 들어갔으며, 미래 구간에서는 더 흐릿했다. 보고서에는 그대로 적고 **기존 기준을 운영안으로, 제안 정책을 검증 후보로** 제안했다. 이긴 결과를 쓰는 것보다 이렇게 쓰는 쪽이 훨씬 어려웠다.',
    ],
    stack: ['Python', 'scikit-learn', 'XGBoost', 'pandas'],
    metrics: [
      { label: '테스트 표본', value: '744,608', note: '확정 대출 · 혼합시점' },
      { label: 'Sharpe', value: '0.1034 → 0.1249', note: '10분위 기준 → 제안 정책', highlight: true },
      { label: 'ROC-AUC', value: '0.7253', note: 'XGBoost · 6개 모형 중 1위' },
      { label: '선택 기준선', value: '검증에서 고정', note: '테스트에 그대로 적용' },
    ],
    shots: [
      {
        src: 'shot-p2p-tau.png',
        caption:
          '선택 기준선을 움직이며 본 위험조정 성과. 많이 고를수록 좋아지지도, 적게 고를수록 좋아지지도 않는 역U자다. 최대점을 검증자료에서 먼저 정하고 테스트에는 바꾸지 않고 적용했다.',
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
    title: '이름이 다르게 적힌 은행 5,625곳을 같은 실체로 묶기',
    subtitle: '미국 PPP 대출기관을 감독기관 식별번호(RSSD ID)에 연결',
    period: '2025',
    role: '연구 보조 (RA)',
    question:
      '자료마다 다르게 적힌 은행 이름을 같은 기관으로 묶어야 했다. 이름이 비슷한 쪽을 고르는 규칙을 썼는데 합병·개명에서 틀렸다. `Umpqua Bank`의 정답은 이름이 통째로 바뀐 `Columbia Bank`였고, 반대로 **이름이 완전히 일치하는 후보가 오답**인 경우도 있었다.',
    impact:
      '정확도를 올리려고 이것저것 바꿔 보다가, 규칙이 틀린 7건을 하나씩 열어 봤다. 그제서야 **"비슷할수록 정답"이라는 전제가 깨지는 구간**이 보였고, 후보 집합의 맥락을 특징으로 넣어 정확도를 **98.3%에서 99.3%로** 올렸다.',
    learnings: [
      '틀린 사례를 직접 들여다본 게 전부였는데, 그걸 보고 나니 어떤 특징을 넣어야 할지가 정해졌다. 모델을 고르는 건 그다음 일이었다. 지표가 안 오를 때 파라미터부터 만지는 습관이 그때 바뀌었다.',
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
      '정답 집합이 CRA 보고 은행 605곳으로 한정돼 있어, 보고 의무가 없는 소형 기관까지 같은 정확도가 나올지는 확인하지 못했다. 남은 2건은 이름과 도시가 완전히 같은 동명 기관이라 모델도 고치지 못했다.',
    links: [
      { label: '코드 · 결과', url: 'https://github.com/Shin-kihoon/ppp-bank-matching', kind: 'repo' },
    ],
  },
  {
    id: 'moki-kiosk',
    kind: 'service',
    title: '모키 키오스크 — 메뉴에 없는 말을 하지 않게 만들기',
    subtitle: 'RAG 주문 키오스크 · 서울대 KDT 핀테크 AI 13기 4조',
    period: '2026.10',
    role: '개발 · 검색 설계',
    question:
      '카페 메뉴판은 언어모델이 알 리 없는 정보다. 그냥 물으면 아는 척하며 지어낸다. 그래서 **답하기 전에 메뉴·정책 문서를 찾아보고 그 안에서만 말하게** 만들어야 했다. 문제는 찾아오는 쪽이었다.',
    impact:
      '의미로 찾는 벡터 검색만 쓰니 짧은 한국어에서 자주 빗나갔다. **"아아 하나"가 약과로** 검색되는 식이다. 그래서 데이터팀이 적어 둔 별칭으로 먼저 걸러내고(호출 비용 0), 거기서 놓친 것만 벡터로 넘기는 **2단계 검색**으로 바꿨다. 질의 재작성과 의도 분류를 한 번에 합쳐 **턴당 모델 호출도 3회에서 2회로** 줄였다.',
    learnings: [
      '처음에는 프롬프트를 고쳐서 틀린 답을 막으려 했다. 그런데 **가격 계산과 별칭 매칭을 아예 코드로 빼고 나니** 고칠 게 훨씬 줄었다. 모델이 틀리지 않게 만드는 것보다 모델한테 안 맡기는 쪽이 빠를 때가 있었다.',
    ],
    stack: ['Python', 'Streamlit', 'FAISS', 'OpenAI API'],
    metrics: [
      { label: '검색 단계', value: '2단계', note: '별칭 매칭 → 벡터 검색', highlight: true },
      { label: '턴당 모델 호출', value: '3회 → 2회', note: '재작성·분류를 한 번에' },
      { label: '검증 질문', value: '47개', note: '데이터팀 작성 · 일괄 점검' },
    ],
    contribution:
      '팀 6인(데이터·프롬프트·개발 3파트) 중 **개발**. 검색·장바구니·주문 처리와 배포를 맡았다. 메뉴 데이터와 프롬프트 문구는 다른 파트가 작성했다.',
    limitation:
      '수업 과제 규모다. 검증 질문 47개는 데이터팀이 작성한 것이고, 나는 그걸 한 번에 돌려 기록하는 쪽을 만들었다. 판정은 사람이 직접 적어야 해서 자동 채점까지는 가지 못했다.',
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
