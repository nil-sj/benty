import { useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { oppositesData } from '../../data/newActivitiesData';
import { shuffle } from '../../utils/random';
import styles from './OppositesActivity.module.css';

interface OppositesProps { config: ActivityConfig; }

export function OppositesActivity({ config }: OppositesProps) {
  const [isRandom, setIsRandom] = useState(false);
  const [items] = useState(() => oppositesData);
  const [shuffled, setShuffled] = useState(() => shuffle(oppositesData));
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);

  const list = isRandom ? shuffled : items;
  const current = list[index];
  const total = items.length;

  useEffect(() => {
    setRevealed(false);
    const timer = setTimeout(() => {
      sayText(`${current.word1}!`);
      setTimeout(() => sayText(`The opposite of ${current.word1} is ${current.word2}!`), 1800);
    }, 350);
    return () => clearTimeout(timer);
  }, [current]);

  const goNext = () => {
    setIndex(i => Math.min(i + 1, total - 1));
    setRevealed(false);
  };
  const goPrev = () => {
    setIndex(i => Math.max(i - 1, 0));
    setRevealed(false);
  };
  const handleReveal = () => {
    setRevealed(true);
    sayText(`The opposite is ${current.word2}! ${current.word2}!`);
  };

  return (
    <ActivityShell
      title={config.title}
      icon={config.icon}
      onNext={index < total - 1 ? goNext : undefined}
      onPrevious={index > 0 ? goPrev : undefined}
      onRepeat={repeat}
      canGoPrevious={index > 0}
      canGoNext={index < total - 1}
      progressCurrent={!isRandom ? index + 1 : undefined}
      progressTotal={!isRandom ? total : undefined}
      voiceEnabled={isEnabled}
      onToggleVoice={toggle}
    >
      <div className={styles.container}>
        <div className={styles.modeBar}>
          <button className={`${styles.modeBtn} ${!isRandom ? styles.active : ''}`} onClick={() => { setIsRandom(false); setIndex(0); }}>📋 In Order</button>
          <button className={`${styles.modeBtn} ${isRandom ? styles.active : ''}`} onClick={() => { setIsRandom(true); setShuffled(shuffle(oppositesData)); setIndex(0); }}>🔀 Random</button>
          {!isRandom && <span className={styles.counter}>{index + 1} / {total}</span>}
        </div>

        <div className={styles.pairCard}>
          <div className={styles.wordPanel}>
            <div className={styles.bigEmoji}>{current.emoji1}</div>
            <div className={styles.bigWord}>{current.word1}</div>
            <div className={styles.example}>{current.example1}</div>
          </div>

          <div className={styles.vsCircle}>
            <span>↔</span>
          </div>

          {revealed ? (
            <div className={`${styles.wordPanel} ${styles.revealedPanel}`}>
              <div className={styles.bigEmoji}>{current.emoji2}</div>
              <div className={styles.bigWord} style={{ color: 'var(--color-coral)' }}>{current.word2}</div>
              <div className={styles.example}>{current.example2}</div>
            </div>
          ) : (
            <div className={styles.wordPanel}>
              <div className={styles.bigEmoji}>❓</div>
              <button className={styles.revealBtn} onClick={handleReveal}>
                Tap to see opposite!
              </button>
            </div>
          )}
        </div>

        {revealed && (
          <div className={styles.factBanner} aria-live="assertive">
            💡 <strong>{current.word1}</strong> and <strong>{current.word2}</strong> are opposites!
          </div>
        )}
      </div>
    </ActivityShell>
  );
}
