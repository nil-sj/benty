import { useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { phonicsData } from '../../data/newActivitiesData';
import { shuffle } from '../../utils/random';
import { playPhonemeSound, isWebAudioSupported } from '../../utils/phonemeSynth';
import styles from './PhonicsActivity.module.css';

interface PhonicsProps { config: ActivityConfig; }

export function PhonicsActivity({ config }: PhonicsProps) {
  const [isRandom, setIsRandom] = useState(false);
  const [items] = useState(() => phonicsData);
  const [shuffled, setShuffled] = useState(() => shuffle(phonicsData));
  const [index, setIndex] = useState(0);
  const [soundPlaying, setSoundPlaying] = useState(false);
  const { sayText, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const audioSupported = isWebAudioSupported();

  const list = isRandom ? shuffled : items;
  const current = list[index];
  const total = items.length;

  const playSound = (item: typeof current) => {
    setSoundPlaying(true);

    // Step 1: play the synthesized phoneme sound (not speech)
    if (audioSupported) {
      playPhonemeSound(item.letter);
    }

    // Step 2: after the synth sound finishes, speak the NATURAL description phrase
    // soundWord is now "like a snake hissing!" — no letter symbols
    setTimeout(() => {
      setSoundPlaying(false);
      if (isEnabled) {
        // Speak the descriptive phrase, e.g. "like a snake hissing!"
        sayText(item.soundWord);
        // Then speak the full sentence with example words
        setTimeout(() => sayText(item.audioText), 2200);
      }
    }, 800);
  };

  useEffect(() => {
    const t = setTimeout(() => playSound(current), 400);
    return () => clearTimeout(t);
  }, [current]);

  const goNext = () => { setIndex(i => Math.min(i + 1, total - 1)); };
  const goPrev = () => { setIndex(i => Math.max(i - 1, 0)); };

  return (
    <ActivityShell
      title={config.title} icon={config.icon}
      onNext={index < total - 1 ? goNext : undefined}
      onPrevious={index > 0 ? goPrev : undefined}
      onRepeat={() => playSound(current)}
      canGoPrevious={index > 0}
      canGoNext={index < total - 1}
      progressCurrent={!isRandom ? index + 1 : undefined}
      progressTotal={!isRandom ? total : undefined}
      voiceEnabled={isEnabled} onToggleVoice={toggle}
    >
      <div className={styles.container}>
        <div className={styles.modeBar}>
          <button className={`${styles.modeBtn} ${!isRandom ? styles.active : ''}`}
            onClick={() => { setIsRandom(false); setIndex(0); }}>📋 In Order</button>
          <button className={`${styles.modeBtn} ${isRandom ? styles.active : ''}`}
            onClick={() => { setIsRandom(true); setShuffled(shuffle(phonicsData)); setIndex(0); }}>🔀 Random</button>
          {!isRandom && <span className={styles.counter}>{index + 1} / {total}</span>}
        </div>

        {/* Main letter card — tap to trigger the phoneme sound */}
        <button
          className={`${styles.letterCard} ${soundPlaying ? styles.letterCardActive : ''}`}
          onClick={() => playSound(current)}
          aria-label={`Hear the sound for letter ${current.letter}`}
        >
          <div className={styles.bigLetter}>{current.letter}</div>
          <div className={styles.soundBadge}>
            {soundPlaying ? '🔊 listen...' : `sounds ${current.soundWord}`}
          </div>
          <div className={styles.tapLabel}>👆 Tap to hear the sound!</div>
        </button>

        {/* Example words — tap each to hear the word spoken */}
        <p className={styles.wordsLabel}>Words that start with <strong>{current.letter}</strong>:</p>
        <div className={styles.examplesRow}>
          {current.words.map((word, i) => (
            <button
              key={word}
              className={styles.wordChip}
              onClick={() => sayText(word)}
              aria-label={`Hear the word ${word}`}
            >
              <span className={styles.wordEmoji}>{current.emojis[i]}</span>
              <span className={styles.wordText}>{word}</span>
            </button>
          ))}
        </div>

        <p className={styles.tapHint}>Tap a word to hear it!</p>
      </div>
    </ActivityShell>
  );
}
