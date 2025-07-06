import { useAtom } from 'jotai';
import { useCallback } from 'react';

import {
  fetchMemosAtom,
  memoRepositoryAtom,
  memosAtom,
  memosErrorAtom,
  memosLoadingAtom,
} from '@/entities';
import { useAtomFetchData } from '@/shared/hooks/useAtomFetchData';

interface UseGetMemosOptions {
  immediate?: boolean;
  deps?: React.DependencyList;
}

export const useGetMemos = (options?: UseGetMemosOptions) => {
  const [repository] = useAtom(memoRepositoryAtom);
  const getMemos = useCallback(async () => await repository.getMemos(), [repository]);

  const { data, loading, error, refetch } = useAtomFetchData(
    getMemos,
    memosAtom,
    memosLoadingAtom,
    memosErrorAtom,
    fetchMemosAtom,
    options,
  );

  return { data, loading, error, refetch };
};
