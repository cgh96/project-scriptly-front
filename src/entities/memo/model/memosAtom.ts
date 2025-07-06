import { atom } from 'jotai';

import { createFetchAtom } from '@/shared/atoms';

import type { Memo } from './types';

export const memosAtom = atom<Memo[]>([]);
export const memosLoadingAtom = atom<boolean>(false);
export const memosErrorAtom = atom<string | null>(null);

// 메모 목록 가져오기 액션 atom
export const fetchMemosAtom = createFetchAtom(memosAtom, memosLoadingAtom, memosErrorAtom);
