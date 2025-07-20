import type { ReactNode } from 'react';

import * as S from './EmptyContent.styles';

interface EmptyContentProps {
  title?: string;
  children?: ReactNode;
}

export const EmptyContent = ({ title = '컨텐츠 없음', children }: EmptyContentProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {children}
    </S.Container>
  );
};
