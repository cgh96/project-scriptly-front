import { useLoaderData } from 'react-router';

import { Page } from '@/shared/ui/layout/Page';

import type { EntryLoaderData } from '../model/loader';

/** 메모가 하나도 없을 때 보여줄 페이지 */
export const EntryPage = () => {
  useLoaderData<EntryLoaderData>();

  return <Page>EntryPage </Page>;
};
