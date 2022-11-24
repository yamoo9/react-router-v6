import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalNav } from 'components/GlobalNav';
import AppRoutes from './AppRoutes';
import { AuthProvider } from 'contexts/auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="container">
          <h1>보호된 라우트 (Protected Route)</h1>
          <p>
            인증이 요구되는 경로인 경우, 인증된 사용자만 경로에 접근할 수 있도록
            보호해야 합니다.
          </p>

          <div className="border" />

          <GlobalNav />

          <div className="border" />

          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
