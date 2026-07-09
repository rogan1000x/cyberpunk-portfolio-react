# Day 02 - React 핵심 개념 학습 (Component, State, Props)

## 오늘 배운 것
- **Component**: 재사용 가능한 UI 조각
- **JSX**: JavaScript 안에서 HTML처럼 쓰는 문법
- **useState**: 컴포넌트의 상태(변하는 데이터) 관리
- **Props**: 부모 컴포넌트에서 자식 컴포넌트로 데이터 전달
- **map()**: 배열 데이터를 순회하며 자동으로 UI 생성

## 오늘 한 것

### 1. React를 쓰는 이유 이해
**기존 방식 (바닐라 JS)의 문제:**
```javascript
document.getElementById('score').textContent = newScore;
document.getElementById('combo').textContent = 'x' + combo;
// 여러 곳을 수동으로 업데이트해야 함
```

**React의 해결책:**
```jsx
setScore(newScore);  // 이것만 하면 관련 화면 자동 업데이트
```

### 2. State 실습 (카운터)
```jsx
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  클릭: {count}
</button>
```
- 버튼 클릭 시 count 증가
- React가 자동으로 화면 리렌더링

### 3. Component 분리 (Header)
**이전**: App.js에 모든 코드
**이후**: Header.js로 분리
```jsx
// Header.js
function Header() {
  return (
    <div>
      <h1>ROGAN KIM</h1>
      <h2>Web Developer</h2>
    </div>
  );
}
```

### 4. Props 실습 (ProjectCard)
**재사용 가능한 카드 컴포넌트:**
```jsx
function ProjectCard(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.link}>보러가기</a>
    </div>
  );
}
```

**같은 컴포넌트, 다른 데이터:**
```jsx
<ProjectCard title="게임" description="..." link="..." />
<ProjectCard title="포트폴리오" description="..." link="..." />
```

### 5. map()으로 배열 자동 렌더링
```jsx
const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

{skills.map((skill, index) => (
  <li key={index}>{skill}</li>
))}
```
- 배열 데이터로 리스트 자동 생성
- 나중에 데이터 추가해도 코드 변경 불필요

## React vs 바닐라 JS 비교

| 항목 | 바닐라 JS | React |
|------|----------|-------|
| 화면 업데이트 | 수동 (getElementById) | 자동 (state 변경 시) |
| 재사용성 | 복사 붙여넣기 | 컴포넌트 재사용 |
| 여러 항목 생성 | 반복문 + innerHTML | map() 함수 |
| 코드 구조 | 한 파일에 모두 | 파일별로 분리 |

## 막혔던 것
- 없음 (순조롭게 진행)

## 나의 성장
게임 개발 때 겪었던 문제:
- "이거 업데이트했는데 저것도 해야 하네"
- "여러 곳에서 같은 코드 반복"

React가 이 문제들을 어떻게 해결하는지 직접 체감함!

## 다음 할 것
- Skills 섹션을 배열 + map()으로 리팩토링
- 여러 프로젝트를 배열로 관리
- CSS 스타일링 (사이버펑크 테마 적용)
- useEffect 배우기 (다음 개념)

## 목표 진행 상황
🎯 최종 목표: 올라운드 풀스택 개발자
- ✅ 프론트엔드 기초 (HTML/CSS/JS)
- ✅ React 기초 시작
- ⬜ 백엔드 (Node.js, Express)
- ⬜ 데이터베이스
- ⬜ 디자인 시스템
- ⬜ 사운드 디자인 (게임에서 이미 시작함!)



## 추가 학습 (세션 3) - 배열 + map() 실전 활용

### 9. 프로젝트 배열화
**이전 (반복 코드):**
```jsx
<ProjectCard title="게임" description="..." link="..." />
<ProjectCard title="포트폴리오" description="..." link="..." />
```

**이후 (배열 + map):**
```jsx
const projects = [
  {
    title: "SEOUL-2077 HANGUL BREACH",
    description: "한글 타이핑 게임",
    link: "https://cyberfunk-hangle.netlify.app/"
  },
  {
    title: "포트폴리오 사이트",
    description: "사이버펑크 테마 포트폴리오",
    link: "https://rogan-portfolio.netlify.app/"
  }
];

{projects.map((project, index) => (
  <ProjectCard 
    key={index}
    title={project.title}
    description={project.description}
    link={project.link}
  />
))}
```

### 10. 실전 테스트: 프로젝트 추가
배열에 새 항목 하나만 추가:
```jsx
{
  title: "React 포트폴리오 (진행중)",
  description: "지금 만들고 있는 이 사이트!",
  link: "#"
}
```

**결과**: JSX 코드 수정 없이 카드가 자동으로 3개로 늘어남!

## 오늘의 가장 큰 깨달음

데이터만 추가 → UI 자동 생성
JSX 코드 수정 불필요!


이것이 React의 핵심 철학이자 가장 강력한 이유

## 오늘 전체 학습 로드맵 (Day 01-02)
1. Node.js/Chocolatey 설치
2. Create React App 프로젝트 생성
3. Component 분리 (Header)
4. useState로 카운터 만들기
5. Props로 데이터 전달 (ProjectCard)
6. map()으로 배열 렌더링 (skills)
7. 조건부 렌더링 (count에 따른 메시지)
8. useEffect로 페이지 제목 변경
9. CSS 사이버펑크 테마 적용
10. 프로젝트 배열화 (실전 활용)

## 다음 세션 계획
- React Router (여러 페이지 만들기)
- 실제 포트폴리오 페이지 구조 설계
- 게임/포트폴리오 프로젝트 데이터 연동
- 반응형 디자인 (모바일 대응)

## 목표 진행 상황 업데이트
🎯 최종 목표: 올라운드 풀스택 개발자
- ✅ 프론트엔드: HTML/CSS/JS
- ✅ React: Component, State, Props, useEffect, map() 마스터
- ✅ 디자인: 사이버펑크 테마 (게임 + 포트폴리오 + React)
- ✅ 사운드: Web Audio API (게임에서 구현)
- ⬜ 백엔드: 다음 단계
- ⬜ 데이터베이스: 다음 단계

## 오늘의 개발자 마인드
"미루면 되나" - 즉시 실행하는 태도로 
Chocolatey 설치부터 React 핵심 개념까지 
막힘없이 진행한 알찬 하루였음