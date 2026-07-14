# Day 03 - React Router로 다중 페이지 만들기

## 오늘 배운 것
- **React Router**: 새로고침 없이 페이지 전환하는 라이브러리
- **BrowserRouter**: 앱 전체에 라우팅 기능 활성화
- **Routes + Route**: 주소(path)별로 다른 컴포넌트 보여주기
- **Link**: 클릭으로 페이지 이동 (일반 `<a>` 태그와 차이)
- **useLocation**: 현재 페이지 주소를 알아내는 훅
- **조건부 스타일링**: 삼항 연산자로 현재 페이지 강조 표시

## 오늘 한 것

### 1. 이전 세션 테스트 코드 정리
- useState 카운터, 조건부 렌더링 테스트 문구 삭제
- React 기본 로고, "Learn React" 링크 삭제
- 실제 콘텐츠(projects, skills)만 남김

### 2. React Router 설치
```powershell
npm install react-router-dom
```

### 3. index.js에 BrowserRouter 적용
```jsx
import { BrowserRouter } from 'react-router-dom';

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

### 4. 페이지별 컴포넌트 분리
App.js   → Header + Routes (라우팅 담당)
Home.js  → 프로젝트 목록
Skills.js → 기술 스택
About.js → 자기소개

### 5. Routes 설정
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/about" element={<About />} />
</Routes>
```

### 6. Link로 네비게이션 만들기
```jsx
<Link to="/">Home</Link>
<Link to="/skills">Skills</Link>
<Link to="/about">About</Link>
```
- 일반 `<a href="...">`와 달리 새로고침 없이 이동

### 7. useLocation으로 현재 페이지 표시
```jsx
const location = useLocation();

style={{ color: location.pathname === '/' ? '#00ffff' : '#ff2d9b' }}
```
- 현재 있는 메뉴만 다른 색으로 강조

## 파일 구조 (현재)
src/
├── App.js (라우팅 설정)
├── Header.js (네비게이션)
├── Home.js (프로젝트 목록)
├── Skills.js (기술 스택)
├── About.js (자기소개)
└── ProjectCard.js (재사용 카드)

## 게임 개발과 비교
| 바닐라 JS 방식 | React Router 방식 |
|--------------|------------------|
| index.html, about.html 등 여러 파일 | 파일 하나(index.html)로 여러 페이지처럼 동작 |
| 페이지 이동 시 새로고침 | 새로고침 없이 즉시 전환 |
| 현재 페이지 표시 수동 처리 | useLocation으로 간단히 처리 |

## 막혔던 것
- 없음 (순조롭게 진행)

## 개발 전략 확정 (지난 세션 논의)
"개념 확인 후 바로 실전 데이터로 교체" 원칙 적용 중
- 테스트 코드는 바로바로 정리
- projects, skills는 처음부터 실제 데이터 사용

## 다음 할 것
- About 페이지 실제 콘텐츠 채우기 (자기소개 텍스트)
- 사이버펑크 CSS 테마를 페이지별로 적용
- Footer 컴포넌트 추가 (연락처)
- 모바일 반응형 고려

## 목표 진행 상황
🎯 최종 목표: 올라운드 풀스택 개발자
- ✅ React 기초 (Component, State, Props, useEffect, map)
- ✅ React Router (다중 페이지, Link, useLocation)
- ⬜ 스타일링 심화 (CSS Modules 또는 styled-components)
- ⬜ 백엔드 연동

## 추가 학습 (세션 2)

### 8. About 페이지 실제 콘텐츠 작성
- 자기소개 텍스트 추가
- 연락처 정보 (Email, GitHub) 추가

### 9. Footer 컴포넌트 추가
```jsx
function Footer() {
  return (
    <footer>
      <p>© 2026 Rogan Kim. All rights reserved.</p>
      <p>
        <a href="https://github.com/rogan1000x">GitHub</a>
        {' | '}
        <a href="mailto:rogan1000x@gmail.com">Email</a>
      </p>
    </footer>
  );
}
```

**핵심 개념: Routes 안 vs 밖**
```jsx
<Header />           {/* 공통 요소: 항상 보임 */}
<Routes>...</Routes> {/* 페이지별 요소: 바뀜 */}
<Footer />           {/* 공통 요소: 항상 보임 */}
```

### 10. Navigation + Footer CSS 스타일링
- 네비게이션 링크에 네온 글로우 효과
- Footer 상단 구분선 추가
- **hover 효과**: 마우스 올렸을 때 텍스트 글로우 강화

```css
nav a:hover {
  text-shadow: 0 0 15px currentColor;
}
```

## 완성된 페이지 구조
Header (네비게이션 - 항상 표시)
├── Home: 프로젝트 목록
├── Skills: 기술 스택
└── About: 자기소개 + 연락처
Footer (저작권 + 링크 - 항상 표시)

## 다음 할 것
- 모바일 반응형 (미디어 쿼리)
- 프로젝트 카드 CSS 개선 (게임 스타일처럼 hover 애니메이션)
- 실제 배포 (Netlify)