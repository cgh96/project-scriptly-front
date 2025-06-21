export const fontSizes = {
  h1: '2.25rem', // 36px
  h2: '1.875rem', // 30px
  h3: '1.5rem', // 24px
  h4: '1.25rem', // 20px
  h5: '1.125rem', // 18px
  h6: '1rem', // 16px
  body: '1rem', // 16px
  small: '0.875rem', // 14px
  xs: '0.75rem', // 12px
} as const;

export type FontSizes = (typeof fontSizes)[keyof typeof fontSizes];

export const lineHeights = {
  tight: 1.25,
  normal: 1.5,
  relaxed: 1.75,
} as const;

export type LineHeights = (typeof lineHeights)[keyof typeof lineHeights];

export const breakPoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
};

export type BreakPoints = (typeof breakPoints)[keyof typeof breakPoints];

// gap
export const spacing = {
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
} as const;

export type Spacing = (typeof spacing)[keyof typeof spacing];
