export const fontSizes = {
  /** 36px */
  h1: '2.25rem',
  /** 30px */
  h2: '1.875rem',
  /** 24px */
  h3: '1.5rem',
  /** 20px */
  h4: '1.25rem',
  /** 18px */
  h5: '1.125rem',
  /** 16px */
  h6: '1rem',
  /** 14px */
  body: '1rem',
  /** 12px */
  small: '0.875rem',
  /** 12px */
  xs: '0.75rem',
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
  /** 4px */
  xs: '0.25rem',
  /** 8px */
  sm: '0.5rem',
  /** 16px */
  md: '1rem',
  /** 24px */
  lg: '1.5rem',
  /** 32px */
  xl: '2rem',
  /** 48px */
  '2xl': '3rem',
  /** 64px */
  '3xl': '4rem',
} as const;

export type Spacing = (typeof spacing)[keyof typeof spacing];

// radius
export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '16px',
} as const;

export type BorderRadius = (typeof borderRadius)[keyof typeof borderRadius];

export const componentSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;
export type ComponentSize = (typeof componentSize)[keyof typeof componentSize];
