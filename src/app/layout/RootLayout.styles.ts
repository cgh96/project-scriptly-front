import styled from 'styled-components';

import { spacing } from '@/shared/config/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacing.sm};

  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};

  height: 100%;
`;
