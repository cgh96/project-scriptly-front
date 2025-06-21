import styled from 'styled-components';

import { type Spacing } from '@/shared/config/styles';

type FlexSplitProps = {
  direction?: 'row' | 'column';
  $gap?: Spacing;
};

/** Flex 사용해서 화면 분할 */
export const FlexSplit = styled.div<FlexSplitProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'row'};
  gap: ${({ $gap }) => $gap ?? 0};

  width: 100%;
  height: 100%;

  > *:last-child {
    flex-grow: 1;
  }
`;
