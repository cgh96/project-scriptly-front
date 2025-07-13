import { useParams } from 'react-router';

import { useTheme } from '@/app/providers/ThemeProvider';
import type { Memo } from '@/entities/memo/model/types';

import { MemoListItem } from './MemoNavgationItem.styles';

type MemoNavigationItemProps = {
  memo: Memo;
};

export const MemoNavigationItem = ({ memo }: MemoNavigationItemProps) => {
  const { theme } = useTheme();
  const { memoId } = useParams();

  return (
    <MemoListItem theme={theme} isSelected={memoId === memo.id}>
      {memo.title}
    </MemoListItem>
  );
};
