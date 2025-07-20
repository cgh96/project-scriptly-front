import styled from 'styled-components';

import { type Spacing, spacing } from '@/shared/config/styles';
import type { Theme } from '@/shared/config/theme';

interface ListItemProps {
  theme: Theme;
  padding?: Spacing;
}

export const ListItem = styled.li<ListItemProps>`
  width: 100%;
  padding: ${({ padding }) => padding ?? `${spacing.sm}`};
  background-color: ${({ theme }) => theme.colors.components.background.surface};

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.components.border};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.components.background.surfaceHover};
  }

  cursor: pointer;
`;
