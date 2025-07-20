import { useState } from 'react';

import type { UseMutateDataOptions } from '../types';

export const useMutateData = <TData, TPayload = void>(options?: UseMutateDataOptions<TData>) => {
  const { onSuccess, onError, onSettled } = options ?? {};

  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const mutate = async (
    mutationFn: (payload: TPayload) => Promise<TData>,
    payload: TPayload,
  ): Promise<TData | null> => {
    setLoading(true);
    setError(null);

    let result: TData | null = null;
    let errorMessage: string | null = null;

    try {
      result = await mutationFn(payload);
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

  const reset = () => {
    setData(null);
    setError(null);
    setLoading(false);
  };

  return {
    mutate,
    data,
    error,
    loading,
    reset,
  };
};
