import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from 'pages/Home';
import Introduction from 'pages/Introduction';
import Contacts from 'pages/Contacts';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>React Router v6 펀드멘탈</h1>
        <p>React Router를 설치하고, 클라이언트 측 라우팅 구성을 학습합니다.</p>

        <div className="border" />

        <nav aria-label="글로벌 페이지 내비게이션">
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/intro">소개</Link>
            </li>
            <li>
              <Link to="/contacts">문의</Link>
            </li>
          </ul>
        </nav>

        <div className="border" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Introduction />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
