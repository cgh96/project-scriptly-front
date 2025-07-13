import { useGetMemos } from '@/entities/memo/lib';
import { MemoNavigationItem } from '@/entities/memo/ui/MemoNavigationItem';
import { EmptyContent } from '@/shared/ui/empty/EmptyContent';

import * as S from './MemoNavigation.styles';

export const MemoNavigation = () => {
  const { data: memos } = useGetMemos({ immediate: false });

  return (
    <>
      {memos.length > 0 ? (
        <S.MemoList>
          {memos.map((memo) => (
            <MemoNavigationItem key={memo.id} memo={memo} />
          ))}
        </S.MemoList>
      ) : (
        <EmptyContent title="메모 없음" />
      )}
    </>
  );
};
