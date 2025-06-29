'use client';
import { useAtomValue } from 'jotai';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

import { dbAtom } from '@/shared/atoms';
import { Loading } from '@/shared/ui/loading/Loading';

// dbAtom을 읽어서 초기화를 트리거만 하는 내부 컴포넌트
const DBInitializer = () => {
  useAtomValue(dbAtom);
  return null;
};

type DBProviderProps = { children: ReactNode };

export function DBProvider({ children }: DBProviderProps) {
  return (
    <Suspense fallback={<Loading message="데이터베이스를 불러오는 중입니다." />}>
      <DBInitializer />
      {children}
    </Suspense>
  );
}
