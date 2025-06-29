import styled from 'styled-components';

import type { Theme } from '@/shared/config/theme';

type ConatainerProps = {
  theme: Theme;
};

export const Conatainer = styled.nav<ConatainerProps>`
  display: flex;
  width: 200px;
  min-width: 200px;

  background-color: ${({ theme }) => theme.colors.components.background.surface};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;
