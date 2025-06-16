import { RouterProvider } from 'react-router';

import { ViewPort } from '@/shared/ui/layout/ViewPort';

import { useTheme } from './providers/ThemeProvider';
import { router } from './routes';
import { GlobalStyle } from './styles/GlobalStyles.styles';

function App() {
  const { theme } = useTheme();

  return (
    <>
      <GlobalStyle theme={theme} />
      <ViewPort theme={theme}>
        <RouterProvider router={router} />
      </ViewPort>
    </>
  );
}

export default App;
