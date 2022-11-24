export default function Book() {
  const book = {
    isbn: '',
    title: '',
    cover: '',
  };

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
