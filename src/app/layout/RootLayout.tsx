import { Outlet } from 'react-router';

import { Navigation } from '@/widgets/navigation/ui/Navigation';

import * as S from './RootLayout.styles';

export const RootLayout = () => {
  return (
    <S.Container>
      {/* 좌측 */}
      <Navigation />

      {/* 우측 */}
      <S.Content>
        <Outlet />
      </S.Content>
    </S.Container>
  );
};
