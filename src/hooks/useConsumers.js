import { useFetch } from './useFetch';

export function useConsumers(options) {
  const { loading, error, response } = useFetch('/api/consumers.json', options);
  return { loading, response, error };
}
