import { atom } from 'jotai';

import type { Memo } from './types';

export const memosAtom = atom<Memo[]>([]);
export const memosLoadingAtom = atom<boolean>(false);
export const memosErrorAtom = atom<string | null>(null);
