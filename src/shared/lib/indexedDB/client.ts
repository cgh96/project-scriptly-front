// shared/lib/indexed-db/connection.ts
import { DB_NAME, DB_VERSION, schemas } from './schema';

export const getIndexedDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      // 스키마 배열을 순회하며 자동 생성
      schemas.forEach((schema) => {
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
