import { useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { wordFamiliesData } from '../../data/learningData';
import styles from './WordSpinnerActivity.module.css';

interface WordSpinnerProps {
  config: ActivityConfig;
}

export function WordSpinnerActivity({ config }: WordSpinnerProps) {
  const [familyIndex, setFamilyIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const { sayText, isEnabled, toggle } = useSpeech(config.voiceEnabled);

  const family = wordFamiliesData[familyIndex];
  const currentLetter = family.startingLetters[letterIndex];
  const currentWord = family.words[letterIndex] || currentLetter + family.ending;

  useEffect(() => {
    const timer = setTimeout(() => sayText(currentWord), 300);
    return () => clearTimeout(timer);
  }, [currentWord]);

  const spinNext = () => {
    setLetterIndex((i) => (i + 1) % family.startingLetters.length);
  };

  const spinPrev = () => {
    setLetterIndex((i) => (i - 1 + family.startingLetters.length) % family.startingLetters.length);
  };

  const nextFamily = () => {
    setFamilyIndex((i) => (i + 1) % wordFamiliesData.length);
    setLetterIndex(0);
  };

  return (
    <ActivityShell
      title={config.title}
      icon={config.icon}
      onNext={spinNext}
      onPrevious={spinPrev}
      onRepeat={() => sayText(currentWord)}
      canGoPrevious={true}
      canGoNext={true}
      nextLabel="Spin → "
      prevLabel="← Spin"
    
      voiceEnabled={isEnabled}
      onToggleVoice={toggle}
    >
      <div className={styles.container}>
        <div className={styles.wordDisplay}>
          <div className={styles.wordRow}>
            <span className={styles.startLetter} key={currentLetter}>
              {currentLetter.toUpperCase()}
            </span>
            <span className={styles.ending}>-{family.ending}</span>
          </div>
          <div className={styles.fullWord} key={currentWord}>
            {currentWord}
          </div>
        </div>

        {/* Letter carousel */}
        <div className={styles.carousel}>
          {family.startingLetters.map((l, i) => (
            <button
              key={l}
              className={`${styles.carouselBtn} ${i === letterIndex ? styles.activeCarousel : ''}`}
              onClick={() => setLetterIndex(i)}
              aria-label={family.words[i] || l + family.ending}
              aria-current={i === letterIndex}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <button className={styles.familyBtn} onClick={nextFamily}>
          Try another word family →
        </button>
      </div>
    </ActivityShell>
  );
}
