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
        50: '#fff8e1', // lightest yellow (amber-50 비슷)
        100: '#fef3c7', // light amber (amber-100)
        200: '#fde68a', // soft amber (amber-200)
        300: '#fcd34d', // vivid amber (amber-300)
        400: '#fbbf24', // bright amber (amber-400)
        500: '#f59e0b', // main primary - amber-500
        600: '#d97706', // dark amber (amber-600)
        700: '#b45309', // darker amber (amber-700)
        800: '#92400e', // deep amber (amber-800)
        900: '#78350f', // darkest amber (amber-900)
      },
      secondary: {
        50: '#f7f7f7', // very light neutral gray
        100: '#f5f5f4', // neutral-100
        200: '#e7e5e4', // neutral-200
        300: '#d6d3d1', // neutral-300
        400: '#a8a29e', // neutral-400
        500: '#78716c', // main secondary - neutral-500
        600: '#57534e', // neutral-600
        700: '#44403c', // neutral-700
        800: '#292524', // neutral-800
        900: '#1c1917', // neutral-900
      },
      gray: {
        50: '#fafafa', // gray-50
        100: '#f4f4f5', // gray-100
        200: '#e4e4e7', // gray-200
        300: '#d4d4d8', // gray-300
        400: '#a1a1aa', // gray-400
        500: '#71717a', // gray-500
        600: '#52525b', // gray-600
        700: '#3f3f46', // gray-700
        800: '#27272a', // gray-800
        900: '#18181b', // gray-900
      },
    },
    semantic: {
      success: '#059669', // emerald-600
      warning: '#d97706', // amber-600
      error: '#dc2626', // red-600
      info: '#0284c7', // sky-600
    },
    components: {
      primary: {
        hover: '#b45309', // amber-700
        active: '#92400e', // amber-800
        focus: '#fcd34d', // amber-300
        disabled: '#fde68a', // amber-200
      },
      secondary: {
        hover: '#57534e', // neutral-600
        active: '#44403c', // neutral-700
        focus: '#a8a29e', // neutral-400
        disabled: '#e7e5e4', // neutral-200
      },
      background: {
        default: '#fefdf8', // soft ivory tone
        surface: '#faf9f5', // light beige
        surfaceHover: '#f5f4f0', // slightly darker beige
      },
      text: {
        primary: '#292524', // neutral-800
        secondary: '#57534e', // neutral-600
        muted: '#78716c', // neutral-500
      },
      border: '#e7e5e0', // very light neutral
      divider: '#ebe8e1', // subtle line divider
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(41, 37, 36, 0.05)', // very soft shadow
    md: '0 4px 6px -1px rgba(41, 37, 36, 0.1)', // moderate shadow
    lg: '0 10px 15px -3px rgba(41, 37, 36, 0.1)', // stronger shadow
  },
  borderRadius: {
    sm: '4px', // small
    md: '8px', // medium
    lg: '16px', // large
  },
};

export const darkTheme: Theme = {
  colors: {
    palette: {
      primary: {
        50: '#eff6ff', // lightest blue (blue-50)
        100: '#dbeafe', // blue-100
        200: '#bfdbfe', // blue-200
        300: '#93c5fd', // blue-300
        400: '#60a5fa', // blue-400
        500: '#3b82f6', // main primary - blue-500
        600: '#2563eb', // blue-600
        700: '#1d4ed8', // blue-700
        800: '#1e3a8a', // deep blue - blue-800
        900: '#172554', // very deep blue - blue-900
      },
      secondary: {
        50: '#f9fafb', // neutral-50
        100: '#f3f4f6', // neutral-100
        200: '#e5e7eb', // neutral-200
        300: '#d1d5db', // neutral-300
        400: '#9ca3af', // neutral-400
        500: '#6b7280', // main secondary - neutral-500
        600: '#4b5563', // neutral-600
        700: '#374151', // neutral-700
        800: '#1f2937', // neutral-800
        900: '#111827', // neutral-900
      },
      gray: {
        50: '#f9fafb', // gray-50
        100: '#f3f4f6', // gray-100
        200: '#e5e7eb', // gray-200
        300: '#d1d5db', // gray-300
        400: '#9ca3af', // gray-400
        500: '#6b7280', // gray-500
        600: '#4b5563', // gray-600
        700: '#374151', // gray-700
        800: '#1f2937', // gray-800
        900: '#111827', // gray-900
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
        hover: '#2563eb', // blue-600
        active: '#1d4ed8', // blue-700
        focus: '#93c5fd', // blue-300
        disabled: '#60a5fa', // blue-400
      },
      secondary: {
        hover: '#d1d5db', // neutral-300
        active: '#9ca3af', // neutral-400
        focus: '#6b7280', // neutral-500
        disabled: '#4b5563', // neutral-600
      },
      background: {
        default: '#1a1a1a', // dark neutral bg
        surface: '#2d2d2d', // slightly lighter bg
        surfaceHover: '#3a3a3a', // hover surface
      },
      text: {
        primary: '#f0f0f0', // bright white-ish
        secondary: '#b0b0b0', // light gray
        muted: '#8a8a8a', // muted gray
      },
      border: '#404040', // dark border gray
      divider: '#4a4a4a', // divider line
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
