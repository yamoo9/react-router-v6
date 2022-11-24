import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('pages/Home'));
const Books = React.lazy(() => import('pages/Books'));
const Book = React.lazy(() => import('pages/Book'));
const Consumers = React.lazy(() => import('pages/Consumers'));
const Consumer = React.lazy(() => import('pages/Consumer'));

export default function AppRoutes() {
  return (
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
  );
}
