import { Link, Outlet } from 'react-router-dom';
import { useBooks } from 'hooks/useBooks';

export default function Books() {
  const { response: books, loading } = useBooks();

  if (loading) {
    return <div role="alert">로딩 중...</div>;
  }

  if (!books) {
    return <div role="alert">도서 목록이 존재하지 않습니다!</div>;
  }

  return (
    <div className="sidebar">
      <nav>
        <ul>
          {books.map(({ isbn, title }) => {
            return (
              <li key={isbn}>
                <Link to={isbn}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
