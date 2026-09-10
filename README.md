# 신기훈 포트폴리오 사이트

데이터 분석가 신입 지원용 개인 포트폴리오 사이트.
학력·기술·자격증을 먼저 보여주고, 프로젝트 4건을 아래에 둔다.

**공개 URL** → https://shinkihoonportfolio.netlify.app/

## 실행

```bash
npm install
npm run dev        # 개발 서버 (http://localhost:3000)
npm run build      # 프로덕션 빌드 → dist/
npm run preview    # 빌드 결과 미리보기
```

Node 18 이상이 필요하다.

## 기술 스택

| 영역 | 선택 | 이유 |
|---|---|---|
| 빌드 | Vite | 정적 단일 페이지에 충분하고 빌드가 빠르다 |
| 프레임워크 | React 19 + TypeScript | 섹션을 컴포넌트로 나누고 콘텐츠 타입을 강제하기 위해 |
| 스타일 | Tailwind CSS | 토큰을 클래스로 직접 다루기 위해 |
| 아이콘 | lucide-react | |
| 배포 | Netlify | GitHub 연동 자동 배포 |

## 문구를 고치려면

**컴포넌트를 열지 않는다.** 화면에 보이는 모든 문구는 두 파일에만 있다.

| 파일 | 담는 것 |
|---|---|
| `src/data/siteContent.ts` | 섹션 제목·소개문·버튼 라벨·내비게이션·관심분야 |
| `src/data/portfolioData.ts` | 논문 결과, 프로젝트, 학력, 스킬, 자격증 |

어떤 키가 어느 화면인지는 **[docs/content-edit-guide.md](docs/content-edit-guide.md)** 를 본다.

## 구조

```
src/
├─ App.tsx                     섹션 배치 순서
├─ data/
│  ├─ siteContent.ts           화면 문구 (섹션별 객체)
│  └─ portfolioData.ts         논문·프로젝트·학력·스킬·자격증 데이터
├─ components/
│  ├─ Header.tsx               상단 고정 헤더
│  ├─ Hero.tsx                 첫 화면
│  ├─ ResearchSection.tsx      석사학위논문
│  ├─ ProjectsSection.tsx      프로젝트 (PROJECTS_DATA 를 렌더링)
│  ├─ DepositTokenSimulator.tsx  예금토큰 revert 데모 (고유 UI)
│  ├─ SalaryDoctorPipeline.tsx   연봉닥터 데이터 출처 (고유 UI)
│  ├─ ProjectRich.tsx          **굵게** · `코드` 렌더러
│  ├─ InterestsSection.tsx     관심분야
│  ├─ EducationSection.tsx     학력
│  ├─ SkillsSection.tsx        역량·스택
│  ├─ CertificationsSection.tsx  자격증·어학
│  └─ ContactSection.tsx       연락처
public/                        favicon · og.png · robots.txt · sitemap.xml
docs/                          기획 문서 (content / 편집 가이드)
```

## 원칙

- **문구는 데이터 파일에만.** 컴포넌트에 문자열을 직접 쓰지 않는다.
- **검증되지 않은 수치를 쓰지 않는다.** 논문 수치는 실제 분석 결과와 일치해야 하고,
  확인되지 않은 이력은 넣지 않는다. 면접에서 방어할 수 없는 문장은 사이트에도 없어야 한다.
- 빌드가 성공할 때마다 커밋한다.

## 배포

`main` 에 푸시하면 Netlify 가 자동으로 빌드·배포한다 (보통 30초 이내).

```bash
npm run build      # 로컬에서 먼저 확인
git push origin main
```
