import { useCallback, useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { shuffle, randomItem } from '../../utils/random';
import { useProgress } from '../../context/ProgressContext';
import styles from './RhymeFinderActivity.module.css';

interface RhymeFinderProps {
  config: ActivityConfig;
}

interface RhymeQuestion {
  word: string;
  emoji: string;
  correct: string;
  distractors: string[];
}

const RHYMES: RhymeQuestion[] = [
  { word: 'cat', emoji: '🐱', correct: 'bat', distractors: ['dog', 'sun', 'fish'] },
  { word: 'star', emoji: '⭐', correct: 'car', distractors: ['book', 'frog', 'bird'] },
  { word: 'bee', emoji: '🐝', correct: 'tree', distractors: ['duck', 'fox', 'lamp'] },
  { word: 'cake', emoji: '🎂', correct: 'lake', distractors: ['bird', 'moon', 'frog'] },
  { word: 'ball', emoji: '⚽', correct: 'tall', distractors: ['fish', 'book', 'cloud'] },
  { word: 'rain', emoji: '🌧️', correct: 'train', distractors: ['frog', 'duck', 'lamp'] },
  { word: 'moon', emoji: '🌙', correct: 'spoon', distractors: ['cat', 'fish', 'bird'] },
  { word: 'bear', emoji: '🐻', correct: 'chair', distractors: ['fish', 'cake', 'frog'] },
  { word: 'hat', emoji: '🎩', correct: 'mat', distractors: ['dog', 'fish', 'car'] },
  { word: 'bug', emoji: '🐛', correct: 'mug', distractors: ['star', 'bird', 'cake'] },
];

type State = 'asking' | 'correct' | 'wrong';

export function RhymeFinderActivity({ config }: RhymeFinderProps) {
  const [q, setQ] = useState(() => randomItem(RHYMES));
  const [options, setOptions] = useState<string[]>([]);
  const [state, setState] = useState<State>('asking');
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const { sayText, repeat } = useSpeech(config.voiceEnabled);
  const { recordActivity } = useProgress();

  const setupNew = useCallback((prev = q) => {
    const next = randomItem(RHYMES, prev);
    setQ(next);
    setOptions(shuffle([next.correct, ...next.distractors]));
    setState('asking');
    setSelected(null);
  }, [q]);

  useEffect(() => {
    setOptions(shuffle([q.correct, ...q.distractors]));
    const timer = setTimeout(() => sayText(`Which word rhymes with ${q.word}?`), 400);
    return () => clearTimeout(timer);
  }, [q]);

  const handlePick = useCallback((word: string) => {
    if (state !== 'asking') return;
    setSelected(word);
    setTotal(t => t + 1);
    if (word === q.correct) {
      setState('correct');
      setScore(s => s + 1);
      sayText(`Yes! ${q.word} and ${q.correct} rhyme!`);
      recordActivity(config.id, true);
      setTimeout(() => setupNew(), 2000);
    } else {
      setState('wrong');
      sayText(`Not quite! Listen: ${q.word}... ${q.correct}. They rhyme!`);
      recordActivity(config.id, false);
      setTimeout(() => setState('asking'), 1500);
    }
  }, [state, q, sayText, recordActivity, config.id, setupNew]);

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
          <div className={styles.emoji}>{q.emoji}</div>
          <div className={styles.wordDisplay}>{q.word}</div>
          <p className={styles.prompt}>Which word rhymes with <strong>{q.word}</strong>?</p>
        </div>

        <div className={styles.options}>
          {options.map(opt => {
            let cls = styles.optBtn;
            if (state !== 'asking') {
              if (opt === q.correct) cls = `${styles.optBtn} ${styles.correctOpt}`;
              else if (opt === selected) cls = `${styles.optBtn} ${styles.wrongOpt}`;
              else cls = `${styles.optBtn} ${styles.dimOpt}`;
            }
            return (
              <button
                key={opt}
                className={cls}
                onClick={() => handlePick(opt)}
                disabled={state !== 'asking'}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {state === 'correct' && (
          <div className={`${styles.fb} ${styles.fbCorrect}`} aria-live="assertive">
            🎉 <strong>{q.word}</strong> and <strong>{q.correct}</strong> rhyme!
          </div>
        )}
        {state === 'wrong' && (
          <div className={`${styles.fb} ${styles.fbWrong}`} aria-live="assertive">
            😊 Try again! Which one sounds like <strong>{q.word}</strong>?
          </div>
        )}
      </div>
    </ActivityShell>
  );
}
