import { Outlet } from 'react-router';

import { spacing } from '@/shared/config/styles';
import { Navigation } from '@/widgets/navigation/ui/Navigation';

import { FlexSplit } from '../shared/ui/layout/FlexSplit';

export const RootLayout = () => {
  return (
    <FlexSplit gap={spacing.sm}>
      <Navigation />
      <Outlet />
    </FlexSplit>
  );
};
