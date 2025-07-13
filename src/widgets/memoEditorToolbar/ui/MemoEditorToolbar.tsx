import { useNavigate } from 'react-router';

import { useCreateMemo, useGetMemos } from '@/entities/memo/lib';
import { CreateMemoIconButton } from '@/features/memoCreate/ui';

import * as S from './MemoEditorToolbar.styles';

export const MemoEditorToolbar = () => {
  const navigate = useNavigate();

  const { refetch } = useGetMemos();

  const { mutate } = useCreateMemo({
    useHttp: false,
    onSuccess: (data) => {
      navigate(`/memo/${data.id}`, { replace: true });
      refetch();
    },
  });

  const handleCreateMemo = () => {
    mutate({
      title: '',
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
