'use client';
import { RouterProvider } from 'react-router';

import { ViewPort } from '@/shared/ui/layout/ViewPort';

import { useTheme } from './providers/ThemeProvider';
import { router } from './routes';

function App() {
  const { theme } = useTheme();

  return (
    <ViewPort theme={theme}>
      <RouterProvider router={router} />
    </ViewPort>
  );
}

export default App;
