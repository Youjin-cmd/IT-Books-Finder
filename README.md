# 📕 IT 북스 파인더

## 기술스택

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Zustand](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## preview

<img width="800" src="https://github.com/Youjin-cmd/Youjin-cmd/assets/83858724/a4a0c634-3546-4243-ac92-ba2f61fe8bb2" />
<img width="800" src="https://github.com/Youjin-cmd/Youjin-cmd/assets/83858724/e5f598c8-41c1-491e-83b1-3317698c541c" />
<img width="800" src="https://github.com/Youjin-cmd/Youjin-cmd/assets/83858724/b7ff4d80-49aa-4736-9bcf-6e5d17ba418d" />
<img width="800" src="https://github.com/Youjin-cmd/Youjin-cmd/assets/83858724/4c823558-edd0-486f-bb61-41874b2ae2db" />

## 기능

- 초기 화면에서는 최신 도서 목록이 표시됩니다.
- 키워드 검색시 관련 도서 목록이 표시되며, 스크롤을 내리면 계속해서 다른 도서들이 로드되어 표시됩니다.
- 키워드 검색시 OR (|), Not(-)을 통해 고급검색이 가능합니다.
  - javascript|React로 검색시 두 키워드에 맞는 도서들이 함께 검색됩니다.
  - java-javascript로 검색시 도서 이름이 java가 아닌 javascript의 경우 검색결과에서 제외 가능합니다.
  - 최대 두개까지 키워드 입력이 가능합니다.

## 프로젝트를 구현하며 배운 점

#### Next.js 다뤄보기

Next.js를 이번 프로젝트에서 처음으로 접하고 시도해볼 수 있어 보람있었습니다.
콘텐츠와 검색노출이 중요한 웹어플리케이션 프로젝트를 과거 진행한 적이 없었기에,
이번 도서검색 웹어플리케이션을 통해 Next.js의 문법과 SSR의 특징에 대해 자세히 알 수 있었습니다.

구현하면서 흥미로웠던 지점들은 아래와 같습니다.

- 폴더이름이 route가 되어 자동적으로 라우팅을 해주는 점.
- default로 서버 컴포넌트가 작성되며 클라이언트 컴포넌트의 경우 명시를 통해 전환해줄 필요가 있는 점.
- CORS 문제 해결을 위한 proxy 설정 (rewrites).
- 동적 데이터를 이용하여 SEO 최적화를 해주기 위한 generateMetadata.

Next13과 10월에 출시된 Next14의 차이점으로 인해 시행착오를 겪었습니다.
다만 헤매는 과정에서 다량의 조사를 함으로써 빠르게 적응해나가는 계기가 되어주었습니다.

#### 무한스크롤

다양한 상황과 변수가 있어 구현부터 최적화까지 상당히 시간이 들었습니다.
많은 시행착오 후 원하는 페이지를 원하는 타이밍에 깔끔하게 불러오게 되었을 때는 정말 기뻤습니다.

#### 타입스크립트

이번에 Next.js와 타입스크립트의 결합을 새롭게 경험해보면서 타입스크립트의 사용법과 의의에 대해 조금 더 이해할 수 있게된 것 같습니다.
여러 패턴의 프로젝트를 다루어야만 새 기술의 면면을 실감할 수 있기에 좋은 기회였습니다.

앞으로도 계속 정진해나가 Next.js와 Typescript를 익숙하게 다루며 다양한 이슈에 대처할 줄 아는 개발자가 되고 싶습니다.
그 목표를 향해 한 걸음 더 나아갈 수 있는 계기를 주심에 감사드립니다.

## 더 보완해보고싶은 점

#### og태그 최적화에 대해 조금 더 알아보고 싶다.

평소 자주 접했던 카드형식의 웹사이트 정보에 메타데이터의 일부인 og태그가 관여하고 있음을 알았습니다.
이후 SEO 학습을 이어나가며 og태그에도 숙달되고자 합니다.

#### 디렉토리 구조

정답이 없는 문제이기 하나 Next.js 이용시 보편적으로 사용되는 구조에 대해서 조금 더 알아갈 필요가 있다고 느꼈습니다.

#### Github 이슈의 활용

Issue탭을 처음 접해보면서, 서드파티를 이용하며 컨텍스트 전환을 하지 않고도 심도있는 프로젝트 관리가 가능함을 알았습니다. 다만 아직 사용법이 미숙해 제대로 활용하지 못했습니다. 브렌치 작성과 커밋 등을 이슈에 교차시켜야만 시너지가 나는듯 보이므로 issue탭 활용을 더 조사해서 익혀보고자 합니다.

## 프로젝트 설치 및 실행방법

1. 프로젝트 실행에 필요한 모듈을 설치합니다.

```shell
npm install
```

2. 프로젝트를 실행합니다.

```shell
npm run dev
```
