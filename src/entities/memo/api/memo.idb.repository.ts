import dayjs from 'dayjs';

import type { IdbMemo } from '@/entities/memo/model/idb.types';
import type { CreateMemoRequest, Memo, UpdateMemoRequest } from '@/entities/memo/model/types';
import { schema } from '@/shared/lib/indexedDB';

import type { MemoRepository } from './memo.repository';

const toDomain = (dbMemo: IdbMemo): Memo => ({
  id: dbMemo.id,
  title: dbMemo.title,
  content: dbMemo.content,
  createdAt: dayjs(dbMemo.createdAt).format('YYYY-MM-DD HH:mm:ss'),
  updatedAt: dayjs(dbMemo.updatedAt).format('YYYY-MM-DD HH:mm:ss'),
  isPinned: dbMemo.isPinned,
  isPublic: dbMemo.isPublic,
  password: dbMemo.password,
  folderId: dbMemo.folderId,
});

const toIdb = (memo: CreateMemoRequest): IdbMemo => ({
  id: crypto.randomUUID(),
  title: memo.title,
  content: memo.content,
  isPinned: false,
  isPublic: memo.isPublic,
  password: memo.password,
  folderId: memo.folderId,
  createdAt: dayjs().toISOString(), // UTC로 저장 (표준시간대)
  updatedAt: dayjs().toISOString(),
});

export const createIdbMemoRepository = (db: IDBDatabase): MemoRepository => {
  const getAll = async (): Promise<Memo[]> => {
    const transaction = db.transaction([schema.memo.name], 'readonly');
    const store = transaction.objectStore('memos');
    const request = store.getAll();

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        const idbMemos = request.result;
        resolve(idbMemos.map(toDomain));
      };
      request.onerror = () => reject(request.error);
    });
  };

  const getById = async (id: string): Promise<Memo | null> => {
    // 구현
  };

  const create = async (memo: CreateMemoRequest): Promise<Memo> => {
    const transaction = db.transaction([schema.memo.name], 'readwrite');
    const store = transaction.objectStore(schema.memo.name);
    const request = store.add(toIdb(memo));

    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(toDomain(request.result as unknown as IdbMemo));
      request.onerror = () => reject(request.error);
    });
  };

  const update = async (id: string, memo: UpdateMemoRequest): Promise<Memo> => {
    // 구현
  };

  const remove = async (id: string): Promise<void> => {
    // 구현
  };

  return {
    getAll,
    getById,
    create,
    update,
    remove,
  };
};
