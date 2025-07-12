import { Outlet } from 'react-router';

import { Page } from '@/shared/ui';
import { MemoEditorToolbar } from '@/widgets/memoEditorToolbar/ui';
import { Navigation } from '@/widgets/navigation/ui/Navigation';

import * as S from './RootLayout.styles';

export const RootLayout = () => {
  return (
    <S.Container>
      {/* 좌측 */}
      <Navigation />

      {/* 우측 */}
      <S.Content>
        <MemoEditorToolbar />
        <Page className="root-layout">
          <Outlet />
        </Page>
      </S.Content>
    </S.Container>
  );
};
