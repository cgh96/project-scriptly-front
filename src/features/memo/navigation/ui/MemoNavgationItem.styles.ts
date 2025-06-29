import styled from 'styled-components';

import { fontSizes, spacing } from '@/shared/config/styles';
import { ListItem } from '@/shared/ui/layout/ListItem';

export const MemoListItem = styled(ListItem)`
  width: 100%;
  padding: ${spacing.sm} 0;

  font-size: ${fontSizes.small};
  font-weight: 600;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
