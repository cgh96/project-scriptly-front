import * as S from './MarkdownEditor.styles';

interface MarkdownEditorProps {
  content: string;
  onChangeContent: (content: string) => void;
}

export const MarkdownEditor = ({ content, onChangeContent }: MarkdownEditorProps) => {
  const handleChangeContent = (event: React.FormEvent<HTMLDivElement>) => {
    onChangeContent(event.currentTarget.textContent || '');
  };

  return (
    <S.MarkdownEditor
      contentEditable
      onInput={handleChangeContent}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
