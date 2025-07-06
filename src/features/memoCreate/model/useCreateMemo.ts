import { useCallback } from 'react';

import { type CreateMemoRequest, type Memo } from '@/entities';
import { getIdbMemoRepository } from '@/entities/memo/api';
import { useMutationData } from '@/shared/hooks/useMutateData';

interface UseCreateMemoOptions {
  useHttp?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useCreateMemo = (options?: UseCreateMemoOptions) => {
  const createMemo = async (params: CreateMemoRequest) => {
    // @TODO : Http 메모 리포지토리 추가 시 조건부 처리
    const repository = await getIdbMemoRepository();
    return await repository.createMemo(params);
  };

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
    [mutateMemo],
  );

  return {
    mutate,
    data,
    error,
    loading,
    reset,
  };
};
