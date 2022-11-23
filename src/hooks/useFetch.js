/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';

export function useFetch(endpoint, options) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetch(endpoint, options)
      .then((res) => res.json())
      .then((json) => setResponse(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { loading, error, response };
}
