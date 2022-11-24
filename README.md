# 보호된 라우트 (Protected Route)

인증이 요구되는 경로인 경우, 인증된 사용자만 경로에 접근할 수 있도록 보호해야 합니다.

- [ ] 인증 컨텍스트 생성 및 공급, 사용자 정의 훅 작성
- [ ] `RequiredAuth` 커스텀 컴포넌트 작성
- [ ] 잘못된 접근인 경우, 프로그래밍 방식으로 내비게이션

| URL 경로       | 컴포넌트  | 공개 |
| -------------- | --------- | ---- |
| /              | Home      | ✅   |
| /books         | Books     | ✅   |
| /books/:id     | Book      | ✅   |
| /consumers     | Consumers | ✅   |
| /consumers/:id | Consumer  | ✅   |
| \*             | NotFound  | ✅   |
| /browse        | Browse    | 🚫   |
| /dashboard     | Dashboard | 🚫   |
