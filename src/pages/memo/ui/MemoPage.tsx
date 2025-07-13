import { useParams } from 'react-router';

import { MemoHeader } from '@/entities';
import { useGetMemo } from '@/entities/memo/lib/useGetMemo';
import { MarkdownEditor } from '@/features/memoEdit';
import { EmptyContent } from '@/shared/ui';

import * as S from './MemoPage.styles';

export const MemoPage = () => {
  const { memoId } = useParams();

  const { data: memo } = useGetMemo(memoId);

  return memo ? (
    <S.Container>
      <MemoHeader title={memo.title} createdAt={memo.createdAt} titlePlaceholder="제목 없음" />
      <MarkdownEditor content={memo.content} />
    </S.Container>
  ) : (
    <EmptyContent title="메모를 찾을 수 없습니다." />
  );
};
