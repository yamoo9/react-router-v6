import { NavigateLink } from './NavigateLink';

export function GlobalNav() {
  return (
    <nav className="navigation" aria-label="글로벌 페이지 내비게이션">
      <ul>
        <li>
          <NavigateLink to="/">설문 작성</NavigateLink>
        </li>
      </ul>
    </nav>
  );
}
