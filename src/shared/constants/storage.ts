/** 로컬 스토리지 Key를 관리하기 위한 파일 */

export const STORAGE_API_KEY = {
  MEMOS: 'MEMOS',
} as const;

export const storage = {
  get: <T>(key: string): T | null => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Failed to get item from localStorage: ${key}`, error);
      return null;
    }
  },

  set: <T>(key: string, value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Failed to set item in localStorage: ${key}`, error);
      throw new Error(`Failed to save ${key}`);
    }
  },

  remove: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Failed to remove item from localStorage: ${key}`, error);
    }
  },

  clear: (): void => {
    try {
      // API_KEY 관련 값들만 삭제
      Object.values(STORAGE_API_KEY).forEach((key) => {
        localStorage.removeItem(key);
      });
    } catch (error) {
      console.error('Failed to clear app data from localStorage', error);
    }
  },
};
