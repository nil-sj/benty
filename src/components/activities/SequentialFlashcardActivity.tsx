import { useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { alphabetData } from '../../data/alphabet';
import { numbersData, shapesData, colorsData } from '../../data/learningData';
import styles from './FlashcardActivity.module.css';

interface SequentialFlashcardProps {
  config: ActivityConfig;
}

function getDataForSource(dataSource: string) {
  switch (dataSource) {
    case 'alphabet': return alphabetData;
    case 'numbers': return numbersData;
    case 'shapes': return shapesData;
    case 'colors': return colorsData;
    default: return alphabetData;
  }
}

function getDisplayEmoji(item: any): string {
  if (item.emoji) return item.emoji as string;
  return '❓';
}

function getAudioText(item: any): string {
  if (item.audioText) return item.audioText as string;
  if (item.name) return `This is ${item.name}.`;
  if (item.word) return `${item.letter} is for ${item.word}.`;
  return '';
}

function getPrimaryText(item: any, dataSource: string): string {
  if (dataSource === 'alphabet') return item.letter as string;
  if (dataSource === 'numbers') return String(item.number);
  return (item.name || item.word || '') as string;
}

function getSecondaryText(item: any): string {
  return (item.word || item.name || '') as string;
}

function getFunFact(item: any): string {
  return (item.funFact || '') as string;
}

function getAccentColor(dataSource: string, item: any): string {
  if (dataSource === 'colors' && item.hex) return item.hex as string;
  const colorMap: Record<string, string> = {
    alphabet: 'var(--color-sky)',
    numbers: 'var(--color-coral)',
    shapes: 'var(--color-lavender)',
  };
  return colorMap[dataSource] || 'var(--color-sky)';
}

export function SequentialFlashcardActivity({ config }: SequentialFlashcardProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items = getDataForSource(config.dataSource) as any[];
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { sayText, repeat } = useSpeech(config.voiceEnabled);

  const current = items[index];

  useEffect(() => {
    const text = getAudioText(current);
    if (text) {
      const timer = setTimeout(() => sayText(text), 300);
      return () => clearTimeout(timer);
    }
  }, [index]);

  const goNext = () => {
    if (index < items.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300);
      setIndex(index + 1);
    }
  };

  const goPrevious = () => {
    if (index > 0 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300);
      setIndex(index - 1);
    }
  };

  const primaryText = getPrimaryText(current, config.dataSource);
  const secondaryText = getSecondaryText(current);
  const emoji = getDisplayEmoji(current);
  const funFact = getFunFact(current);
  const accentColor = getAccentColor(config.dataSource, current);

  return (
    <ActivityShell
      title={config.title}
      icon={config.icon}
      onNext={index < items.length - 1 ? goNext : undefined}
      onPrevious={index > 0 ? goPrevious : undefined}
      onRepeat={repeat}
      canGoPrevious={index > 0}
      canGoNext={index < items.length - 1}
      nextLabel={index === items.length - 1 ? '✓ Done' : 'Next →'}
      progressCurrent={index + 1}
      progressTotal={items.length}
    >
      <div className={`${styles.card} ${isAnimating ? styles.animating : ''}`} style={{ '--accent': accentColor } as React.CSSProperties}>
        <div className={styles.cardInner}>
          {/* Left: visual */}
          <div className={styles.visualSide}>
            <div className={styles.emojiDisplay} aria-label={secondaryText || primaryText}>
              {config.dataSource === 'colors' ? (
                <div
                  className={styles.colorSwatch}
                  style={{ background: current.hex as string }}
                  aria-label={(current.name as string) + ' color swatch'}
                />
              ) : (
                <span>{emoji}</span>
              )}
            </div>
          </div>

          {/* Right: text content */}
          <div className={styles.textSide}>
            <div className={styles.primaryText} style={{ color: accentColor }}>
              {primaryText}
            </div>
            {secondaryText && secondaryText !== primaryText && (
              <div className={styles.secondaryText}>{secondaryText}</div>
            )}
            {funFact && (
              <div className={styles.funFact}>
                <span className={styles.funFactIcon}>💡</span>
                <span>{funFact}</span>
              </div>
            )}
            <button
              className={styles.speakBtn}
              onClick={repeat}
              aria-label="Say it again"
              title="Hear again (Space)"
            >
              🔊 Say it again!
            </button>
          </div>
        </div>
      </div>
    </ActivityShell>
  );
}
