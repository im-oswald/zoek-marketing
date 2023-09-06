import React, { useState, useEffect } from 'react';

export function useInView(refs: React.RefObject<HTMLElement>[]) {
  const [elements, setElements] = useState<{
    [key: string]: { isInView: boolean };
  }>({});

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const name = entry.target.getAttribute('data-myproperty');
        if (!name) {
          console.warn(
            'Encountered entry with no name. You should add data-myproperty to every element passed to the isInView hook.'
          );
        } else {
          if (entry.isIntersecting) {
            setElements((prev) => {
              return {
                ...prev,
                [name]: {
                  isInView: true
                }
              };
            });
          } else {
            setElements((prev) => ({
              ...prev,
              [name]: {
                isInView: false
              }
            }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback);

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return elements;
}
