import { useEffect, useRef, useState } from 'react';

interface UseInViewOnceOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useInViewOnce(options: UseInViewOnceOptions = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isInView, options.threshold, options.rootMargin]);

  return { ref, isInView };
}
