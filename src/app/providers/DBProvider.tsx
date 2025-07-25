'use client';
import { useAtomValue } from 'jotai';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

import { dbAtom } from '@/shared/atoms';
import { IndexedDBLoading } from '@/shared/ui/loading/IndexedDBLoading';

// dbAtom을 읽어서 초기화를 트리거만 하는 내부 컴포넌트
const DBInitializer = () => {
  useAtomValue(dbAtom);
  return null;
};

interface DBProviderProps {
  children: ReactNode;
}

export function DBProvider({ children }: DBProviderProps) {
  return (
    <Suspense fallback={<IndexedDBLoading />}>
      <DBInitializer />
      {children}
    </Suspense>
  );
}
