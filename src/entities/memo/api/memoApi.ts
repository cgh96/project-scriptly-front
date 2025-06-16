import { STORAGE_API_KEY } from '@/shared/constants';
import { storage } from '@/shared/constants/storage';

import type { CreateMemoRequest, Memo, UpdateMemoRequest } from '../model/types';

// localStorage 헬퍼 함수 - Memo가져오기
const getMemos = (): Memo[] => {
  const memos = storage.get<Memo[]>(STORAGE_API_KEY.MEMOS);
  return memos ?? [];
};

// localStorage 헬퍼 함수 - Memo저장하기
const saveMemos = (memos: Memo[]): void => {
  storage.set(STORAGE_API_KEY.MEMOS, memos);
};

const generateId = (): string => {
  return `memo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const memoApi = {
  getMemos,

  getMemo: (id: string) => {
    const memos = getMemos();
    return memos.filter((memo) => id === memo.id);
  },

  createMemo: (data: CreateMemoRequest) => {
    const memos = getMemos();
    const now = new Date();

    const newMemo: Memo = {
      id: generateId(),
      title: data.title,
      content: data.content,
      createdAt: now,
      updatedAt: now,
      isPublic: data.isPublic,
      isPinned: false,
      isActive: false,
      tags: [],
    };

    const updatedMemos = [...memos, newMemo];
    saveMemos(updatedMemos);
  },

  updateMemo: (id: string, data: UpdateMemoRequest): Memo => {
    const memos = getMemos();
    const memoIndex = memos.findIndex((memo) => memo.id === id);

    if (memoIndex === -1) {
      throw new Error(`Memo with id ${id} not found`);
    }

    const currentMemo = memos[memoIndex];

    // 업데이트된 메모 생성 (변경된 필드만 덮어쓰기)
    const updatedMemo: Memo = {
      ...currentMemo,
      ...data,
      updatedAt: new Date(), // 항상 업데이트 시간 갱신
    };

    // 배열에서 해당 메모 교체
    memos[memoIndex] = updatedMemo;
    saveMemos(memos);

    return updatedMemo;
  },

  deleteMemo: (id: string): boolean => {
    const memos = getMemos();
    const filteredMemos = memos.filter((memo) => memo.id !== id);

    // 삭제할 메모가 없었던 경우
    if (filteredMemos.length === memos.length) {
      throw new Error(`Memo with id ${id} not found`);
    }

    saveMemos(filteredMemos);
    return true;
  },
};
