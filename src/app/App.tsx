import { RouterProvider } from 'react-router';

import { useTheme } from './providers/ThemeProvider';
import { router } from './routes';
import { GlobalStyle } from './styles/GlobalStyles.styles';

function App() {
  const { theme } = useTheme();

  return (
    <>
      <GlobalStyle theme={theme} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
