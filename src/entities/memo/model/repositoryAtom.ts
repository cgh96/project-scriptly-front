// entities/memo/model/repositoryAtom.ts
import { getIndexedDB } from '@shared/lib/indexedDB';
import { atom } from 'jotai';

import { memoRepository } from '../api';

export const memoRepositoryAtom = atom(async () => {
  const db = await getIndexedDB();
  return memoRepository({ db, useHttp: false });
});
