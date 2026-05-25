import { useEffect } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import { useRandomItem } from '../../hooks/useRandomItem';
import type { ActivityConfig } from '../../data/activities';
import { fruitsData, vegetablesData, animalsData, vehiclesData } from '../../data/learningData';
import type { LearningItem } from '../../data/learningData';
import styles from './FlashcardActivity.module.css';

interface RandomFlashcardProps {
  config: ActivityConfig;
}

function getDataForSource(dataSource: string): LearningItem[] {
  switch (dataSource) {
    case 'fruits': return fruitsData;
    case 'vegetables': return vegetablesData;
    case 'animals': return animalsData;
    case 'vehicles': return vehiclesData;
    default: return fruitsData;
  }
}

export function RandomFlashcardActivity({ config }: RandomFlashcardProps) {
  const items = getDataForSource(config.dataSource);
  const { current, next, previous, canGoPrevious } = useRandomItem(items);
  const { sayText, repeat } = useSpeech(config.voiceEnabled);

  useEffect(() => {
    const text = current.audioText || `This is a ${current.name}.`;
    const timer = setTimeout(() => sayText(text), 300);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <ActivityShell
      title={config.title}
      icon={config.icon}
      onNext={next}
      onPrevious={previous}
      onRepeat={repeat}
      canGoPrevious={canGoPrevious}
      canGoNext={true}
      nextLabel="Next →"
    >
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.cardInner}>
            {/* Left: emoji */}
            <div className={styles.visualSide}>
              <div className={styles.emojiDisplay} aria-label={current.name}>
                {current.emoji}
              </div>
            </div>

            {/* Right: content */}
            <div className={styles.textSide}>
              <div className={styles.primaryText} style={{ color: 'var(--color-coral)' }}>
                {current.name}
              </div>
              {current.category && (
                <div style={{
                  background: 'var(--color-mint)',
                  color: 'white',
                  borderRadius: 'var(--radius-lg)',
                  padding: '4px 14px',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                }}>
                  {current.category}
                </div>
              )}
              {current.funFact && (
                <div className={styles.funFact}>
                  <span className={styles.funFactIcon}>💡</span>
                  <span>{current.funFact}</span>
                </div>
              )}
              <button
                className={styles.speakBtn}
                onClick={repeat}
                aria-label="Say it again"
              >
                🔊 Say it again!
              </button>
            </div>
          </div>
        </div>
      </div>
    </ActivityShell>
  );
}
