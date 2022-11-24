import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Books from 'pages/Books';
import Consumer from 'pages/Consumer';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>쿼리 스트링(Query String)</h1>
        <p>
          React Router가 제공하는 <code>useSearchParmas</code> 훅을 사용해 쿼리
          스트링을 분석한 후 페이지가 렌더링되도록 구성합니다.
        </p>

        <div className="border" />

        <nav aria-label="글로벌 페이지 내비게이션">
          <ul>
            <li>
              <Link to="/books?isbn=9791190800969">책벌레의 하극상</Link>
            </li>
            <li>
              <Link to="/books?isbn=9788936495701">아버지의 해방일지</Link>
            </li>
            <li>
              <Link to="/consumers?id=csm-61824">하원길 고객님</Link>
            </li>
            <li>
              <Link to="/consumers?id=csm-80176">하민아 고객님</Link>
            </li>
            <li>
              <Link to="/consumers?id=csm-28812">김정국 고객님</Link>
            </li>
          </ul>
        </nav>

        <div className="border" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/consumers" element={<Consumer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
