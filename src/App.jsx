import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalNav } from 'components/GlobalNav';
import Form from 'pages/Form';
import Submitted from 'pages/Submitted';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>프로그래밍 방식 내비게이션 (선언형)</h1>
        <p>
          &lt;Navigate /&gt; 컴포넌트를 사용해 프로그래밍 방식으로 내비게이션
          하는 방법을 학습합니다.
        </p>

        <div className="border" />

        <GlobalNav />

        <div className="border" />

        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/submitted" element={<Submitted />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
