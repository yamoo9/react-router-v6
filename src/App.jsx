import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalNav } from 'components/GlobalNav';

import Home from 'pages/Home';
import Consumers from 'pages/Consumers';
import Consumer from 'pages/Consumer';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>중첩 라우팅</h1>
        <p>라우트 내부에 중첩된 라우트를 구성하는 방법을 학습합니다.</p>

        <div className="border" />

        <GlobalNav />

        <div className="border" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consumers" element={<Consumers />}>
            <Route index element={<h2>고객 이름을 선택하세요.</h2>} />
            <Route path=":id" element={<Consumer />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
