import { DetailedHTMLProps } from 'react';

type BaseProps = DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type TextInputProps = Pick<BaseProps, 'className' | 'type'> & {
  //
};

export type TextInputRef = {
  getValue: () => string;
};
