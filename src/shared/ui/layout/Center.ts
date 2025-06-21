import styled from 'styled-components';

import { spacing } from '@/shared/config/styles';

type CenterProps = {
  padding?: string;
};

export const Center = styled.div<CenterProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: ${({ padding }) => (padding ? padding : `${spacing.sm}`)};
`;
