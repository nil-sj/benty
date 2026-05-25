import { useCallback, useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { fruitsData, animalsData, vehiclesData } from '../../data/learningData';
import { randomItem } from '../../utils/random';
import { useProgress } from '../../context/ProgressContext';
import styles from './FirstLetterActivity.module.css';

interface FirstLetterProps {
  config: ActivityConfig;
}

const POOL = [...fruitsData, ...animalsData, ...vehiclesData];
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

type State = 'asking' | 'correct' | 'wrong';

export function FirstLetterActivity({ config }: FirstLetterProps) {
  const [item, setItem] = useState(() => randomItem(POOL));
  const [state, setState] = useState<State>('asking');
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const { sayText, repeat } = useSpeech(config.voiceEnabled);
  const { recordActivity } = useProgress();

  const correct = item.name[0].toUpperCase();

  const setupNew = useCallback((prev = item) => {
    const next = randomItem(POOL, prev);
    setItem(next);
    setState('asking');
    setSelected(null);
  }, [item]);

  useEffect(() => {
    const timer = setTimeout(() => sayText(`What letter does ${item.name} start with?`), 400);
    return () => clearTimeout(timer);
  }, [item]);

  const handlePick = useCallback((letter: string) => {
    if (state !== 'asking') return;
    setSelected(letter);
    setTotal(t => t + 1);

    if (letter === correct) {
      setState('correct');
      setScore(s => s + 1);
      sayText(`Yes! ${item.name} starts with ${correct}!`);
      recordActivity(config.id, true);
      setTimeout(() => setupNew(), 2000);
    } else {
      setState('wrong');
      sayText(`Try again! ${item.name}... listen to the first sound.`);
      recordActivity(config.id, false);
      setTimeout(() => setState('asking'), 1200);
    }
  }, [state, correct, item, sayText, recordActivity, config.id, setupNew]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (/^[A-Za-z]$/.test(e.key)) handlePick(e.key.toUpperCase());
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handlePick]);

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

        <div className={styles.questionCard}>
          <div className={styles.emoji} aria-label={item.name}>{item.emoji}</div>
          <div className={styles.itemName}>{item.name}</div>
          <p className={styles.prompt}>What letter does <strong>{item.name}</strong> start with?</p>
        </div>

        {state === 'correct' && (
          <div className={`${styles.fb} ${styles.fbCorrect}`} aria-live="assertive">
            🎉 {item.name} starts with <strong>{correct}</strong>!
          </div>
        )}
        {state === 'wrong' && (
          <div className={`${styles.fb} ${styles.fbWrong}`} aria-live="assertive">
            😊 Try again! Listen to the start of the word.
          </div>
        )}

        <div className={styles.keyboard} role="group" aria-label="Choose the first letter">
          {LETTERS.map(l => (
            <button
              key={l}
              className={`${styles.key} ${
                state === 'correct' && l === correct ? styles.keyCorrect : ''
              } ${state === 'wrong' && l === selected ? styles.keyWrong : ''}`}
              onClick={() => handlePick(l)}
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
