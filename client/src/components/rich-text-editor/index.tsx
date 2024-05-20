import { Editor } from 'primereact/editor';
import { RichTextEditorProps } from './types';

export const RichTextEditor = (props: RichTextEditorProps) => {
  const { value, onChange, ...rest } = props;

  return (
    <Editor
      value={value}
      onTextChange={(e) => onChange(e.htmlValue ?? '')}
      {...rest}
    />
  );
};
