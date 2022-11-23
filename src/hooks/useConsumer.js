import { useConsumers } from './useConsumers';

export function useConsumer(id, options) {
  const { loading, error, response: consumers } = useConsumers(options);
  return {
    loading,
    response: consumers?.find?.((consumer) => consumer.id === id),
    error,
  };
}
