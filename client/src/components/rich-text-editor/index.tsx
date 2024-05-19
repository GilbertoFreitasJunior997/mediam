import { Editor } from 'primereact/editor';
import { RichTextEditorProps } from './types';

export const RichTextEditor = (props: RichTextEditorProps) => {
  const { value, onChange } = props;

  return (
    <Editor value={value} onTextChange={(e) => onChange(e.htmlValue ?? '')} />
  );
};
