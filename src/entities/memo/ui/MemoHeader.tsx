import * as S from './MemoHeader.styles';

interface MemoHeaderProps {
  title: string;
  createdAt: string;
  onChangeTitle: (event: string) => void;
  titlePlaceholder?: string;
}

export const MemoHeader = ({
  title,
  createdAt,
  titlePlaceholder,
  onChangeTitle,
}: MemoHeaderProps) => {
  const handleChangeTitle = (event: React.FormEvent<HTMLDivElement>) => {
    onChangeTitle(event.currentTarget.textContent || '');
  };

  return (
    <S.MemoHeader>
      <S.CreatedAt>{createdAt}</S.CreatedAt>
      <S.Title
        dangerouslySetInnerHTML={{ __html: title || titlePlaceholder || '' }}
        onInput={handleChangeTitle}
      />
    </S.MemoHeader>
  );
};
