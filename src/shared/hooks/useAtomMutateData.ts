import { type PrimitiveAtom, useAtom } from 'jotai';

import type { UseMutateDataOptions } from '../types';

export const useAtomMutateData = <TData, TPayload = void>(
  fetchFn: (params: TPayload) => Promise<TData>,
  dataAtom: PrimitiveAtom<TData>,
  loadingAtom: PrimitiveAtom<boolean>,
  errorAtom: PrimitiveAtom<string | null>,
  options?: UseMutateDataOptions<TData>,
) => {
  const [data, setData] = useAtom(dataAtom);
  const [loading, setLoading] = useAtom(loadingAtom);
  const [error, setError] = useAtom(errorAtom);

  const { onSuccess, onError, onSettled } = options || {};

  const mutate = async (payload: TPayload) => {
    setLoading(true);
    setError(null);

    let result: TData | null = null;
    let errorMessage: string | null = null;

    try {
      result = await fetchFn(payload);
      setData(result);
      onSuccess?.(result);
      return result;
    } catch (err) {
      errorMessage = err instanceof Error ? err.message : '오류 발생';
      setError(errorMessage);
      onError?.(errorMessage);
      return null;
    } finally {
      setLoading(false);
      onSettled?.(result, errorMessage);
    }
  };

  return {
    data,
    loading,
    error,
    mutate,
  };
};
