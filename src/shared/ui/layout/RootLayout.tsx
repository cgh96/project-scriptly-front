import { Outlet } from 'react-router';

import { Navigation } from '@/widgets/navigation/ui/Navigation';

import { FlexSplit } from './FlexSplit';

export const RootLayout = () => {
  return (
    <FlexSplit>
      <Navigation />
      <Outlet />
    </FlexSplit>
  );
};
