import styled from 'styled-components';

import type { Theme } from '@/shared/config/theme';

interface ViewPortProps {
  theme: Theme;
}

export const ViewPort = styled.div<ViewPortProps>`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.components.background.default};
`;
