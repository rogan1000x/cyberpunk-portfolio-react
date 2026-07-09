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