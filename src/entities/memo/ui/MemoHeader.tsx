import * as S from './MemoHeader.styles';

interface MemoHeaderProps {
  title: string;
  createdAt: string;
  onTitleChange?: (title: string) => void;
  titlePlaceholder?: string;
}

export const MemoHeader = ({ title, createdAt, titlePlaceholder }: MemoHeaderProps) => {
  return (
    <S.MemoHeader>
      <S.CreatedAt>{createdAt}</S.CreatedAt>
      <S.Title contentEditable>{title || titlePlaceholder || ''}</S.Title>
    </S.MemoHeader>
  );
};
