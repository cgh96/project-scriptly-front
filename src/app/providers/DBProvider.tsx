'use client';
import { useAtomValue } from 'jotai';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

import { dbAtom } from '@/shared/model/dbAtom';

// dbAtom을 읽어서 초기화를 트리거만 하는 내부 컴포넌트
const DBInitializer = () => {
  useAtomValue(dbAtom);
  return null;
};

type DBProviderProps = { children: ReactNode };
export function DBProvider({ children }: DBProviderProps) {
  return (
    <Suspense fallback={<div>DB 로딩 중…</div>}>
      <DBInitializer />
      {children}
    </Suspense>
  );
}
