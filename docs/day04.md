## 추가 학습 (세션 7) - UI/UX 개선 + 버그 수정

### 20. 버튼 스타일링 (색상으로 역할 구분)
```css
.add-btn, .edit-btn { color: #00ffff; }  /* 추가/수정: 시안색 */
.delete-btn { color: #ff4444; }           /* 삭제: 빨간색 (위험 표시) */
.save-btn { color: #00ff00; }             /* 저장: 초록색 (완료 표시) */
```
색상으로 버튼의 성격(안전/위험/완료)을 직관적으로 전달

### 21. 트러블슈팅: export default 위치 오류
**에러**: `'import' and 'export' may only appear at the top level`

**원인**: `export default Home;`이 함수를 닫는 `}` 없이 함수 내부에 위치함
```jsx
return (
  <div>...</div>
);

export default Home;  // ← 함수 안에 갇혀있었음!
```

**해결**: `return` 문 뒤에 함수를 닫는 `}` 추가 후, `export default`를 함수 밖으로 이동

### 22. 트러블슈팅: URL 프로토콜 중복
**에러**: fetch 요청이 실패

**원인**: 백엔드 주소를 Render URL로 바꾸는 과정에서 프로토콜이 중복됨
```jsx
fetch('http://https://cyberpunk-backend-5i57.onrender.com/...')  // 잘못됨
```

**해결**: 중복된 `http://` 제거
```jsx
fetch('https://cyberpunk-backend-5i57.onrender.com/...')  // 정상
```

### 23. 트러블슈팅: 버튼과 링크 겹침
**문제**: "보러가기" 링크와 수정/삭제 버튼이 겹쳐 보임

**원인**: `.card-actions`에 `margin-top: -10px` (음수 마진)으로 인해 위로 당겨짐

**해결**: `margin-top: 10px`로 수정하여 적절한 간격 확보

## 오늘의 교훈
"코드가 겉보기엔 비슷해 보여도 괄호 위치, 프로토콜 중복 같은 
작은 디테일 하나가 전체를 망가뜨릴 수 있다"
→ 에러 메시지를 정확히 읽고 원인을 하나씩 확인하는 습관의 중요성