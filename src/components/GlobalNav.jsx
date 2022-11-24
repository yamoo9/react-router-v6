import { useAuth } from 'contexts/auth';
import { NavigateLink } from './NavigateLink';

export function GlobalNav() {
  const { isAuth, logOut } = useAuth();

  return (
    <nav className="navigation" aria-label="글로벌 페이지 내비게이션">
      <ul>
        <li>
          <NavigateLink to="/">홈</NavigateLink>
        </li>
        <li>
          <NavigateLink to="/books">도서 목록</NavigateLink>
        </li>
        <li>
          <NavigateLink to="/consumers">고객 목록</NavigateLink>
        </li>
        <li>
          <NavigateLink to="/browse">콘텐츠 탐색 (인증 필요)</NavigateLink>
        </li>
        {isAuth ? (
          <>
            <li>
              <NavigateLink to="/dashboard">대시보드</NavigateLink>
            </li>
            <li>
              <button className="button" type="button" onClick={logOut}>
                로그아웃
              </button>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
}
