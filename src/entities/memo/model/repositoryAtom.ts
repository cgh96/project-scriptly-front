// entities/memo/model/repositoryAtom.ts
import { atom } from 'jotai';
import { getIndexedDB } from 'shared/lib/indexedDB';

import { memoRepository } from '../api';

export const memoRepositoryAtom = atom(async () => {
  const db = await getIndexedDB();
  return memoRepository({ db, useHttp: false });
});
