import "styled-components";

// TypeScript 타입 정의
// 색상 관련 타입들
interface ColorPalette {
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

interface FontSizes {
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

interface LineHeights {
  tight: number;
  normal: number;
  relaxed: number;
}

interface Breakpoints {
  mobile: string;
  tablet: string;
  desktop: string;
  wide: string;
}

interface Shadows {
  sm: string;
  md: string;
  lg: string;
}

// 메인 테마 타입
export interface Theme {
  colors: ColorPalette;
  fonts: FontSizes;
  lineHeights: LineHeights;
  breakpoints: Breakpoints;
  shadows: Shadows;
}
