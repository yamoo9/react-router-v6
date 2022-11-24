import { Link, Outlet } from 'react-router-dom';
import { useConsumers } from 'hooks/useConsumers';

export default function Consumers() {
  const { response: consumers, loading } = useConsumers();

  if (loading) {
    return <div role="alert">로딩 중...</div>;
  }

  if (!consumers) {
    return <div role="alert">고객 목록이 존재하지 않습니다!</div>;
  }

  return (
    <div className="sidebar">
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

      <Outlet />
    </div>
  );
}
