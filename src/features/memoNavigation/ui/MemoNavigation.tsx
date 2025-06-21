import { mockMemos } from '@/shared/mock/memo';
import { List } from '@/shared/ui/layout/List';

import { MemoNavigationItem } from './MemoNavigationItem';

export const MemoNavigation = () => {
  return (
    <List>
      {mockMemos.map((memo) => (
        <MemoNavigationItem key={memo.id} memo={memo} />
      ))}
    </List>
  );
};
