import { useParams } from 'react-router-dom';
import { useBook } from 'hooks/useBook';

export default function Consumer() {
  const { isbn } = useParams();
  const { response: book, loading } = useBook(isbn);

  if (loading) {
    return <div role="alert">로딩 중...</div>;
  }

  if (!book) {
    return <div role="alert">도서가 조회되지 않습니다!</div>;
  }

  return (
    <div className="contents">
      <h3>{book.title}</h3>
      <figure>
        <img src={book.cover} alt="" height={300} />
        <figcaption>
          <abbr title="International Standard Book Number">ISBN</abbr>{' '}
          {book.isbn}
        </figcaption>
      </figure>
    </div>
  );
}
