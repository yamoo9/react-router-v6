import { Link, useLocation } from 'react-router-dom';

export function NavigateLink({ to, activeClassName = 'active', ...restProps }) {
  const { pathname, search } = useLocation();

  let path = pathname;
  if (search) {
    path += search;
  }

  let isActive = path === to;

  return (
    <Link
      to={to}
      className={isActive ? activeClassName : null}
      {...restProps}
    />
  );
}
