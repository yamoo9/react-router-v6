import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalNav } from 'components/GlobalNav';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>라우트 구성</h1>
        <p>
          <code>useRoutes</code> 훅을 사용해 라우트 구성 객체를 사용해 라우트를
          구성하는 방법을 학습합니다.
        </p>

        <div className="border" />

        <GlobalNav />

        <div className="border" />

        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
