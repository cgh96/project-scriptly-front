import type { CreateMemoRequest, Memo, UpdateMemoRequest } from '@/entities/memo/model/types';

import { createIdbMemoRepository } from './memo.idb.repository';

export interface MemoRepository {
  getMemos(): Promise<Memo[]>;
  getMemo(id: string): Promise<Memo>;
  createMemo(memo: CreateMemoRequest): Promise<Memo>;
  updateMemo(id: string, memo: UpdateMemoRequest): Promise<Memo>;
  deleteMemo(id: string): Promise<Memo>;
}

export interface MemoRepositoryOptions {
  useHttp: boolean;
  db?: IDBDatabase;
  // http?: AxiosInstance;
}

/**
 * IndexedDB는 의존성 주입 방식으로 구현.
 * Http / IndexedDB 중 무엇을 사용할지는 flag 값으로 결정.
 */

/** @TODO : Http 메모 리포지토리 생성 및 반환 */
export const memoRepository = ({ db, useHttp }: MemoRepositoryOptions): MemoRepository => {
  if (useHttp) {
    // Http 메모 리포지토리 생성 및 반환
  }

  return createIdbMemoRepository(db!);
};
