import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalNav } from 'components/GlobalNav';

const Home = React.lazy(() => import('pages/Home'));
const Books = React.lazy(() => import('pages/Books'));
const Book = React.lazy(() => import('pages/Book'));
const Consumers = React.lazy(() => import('pages/Consumers'));
const Consumer = React.lazy(() => import('pages/Consumer'));

function App() {
  return (
    <Router>
      <div className="container">
        <h1>코드 스플리팅</h1>
        <p>
          React 페이지 컴포넌트를 페이지 경로 마다 동적으로 호출할 수 있도록
          코드 스플리팅을 구현합니다.
        </p>

        <div className="border" />

        <GlobalNav />

        <div className="border" />

        <React.Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />}>
              <Route index element={<h2>도서 이름을 선택하세요.</h2>} />
              <Route path=":isbn" element={<Book />} />
            </Route>
            <Route path="/consumers" element={<Consumers />}>
              <Route index element={<h2>고객 이름을 선택하세요.</h2>} />
              <Route path=":id" element={<Consumer />} />
            </Route>
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;
