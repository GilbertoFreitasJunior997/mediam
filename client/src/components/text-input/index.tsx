import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from 'react';
import { TextInputProps, TextInputRef } from './types';

export const TextInput = forwardRef(
  (props: TextInputProps, ref: ForwardedRef<TextInputRef>) => {
    const innerRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(
      ref,
      () => ({
        getValue: () => innerRef.current?.value ?? '',
      }),
      [],
    );

    return (
      <input
        ref={innerRef}
        {...props}
      />
    );
  },
);
