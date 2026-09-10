# 문구 수정 가이드

**어떤 키를 고치면 어느 화면이 바뀌는지** 정리한 문서다.
컴포넌트 파일(`src/components/*.tsx`)은 열 필요가 없다.

수정 후에는 아래를 실행해 빌드가 깨지지 않았는지 확인한다.

```bash
npm run build
```

---

## 파일은 두 개뿐이다

| 파일 | 담는 것 |
|---|---|
| `src/data/siteContent.ts` | **문구** — 섹션 제목, 소개문, 버튼 라벨, 내비게이션 |
| `src/data/portfolioData.ts` | **데이터** — 인적사항, 프로젝트, 학력, 기술, 자격증 |

## 화면 순서

신입 채용 담당자가 읽는 순서에 맞춰 배치했다.

```
Hero (누구인가)  →  학력  →  기술 스택  →  자격증  →  프로젝트  →  연락처
```

순서를 바꾸려면 `src/App.tsx` 의 `<main>` 안 컴포넌트 순서와
`siteContent.ts` 의 `header.nav` 배열을 함께 고친다.

## 자주 고치는 것

| 고치고 싶은 것 | 위치 |
|---|---|
| 이름·직함·한 줄 소개·이메일 | `portfolioData.ts` → `PERSONAL_INFO` |
| Hero 오른쪽 "한눈 요약" 4줄 | `Hero.tsx` → `QUICK_FACTS` |
| "2026년 하반기 입사 가능" 배지 | `siteContent.ts` → `hero.availability` |
| 학력 카드 | `portfolioData.ts` → `EDUCATION_LIST` |
| 기술 스택 | `portfolioData.ts` → `SKILL_CATEGORIES` |
| 자격증 | `portfolioData.ts` → `CERTIFICATIONS` |
| 프로젝트 | `portfolioData.ts` → `PROJECTS_DATA` |
| 섹션 제목·부제 | `siteContent.ts` → `education` / `skills` / `certifications` / `projects` |

## 프로젝트 카드 한 장의 구조

카드는 **왜 했는지**를 가장 먼저 보여준다. 방법과 도구는 그 뒤에 온다.

| 필드 | 화면에서의 자리 | 쓰는 법 |
|---|---|---|
| `kind` | 좌상단 검은 뱃지 | `thesis` / `analysis` / `service` |
| `period`, `role` | 뱃지 옆 회색 글씨 | 기간과 맡은 역할 |
| `title` | 큰 제목 | 결과가 드러나게 쓴다 (예: "부도율 24% → 3.4%") |
| `question` | 세로줄 그어진 회색 상자 — **가장 먼저 읽히는 자리** | 무슨 문제를 풀려고 했는지 한두 문장 |
| `summary` | 상자 아래 본문 | 무엇을 했고 무엇이 나왔는지 2~3줄 |
| `metrics` | 숫자 카드 줄 | `highlight: true` 를 준 하나만 초록색이 된다 |
| `keyPoints` | 2단 카드 | 막혔던 지점과 푼 방법. 카드당 2개까지 |
| `stack` | 맨 아래 회색 칩 | 사용한 도구 |
| `links` | 우상단 버튼 | `kind: 'demo'` 는 검은 버튼, `'repo'` 는 회색 버튼 |
| `draft` | 노란 "내용 정리 중" 뱃지 | 아직 안 채운 카드에만 `true` |

`question`, `summary`, `keyPoints[].desc` 에는 `**굵게**` 와 `` `코드` `` 표기를 쓸 수 있다.

## 지켜야 할 것

- **모든 수치는 실제 분석 결과·커밋 기록과 일치해야 한다.** 확인할 수 없으면 쓰지 않는다.
- 아직 확인하지 못한 프로젝트는 지우지 말고 `draft: true` 로 두어 빈자리를 드러낸다.
- 기술 스택에는 실제로 써 본 것만 적는다.
