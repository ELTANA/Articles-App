import { FC, forwardRef } from 'react';
import type { IButtonProps } from './Button.types';
import Spinner from '$svgs/spinner';

const Button: FC<IButtonProps> = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ loading = false, text, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        {...rest}
        className={`text-white bg-blue-500 border-0 py-3 px-6 focus:outline-none hover:bg-blue-600 rounded text-base md:text-lg inline-flex gap-3 items-center font-medium disabled:bg-opacity-40 ${className}`}
      >
        {loading ? <Spinner className="animate-spin h-5 w-5 text-white" /> : null}
        {text}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
