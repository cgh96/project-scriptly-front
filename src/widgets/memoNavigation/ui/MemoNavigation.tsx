import { useGetMemos } from '@/entities/memo/lib';
import { MemoNavigationItem } from '@/entities/memo/ui/MemoNavigationItem';
import { EmptyContent } from '@/shared/ui/empty/EmptyContent';
import { List } from '@/shared/ui/layout/List';

export const MemoNavigation = () => {
  const { data: memos } = useGetMemos({ immediate: false });

  return (
    <>
      {memos.length > 0 ? (
        <List>
          {memos.map((memo) => (
            <MemoNavigationItem key={memo.id} memo={memo} />
          ))}
        </List>
      ) : (
        <EmptyContent title="메모 없음" />
      )}
    </>
  );
};
