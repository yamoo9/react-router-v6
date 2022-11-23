import { useBooks } from './useBooks';

export function useBook(isbn, options) {
  const { loading, error, response: books } = useBooks(options);

  return {
    loading,
    response: books?.find?.((book) => book.isbn === isbn) ?? null,
    error,
  };
}
