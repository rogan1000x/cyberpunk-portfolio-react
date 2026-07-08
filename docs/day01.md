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