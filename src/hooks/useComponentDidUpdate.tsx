import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

const useComponentDidUpdate = (effect: EffectCallback, deps?: DependencyList) => {
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    return effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);
};

export default useComponentDidUpdate;
