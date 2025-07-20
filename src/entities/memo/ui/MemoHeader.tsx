import { useEffect, useRef } from 'react';

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
  const titleRef = useRef<HTMLDivElement>(null);

  const checkContentEmpty = (element: HTMLDivElement) => {
    const text = element.textContent;
    const innerHTML = element.innerHTML;
    console.log(text, innerHTML);

    return !text || text?.length === 0 || innerHTML === '<br>' || innerHTML === '';
  };

  const handleInput = (event: React.FormEvent<HTMLDivElement>) => {
    const isTextEmpty = checkContentEmpty(event.currentTarget);

    if (isTextEmpty) {
      event.currentTarget.textContent = '';
    }

    onChangeTitle(event.currentTarget.textContent || '');
  };

  useEffect(() => {
    // 초기값 설정 (한 번만)
    if (titleRef.current) {
      titleRef.current.innerHTML = title || '';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.MemoHeader>
      <S.CreatedAt>{createdAt}</S.CreatedAt>
      <S.Title
        ref={titleRef}
        contentEditable
        onInput={handleInput}
        data-placeholder={titlePlaceholder || '제목 없음'}
      />
    </S.MemoHeader>
  );
};
