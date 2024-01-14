import { useEffect, useRef } from 'react';
import type { FieldError } from 'react-hook-form';

//accepts arg error from react-hook-form and animates in error message
const useInputError = ({
  error
}: {
  error?: FieldError;
}): {
  error: FieldError | undefined;
  errorComponent: JSX.Element;
} => {
  const errorContainerRef = useRef<HTMLDivElement | null>(null);
  const errorRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const errorEl = errorRef?.current;
    const errorContainerEl = errorContainerRef?.current;
    const observer = new ResizeObserver(() => {
      if (errorContainerEl && errorEl) {
        errorContainerEl.style.height = `${errorEl.clientHeight}px`;
      }
    });
    if (errorEl) observer.observe(errorEl);

    return () => {
      if (errorEl) observer.unobserve(errorEl);
    };
  }, [errorRef]);

  return {
    error,
    errorComponent: (
      <div className="h-fit transition-all" ref={errorContainerRef}>
        <p className="font-normal text-sm leading-4 text-red-600 transition-all" ref={errorRef}>
          {error?.message ? error.message : null}
        </p>
      </div>
    )
  };
};

export default useInputError;
