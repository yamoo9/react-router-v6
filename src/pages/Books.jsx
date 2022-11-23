export default function Books() {
  const loading = true;
  const book = {};

  if (loading) {
    return <div role="alert">로딩 중...</div>;
  }

  if (!book) {
    return <div role="alert">도서 목록을 조회할 수 없습니다!</div>;
  }

  return (
    <div className="book">
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
