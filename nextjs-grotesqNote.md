# Next.js

## JSX

Javascript + XML
리액트에서 사용하는 기본 문법/파일 형식
자바스크립트에서는 .js .jsx 사용 => .js로 통합
타입스크립트에서는 .tsx 만 사용

Next.js 사용하는 이유 ?
SSR(Server Side Rendering) 방식때문

## RSC 리액트 서버 컴포넌트

React는 CSR방식 (Client Side Rendering)
CSR은 검색엔진에 반영하기 어려움

Next.js 에서는 모든 컴포넌트를 서버 컴포넌트로 동작됨

클라이언트 컴포넌트는 시작줄에 "use client" 선언

서버 컴포넌트는 async function 사용할수있음
서버 컴포넌트는 async fuction형태
클라이언트 컾포넌트는 "use client" 선언

서버 컴포넌트 - 정적인 컨텐츠 담거나, 서버에서 수행해야하는 작업들
클라이언트 컴포넌트 - 사용자 인터렉션이 필요한 내용을 담음

유의할 규칙

1. 서버 컴포넌트 안에 클라이언트 컴포넌트가 들어갈 수 있음
2. 클라이언트 컴포넌트 안에 서버 컴포넌트가 들어갈 수는 없음

예시 Directory

- page.tsx : 페이지 표시를 위한 서버 컴포넌트
  - Form.tsx : 사용자 입력 폼을 처리하는 클라이언트 컴포넌트
    - ErrorView.tsx : 에러 출력을 위한 서버 컴포넌트 (x)
  - UserInfo.tsx : 로그인 후 사용자 정보가 표시되는 서버 컴포넌트
    - EditButton.tsx : 사용자가 클릭할 수 있는 수정 모드 전환 클라이언트 컴포넌트 (o)

layout 과 template 가 동시에있으면? layout이먼저 => template가 안으로들어감

## 프로젝트 경로 관리

- /: 작업물을 모아놓은 상위 디렉토리
  - /project-name
    -/package.json
    -/first-project
    -/package.json
