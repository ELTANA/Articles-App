import { FC, forwardRef } from 'react';
import type { InputProps } from './Input.types';
import useInputError from '$hooks/useInputError';
import Search from '$svgs/search';

const Input: FC<InputProps> = forwardRef<HTMLDivElement, InputProps>(
  ({ error, type, label, name, inputRef, ...rest }, ref) => {
    const { errorComponent } = useInputError({ error });
    return (
      <div ref={ref} className="flex flex-col gap-4 w-full">
        {label ? (
          <label className="text-sm md:text-base text-gray-600 capitalize font-medium" htmlFor={name}>
            {label}
          </label>
        ) : null}
        <div className="w-full relative h-max">
          <input
            ref={inputRef}
            type={type}
            className={`w-full shadow-sm bg-white rounded border text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${error ? 'border-red-300 focus:border-red-300 focus:ring-2 focus:ring-red-300' : 'border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-blue-200'}`}
            aria-label={label}
            {...rest}
            name={name}
            id={name}
            // {...register}
          />
          {type === 'search' ? (
            <button type="submit" className="absolute top-1/2 -translate-y-1/2 right-[6px]" role="searchbox">
              <Search />
            </button>
          ) : null}
        </div>
        {errorComponent}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
