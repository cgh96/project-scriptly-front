import type { Breakpoints, FontSizes, LineHeights, Theme } from '../types/styles.types';

export const fontSizes: FontSizes = {
  h1: '2.25rem', // 36px
  h2: '1.875rem', // 30px
  h3: '1.5rem', // 24px
  h4: '1.25rem', // 20px
  h5: '1.125rem', // 18px
  h6: '1rem', // 16px
  body: '1rem', // 16px
  small: '0.875rem', // 14px
  xs: '0.75rem', // 12px
};

export const lineHeights: LineHeights = {
  tight: 1.25,
  normal: 1.5,
  relaxed: 1.75,
};

export const breakpoints: Breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
};

// gap
export const spacing = {
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
};

export const lightTheme: Theme = {
  colors: {
    // Primary Colors
    primary: '#d97706', // amber-600 (따뜻한 주황빛)
    primaryHover: '#b45309', // amber-700
    primaryLight: '#fef3c7', // amber-100

    // Secondary Colors
    secondary: '#78716c', // stone-500
    secondaryHover: '#57534e', // stone-600
    secondaryLight: '#f5f5f4', // stone-100

    // Background Colors
    background: '#fefdf8', // 따뜻한 크림색
    surface: '#faf9f5', // 조금 더 진한 크림색
    surfaceHover: '#f5f4f0',

    // Border & Divider
    border: '#e7e5e0', // 따뜻한 회색 보더
    divider: '#ebe8e1',

    // Text Colors
    textPrimary: '#292524', // stone-800
    textSecondary: '#57534e', // stone-600
    textMuted: '#78716c', // stone-500

    // Status Colors
    success: '#059669', // emerald-600
    warning: '#d97706', // amber-600
    error: '#dc2626', // red-600
    info: '#0284c7', // sky-600
  },

  lineHeights,
  fontSizes,
  breakpoints,
  spacing,

  shadows: {
    sm: '0 1px 2px 0 rgba(41, 37, 36, 0.05)',
    md: '0 4px 6px -1px rgba(41, 37, 36, 0.1)',
    lg: '0 10px 15px -3px rgba(41, 37, 36, 0.1)',
  },
};

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    // Primary Colors
    primary: '#3b82f6', // blue-500
    primaryHover: '#2563eb', // blue-600
    primaryLight: '#1e3a8a', // blue-800

    // Secondary Colors
    secondary: '#9ca3af', // gray-400
    secondaryHover: '#d1d5db', // gray-300
    secondaryLight: '#374151', // gray-700

    // Background Colors
    background: '#111827', // gray-900
    surface: '#1f2937', // gray-800
    surfaceHover: '#374151', // gray-700

    // Border & Divider
    border: '#374151', // gray-700
    divider: '#4b5563', // gray-600

    // Text Colors
    textPrimary: '#f9fafb', // gray-50
    textSecondary: '#d1d5db', // gray-300
    textMuted: '#9ca3af', // gray-400

    // Status Colors
    success: '#10b981', // emerald-500
    warning: '#f59e0b', // amber-500
    error: '#ef4444', // red-500
    info: '#06b6d4', // cyan-500
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
  },
};
