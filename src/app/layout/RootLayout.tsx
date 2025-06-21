import { Outlet } from 'react-router';

import { spacing } from '@/shared/config/styles';
import { FlexSplit } from '@/shared/ui/layout/FlexSplit';
import { Navigation } from '@/widgets/navigation/ui/Navigation';

export const RootLayout = () => {
  return (
    <FlexSplit $gap={spacing.sm}>
      <Navigation />
      <Outlet />
    </FlexSplit>
  );
};
