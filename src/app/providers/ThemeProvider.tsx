import type { ReactNode } from 'react';
import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { darkTheme, lightTheme, type Theme } from '@/shared/config/theme';

import { GlobalStyle } from '../styles/GlobalStyles.styles';

export type ThemeContext = {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
};

const themeContext = createContext<ThemeContext | undefined>(undefined);

export interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const contextValue: ThemeContext = {
    theme,
    isDark,
    toggleTheme,
  };

  return (
    <themeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        {children}
      </StyledThemeProvider>
    </themeContext.Provider>
  );
};

export const useTheme = (): ThemeContext => {
  const context = useContext(themeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
