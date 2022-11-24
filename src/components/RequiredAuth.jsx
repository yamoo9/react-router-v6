import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'contexts/auth';

export function RequiredAuth({ children }) {
  const { isAuth } = useAuth();
  const location = useLocation();
  return isAuth ? (
    children
  ) : (
    <Navigate
      to="/login"
      state={{
        from: location.pathname,
      }}
    />
  );
}
