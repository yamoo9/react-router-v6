import { Link, Routes, Route } from 'react-router-dom';
import { useConsumers } from 'hooks/useConsumers';
import Consumer from './Consumer';

export default function Consumers() {
  const { response: consumers, loading } = useConsumers();

  if (loading) {
    return <div role="alert">로딩 중...</div>;
  }

  if (!consumers) {
    return <div role="alert">고객 목록이 존재하지 않습니다!</div>;
  }

  return (
    <div className="consumers">
      <nav>
        <ul>
          {consumers.map(({ id, name, bio }) => {
            return (
              <li key={id}>
                <Link to={id}>{name}</Link>
                <p>{`${bio.slice(0, 50)}...`}</p>
              </li>
            );
          })}
        </ul>
      </nav>

      <Routes>
        <Route index element={<h2>고객 이름을 선택하세요.</h2>} />
        <Route path=":id" element={<Consumer />} />
      </Routes>
    </div>
  );
}
