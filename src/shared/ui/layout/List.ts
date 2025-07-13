import styled from 'styled-components';

import { spacing } from '@/shared/config/styles';

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: ${spacing.sm};

  overflow-y: auto;
`;
