import { useCallback, useState } from 'react';

export const useMutationData = <TData, TPayload = void>() => {
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const mutate = useCallback(
    async (
      mutationFn: (payload: TPayload) => Promise<TData>,
      payload: TPayload,
    ): Promise<TData | null> => {
      setLoading(true);
      setError(null);

      try {
        const result = await mutationFn(payload);
        setData(result);
        return result;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : '오류 발생';
        setError(errorMessage);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    mutate,
    data,
    error,
    loading,
    reset,
  };
};
