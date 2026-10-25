import { Certification, EducationData, ProjectData, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  nameKo: '신기훈',
  nameEn: 'Kihoon Shin',
  title: '데이터 분석가',
  titleEn: 'Data Analyst',
  email: 'kenny1008@naver.com',
  github: 'https://github.com/Shin-kihoon',
  githubHandle: 'Shin-kihoon',
  affiliation: '서울대학교 대학원 경영학과 재무금융 석사',
  /**
   * 첫 문장으로 무슨 일을 하는 사람인지 말하고, 뒤에서 그 문장을 실제 작업으로 받친다.
   * 스택 나열은 아래 기술 스택 섹션이 하므로 여기서 반복하지 않는다.
   */
  bio: '재무금융 석사. 금융·공공 데이터를 정제해 분석하고, 같은 결과가 다시 나오는지 확인하는 구조로 만듭니다.',
};

/**
 * 카드는 목적 · 수행 · 결과 · 배운 점 순으로 적는다.
 * 서술을 늘리지 않고 명사형으로 끊는다. 구현 과정은 저장소에 있다.
 */
export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'dividend-precision',
    kind: 'thesis',
    title: '석사학위논문 — 배당금 금액 집중현상과 기업성과',
    subtitle: '한국 상장기업 19,271 기업-연도 패널 · 단독 연구',
    period: '2024.09 – 2026.08',
    role: '단독 연구',
    question:
      '국내 배당금은 끝자리 0과 5에 98.1%가 몰려 있다. 둥근 숫자를 쓰지 않는 기업이 자본배분 전반에서도 다른 성과를 내는지 검증했다.',
    impact:
      '공시에서 관측 가능한 끝자리 한 자리로 이후 성과 차이를 설명. 위험조정 수익률 월 +9.65bp(t = 3.22), 다음 해 산업조정 ROA +0.68%p(t = 4.19).',
    learnings: [
      '결과를 방어하는 분석보다 반증을 시도하는 분석이 심사 의견에 더 효과적이었다. 통제변수 회귀 → 매칭 → 위약검정을 순차 적용해 대응했다.',
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
        caption: 'DPS 끝자리 분포. 0이 89.6%, 5가 8.5%로 두 값에 98.1%가 집중.',
      },
      {
        src: 'shot-dps-mod100.png',
        caption: "끝 두 자리 분포. 00과 50에 68.9%가 집중되어 '두드러진 금액' 정의의 근거가 된다.",
      },
    ],
    contribution: '주제 선정부터 데이터 구축 · 분석 · 집필까지 단독 수행.',
    limitation:
      '관측 데이터이므로 무작위 배정이 불가능하다. 매칭과 위약검정으로 대안 설명을 좁혔으나 인과로 단정하지 않았다.',
    links: [],
  },
  {
    id: 'electricity-data',
    kind: 'research',
    title: '전기요금 국제 비교 자료 정제',
    subtitle: 'OECD/IEA 원자료 정제와 비교 그래프 작성 · 연구조교',
    period: '2026.04',
    role: '연구조교 (RA)',
    question:
      '연구용 전기요금 자료 조달. 원자료는 국가 × 가격항목 × 부문 × 통화기준 × 시점 조합의 long-format 패널이라 구조 파악과 정제가 선행되어야 했다.',
    impact:
      '원본 보존 후 분석용 cleaned master를 분리하고, 구조 점검용 워크북과 비교 그래프를 전달. 7개국 2020 Q1–2025 Q4 기준.',
    learnings: [
      '정제 결과만으로는 재사용이 어렵다. 출처·제외 사유·변수 정의를 함께 문서화해야 받는 쪽이 그대로 쓸 수 있다.',
    ],
    stack: ['Python', 'pandas', 'matplotlib', 'OECD/IEA', 'KOSIS'],
    metrics: [
      { label: '비교 대상', value: '7개국', note: 'KOR · USA · JPN · DEU · FRA · GBR · ITA' },
      { label: '기간', value: '2020 Q1 – 2025 Q4', note: '분기 자료' },
      { label: '전달 그래프', value: '14장', note: '가정용 7 · 산업용 7', highlight: true },
      { label: '점검용 워크북', value: '8개 시트', note: '코드북 · 조합별 관측치 수' },
    ],
    shots: [
      {
        src: 'shot-elec-level.png',
        caption: '주요국 가정용 전기요금 수준 비교(USD/MWh).',
      },
      {
        src: 'shot-elec-index.png',
        caption: '2020 Q1 = 100 지수 기준 한국과 주요국 평균 비교.',
      },
    ],
    contribution: '연구조교로서 자료 조달 · 정제 · 시각화 담당. 연구 주제 설계는 교수 연구실.',
    limitation:
      '월별 자료는 제공 국가가 제한적이고 한국 자료가 불충분해 분기로 통일했다. 보완용 KOSIS 자료는 요금 수준이 아닌 가격지수다.',
    links: [],
  },
  {
    id: 'bank-ppp-matching',
    kind: 'research',
    title: '은행 식별번호 매칭 — 규칙 기반에서 분류 모델로',
    subtitle: '미국 PPP 대출기관을 감독기관 식별번호(RSSD ID)에 연결 · 연구조교',
    period: '2025',
    role: '연구조교 (RA)',
    question:
      'PPP 공개 자료에는 기관명만 있고 식별번호가 없어 재무·감독 자료와 연결되지 않는다. 이름 유사도 규칙은 합병·개명 사례에서 오답을 냈다.',
    impact:
      '규칙 오답 7건을 직접 검토해 후보 집합의 맥락을 특징으로 추가, 매칭 정확도 98.3% → 99.3%.',
    learnings: [
      '오답 사례 직접 검토가 특징 설계의 출발점이었다. 모델 선택은 그 이후 문제였다.',
    ],
    stack: ['Python', 'scikit-learn', 'rapidfuzz', 'pandas', 'FDIC BankFind API'],
    metrics: [
      { label: '대출기관 명단', value: '5,625', note: '2020년 PPP 취급기관' },
      { label: '후보 재현율', value: '97.4%', note: '정답이 후보 안에 있던 비율' },
      { label: '매칭 정확도', value: '98.3% → 99.3%', note: '규칙 → 분류 모델', highlight: true },
      { label: '규칙 오답 교정', value: '7건 중 5건', note: '합병·개명 사례' },
    ],
    shots: [
      {
        src: 'shot-ppp-accuracy.png',
        caption: '질의 단위 top-1 정확도. 규칙 98.29% → GBDT 99.27%. GroupKFold 5분할 기준.',
      },
    ],
    contribution: '연구조교로서 후보 수집 · 특징 설계 · 모델 학습과 평가 담당.',
    limitation:
      '정답 집합이 CRA 보고 은행 605곳으로 한정되어, 보고 의무가 없는 소형 기관에서의 성능은 확인하지 못했다.',
    links: [
      { label: '코드 · 결과', url: 'https://github.com/Shin-kihoon/ppp-bank-matching', kind: 'repo' },
    ],
  },
  {
    id: 'salary-doctor',
    kind: 'service',
    title: '연봉닥터 — 물가를 반영한 실질임금 진단',
    subtitle: '개인 지출 구조 기준 물가로 실질 연봉 진단 · 팀 6인',
    period: '2026.08',
    role: '금융 데이터 파이프라인',
    question:
      '명목 연봉이 올라도 물가가 더 오르면 실질임금은 감소한다. 공식 물가는 전 국민 평균이라 개인 체감과 어긋나므로, 개인의 지출 구성으로 물가를 재계산해 실질 연봉을 진단하는 서비스다.\n\n별도 DB 없이 서버가 금융 API를 직접 호출해 사용자가 최신 값을 보게 하고, 이후 수작업 없이 갱신되는 구조를 목표로 했다.',
    impact:
      '출처를 실시간 조회 3곳과 주간 스냅샷 2곳으로 분리하고, 검증을 통과한 경우에만 데이터가 배포되도록 구성. 주 1회 자동 갱신 20회 연속 통과.',
    learnings: [
      '검증을 수작업으로 두면 누락된다. 검사를 배포 경로에 포함시켜야 실제로 적용된다.',
      '지표 하나가 두 가지를 측정하면 한쪽이 다른 쪽을 가린다. 물가 축과 수지 축을 분리했다.',
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
        caption: '진단 결과 화면. 내년 예상 연봉과 개인 지출 비중 기준 물가 유지선을 비교.',
      },
      {
        src: 'shot-ci.png',
        caption: '주 1회 자동 갱신 실행 기록. 검증 통과 시에만 갱신 PR이 열린다.',
      },
    ],
    contribution:
      '팀 6인 중 진단 로직·데이터 파이프라인·품질 검증 담당. 기여 커밋 56.',
    limitation:
      'DB를 구축하지 않고 API 호출과 파일 스냅샷으로 처리했다. 데이터 규모가 커지면 수집 결과를 테이블에 적재하는 구조가 필요하다. BI 도구 대신 차트를 직접 구현했다.',
    links: [
      { label: '서비스 열기', url: 'https://fintech-team-final.vercel.app/', kind: 'demo' },
      { label: '팀 저장소', url: 'https://github.com/SNU-Project/fintech-team-final', kind: 'repo' },
      { label: '코드 · 워크플로', url: 'https://github.com/Shin-kihoon/yeonbong-doctor', kind: 'repo' },
    ],
  },
  {
    id: 'lendingclub',
    kind: 'analysis',
    title: 'LendingClub — 위험조정 기준 대출선택 모형',
    subtitle: '여섯 모형 비교와 Sharpe·Sortino 기반 선택 정책 · 팀 6인',
    period: '2026.07',
    role: '분석 설계 · 모형 · 검증 · 보고서',
    question:
      'P2P 대출 플랫폼의 신용평가·대출선택 모형 개발 과제. 심사 모형은 통상 부도 예측 정확도로 평가하지만, 투자 관점에서 필요한 값은 선택한 대출 묶음의 위험 대비 수익이다. 평가 기준을 정확도에서 위험조정 성과로 바꿔 비교했다.',
    impact:
      '평가 기준을 국채 대비 초과수익 ÷ 수익 불확실성으로 변경. 검증 22,324건에서 선택 기준선을 고정한 뒤 테스트 744,608건에 적용해 Sharpe 0.1034 → 0.1249.',
    learnings: [
      '제안 정책의 개선폭이 통계적으로 유의하지 않았다. Sharpe 차이 +0.0003, 95% 구간에 0 포함. 기존 기준을 운영안으로, 제안 정책을 검증 후보로 보고했다.',
    ],
    stack: ['Python', 'scikit-learn', 'XGBoost', 'pandas'],
    metrics: [
      { label: '테스트 표본', value: '744,608', note: '확정 대출 · 혼합시점' },
      { label: 'Sharpe', value: '0.1034 → 0.1249', note: '10분위 기준 → 제안 정책', highlight: true },
      { label: 'ROC-AUC', value: '0.7253', note: 'XGBoost · 6개 모형 중 1위' },
      { label: '선택 기준선', value: '검증에서 고정', note: '테스트에 동일 적용' },
    ],
    shots: [
      {
        src: 'shot-p2p-tau.png',
        caption: '선택 기준선별 위험조정 성과. 최대점을 검증자료에서 고정 후 테스트에 동일 적용.',
      },
      {
        src: 'shot-p2p-policy.png',
        caption: '테스트 표본 기준 기존 10분위 정책과 제안 정책의 실현 Sharpe·Sortino.',
      },
    ],
    contribution:
      '팀 6인 중 분석 설계·모형 구현·검증·보고서 작성 담당. 팀원 발표용 방법 설명 자료 별도 작성.',
    limitation:
      '월별 현금흐름이 없어 정확한 XIRR이 아니며, 거절 신청자와 비용 자료가 없어 실제 승인율·순이익은 추정하지 못했다.',
    links: [],
  },
  {
    id: 'fan-passport',
    kind: 'protocol',
    title: '디지털 팬 여권 — 양도 불가능한 참여 기록 기반 티켓 배분',
    subtitle: '티켓 배분 메커니즘 설계와 컨트랙트 구현 · 서울대 KDT 핀테크 AI 13기 · 개인',
    period: '2026.09',
    role: '단독 · 설계 · 컨트랙트 구현',
    question:
      '기획사는 매진 자체가 상품 가치의 일부라 가격을 시장청산 수준까지 올리지 않는다. 정가와 실제 가치의 차이는 구조적으로 남고, 지금은 그 차이를 암표상이 가져간다.\n\n좌석 일부를 **돈으로 살 수 없는 단위**로 배분해 그 귀속을 바꾸는 구조를 설계하고 구현했다.',
    impact:
      '참여 기록을 양도 불가능하게 설계하고 5년 선형 감가를 적용. 좌석을 점수 경매와 추첨 두 갈래로 분리하고, 개인 간 전송을 차단하되 4개 조건을 만족하는 공식 양도 경로만 열었다. 커밋마다 실제 EVM에서 데모 시나리오를 실행하는 CI를 구성했다.',
    learnings: [
      '규칙을 사후 적발이 아니라 거래 시점에 강제하면 통제 가능한 범위가 달라진다. 다만 통제되는 것은 기록되는 결제액뿐이다.',
    ],
    shots: [
      {
        src: 'shot-fanpass.png',
        caption:
          '브라우저에서 돌아가는 시뮬레이터. 암표상이 여권을 팔려는 시도부터 공식 양도까지 단계별로 눌러 확인할 수 있다.',
      },
    ],
    stack: ['Solidity', 'Hardhat', 'GitHub Actions', 'JavaScript'],
    metrics: [
      { label: '컨트랙트', value: '3종', note: '참여 기록 · 티켓 배분 · 공식 양도' },
      { label: '공식 양도 조건', value: '4개', note: '가격 상한 · 본인확인 · 중복 보유 · 수령 동의', highlight: true },
      { label: '점수 감가', value: '5년 선형', note: '오래된 기록의 영구 우선권 방지' },
    ],
    limitation:
      '장외 웃돈 거래는 막지 못한다. 양수인 본인확인과 리워드 차등으로 유인을 줄이는 선에서 그쳤고, 제안서에 한계로 명시했다.',
    links: [
      { label: '눌러보는 데모', url: 'https://snu-project.github.io/fan-passport/', kind: 'demo' },
      { label: '코드', url: 'https://github.com/Shin-kihoon/fan-passport', kind: 'repo' },
    ],
  },
  {
    id: 'moki-kiosk',
    kind: 'service',
    title: '모키 키오스크 — RAG 주문 키오스크 검색 설계',
    subtitle: '음성·텍스트 주문 키오스크 · 서울대 KDT 핀테크 AI 13기 4조',
    period: '2026.10',
    role: '개발 · 검색 설계',
    question:
      '좌석 태블릿에서 자연어로 메뉴를 묻고 주문까지 완료하는 키오스크. 메뉴·정책 정보는 모델이 학습한 적 없는 데이터이므로, 검색 결과 범위 안에서만 답변하도록 구성해야 했다.',
    impact:
      '벡터 검색 단독으로는 짧은 한국어 질의에서 오검색이 발생(“아아 하나” → 약과). 별칭 정확매칭을 1단계, 벡터 검색을 2단계로 둔 2단계 검색으로 전환하고, 질의 재작성과 의도 분류를 통합해 턴당 모델 호출을 3회에서 2회로 축소.',
    learnings: [
      '모델 보정보다 모델에 맡기지 않는 설계가 빨랐다. 가격 계산과 별칭 매칭을 코드로 분리하자 수정 범위가 줄었다.',
    ],
    shots: [
      {
        src: 'shot-moki-flow.png',
        caption:
          '처리 흐름. 별칭 정확매칭을 1단계에 두고 벡터 검색을 2단계로 내렸다. 질의 재작성과 의도 분류를 합쳐 턴당 모델 호출은 2회다.',
      },
    ],
    stack: ['Python', 'Streamlit', 'FAISS', 'OpenAI API'],
    metrics: [
      { label: '검색 단계', value: '2단계', note: '별칭 매칭 → 벡터 검색', highlight: true },
      { label: '턴당 모델 호출', value: '3회 → 2회', note: '재작성·분류 통합' },
      { label: '검증 질문', value: '47개', note: '데이터팀 작성 · 일괄 점검' },
    ],
    contribution:
      '팀 6인(데이터·프롬프트·개발 3파트) 중 개발 담당. 검색·장바구니·주문 처리와 배포. 메뉴 데이터와 프롬프트는 다른 파트 작성.',
    limitation:
      '수업 과제 규모다. 검증 질문 47개는 데이터팀이 작성했고, 일괄 실행과 기록까지만 구현해 자동 채점은 없다.',
    links: [
      { label: '코드 · 검증 러너', url: 'https://github.com/Shin-kihoon/moki-kiosk', kind: 'repo' },
    ],
  },
  {
    id: 'petfinder',
    kind: 'analysis',
    title: 'PetFinder — 실종견 검색 입력과 선택지 데이터',
    subtitle: '유기동물 공고 기반 입력 선택지 생성 · 팀 프로젝트',
    period: '2026.09',
    role: '입력 설계 · 선택지 데이터',
    question:
      '실종견 사진으로 보호소 공고에서 같은 개체를 찾는 서비스. 검색 입력의 지역·품종 선택지를 실제 공고 데이터에서 만들어야 했다.',
    impact:
      'animal.go.kr 공고 매니페스트 1,446건에서 지역 16개 시도·시군구와 품종 목록을 생성하고, 생성 시각과 스냅샷 범위를 결과 파일에 함께 기록했다.',
    learnings: [
      '선택지 명칭을 API 원본값 그대로 유지해야 서버의 텍스트 매칭과 화면 표기가 어긋나지 않는다. 보기 좋게 다듬는 순간 매칭이 깨진다.',
    ],
    shots: [
      {
        src: 'shot-petfinder.png',
        caption:
          '검색 화면. 왼쪽 입력부의 품종·지역 선택지와 다중 사진 업로드가 담당 범위다.',
      },
    ],
    stack: ['Python', 'JavaScript'],
    metrics: [
      { label: '공고 스냅샷', value: '1,446건', note: '2026.08.19 – 09.14', highlight: true },
      { label: '지역 선택지', value: '16개 시도', note: '시군구 단위까지' },
    ],
    contribution: '입력 UI와 선택지 데이터 담당. 개체 재식별 모델은 다른 팀원이 담당했다.',
    limitation: '',
    links: [
      { label: '코드', url: 'https://github.com/koosamuel/petfinder', kind: 'repo' },
    ],
  },
  {
    id: 'lfirm',
    kind: 'activity',
    title: 'L-Firm 회장 — 서울대학교 대학원 금융학회',
    subtitle: '논문 세미나 운영 · 신입 모집 설계',
    period: '2025.09 – 2026.08',
    role: '회장',
    question:
      '인수 시점에 논문 세미나 참여율이 저조했다. 발표자 확보와 참석률 회복이 과제였다.',
    impact:
      '교수진과 학생 간 연결을 직접 중개해 세미나 참여를 회복. 신입 모집 방식도 함께 개편.',
    learnings: [
      '참여는 프로그램 구성이 아니라 참석 동기에서 나왔다. 발표를 들을 자리와 피드백을 받을 자리로 각각 연결한 뒤 참석률이 올라갔다.',
    ],
    stack: [],
    metrics: [],
    contribution: '논문 세미나 운영 · 신입 모집 설계 · 교수-학생 네트워크 연결',
    limitation: '',
    links: [],
  },
];

export const EDUCATION_LIST: EducationData[] = [
  {
    institution: '서울대학교 대학원 경영학과',
    degree: '경영학석사',
    major: '재무금융',
    period: '2024.09 – 2026.08',
    gpa: '3.92 / 4.3',
    gpaNote: '이수 27학점 · 백분환산 96.2',
    status: '졸업',
    details: [
      '석사학위논문: 배당금 금액 집중현상과 기업성과 — 한국 기업을 중심으로',
      '주요 이수: 재무연구방법론 · 계량경제학연구 · 데이터사이언스의 원리와 응용 · 행태주의 재무론 · 투자론연구 · 포트폴리오관리연구 · 투자관리세미나',
    ],
  },
  {
    institution: '건국대학교',
    degree: '경제학사 · 경영학사 (다전공)',
    major: '경제학과 · 경영학과',
    period: '2018.03 – 2024.02',
    gpa: '4.17 / 4.5',
    gpaNote: '전공 4.25 · 다전공 4.46',
    details: [
      "Dean's List 4회 (2022-1 · 2022-2 · 2023-1 · 2023-2)",
      '취득학점 147 · 백분율 96.7',
    ],
  },
  {
    institution: '서울대학교 KDT 빅데이터 핀테크 AI 고급 전문가 과정 (13기)',
    degree: '빅데이터 핀테크 AI 고급 전문가 과정',
    major: '금융 데이터 분석 · 머신러닝',
    period: '2026',
    status: '수료 예정',
    details: [
      '머신러닝·딥러닝, 자연어처리, 데이터베이스 실습 과정 이수',
      '프로젝트 4건: 연봉닥터 · 모키 키오스크 · 디지털 팬 여권 · PetFinder',
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
      { name: 'Git / GitHub', note: '브랜치 운용, GitHub Actions' },
    ],
  },
  {
    category: '통계 · 계량 분석',
    description: '가설 검정과 모형 진단',
    skills: [
      { name: '회귀분석', note: '패널 고정효과, 2-way 군집표준오차' },
      { name: '인과 추론', note: '공변량 매칭, 플라세보 검정, 누락변수 편의 진단' },
      { name: '머신러닝', note: '로지스틱 회귀, 랜덤포레스트, XGBoost, ROC-AUC·F1 평가' },
      { name: '다중공선성 진단', note: 'VIF, 조건수, 계층적 회귀' },
    ],
  },
  {
    category: '데이터 처리',
    description: '원자료를 분석 가능한 형태로',
    skills: [
      { name: '패널 데이터 구축', note: '19,271 기업-연도 · 대출 74만 건 평가' },
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
];
