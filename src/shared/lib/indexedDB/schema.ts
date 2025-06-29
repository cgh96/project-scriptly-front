import type { IdbMemo } from '@/entities/memo/model/idb.types';

// shared/lib/indexed-db/schema.ts
export const DB_NAME = 'MemoApp';
export const DB_VERSION = 1;

interface IndexConfig<T> {
  name: keyof T;
  options?: IDBIndexParameters;
}

/**
 * schema 정의
 * @name : 테이블 이름
 * @options : 테이블 옵션
 * @indexes : 인덱스 정의
 * @keyPath : 기본 키 (Primary Key) => 단일키, 복합키 등 가능
 */
function createSchema<T>(name: string, keyPath: keyof T, indexes: Array<IndexConfig<T>>) {
  return {
    name,
    options: { keyPath },
    indexes: indexes.map((index) => ({
      name: index.name as string,
      keyPath: index.name as string,
      options: index.options || {},
    })),
  };
}

export const schema = {
  memo: createSchema<IdbMemo>('memos', 'id', [{ name: 'createdAt' }, { name: 'folderId' }]),
};
