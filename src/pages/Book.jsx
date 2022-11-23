export default function Book() {
  const book = {
    isbn: '',
    title: '',
    cover: '',
  };

  return (
    <nav>
      <h3>{book.title}</h3>
      <figure>
        <img src={book.cover} alt="" height={300} />
        <figcaption>
          <abbr title="International Standard Book Number">ISBN</abbr>{' '}
          {book.isbn}
        </figcaption>
      </figure>
    </nav>
  );
}
