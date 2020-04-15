import { useEffect } from 'react';

const useIntersectionObserver = (
  callback: Function,
  target: HTMLElement | undefined
) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const singleEntry = entries[0];
      if (singleEntry.isIntersecting) {
        callback();
      }
    });
    if (target) observer.observe(target);
  }, [target]);
};

export default useIntersectionObserver;
