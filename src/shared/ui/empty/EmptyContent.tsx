import * as S from './EmptyContent.styles';

type EmptyContentProps = {
  title?: string;
};

export const EmptyContent = ({ title = '컨텐츠 없음' }: EmptyContentProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
