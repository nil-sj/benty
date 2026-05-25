import { useCallback, useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { shuffle, randomItem } from '../../utils/random';
import { useProgress } from '../../context/ProgressContext';
import styles from './AnimalSoundsActivity.module.css';

interface AnimalSoundsProps {
  config: ActivityConfig;
}

interface AnimalSound {
  id: string;
  name: string;
  emoji: string;
  sound: string;
  soundText: string;
}

const ANIMALS: AnimalSound[] = [
  { id: 'cow', name: 'Cow', emoji: '🐄', sound: 'Moo', soundText: 'moo' },
  { id: 'dog', name: 'Dog', emoji: '🐶', sound: 'Woof', soundText: 'woof' },
  { id: 'cat', name: 'Cat', emoji: '🐱', sound: 'Meow', soundText: 'meow' },
  { id: 'duck', name: 'Duck', emoji: '🦆', sound: 'Quack', soundText: 'quack' },
  { id: 'lion', name: 'Lion', emoji: '🦁', sound: 'Roar', soundText: 'roar' },
  { id: 'frog', name: 'Frog', emoji: '🐸', sound: 'Ribbit', soundText: 'ribbit' },
  { id: 'bee', name: 'Bee', emoji: '🐝', sound: 'Buzz', soundText: 'buzz' },
  { id: 'horse', name: 'Horse', emoji: '🐴', sound: 'Neigh', soundText: 'neigh' },
  { id: 'pig', name: 'Pig', emoji: '🐷', sound: 'Oink', soundText: 'oink' },
  { id: 'elephant', name: 'Elephant', emoji: '🐘', sound: 'Trumpet', soundText: 'trumpet' },
  { id: 'owl', name: 'Owl', emoji: '🦉', sound: 'Hoot', soundText: 'hoot' },
  { id: 'sheep', name: 'Sheep', emoji: '🐑', sound: 'Baa', soundText: 'baa' },
];

type State = 'asking' | 'correct' | 'wrong';

function buildOptions(correct: AnimalSound): AnimalSound[] {
  const others = shuffle(ANIMALS.filter(a => a.id !== correct.id)).slice(0, 3);
  return shuffle([correct, ...others]);
}

export function AnimalSoundsActivity({ config }: AnimalSoundsProps) {
  const [current, setCurrent] = useState(() => randomItem(ANIMALS));
  const [options, setOptions] = useState<AnimalSound[]>(() => buildOptions(randomItem(ANIMALS)));
  const [state, setState] = useState<State>('asking');
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const { recordActivity } = useProgress();

  const setupNew = useCallback((prev = current) => {
    const next = randomItem(ANIMALS, prev);
    setCurrent(next);
    setOptions(buildOptions(next));
    setState('asking');
    setSelected(null);
  }, [current]);

  useEffect(() => {
    const timer = setTimeout(() => sayText(`What sound does the ${current.name} make?`), 400);
    return () => clearTimeout(timer);
  }, [current]);

  const handlePick = useCallback((animal: AnimalSound) => {
    if (state !== 'asking') return;
    setSelected(animal.id);
    setTotal(t => t + 1);

    if (animal.id === current.id) {
      setState('correct');
      setScore(s => s + 1);
      sayText(`Yes! The ${current.name} says ${current.soundText}!`);
      recordActivity(config.id, true);
      setTimeout(() => setupNew(), 2200);
    } else {
      setState('wrong');
      sayText(`Try again! Listen carefully.`);
      recordActivity(config.id, false);
      setTimeout(() => setState('asking'), 1200);
    }
  }, [state, current, sayText, recordActivity, config.id, setupNew]);

  const playSound = () => sayText(`The ${current.name} says... ${current.soundText}!`);

  return (
    <ActivityShell
      title={config.title}
      icon={config.icon}
      onNext={() => setupNew()}
      onRepeat={repeat}
      nextLabel="Skip →"
    
      voiceEnabled={isEnabled}
      onToggleVoice={toggle}
    >
      <div className={styles.container}>
        <div className={styles.score}>⭐ {score} / {total}</div>

        <div className={styles.animalCard}>
          <div className={styles.animalEmoji}>{current.emoji}</div>
          <button className={styles.soundBtn} onClick={playSound} aria-label={`Hear ${current.name} sound`}>
            🔊 What do I say?
          </button>
        </div>

        <p className={styles.question}>What sound does the <strong>{current.name}</strong> make?</p>

        <div className={styles.options}>
          {options.map(opt => {
            let cls = styles.optBtn;
            if (state !== 'asking') {
              if (opt.id === current.id) cls = `${styles.optBtn} ${styles.correctOpt}`;
              else if (opt.id === selected) cls = `${styles.optBtn} ${styles.wrongOpt}`;
              else cls = `${styles.optBtn} ${styles.dimOpt}`;
            }
            return (
              <button
                key={opt.id}
                className={cls}
                onClick={() => handlePick(opt)}
                disabled={state !== 'asking'}
                aria-label={`${opt.sound}`}
              >
                <span className={styles.optEmoji}>{opt.emoji}</span>
                <span className={styles.optSound}>{opt.sound}!</span>
              </button>
            );
          })}
        </div>

        {state === 'correct' && (
          <div className={`${styles.fb} ${styles.fbCorrect}`} aria-live="assertive">
            🎉 Yes! The {current.name} says <strong>{current.sound}</strong>!
          </div>
        )}
        {state === 'wrong' && (
          <div className={`${styles.fb} ${styles.fbWrong}`} aria-live="assertive">
            😊 Not quite! Try again.
          </div>
        )}
      </div>
    </ActivityShell>
  );
}
