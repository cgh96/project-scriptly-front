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

/**
 * 트랜잭션 헬퍼 함수
 * work 콜백은 항상 Promise<T>를 반환
 */
export async function executeTransaction<T>(
  db: IDBDatabase,
  storeName: string,
  mode: IDBTransactionMode = 'readonly',
  work: (store: IDBObjectStore) => Promise<T | undefined>,
): Promise<T | undefined> {
  const store = getStore(db, storeName, mode);
  const result = await work(store);
  return result;
}
