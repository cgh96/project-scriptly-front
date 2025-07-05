import { MemoNavigationItem } from '@/entities/memo/ui/MemoNavigationItem';
import { mockMemos } from '@/shared/mock/memo';
import { EmptyContent } from '@/shared/ui/empty/EmptyContent';
import { List } from '@/shared/ui/layout/List';

export const MemoNavigation = () => {
  return (
    <>
      {mockMemos.length > 0 ? (
        <List>
          {mockMemos.map((memo) => (
            <MemoNavigationItem key={memo.id} memo={memo} />
          ))}
        </List>
      ) : (
        <EmptyContent title="메모 없음" />
      )}
    </>
  );
};
