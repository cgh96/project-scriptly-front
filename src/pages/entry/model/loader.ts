import { memoApi } from '@/entities/memo/api';
import type { Memo } from '@/entities/memo/model/types';

export interface EntryLoaderData {
  memos: Memo[];
}

export const entryLoader = async () => {
  const memos = await memoApi.getMemos(); // 이때 API 호출
  return { memos };
};
