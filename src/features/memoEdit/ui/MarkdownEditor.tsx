import * as S from './MarkdownEditor.styles';

interface MarkdownEditorProps {
  content: string;
}

export const MarkdownEditor = ({ content }: MarkdownEditorProps) => {
  return <S.MarkdownEditor contentEditable>{content}</S.MarkdownEditor>;
};
