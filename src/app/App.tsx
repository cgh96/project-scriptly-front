'use client';
import { RouterProvider } from 'react-router';

import { setViewportHeight } from '@/shared/lib/utils/setViewPortHeight';
import { ViewPort } from '@/shared/ui/layout/ViewPort';

import { useTheme } from './providers/ThemeProvider';
import { router } from './routes';

function App() {
  setViewportHeight();
  const { theme } = useTheme();

  return (
    <ViewPort theme={theme}>
      <RouterProvider router={router} />
    </ViewPort>
  );
}

export default App;
