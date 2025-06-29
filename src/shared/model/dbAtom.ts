import { atom } from 'jotai';

import { getIndexedDB } from '../lib/indexedDB';

export const dbAtom = atom(async () => {
  // indexedDB는 비동기 작업이므로 async/await 사용
  return await getIndexedDB();
});
