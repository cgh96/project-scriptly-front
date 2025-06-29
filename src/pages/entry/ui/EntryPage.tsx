import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router';

import { buttonSizes } from '@/shared/config/styles';
import { PrimaryButton } from '@/shared/ui/button/Button';
import { EmptyContent } from '@/shared/ui/empty/EmptyContent';
import { Page } from '@/shared/ui/layout/Page';

import type { EntryLoaderData } from '../model/loader';

/** 메모가 하나도 없을 때 보여줄 페이지 */
export const EntryPage = () => {
  const { memos } = useLoaderData<EntryLoaderData>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!memos.length) return;
    navigate('/memo/1');
  }, [navigate, memos.length]);

  if (memos.length === 0) {
    return (
      <Page className="entry-page">
        <EmptyContent title="메모가 없습니다.">
          <PrimaryButton size={buttonSizes.md}>메모 추가</PrimaryButton>
        </EmptyContent>
      </Page>
    );
  }

  return <Page>EntryPage </Page>;
};
