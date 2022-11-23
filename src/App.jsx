import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Books from 'pages/Books';
import Book from 'pages/Book';
import Consumer from 'pages/Consumer';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>
          <abbr title="Uniform Resource Locator">URL</abbr> 매개변수
        </h1>
        <p>
          React Router가 제공하는 <code>useParmas</code> 훅을 사용해 URL
          매개변수를 가져와 페이지를 렌더링합니다.
        </p>

        <div className="border" />

        <nav aria-label="글로벌 페이지 내비게이션">
          <ul>
            <li>
              <Link to="/books">도서 목록 조회</Link>
            </li>
            <li>
              <Link to="/consumer/csm-61824">고객 조회 1</Link>
            </li>
            <li>
              <Link to="/consumer/csm-80176">고객 조회 2</Link>
            </li>
            <li>
              <Link to="/consumer/csm-28812">고객 조회 3</Link>
            </li>
          </ul>
        </nav>

        <div className="border" />

        {/* 라우트(경로) 구성 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:isbn" element={<Book />} />
          <Route path="/consumer/:id" element={<Consumer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
