import { atom } from 'jotai';

import type { Memo } from './types';

export const memoAtom = atom<Memo | null>(null);
export const memoLoadingAtom = atom<boolean>(false);
export const memoErrorAtom = atom<string | null>(null);
