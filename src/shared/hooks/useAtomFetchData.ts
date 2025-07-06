// shared/hooks/useAtomFetchData.ts
import { type PrimitiveAtom, useAtom, type WritableAtom } from 'jotai';
import { useCallback, useEffect } from 'react';

interface UseAtomFetchDataOptions {
  immediate?: boolean;
  deps?: React.DependencyList;
}

export const useAtomFetchData = <T>(
  fetchFn: () => Promise<T>,
  dataAtom: PrimitiveAtom<T>,
  loadingAtom: PrimitiveAtom<boolean>,
  errorAtom: PrimitiveAtom<string | null>,
  fetchAtom: WritableAtom<null, [() => Promise<T>], Promise<void>>,
  options?: UseAtomFetchDataOptions,
) => {
  const [data] = useAtom(dataAtom);
  const [loading] = useAtom(loadingAtom);
  const [error] = useAtom(errorAtom);
  const [, fetch] = useAtom(fetchAtom);

  const { immediate = true, deps = [] } = options || {};

  const refetch = useCallback(async () => {
    fetch(fetchFn);
  }, [fetch, fetchFn]);

  useEffect(() => {
    if (immediate) {
      refetch();
    }
  }, [immediate, refetch, ...deps]);

  return {
    data,
    error,
    loading,
    refetch,
  };
};
