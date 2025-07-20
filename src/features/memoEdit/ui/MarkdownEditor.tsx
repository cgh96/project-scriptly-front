import { useEffect, useRef } from 'react';

import * as S from './MarkdownEditor.styles';

interface MarkdownEditorProps {
  content: string;
  onChangeContent: (content: string) => void;
}

export const MarkdownEditor = ({ content, onChangeContent }: MarkdownEditorProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleChangeContent = (event: React.FormEvent<HTMLDivElement>) => {
    onChangeContent(event.currentTarget.textContent || '');
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.textContent = content || '';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <S.MarkdownEditor ref={contentRef} contentEditable onInput={handleChangeContent} />;
};
