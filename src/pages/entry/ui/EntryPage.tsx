import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router';

import { Page } from '@/shared/ui/layout/Page';

import type { EntryLoaderData } from '../model/loader';

/** 메모가 하나도 없을 때 보여줄 페이지 */
export const EntryPage = () => {
  const { memos } = useLoaderData<EntryLoaderData>();
  const navigate = useNavigate();

  useEffect(() => {
    if (memos.length) return;
    navigate('/memo/1');
  }, [navigate, memos.length]);

  return <Page>EntryPage </Page>;
};
