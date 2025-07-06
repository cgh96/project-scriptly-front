import { Provider as JotaiProvider } from 'jotai';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { store } from './shared/atoms';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JotaiProvider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </JotaiProvider>
  </StrictMode>,
);
