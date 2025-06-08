import styled from 'styled-components';

import type { Gutter } from '@/shared/types/styles.types';
import { GUTTER } from '@/shared/types/styles.types';

type GridProps = {
  columnMinWidth?: string;
  gap?: Gutter;
  columns?: number; // 고정 컬럼 수
};

export const Grid = styled.div<GridProps>`
  display: grid;
  gap: ${({ gap }) => gap ?? GUTTER.sm};

  ${({ columnMinWidth, columns }) => {
    if (columns) {
      return `grid-template-columns: repeat(${columns}, 1fr);`;
    }

    // 컨테이너 너비에 맞춰서 아이템 채우기
    const minWidth = columnMinWidth || '310px';
    return `grid-template-columns: repeat(auto-fit, minmax(${minWidth}, 1fr));`;
  }}
`;
