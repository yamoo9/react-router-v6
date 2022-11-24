import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalNav } from 'components/GlobalNav';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>
          라우트 와일드 카드(<code>*</code>)
        </h1>
        <p>
          요청이 잘못된 경로로 접근할 경우, 라우트 와일드 카드를 사용해 페이지를
          찾지 못함을 사용자에게 안내해야 합니다.
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
