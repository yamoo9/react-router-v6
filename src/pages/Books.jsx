export default function Books() {
  const books = [];

  return (
    <div className="books">
      <h3>도서 조회</h3>
      <ul>
        {books.map(({ isbn, title }) => (
          <li key={isbn}>
            <a href={`/book/${isbn}`}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
