import { DB_NAME, DB_VERSION, schema } from './schema';

let dbInstance: Promise<IDBDatabase> | null = null;

export const openIndexedDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      // 스키마 배열을 순회하며 자동 생성
      Object.values(schema).forEach((schema) => {
        if (!db.objectStoreNames.contains(schema.name)) {
          const store = db.createObjectStore(schema.name, schema.options);

          // 인덱스 자동 생성
          schema.indexes?.forEach((index) => {
            store.createIndex(index.name, index.keyPath, index.options || {});
          });
        }
      });
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

/** 싱글톤으로 하나의 DB인스턴스만 갖도록 구현 */
export const getIndexedDB = (): Promise<IDBDatabase> => {
  if (!dbInstance) {
    dbInstance = openIndexedDB();
  }
  return dbInstance;
};
