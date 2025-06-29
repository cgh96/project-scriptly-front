import { useAtom } from 'jotai';
import { RouterProvider } from 'react-router';

import { dbAtom } from '@/shared/model/dbAtom';
import { ViewPort } from '@/shared/ui/layout/ViewPort';

import { useTheme } from './providers/ThemeProvider';
import { router } from './routes';
import { GlobalStyle } from './styles/GlobalStyles.styles';

function App() {
  const { theme } = useTheme();
  useAtom(dbAtom);

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
