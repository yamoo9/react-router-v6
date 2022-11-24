import { NavigateLink } from './NavigateLink';

export function GlobalNav() {
  return (
    <nav className="navigation" aria-label="글로벌 페이지 내비게이션">
      <ul>
        <li>
          <NavigateLink to="/">홈</NavigateLink>
        </li>
        <li>
          <NavigateLink to="/unknown">잘못된 경로</NavigateLink>
        </li>
        <li>
          <NavigateLink to="/books">도서 목록</NavigateLink>
        </li>
        <li>
          <NavigateLink to="/consumers">고객 목록</NavigateLink>
        </li>
      </ul>
    </nav>
  );
}
