import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useGetMemos } from '@/entities/memo/lib';
import { buttonSizes } from '@/shared/config/styles';
import { PrimaryButton } from '@/shared/ui/button';
import { EmptyContent } from '@/shared/ui/empty/EmptyContent';

/** 메모가 하나도 없을 때 보여줄 페이지 */
export const EntryPage = () => {
  const navigate = useNavigate();

  const { data: memos } = useGetMemos({ immediate: false });

  useEffect(() => {
    if (!memos.length) return;
    navigate(`/memo/${memos[0].id}`);
  }, [navigate, memos.length, memos]);

  if (memos.length === 0) {
    return (
      <EmptyContent title="메모가 없습니다.">
        <PrimaryButton width="140px" size={buttonSizes.lg}>
          메모 추가
        </PrimaryButton>
      </EmptyContent>
    );
  }

  return null;
};
