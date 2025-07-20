import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { MemoHeader, type UpdateMemoRequest } from '@/entities';
import { useGetMemo } from '@/entities/memo/lib/useGetMemo';
import { MarkdownEditor } from '@/features/memoEdit';
import { EmptyContent, Loading } from '@/shared/ui';

import * as S from './MemoPage.styles';

export const MemoPage = () => {
  const { memoId } = useParams();

  const { data: memo, loading } = useGetMemo(memoId);
  const [memoRequestParams, setMemoRequestParams] = useState<UpdateMemoRequest>({
    title: '',
    content: '',
    isPublic: false,
    isPinned: false,
  });

  // 메모 제목 변경 핸들러
  const handleChangeTitle = (title: string) => {
    setMemoRequestParams((prev) => ({
      ...prev,
      title,
    }));
  };

  // 메모 내용 변경 핸들러
  const handleChangeContent = (content: string) => {
    setMemoRequestParams((prev) => ({
      ...prev,
      content,
    }));
  };

  // 메모 데이터 초기화
  useEffect(() => {
    setMemoRequestParams((prev) => ({
      ...prev,
      ...memo,
    }));
  }, [memo]);

  if (loading) return <Loading />;

  return memo ? (
    <S.Container>
      <MemoHeader
        title={memoRequestParams.title}
        createdAt={memo.createdAt}
        titlePlaceholder="제목 없음"
        onChangeTitle={handleChangeTitle}
      />
      <MarkdownEditor content={memoRequestParams.content} onChangeContent={handleChangeContent} />
    </S.Container>
  ) : (
    <EmptyContent title="메모를 찾을 수 없습니다." />
  );
};
