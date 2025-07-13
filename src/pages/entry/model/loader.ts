import { getIdbMemoRepository } from '@/entities/memo/api';
import type { Memo } from '@/entities/memo/model/types';

export interface EntryLoaderData {
  memos: Memo[];
}

export const entryLoader = async () => {
  const repository = await getIdbMemoRepository();
  const memos = await repository.getMemos();

  return { memos };
};
