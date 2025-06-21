import styled from 'styled-components';

import type { Theme } from '@/shared/config/theme';

type ConatainerProps = {
  theme: Theme;
};

export const Conatainer = styled.ul<ConatainerProps>`
  display: flex;

  background-color: ${({ theme }) => theme.colors.components.background.surface};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;
