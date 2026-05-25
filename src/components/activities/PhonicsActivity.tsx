import { useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { phonicsData } from '../../data/newActivitiesData';
import { shuffle } from '../../utils/random';
import styles from './PhonicsActivity.module.css';

interface PhonicsProps { config: ActivityConfig; }

export function PhonicsActivity({ config }: PhonicsProps) {
  const [isRandom, setIsRandom] = useState(false);
  const [items] = useState(() => phonicsData);
  const [shuffled, setShuffled] = useState(() => shuffle(phonicsData));
  const [index, setIndex] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);

  const list = isRandom ? shuffled : items;
  const current = list[index];
  const total = items.length;

  const speak = (item: typeof current) => {
    sayText(`The letter ${item.letter} says ${item.sound}. ${item.soundWord}`);
    setTimeout(() => sayText(item.audioText), 2500);
  };

  useEffect(() => {
    const t = setTimeout(() => speak(current), 350);
    return () => clearTimeout(t);
  }, [current]);

  const goNext = () => setIndex(i => Math.min(i + 1, total - 1));
  const goPrev = () => setIndex(i => Math.max(i - 1, 0));

  return (
    <ActivityShell
      title={config.title} icon={config.icon}
      onNext={index < total - 1 ? goNext : undefined}
      onPrevious={index > 0 ? goPrev : undefined}
      onRepeat={repeat}
      canGoPrevious={index > 0}
      canGoNext={index < total - 1}
      progressCurrent={!isRandom ? index + 1 : undefined}
      progressTotal={!isRandom ? total : undefined}
      voiceEnabled={isEnabled} onToggleVoice={toggle}
    >
      <div className={styles.container}>
        <div className={styles.modeBar}>
          <button className={`${styles.modeBtn} ${!isRandom ? styles.active : ''}`} onClick={() => { setIsRandom(false); setIndex(0); }}>📋 In Order</button>
          <button className={`${styles.modeBtn} ${isRandom ? styles.active : ''}`} onClick={() => { setIsRandom(true); setShuffled(shuffle(phonicsData)); setIndex(0); }}>🔀 Random</button>
          {!isRandom && <span className={styles.counter}>{index + 1} / {total}</span>}
        </div>

        <div className={styles.letterCard}>
          <div className={styles.bigLetter}>{current.letter}</div>
          <div className={styles.soundBadge}>says "{current.sound}"</div>
          <div className={styles.soundPhrase}>{current.soundWord}</div>
        </div>

        <div className={styles.examplesRow}>
          {current.words.map((word, i) => (
            <button key={word} className={styles.wordChip} onClick={() => sayText(`${word}!`)} aria-label={`Hear ${word}`}>
              <span className={styles.wordEmoji}>{current.emojis[i]}</span>
              <span className={styles.wordText}>{word}</span>
            </button>
          ))}
        </div>

        <p className={styles.tapHint}>Tap a word to hear it!</p>
        <button className={styles.speakBtn} onClick={() => speak(current)}>🔊 Hear the sound again</button>
      </div>
    </ActivityShell>
  );
}
