import dayjs from 'dayjs';

import type { IdbMemo } from '@/entities/memo/model/idb.types';
import type { CreateMemoRequest, Memo, UpdateMemoRequest } from '@/entities/memo/model/types';
import { schema } from '@/shared/lib/indexedDB';
import { executeTransaction } from '@/shared/lib/indexedDB/transaction';

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
    const idbMemos = await executeTransaction(db, schema.memo.name, 'readonly', (store) =>
      store.getAll(),
    );
    return (idbMemos as IdbMemo[]).map(toDomain);
  };

  const getById = async (id: string): Promise<Memo | null> => {
    const idbMemo = await executeTransaction(db, schema.memo.name, 'readonly', (store) =>
      store.get(id),
    );
    return idbMemo ? toDomain(idbMemo as IdbMemo) : null;
  };

  const create = async (memo: CreateMemoRequest): Promise<Memo> => {
    return await executeTransaction(db, schema.memo.name, 'readwrite', (store) =>
      store.add(toIdb(memo)),
    );
  };

  const update = async (id: string, memo: UpdateMemoRequest): Promise<Memo> => {
    const existingMemo = await getById(id);
    if (!existingMemo) {
      throw new Error(`Memo with id ${id} not found`);
    }

    const updatedMemo = { ...existingMemo, ...memo };
    return await executeTransaction(db, schema.memo.name, 'readwrite', (store) =>
      store.put(updatedMemo),
    );
  };

  const remove = async (id: string): Promise<void> => {
    return await executeTransaction(db, schema.memo.name, 'readwrite', (store) => store.delete(id));
  };

  return {
    getAll,
    getById,
    create,
    update,
    remove,
  };
};
