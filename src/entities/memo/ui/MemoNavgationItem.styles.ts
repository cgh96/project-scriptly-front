import styled from 'styled-components';

import { fontSizes, spacing } from '@/shared/config/styles';
import type { Theme } from '@/shared/config/theme';
import { ListItem } from '@/shared/ui/layout/ListItem';

interface MemoListItemProps {
  $isSelected: boolean;
  theme: Theme;
}

export const MemoListItem = styled(ListItem)<MemoListItemProps>`
  width: 100%;
  padding: ${spacing.sm} 0;

  font-size: ${fontSizes.small};
  font-weight: 600;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.components.background.surfaceHover : 'transparent'};
`;
