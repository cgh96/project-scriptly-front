import { type PrimitiveAtom, useAtom } from 'jotai';
import { useEffect } from 'react';

interface UseAtomFetchDataOptions {
  immediate?: boolean;
  deps?: React.DependencyList;
}

export const useAtomFetchData = <T>(
  fetchFn: () => Promise<T>,
  dataAtom: PrimitiveAtom<T>,
  loadingAtom: PrimitiveAtom<boolean>,
  errorAtom: PrimitiveAtom<string | null>,
  options?: UseAtomFetchDataOptions,
) => {
  const [data, setData] = useAtom(dataAtom);
  const [loading, setLoading] = useAtom(loadingAtom);
  const [error, setError] = useAtom(errorAtom);

  const { immediate = true, deps = [] } = options || {};

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchFn();
      setData(result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '조회 실패';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

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
