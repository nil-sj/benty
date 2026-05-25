import styles from './NavigationControls.module.css';

interface NavigationControlsProps {
  onPrevious?: () => void;
  onNext?: () => void;
  onRepeat?: () => void;
  canGoPrevious?: boolean;
  canGoNext?: boolean;
  showRepeat?: boolean;
  nextLabel?: string;
  prevLabel?: string;
}

export function NavigationControls({
  onPrevious,
  onNext,
  onRepeat,
  canGoPrevious = true,
  canGoNext = true,
  showRepeat = true,
  nextLabel = 'Next →',
  prevLabel = '← Prev',
}: NavigationControlsProps) {
  return (
    <div className={styles.controls} role="group" aria-label="Activity navigation">
      {onPrevious && (
        <button
          className={styles.navBtn}
          onClick={onPrevious}
          disabled={!canGoPrevious}
          aria-label="Previous item (Left Arrow)"
          title="Previous (←)"
        >
          {prevLabel}
        </button>
      )}

      {showRepeat && onRepeat && (
        <button
          className={`${styles.navBtn} ${styles.repeatBtn}`}
          onClick={onRepeat}
          aria-label="Repeat audio (Space)"
          title="Repeat (Space)"
        >
          🔊 Repeat
        </button>
      )}

      {onNext && (
        <button
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={onNext}
          disabled={!canGoNext}
          aria-label="Next item (Right Arrow or Enter)"
          title="Next (→ or Enter)"
        >
          {nextLabel}
        </button>
      )}
    </div>
  );
}
