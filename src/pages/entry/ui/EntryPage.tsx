import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useGetMemos } from '@/features/memos';
import { buttonSizes } from '@/shared/config/styles';
import { PrimaryButton } from '@/shared/ui/button';
import { EmptyContent } from '@/shared/ui/empty/EmptyContent';
import { Page } from '@/shared/ui/layout/Page';
import { MemoEditorToolbar } from '@/widgets/memoEditorToolbar/ui';

/** 메모가 하나도 없을 때 보여줄 페이지 */
export const EntryPage = () => {
  const navigate = useNavigate();

  const { data: memos } = useGetMemos({ immediate: false });

  useEffect(() => {
    if (!memos.length) return;
    navigate(`/memo/${memos[0].id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, memos.length]);

  if (memos.length === 0) {
    return (
      <Page className="entry-page">
        <MemoEditorToolbar />
        <EmptyContent title="메모가 없습니다.">
          <PrimaryButton width="140px" size={buttonSizes.lg}>
            메모 추가
          </PrimaryButton>
        </EmptyContent>
      </Page>
    );
  }

  return (
    <Page>
      <MemoEditorToolbar />
    </Page>
  );
};
