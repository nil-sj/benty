import { useCallback, useRef, useState } from 'react';
import { randomItem } from '../utils/random';

export function useRandomItem<T>(items: T[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [current, setCurrent] = useState<T>(() => randomItem(items));
  const historyRef = useRef<T[]>([]);
  const historyPosRef = useRef<number>(-1);

  const next = useCallback(() => {
    const nextItem = randomItem(items, current);
    historyRef.current = [...historyRef.current.slice(0, historyPosRef.current + 1), current];
    historyPosRef.current = historyRef.current.length;
    setCurrent(nextItem);
    setCurrentIndex((i) => i + 1);
  }, [items, current]);

  const previous = useCallback(() => {
    if (historyPosRef.current > 0) {
      historyPosRef.current -= 1;
      setCurrent(historyRef.current[historyPosRef.current]);
      setCurrentIndex((i) => i - 1);
    }
  }, []);

  const canGoPrevious = historyPosRef.current > 0;

  return { current, next, previous, canGoPrevious, index: currentIndex };
}
