import { useCallback, useEffect, useState } from 'react';

export interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseFetchDataOptions {
  immediate?: boolean; // 즉시 실행할지 여부
  deps?: React.DependencyList; // 의존성 배열
}

export const useFetchData = <T>(fetchFn: () => Promise<T>, options?: UseFetchDataOptions) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { immediate = true, deps = [] } = options ? options : {};

  const refetch = useCallback(async () => {
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
  }, [fetchFn]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  useEffect(() => {
    if (immediate) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [immediate, refetch, ...deps]);

  return {
    data,
    error,
    loading,
    refetch,
    setData,
    clearError,
  };
};
