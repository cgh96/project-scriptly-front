import type { CreateMemoRequest, Memo, UpdateMemoRequest } from '@/entities/memo/model/types';

export interface MemoRepository {
  getAll(): Promise<Memo[]>;
  getById(id: string): Promise<Memo | null>;
  create(memo: CreateMemoRequest): Promise<Memo>;
  update(id: string, memo: UpdateMemoRequest): Promise<Memo>;
  remove(id: string): Promise<void>;
}
