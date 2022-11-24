import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [auth, setAuth] = useState(false);

  const value = {
    auth,
    isAuth: !!auth,
    logIn() {
      return new Promise((res) => {
        setAuth(true);
        res();
      });
    },
    logOut() {
      return new Promise((res) => {
        setAuth(false);
        res();
      });
    },
  };

  return <AuthContext.Provider value={value} {...props} />;
};

export function useAuth() {
  return useContext(AuthContext);
}

export const withAuth = (Component) => {
  return function WithAuthHOC(props) {
    const value = useAuth();
    return <Component auth={value} {...props} />;
  };
};
