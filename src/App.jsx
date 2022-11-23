import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalNav } from 'components/GlobalNav';
import Home from 'pages/Home';
import Books from 'pages/Books';
import Consumer from 'pages/Consumer';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>커스텀 내비게이션 컴포넌트</h1>
        <p>
          React Router가 제공하는 &lt;Link /&gt; 컴포넌트를 래핑하는 커스텀
          컴포넌트를 작성합니다.
        </p>

        <div className="border" />

        <GlobalNav />

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
