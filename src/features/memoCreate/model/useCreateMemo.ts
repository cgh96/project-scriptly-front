import { useAtom } from 'jotai';
import { useCallback } from 'react';

import { type CreateMemoRequest, type Memo, memoRepositoryAtom } from '@/entities';
import { useMutationData } from '@/shared/hooks/useMutateData';

export const useCreateMemo = () => {
  const [{ createMemo }] = useAtom(memoRepositoryAtom);
  const {
    mutate: mutateMemo,
    data,
    error,
    loading,
    reset,
  } = useMutationData<Memo, CreateMemoRequest>();

  const mutate = useCallback(
    (params: CreateMemoRequest) => {
      return mutateMemo(createMemo, params);
    },
    [mutateMemo, createMemo],
  );

  return {
    mutate,
    data,
    error,
    loading,
    reset,
  };
};
