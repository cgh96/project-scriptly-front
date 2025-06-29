import { Provider as JotaiProvider } from 'jotai';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app/App';
import { DBProvider } from './app/providers/DBProvider';
import { ThemeProvider } from './app/providers/ThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JotaiProvider>
      <ThemeProvider>
        <DBProvider>
          <App />
        </DBProvider>
      </ThemeProvider>
    </JotaiProvider>
  </StrictMode>,
);
