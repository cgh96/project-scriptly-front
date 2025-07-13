import { useCallback, useEffect, useState } from 'react';

import type { UseFetchDataOptions } from '../types';

export const useFetchData = <T>(fetchFn: () => Promise<T>, options?: UseFetchDataOptions) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { immediate = true, deps = [] } = options ? options : {};

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchFn();
      setData(result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '';

      setError(errorMessage);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  useEffect(() => {
    if (immediate) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [immediate, ...deps]);

  return {
    data,
    error,
    loading,
    refetch,
    setData,
    clearError,
  };
};
