import { createBrowserRouter } from 'react-router';

import { HomePage } from '@/pages/home/ui/HomePage';
import { MemoPage } from '@/pages/memo/ui/MemoPage';
import { RootLayout } from '@/shared/ui/layout/RootLayout';

/** React Router (Data Mode)
 * Data Mode vs FrameworkMode
 *
 * 복잡한 앱, 서버 중심의 설계 지향 → Data 모드(Framework 모드) 추천
 * 간단한 SPA, 기존 방식 익숙 → 일반 모드도 충분
 *
 * React Router 팀이 공식적으로는 **Data 모드(Framework 스타일)**를 권장하고 있음.
 * 특히 React Router v6.4+ 문서는 전부 Data APIs 기반으로 작성됨.
 */

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'memo/:memoId',
        Component: MemoPage,
      },
    ],
  },
]);
