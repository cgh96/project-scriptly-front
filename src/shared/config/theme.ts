import 'styled-components';

// 색상 계층
export interface PaletteShades {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

// 색상 상태 (상호작용 상태)
export interface StateColors {
  hover: string;
  active: string;
  focus: string;
  disabled: string;
}

// 의미 기반 색상
export interface SemanticColors {
  success: string;
  warning: string;
  error: string;
  info: string;
}

// 버튼 등 컴포넌트 목적에 따른 색상
export interface ComponentColors {
  primary: StateColors;
  secondary: StateColors;
  background: {
    default: string;
    surface: string;
    surfaceHover: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
  border: string;
  divider: string;
}

// 전체 테마 색상
export interface ColorPalette {
  palette: {
    primary: PaletteShades;
    secondary: PaletteShades;
    gray: PaletteShades;
  };
  semantic: SemanticColors;
  components: ComponentColors;
}

// 그림자
export interface Shadows {
  sm: string;
  md: string;
  lg: string;
}

// 테마 전체 타입
export interface Theme {
  colors: ColorPalette;
  shadows: Shadows;
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    palette: {
      primary: {
        50: '#fff8e1',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
      },
      secondary: {
        50: '#f7f7f7',
        100: '#f5f5f4',
        200: '#e7e5e4',
        300: '#d6d3d1',
        400: '#a8a29e',
        500: '#78716c',
        600: '#57534e',
        700: '#44403c',
        800: '#292524',
        900: '#1c1917',
      },
      gray: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
      },
    },
    semantic: {
      success: '#059669',
      warning: '#d97706',
      error: '#dc2626',
      info: '#0284c7',
    },
    components: {
      primary: {
        hover: '#b45309',
        active: '#92400e',
        focus: '#fcd34d',
        disabled: '#fde68a',
      },
      secondary: {
        hover: '#57534e',
        active: '#44403c',
        focus: '#a8a29e',
        disabled: '#e7e5e4',
      },
      background: {
        default: '#fefdf8',
        surface: '#faf9f5',
        surfaceHover: '#f5f4f0',
      },
      text: {
        primary: '#292524',
        secondary: '#57534e',
        muted: '#78716c',
      },
      border: '#e7e5e0',
      divider: '#ebe8e1',
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(41, 37, 36, 0.05)',
    md: '0 4px 6px -1px rgba(41, 37, 36, 0.1)',
    lg: '0 10px 15px -3px rgba(41, 37, 36, 0.1)',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
};

export const darkTheme: Theme = {
  colors: {
    palette: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e3a8a',
        900: '#172554',
      },
      secondary: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
    },
    semantic: {
      success: '#10b981', // emerald-500
      warning: '#f59e0b', // amber-500
      error: '#ef4444', // red-500
      info: '#06b6d4', // cyan-500
    },
    components: {
      primary: {
        hover: '#2563eb',
        active: '#1d4ed8',
        focus: '#93c5fd',
        disabled: '#60a5fa',
      },
      secondary: {
        hover: '#d1d5db',
        active: '#9ca3af',
        focus: '#6b7280',
        disabled: '#4b5563',
      },
      background: {
        default: '#1a1a1a', // neutral-900 스타일
        surface: '#2d2d2d', // neutral-800
        surfaceHover: '#3a3a3a', // neutral-700
      },
      text: {
        primary: '#f0f0f0',
        secondary: '#b0b0b0',
        muted: '#8a8a8a',
      },
      border: '#404040',
      divider: '#4a4a4a',
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.4)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
};
