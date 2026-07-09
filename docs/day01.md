# Day 01 - React 프로젝트 시작 (Create React App)

## 오늘 배운 것
- **Node.js 설치**: Chocolatey를 통한 패키지 매니저 활용
- **npm (Node Package Manager)**: JavaScript 패키지 관리
- **Create React App**: React 프로젝트 자동 생성 도구
- **Git 초기화**: 새 프로젝트 버전 관리
- **폴더 구조 설계**: 프로젝트별 독립적 관리

## 오늘 한 것
### 1. Chocolatey 설치
Windows 패키지 매니저 설치
- PowerShell 관리자 권한으로 실행
- Chocolatey v2.7.3 설치 완료

### 2. Node.js 설치
```powershell
choco install nodejs
```
- Node.js v20.4.0
- npm v11.17.0

### 3. React 프로젝트 생성
```powershell
npx create-react-app cyberpunk-portfolio
```
- Create React App으로 기본 구조 생성
- 필요한 패키지 자동 설치

### 4. 폴더 이동
C:\WINDOWS\system32\ → E:\Projects\cyberpunk-portfolio
- 개발용 폴더로 체계적 관리

### 5. Git 초기화
```powershell
git init
git add .
git commit -m "react: 초기 Create React App 생성"
```

## 프로젝트 구조

E:\Projects\cyberpunk-portfolio/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
├── public/
│   ├── index.html
│   └── ...
├── node_modules/
├── package.json
├── .gitignore
└── README.md

## 개발 환경
- **Node.js**: v20.4.0
- **npm**: v11.17.0
- **React**: Create React App 기본 버전
- **IDE**: VSCode + Git Bash/PowerShell

## 막혔던 것
- npm 명령어가 Git Bash PATH에 없음
  → PowerShell 사용으로 해결

- C:\WINDOWS\system32 폴더 권한 문제
  → 새로 생성해서 해결

- 폴더 복사 중 파일 누락
  → 다시 생성해서 해결

## 다음 할 것
- React 핵심 개념 학습 (Components, JSX, Props, State)
- Cyberpunk 포트폴리오 디자인 구현
- 게임/다른 프로젝트 링크 추가
- 포트폴리오 사이트로 배포

## 개발자 팁
1. **Chocolatey의 중요성**: Windows 개발자의 표준 도구
2. **폴더 구조 설계**: 처음부터 체계적으로 관리
3. **Git 초기화**: 프로젝트 시작 시 바로 버전 관리
4. **미루지 않기**: 기록은 즉시! (오늘 배운 중요한 교훈)