import 'styled-components';

// TypeScript 타입 정의
// 색상 관련 타입들
export interface ColorPalette {
  // Primary Colors
  primary: string;
  primaryHover: string;
  primaryLight: string;

  // Secondary Colors
  secondary: string;
  secondaryHover: string;
  secondaryLight: string;

  // Background Colors
  background: string;
  surface: string;
  surfaceHover: string;

  // Border & Divider
  border: string;
  divider: string;

  // Text Colors
  textPrimary: string;
  textSecondary: string;
  textMuted: string;

  // Status Colors
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface FontSizes {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  body: string;
  small: string;
  xs: string;
}

export interface LineHeights {
  tight: number;
  normal: number;
  relaxed: number;
}

export interface Breakpoints {
  mobile: string;
  tablet: string;
  desktop: string;
  wide: string;
}

export interface Spacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  ['2xl']: string;
  ['3xl']: string;
}

export interface Shadows {
  sm: string;
  md: string;
  lg: string;
}

// 메인 테마 타입
export interface Theme {
  colors: ColorPalette;
  lineHeights: LineHeights;
  fontSizes: FontSizes;
  breakpoints: Breakpoints;
  spacing: Spacing;
  shadows: Shadows;
}
