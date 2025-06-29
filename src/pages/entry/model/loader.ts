import { memoRepository } from '@/entities/memo/api';
import type { Memo } from '@/entities/memo/model/types';
import { getIndexedDB } from '@/shared/lib/indexedDB';

export interface EntryLoaderData {
  memos: Memo[];
}

export const entryLoader = async () => {
  const db = await getIndexedDB();
  const memos = await memoRepository({ db, useHttp: false }).getMemos();

  return { memos };
};
