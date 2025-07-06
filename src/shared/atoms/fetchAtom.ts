import { atom, type PrimitiveAtom } from 'jotai';

export const createFetchAtom = <T>(
  dataAtom: PrimitiveAtom<T[]>,
  loadingAtom: PrimitiveAtom<boolean>,
  errorAtom: PrimitiveAtom<string | null>,
) => {
  return atom(null, async (_get, set, fetchFn: () => Promise<T[]>) => {
    set(loadingAtom, true);
    set(errorAtom, null);

    try {
      const data = await fetchFn(); // ← 전달받은 함수 실행
      set(dataAtom, data);
    } catch (error) {
      const message = error instanceof Error ? error.message : '조회 실패';
      set(errorAtom, message);
    } finally {
      set(loadingAtom, false);
    }
  });
};
