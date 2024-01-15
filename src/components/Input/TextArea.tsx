import { FC, forwardRef } from 'react';
import type { TextAreaProps } from './Input.types';
import useInputError from '$hooks/useInputError';

const TextArea: FC<TextAreaProps> = forwardRef<HTMLDivElement, TextAreaProps>(
  ({ error, label, name, textAreaRef, ...rest }, ref) => {
    const { errorComponent } = useInputError({ error });
    return (
      <div ref={ref} className="flex flex-col gap-4 w-full">
        {label ? (
          <label className="text-sm md:text-base text-gray-600 capitalize font-medium" htmlFor={name}>
            {label}
          </label>
        ) : null}
        <div className="w-full relative h-max">
          <textarea
            ref={textAreaRef}
            name={name}
            id={name}
            className={`w-full shadow-sm bg-white rounded border text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none h-[150px] ${error ? 'border-red-200 focus:border-red-300 focus:ring-2 focus:ring-red-300' : 'border-blue-200 focus:border-blue-100 focus:ring-2 focus:ring-blue-100'}`}
            aria-label={label}
            {...rest}
          ></textarea>
        </div>
        {errorComponent}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
