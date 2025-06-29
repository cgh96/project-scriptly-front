/**
 * store를 반환하는 트랜잭션 헬퍼
 */
export const getStore = (
  db: IDBDatabase,
  storeName: string,
  mode: IDBTransactionMode = 'readonly',
): IDBObjectStore => {
  return db.transaction([storeName], mode).objectStore(storeName);
};

/** transaction 내에서 작업 후, promise를 반환하는 헬퍼 */
export const executeTransaction = async <T>(
  db: IDBDatabase,
  storeName: string,
  mode: IDBTransactionMode = 'readonly',
  work: (store: IDBObjectStore) => IDBRequest | Promise<IDBRequest>,
): Promise<T> => {
  const store = getStore(db, storeName, mode);
  const request = await work(store);

  return new Promise<T>((resolve, reject) => {
    request.onsuccess = () => resolve(request.result as T);
    request.onerror = () => reject(request.error as T);
  });
};
