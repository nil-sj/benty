import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeButton } from './HomeButton';
import { NavigationControls } from './NavigationControls';
import { useKeyboardShortcuts } from '../../hooks/useKeyboardShortcuts';
import styles from './ActivityShell.module.css';

interface ActivityShellProps {
  title: string;
  icon: string;
  children: React.ReactNode;
  onNext?: () => void;
  onPrevious?: () => void;
  onRepeat?: () => void;
  canGoPrevious?: boolean;
  canGoNext?: boolean;
  showNavigation?: boolean;
  showRepeat?: boolean;
  nextLabel?: string;
  prevLabel?: string;
  onAnswer?: (key: string) => void;
  progressCurrent?: number;
  progressTotal?: number;
}

export function ActivityShell({
  title,
  icon,
  children,
  onNext,
  onPrevious,
  onRepeat,
  canGoPrevious = true,
  canGoNext = true,
  showNavigation = true,
  showRepeat = true,
  nextLabel,
  prevLabel,
  onAnswer,
  progressCurrent,
  progressTotal,
}: ActivityShellProps) {
  const navigate = useNavigate();

  const handleHome = () => navigate('/');

  useKeyboardShortcuts({
    onNext,
    onPrevious,
    onHome: handleHome,
    onRepeat,
    onAnswer,
  });

  // Scroll to top when activity loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.shell}>
      {/* Top bar */}
      <header className={styles.topBar}>
        <HomeButton />
        <div className={styles.titleArea}>
          <span className={styles.titleIcon} aria-hidden="true">{icon}</span>
          <h1 className={styles.title}>{title}</h1>
        </div>
        {progressTotal !== undefined && progressCurrent !== undefined && (
          <div className={styles.progressBadge} aria-label={`Item ${progressCurrent} of ${progressTotal}`}>
            {progressCurrent} / {progressTotal}
          </div>
        )}
      </header>

      {/* Progress bar */}
      {progressTotal !== undefined && progressCurrent !== undefined && (
        <div className={styles.progressBarWrap} role="progressbar" aria-valuenow={progressCurrent} aria-valuemin={1} aria-valuemax={progressTotal}>
          <div
            className={styles.progressBarFill}
            style={{ width: `${(progressCurrent / progressTotal) * 100}%` }}
          />
        </div>
      )}

      {/* Main content */}
      <main className={styles.main}>
        {children}
      </main>

      {/* Bottom navigation */}
      {showNavigation && (
        <footer className={styles.footer}>
          <NavigationControls
            onPrevious={onPrevious}
            onNext={onNext}
            onRepeat={showRepeat ? onRepeat : undefined}
            canGoPrevious={canGoPrevious}
            canGoNext={canGoNext}
            showRepeat={showRepeat && !!onRepeat}
            nextLabel={nextLabel}
            prevLabel={prevLabel}
          />
        </footer>
      )}
    </div>
  );
}
