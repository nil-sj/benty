import { useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { sightWordsData } from '../../data/learningData';
import styles from './SightWordActivity.module.css';

interface SightWordProps {
  config: ActivityConfig;
}

export function SightWordActivity({ config }: SightWordProps) {
  const [index, setIndex] = useState(0);
  const [showSentence, setShowSentence] = useState(false);
  const { sayText, repeat } = useSpeech(config.voiceEnabled);

  const current = sightWordsData[index];

  useEffect(() => {
    setShowSentence(false);
    const timer = setTimeout(() => sayText(current.audioText), 300);
    return () => clearTimeout(timer);
  }, [index]);

  const handleNext = () => {
    if (index < sightWordsData.length - 1) setIndex(index + 1);
  };

  const handlePrevious = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleRevealSentence = () => {
    setShowSentence(true);
    sayText(current.sentence);
  };

  return (
    <ActivityShell
      title={config.title}
      icon={config.icon}
      onNext={index < sightWordsData.length - 1 ? handleNext : undefined}
      onPrevious={index > 0 ? handlePrevious : undefined}
      onRepeat={repeat}
      canGoPrevious={index > 0}
      canGoNext={index < sightWordsData.length - 1}
      progressCurrent={index + 1}
      progressTotal={sightWordsData.length}
    >
      <div className={styles.container}>
        <div className={styles.wordCard} onClick={repeat} role="button" tabIndex={0} aria-label={`Sight word: ${current.word}. Click to hear it.`}>
          <span className={styles.word}>{current.word}</span>
          <span className={styles.tapHint}>🔊 Tap to hear</span>
        </div>

        {!showSentence ? (
          <button className={styles.revealBtn} onClick={handleRevealSentence}>
            Show sentence 👇
          </button>
        ) : (
          <div className={styles.sentenceCard} aria-live="polite">
            <p className={styles.sentence}>"{current.sentence}"</p>
          </div>
        )}
      </div>
    </ActivityShell>
  );
}
