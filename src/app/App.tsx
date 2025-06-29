'use client';
import { RouterProvider } from 'react-router';

import { ViewPort } from '@/shared/ui/layout/ViewPort';

import { DBProvider } from './providers/DBProvider';
import { useTheme } from './providers/ThemeProvider';
import { router } from './routes';
import { GlobalStyle } from './styles/GlobalStyles.styles';

function App() {
  const { theme } = useTheme();

  return (
    <DBProvider>
      <GlobalStyle theme={theme} />
      <ViewPort theme={theme}>
        <RouterProvider router={router} />
      </ViewPort>
    </DBProvider>
  );
}

export default App;
