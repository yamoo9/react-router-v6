import { Link } from 'react-router-dom';
import { useBooks } from 'hooks/useBooks';

export default function Books() {
  const { response: books, loading } = useBooks();

  if (loading) {
    return <div role="alert">로딩 중...</div>;
  }

  if (!books) {
    return <div role="alert">도서 목록을 조회할 수 없습니다!</div>;
  }

  return (
    <nav>
      <h3>도서 조회</h3>
      <ul>
        {books.map(({ isbn, title }) => (
          <li key={isbn}>
            <Link to={`/book/${isbn}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
