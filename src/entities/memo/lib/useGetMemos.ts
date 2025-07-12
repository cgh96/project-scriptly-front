import { fetchMemosAtom, memosAtom, memosErrorAtom, memosLoadingAtom } from '@/entities';
import { getIdbMemoRepository } from '@/entities/memo/api';
import { useAtomFetchData } from '@/shared/hooks/useAtomFetchData';

interface UseGetMemosOptions {
  useHttp?: boolean;
  immediate?: boolean;
  deps?: React.DependencyList;
}

export const useGetMemos = (options?: UseGetMemosOptions) => {
  const getMemos = async () => {
    // @TODO : Http 메모 리포지토리 추가 시 조건부 처리
    const repository = await getIdbMemoRepository();
    return await repository.getMemos();
  };

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
