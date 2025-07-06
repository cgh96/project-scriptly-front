import type { CreateMemoRequest, Memo, UpdateMemoRequest } from '@/entities/memo/model/types';
import { getIndexedDB } from '@/shared/lib/indexedDB';

import { createHttpMemoRepository } from './memo.http.repository';
import { createIdbMemoRepository } from './memo.idb.repository';

export interface MemoRepository {
  getMemos(): Promise<Memo[]>;
  getMemo(id: string): Promise<Memo>;
  createMemo(memo: CreateMemoRequest): Promise<Memo>;
  updateMemo(id: string, memo: UpdateMemoRequest): Promise<Memo>;
  deleteMemo(id: string): Promise<Memo>;
}

/** repository 인스턴스 관리 (싱글톤) */
let idbMemoRepository: MemoRepository | null = null;
let httpMemoRepository: MemoRepository | null = null;

export const getIdbMemoRepository = async (): Promise<MemoRepository> => {
  if (!idbMemoRepository) {
    const db = await getIndexedDB();
    idbMemoRepository = createIdbMemoRepository(db);
  }
  return idbMemoRepository;
};

/** @TODO: Http 메모 리포지토리 생성 및 반환 */
export const getHttpMemoRepository = async () => {
  if (!httpMemoRepository) {
    httpMemoRepository = createHttpMemoRepository();
  }
  return httpMemoRepository;
};
