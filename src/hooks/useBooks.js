import { useFetch } from './useFetch';

export function useBooks(options) {
  const { loading, error, response } = useFetch('/api/books.json', options);
  return { loading, response, error };
}
