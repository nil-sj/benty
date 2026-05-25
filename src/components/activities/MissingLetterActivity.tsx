import { useCallback, useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { alphabetData } from '../../data/alphabet';
import { randomItem, randomInt } from '../../utils/random';
import { useProgress } from '../../context/ProgressContext';
import styles from './MissingLetterActivity.module.css';

interface MissingLetterProps {
  config: ActivityConfig;
}

type State = 'asking' | 'correct' | 'wrong';

export function MissingLetterActivity({ config }: MissingLetterProps) {
  const [item, setItem] = useState(() => randomItem(alphabetData));
  const [missingIndex, setMissingIndex] = useState(0);
  const [state, setState] = useState<State>('asking');
  const [wrongGuess, setWrongGuess] = useState('');
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const { sayText, repeat } = useSpeech(config.voiceEnabled);
  const { recordActivity } = useProgress();

  const word = item.word.toUpperCase();

  const setupNew = useCallback((prevItem = item) => {
    const next = randomItem(alphabetData, prevItem);
    const idx = randomInt(0, next.word.length - 1);
    setItem(next);
    setMissingIndex(idx);
    setState('asking');
    setWrongGuess('');
  }, [item]);

  useEffect(() => {
    const word = item.word.toUpperCase();
    
    const displayed = word.split('').map((l, i) => i === missingIndex ? '_' : l).join(' ');
    const timer = setTimeout(() => sayText(`What letter is missing in ${item.word}? ${displayed}`), 400);
    return () => clearTimeout(timer);
  }, [item, missingIndex]);

  const handleGuess = useCallback((letter: string) => {
    if (state !== 'asking') return;
    const correct = word[missingIndex];
    setTotal(t => t + 1);

    if (letter === correct) {
      setState('correct');
      setScore(s => s + 1);
      sayText(`Yes! The letter is ${correct}. ${item.word}!`);
      recordActivity(config.id, true);
      setTimeout(() => setupNew(), 2000);
    } else {
      setState('wrong');
      setWrongGuess(letter);
      sayText(`Try again! Look carefully.`);
      recordActivity(config.id, false);
      setTimeout(() => setState('asking'), 1200);
    }
  }, [state, word, missingIndex, item, sayText, recordActivity, config.id, setupNew]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (/^[A-Za-z]$/.test(e.key)) handleGuess(e.key.toUpperCase());
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleGuess]);

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const correct = word[missingIndex];

  return (
    <ActivityShell
      title={config.title}
      icon={config.icon}
      onNext={() => setupNew()}
      onRepeat={repeat}
      nextLabel="Skip →"
    >
      <div className={styles.container}>
        <div className={styles.score}>⭐ {score} / {total}</div>

        <div className={styles.card}>
          <div className={styles.emoji}>{item.emoji}</div>
          <div className={styles.wordDisplay}>
            {word.split('').map((letter, i) => (
              <span
                key={i}
                className={`${styles.letterBox} ${
                  i === missingIndex
                    ? state === 'correct' ? styles.correctBox
                      : state === 'wrong' ? styles.wrongBox
                      : styles.missingBox
                    : styles.filledBox
                }`}
              >
                {i === missingIndex
                  ? state === 'correct' ? correct
                    : state === 'wrong' ? wrongGuess || '_'
                    : '_'
                  : letter}
              </span>
            ))}
          </div>
          <p className={styles.hint}>What letter is missing in <strong>{item.word}</strong>?</p>
        </div>

        {state === 'correct' && (
          <div className={styles.feedback + ' ' + styles.feedbackCorrect} aria-live="assertive">
            🎉 Amazing! The letter is <strong>{correct}</strong>!
          </div>
        )}
        {state === 'wrong' && (
          <div className={styles.feedback + ' ' + styles.feedbackWrong} aria-live="assertive">
            😊 Not quite — try again!
          </div>
        )}

        <div className={styles.keyboard} role="group" aria-label="Letter choices">
          {letters.map(l => (
            <button
              key={l}
              className={`${styles.keyBtn} ${
                state === 'correct' && l === correct ? styles.keyCorrect : ''
              } ${state === 'wrong' && l === wrongGuess ? styles.keyWrong : ''}`}
              onClick={() => handleGuess(l)}
              aria-label={`Letter ${l}`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </ActivityShell>
  );
}
