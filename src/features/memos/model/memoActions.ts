import { memosAtom, memosErrorAtom, memosLoadingAtom } from '@/entities';
import { memoRepository } from '@/entities/memo/api';
import { store } from '@/shared/atoms';

export const loadMemos = async (db: IDBDatabase) => {
  store.set(memosLoadingAtom, true);
  store.set(memosErrorAtom, null);

  try {
    const repository = memoRepository({ db, useHttp: false });
    const memos = await repository.getMemos();

    store.set(memosAtom, memos);
  } catch (error) {
    const message = error instanceof Error ? error.message : '메모 조회 실패';
    store.set(memosErrorAtom, message);
  } finally {
    store.set(memosLoadingAtom, false);
  }
};
