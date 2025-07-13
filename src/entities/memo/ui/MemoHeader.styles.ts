import styled from 'styled-components';

import { fontSizes } from '@/shared/config/styles';

export const MemoHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreatedAt = styled.div`
  text-align: center;

  font-size: ${fontSizes.small};
  font-weight: 600;
`;

export const Title = styled.div`
  font-size: ${fontSizes.h3};
  font-weight: bold;
`;
