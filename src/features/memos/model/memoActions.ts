import { memosAtom, memosErrorAtom, memosLoadingAtom } from '@/entities';
import { getIdbMemoRepository } from '@/entities/memo/api';
import { store } from '@/shared/atoms';

/** IndexedDB에 저장된 메모 데이터를 가져와서 atoms에 저장 */
export const loadIdbMemos = async () => {
  store.set(memosLoadingAtom, true);
  store.set(memosErrorAtom, null);

  try {
    const repository = await getIdbMemoRepository();
    const memos = await repository.getMemos();

    store.set(memosAtom, memos);
  } catch (error) {
    const message = error instanceof Error ? error.message : '메모 조회 실패';
    store.set(memosErrorAtom, message);
  } finally {
    store.set(memosLoadingAtom, false);
  }
};
