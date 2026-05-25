import { useEffect } from 'react';

export interface KeyboardShortcuts {
  onNext?: () => void;
  onPrevious?: () => void;
  onHome?: () => void;
  onRepeat?: () => void;
  onAnswer?: (key: string) => void;
}

export function useKeyboardShortcuts({
  onNext,
  onPrevious,
  onHome,
  onRepeat,
  onAnswer,
}: KeyboardShortcuts): void {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't fire shortcuts when typing in an input
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'Enter':
          e.preventDefault();
          onNext?.();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          onPrevious?.();
          break;
        case 'Escape':
          e.preventDefault();
          onHome?.();
          break;
        case ' ':
          e.preventDefault();
          onRepeat?.();
          break;
        default:
          if (onAnswer) {
            const key = e.key.toUpperCase();
            if (/^[A-Z0-9]$/.test(key)) {
              onAnswer(key);
            }
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrevious, onHome, onRepeat, onAnswer]);
}
