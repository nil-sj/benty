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
  // Voice toggle
  voiceEnabled?: boolean;
  onToggleVoice?: () => void;
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
  voiceEnabled,
  onToggleVoice,
}: ActivityShellProps) {
  const navigate = useNavigate();
  const handleHome = () => navigate('/');

  useKeyboardShortcuts({ onNext, onPrevious, onHome: handleHome, onRepeat, onAnswer });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className={styles.shell}>
      <header className={styles.topBar}>
        <HomeButton />
        <div className={styles.titleArea}>
          <span className={styles.titleIcon} aria-hidden="true">{icon}</span>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div className={styles.topRight}>
          {onToggleVoice !== undefined && (
            <button
              className={`${styles.voiceToggle} ${voiceEnabled ? styles.voiceOn : styles.voiceOff}`}
              onClick={onToggleVoice}
              aria-label={voiceEnabled ? 'Mute voice' : 'Unmute voice'}
              aria-pressed={voiceEnabled}
              title={voiceEnabled ? 'Mute voice' : 'Enable voice'}
            >
              {voiceEnabled ? '🔊' : '🔇'}
            </button>
          )}
          {progressTotal !== undefined && progressCurrent !== undefined && (
            <div className={styles.progressBadge} aria-label={`Item ${progressCurrent} of ${progressTotal}`}>
              {progressCurrent} / {progressTotal}
            </div>
          )}
        </div>
      </header>

      {progressTotal !== undefined && progressCurrent !== undefined && (
        <div className={styles.progressBarWrap} role="progressbar" aria-valuenow={progressCurrent} aria-valuemin={1} aria-valuemax={progressTotal}>
          <div className={styles.progressBarFill} style={{ width: `${(progressCurrent / progressTotal) * 100}%` }} />
        </div>
      )}

      <main className={styles.main}>{children}</main>

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
