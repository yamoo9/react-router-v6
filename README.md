# 라우트 와일드 카드(\*)

요청이 잘못된 경로로 접근할 경우, 라우트 와일드 카드를 사용해 페이지를 찾지 못함을 사용자에게 안내해야 합니다.

- [ ] NotFound 컴포넌트 작성
- [ ] 라우트 와일드 카드를 사용해 잘못된 접근임을 사용자에게 경고

| URL 경로       | 컴포넌트  |
| -------------- | --------- |
| /              | Home      |
| /books         | Books     |
| /books/:isbn   | Book      |
| /consumers     | Consumers |
| /consumers/:id | Consumer  |
| \*             | NotFound  |
