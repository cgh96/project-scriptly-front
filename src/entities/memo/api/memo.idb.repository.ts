import type { IdbMemo } from '@/entities/memo/model/idb.types';
import type { CreateMemoRequest, Memo, UpdateMemoRequest } from '@/entities/memo/model/types';

import type { MemoRepository } from './memo.repository';

export class IdbMemoRepository implements MemoRepository {
  // IndexedDB는 외부에서 (의존성 주입)
  constructor(private readonly db: IDBDatabase) {}

  private toDomain(dbMemo: IdbMemo): Memo {
    return {
      id: dbMemo.id,
      title: dbMemo.title,
      content: dbMemo.content,
      createdAt: dbMemo.createdAt,
      updatedAt: dbMemo.updatedAt,
      isPinned: dbMemo.isPinned,
      isPublic: dbMemo.isPublic,
      password: dbMemo.password,
      folderId: dbMemo.folderId,
    };
  }

  private toIdb(memo: Memo): IdbMemo {
    return {
      id: memo.id,
      title: memo.title,
      content: memo.content,
      createdAt: memo.createdAt,
      updatedAt: memo.updatedAt,
      isPinned: memo.isPinned,
      isPublic: memo.isPublic,
      password: memo.password,
      folderId: memo.folderId,
    };
  }

  async getAll(): Promise<Memo[]> {
    // IndexedDB 구현
  }

  getById(id: string): Promise<Memo | null> {
    throw new Error('Method not implemented.');
  }

  create(memo: CreateMemoRequest): Promise<Memo> {
    throw new Error('Method not implemented.');
  }

  update(id: string, memo: UpdateMemoRequest): Promise<Memo> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
