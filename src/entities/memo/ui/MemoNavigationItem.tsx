import { useNavigate, useParams } from 'react-router';

import { useTheme } from '@/app/providers/ThemeProvider';
import type { Memo } from '@/entities/memo/model/types';

import * as S from './MemoNavgationItem.styles';

interface MemoNavigationItemProps {
  memo: Memo;
}

export const MemoNavigationItem = ({ memo }: MemoNavigationItemProps) => {
  const { theme } = useTheme();
  const { memoId } = useParams();

  const navigate = useNavigate();

  return (
    <S.MemoListItem
      theme={theme}
      $isSelected={memoId === memo.id}
      onClick={() => navigate(`/memo/${memo.id}`)}
    >
      <S.MemoTitle>{memo.title || '제목 없음'}</S.MemoTitle>
      <S.MemoCreatedAt>{memo.createdAt || '생성일 없음'}</S.MemoCreatedAt>
    </S.MemoListItem>
  );
};
