import { useNavigate } from 'react-router';

import { useCreateMemo } from '@/entities/memo/lib';
import { CreateMemoIconButton } from '@/features/memoCreate/ui';

import * as S from './MemoEditorToolbar.styles';

export const MemoEditorToolbar = () => {
  const navigate = useNavigate();

  const { mutate } = useCreateMemo({
    useHttp: false,
    onSuccess: (data) => {
      navigate(`/memo/${data.id}`, { replace: true });
    },
  });

  const handleCreateMemo = () => {
    mutate({
      title: '제목 없음',
      content: '',
      isPublic: true,
    });
  };

  return (
    <S.Container>
      <CreateMemoIconButton onClick={handleCreateMemo} />
    </S.Container>
  );
};
