# 문구 수정 가이드

**어떤 키를 고치면 어느 화면이 바뀌는지** 정리한 문서다.
컴포넌트 파일(`src/components/*.tsx`)은 열 필요가 없다.

수정 후에는 반드시 아래를 실행해 빌드가 깨지지 않았는지 확인한다.

```bash
npm run build
```

---

## 파일은 두 개뿐이다

| 파일 | 담는 것 |
|---|---|
| `src/data/siteContent.ts` | **문구** — 섹션 제목, 소개문, 버튼 라벨, 내비게이션 |
| `src/data/portfolioData.ts` | **데이터** — 논문 결과, 프로젝트, 학력, 스킬, 자격증 |

문장을 고치고 싶으면 `siteContent.ts`, 항목을 추가·삭제하고 싶으면 `portfolioData.ts` 다.

---

## siteContent.ts — 어느 키가 어느 화면인가

| 키 | 화면 위치 |
|---|---|
| `header.affiliation` | 상단 헤더, 이름 아래 작은 글씨 |
| `header.nav[]` | 상단 가운데 메뉴. `label` 이 표시되는 글자, `href` 가 이동할 섹션 |
| `header.emailBtnShort` | 모바일에서 이메일 버튼에 뜨는 짧은 글자 |
| `hero.degreeBadge` | 첫 화면 맨 위 검은 알약 배지 |
| `hero.period` | 그 옆 회색 배지 (기간·학점) |
| `hero.headline` | **가장 큰 글씨** — 직무 한 줄 |
| `hero.tagline` | 헤드라인 바로 아래 회색 한 줄 |
| `hero.bio` | 자기소개 문단 |
| `hero.ctaPrimary` / `ctaSecondary` | 검은 버튼 / 흰 버튼 글자 |
| `research.heading` | 논문 섹션 큰 제목 |
| `research.narrativeHypothesis` | 논문 섹션 첫 문단 (왜 이 가설인가) |
| `research.narrativeWork` | 논문 섹션 둘째 문단 (무엇을 했나) |
| `projects.heading` / `subheading` | 프로젝트 섹션 제목·소개 |
| `projects.stackChip` | 프로젝트 섹션 오른쪽 위 작은 칩 |
| `interests.items[]` | 관심분야 카드. `keyword` 가 제목, `detail` 이 설명 |
| `skills.heading` / `subheading` | 역량 섹션 제목·소개 |
| `education.heading` | 학력 섹션 제목 |
| `certifications.heading` | 자격증 섹션 제목 |

### 문단에서 쓸 수 있는 서식

`research.narrative*` 와 프로젝트 설명에서는 두 가지만 쓸 수 있다.

```
**이렇게 쓰면 굵게**
`이렇게 쓰면 코드 스타일`
```

HTML 태그는 쓸 수 없다.

---

## portfolioData.ts — 항목을 늘리거나 줄일 때

### 프로젝트 추가

`PROJECTS_DATA` 배열에 객체를 하나 더 넣으면 카드가 자동으로 생긴다.

```ts
{
  id: 'my-project',            // 고유값. 영문 소문자와 하이픈
  title: '프로젝트 이름',
  subtitle: '한 줄 설명',
  summary: '카드 상단에 들어갈 개요 문단',
  badges: [                    // 제목 위 작은 칩들
    { label: 'Python', tone: 'dark' },        // dark | emerald | indigo | muted
  ],
  links: [
    { label: 'GitHub Repo', url: 'https://...', kind: 'repo' },   // repo | demo
  ],
  keyPoints: [                 // 2개 권장 (2열 배치)
    { icon: 'shield', title: '소제목', desc: '설명. **굵게** 가능' },
    // icon: shield | refresh | check | git
  ],
}
```

> 프로젝트마다 다른 특수 UI(예금토큰의 revert 데모, 연봉닥터의 데이터 출처 다이어그램)는
> `ProjectsSection.tsx` 의 `EXTRAS` 에 `id` 로 연결돼 있다. 새 프로젝트에 특수 UI가 없으면
> 아무것도 안 해도 되고, 카드 껍데기만 그려진다.

### 논문 수치 수정

`THESIS_DATA.regressions[]` 각 객체가 "SELECT ECONOMETRIC SPECIFICATION" 목록의 한 줄이다.

| 필드 | 화면 |
|---|---|
| `model` | 모형 이름 |
| `alpha` | 검은 칩에 뜨는 결과값 |
| `tStat` | t값. **비유의해서 t값을 안 쓰려면 이 줄을 통째로 지운다** |
| `significance` | `***` / `**` / `*` / `n.s.` |
| `obs` | 표본 수 |
| `spec` | 오른쪽 "SPECIFICATION" 타일 |
| `description` | 아래 상세 설명 |

### 학력·스킬·자격증

`EDUCATION_LIST`, `SKILL_CATEGORIES`, `CERTIFICATIONS` 배열에 객체를 넣거나 뺀다.
스킬의 `level` 은 `'Expert' | 'Advanced' | 'Proficient'` 셋 중 하나만 쓸 수 있다.

---

## 자주 하는 실수

| 증상 | 원인 |
|---|---|
| 문구를 고쳤는데 화면이 그대로 | 개발 서버를 껐다 켜거나, `npm run build` 를 다시 돌린다 |
| 빌드가 `',' expected` 로 실패 | 문자열 안의 작은따옴표(`'`)를 `\'` 로 이스케이프하지 않았다 |
| 배지 색이 안 먹음 | `tone` 값이 `dark/emerald/indigo/muted` 가 아니다 |
| 아이콘이 안 나옴 | `icon` 값이 `shield/refresh/check/git` 가 아니다 |

---

## 배포

`main` 에 푸시하면 Netlify 가 자동 배포한다. 보통 30초 안에 반영된다.

```bash
npm run build && git add -A && git commit -m "docs: 문구 수정" && git push
```
