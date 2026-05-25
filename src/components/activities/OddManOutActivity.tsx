import { useCallback, useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { fruitsData, animalsData, vehiclesData, vegetablesData } from '../../data/learningData';
import type { LearningItem } from '../../data/learningData';
import { shuffle, pickN, randomItem } from '../../utils/random';
import { useProgress } from '../../context/ProgressContext';
import styles from './OddManOutActivity.module.css';

interface OddManOutProps {
  config: ActivityConfig;
}

interface Round {
  options: Array<LearningItem & { categoryName: string }>;
  oddIndex: number;
  oddCategory: string;
  mainCategory: string;
}

const CATEGORIES = [
  { name: 'Fruit', data: fruitsData },
  { name: 'Animal', data: animalsData },
  { name: 'Vehicle', data: vehiclesData },
  { name: 'Vegetable', data: vegetablesData },
];

function buildRound(): Round {
  const shuffledCats = shuffle(CATEGORIES);
  const mainCat = shuffledCats[0];
  const oddCat = shuffledCats[1];

  const mainItems = pickN(mainCat.data, 3).map(i => ({ ...i, categoryName: mainCat.name }));
  const oddItem = { ...randomItem(oddCat.data), categoryName: oddCat.name };

  const all = shuffle([...mainItems, oddItem]);
  const oddIndex = all.findIndex(i => i.id === oddItem.id && i.categoryName === oddCat.name);

  return { options: all, oddIndex, oddCategory: oddCat.name, mainCategory: mainCat.name };
}

type State = 'asking' | 'correct' | 'wrong';

export function OddManOutActivity({ config }: OddManOutProps) {
  const [round, setRound] = useState<Round>(buildRound);
  const [selected, setSelected] = useState<number | null>(null);
  const [state, setState] = useState<State>('asking');
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const { recordActivity } = useProgress();

  useEffect(() => {
    const names = round.options.map(o => o.name).join(', ');
    const timer = setTimeout(() => sayText(`Which one does not belong? ${names}`), 400);
    return () => clearTimeout(timer);
  }, [round]);

  const handlePick = useCallback((index: number) => {
    if (state !== 'asking') return;
    setSelected(index);

    if (index === round.oddIndex) {
      setState('correct');
      const odd = round.options[index];
      sayText(`Correct! ${odd.name} is a ${round.oddCategory}. The others are all ${round.mainCategory}s!`);
      recordActivity(config.id, true);
    } else {
      setState('wrong');
      sayText(`Not quite! Look for the one that is different.`);
      recordActivity(config.id, false);
    }
  }, [state, round, sayText, recordActivity, config.id]);

  const next = () => {
    setRound(buildRound());
    setSelected(null);
    setState('asking');
  };

  const optionLabels = ['A', 'B', 'C', 'D'];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const idx = optionLabels.indexOf(e.key.toUpperCase());
      if (idx !== -1) handlePick(idx);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handlePick]);

  return (
    <ActivityShell
      title={config.title}
      icon={config.icon}
      onNext={state !== 'asking' ? next : undefined}
      onRepeat={repeat}
      canGoNext={state !== 'asking'}
      nextLabel="Next Round →"
    
      voiceEnabled={isEnabled}
      onToggleVoice={toggle}
    >
      <div className={styles.container}>
        <p className={styles.question}>Which one does NOT belong?</p>

        <div className={styles.grid}>
          {round.options.map((opt, i) => {
            let btnClass = styles.optionBtn;
            if (state !== 'asking') {
              if (i === round.oddIndex) btnClass = `${styles.optionBtn} ${styles.oddBtn}`;
              else if (i === selected) btnClass = `${styles.optionBtn} ${styles.wrongBtn}`;
              else btnClass = `${styles.optionBtn} ${styles.dimBtn}`;
            }
            return (
              <button
                key={opt.id + i}
                className={btnClass}
                onClick={() => handlePick(i)}
                disabled={state !== 'asking'}
                aria-label={`${optionLabels[i]}: ${opt.name}`}
              >
                <span className={styles.optLabel}>{optionLabels[i]}</span>
                <span className={styles.optEmoji}>{opt.emoji}</span>
                <span className={styles.optName}>{opt.name}</span>
              </button>
            );
          })}
        </div>

        {state === 'correct' && (
          <div className={`${styles.feedback} ${styles.feedbackCorrect}`} aria-live="assertive">
            🎉 Correct! <strong>{round.options[round.oddIndex].name}</strong> is a {round.oddCategory} — the others are {round.mainCategory}s!
          </div>
        )}
        {state === 'wrong' && (
          <div className={`${styles.feedback} ${styles.feedbackWrong}`} aria-live="assertive">
            😊 Good try! Look for the one from a different group.
          </div>
        )}
      </div>
    </ActivityShell>
  );
}
