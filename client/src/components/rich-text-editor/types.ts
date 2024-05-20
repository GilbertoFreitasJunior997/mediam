import { EditorProps } from 'primereact/editor';

export type RichTextEditorProps = Partial<
  Omit<EditorProps, 'value' | 'onChange'>
> & {
  value: string;
  onChange: (newValue: string) => void;
};
