import { useCallback, useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { fruitsData, animalsData, vehiclesData } from '../../data/learningData';
import { shuffle, pickN } from '../../utils/random';
import { useProgress } from '../../context/ProgressContext';
import styles from './MatchingGameActivity.module.css';

interface MatchingGameProps {
  config: ActivityConfig;
}

interface MatchItem {
  id: string;
  name: string;
  emoji: string;
}

const ALL_ITEMS = [...fruitsData, ...animalsData, ...vehiclesData];

function buildRound(count = 5): MatchItem[] {
  return pickN(ALL_ITEMS, count).map(i => ({ id: i.id, name: i.name, emoji: i.emoji }));
}

export function MatchingGameActivity({ config }: MatchingGameProps) {
  const [items, setItems] = useState<MatchItem[]>(() => buildRound());
  const [rightSide, setRightSide] = useState<MatchItem[]>(() => []);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrongPair, setWrongPair] = useState<[string, string] | null>(null);
  const [score, setScore] = useState(0);
  const [rounds, setRounds] = useState(0);
  const { sayText, repeat } = useSpeech(config.voiceEnabled);
  const { recordActivity } = useProgress();

  useEffect(() => {
    setRightSide(shuffle([...items]));
  }, [items]);

  useEffect(() => {
    if (matched.size === items.length && items.length > 0) {
      setTimeout(() => sayText('Amazing! You matched them all!'), 300);
    }
  }, [matched, items]);

  const handleLeftClick = useCallback((id: string) => {
    if (matched.has(id)) return;
    setSelectedLeft(id);
    const item = items.find(i => i.id === id);
    if (item) sayText(item.name);
  }, [matched, items, sayText]);

  const handleRightClick = useCallback((id: string) => {
    if (matched.has(id)) return;
    if (!selectedLeft) { setSelectedRight(id); return; }

    if (selectedLeft === id) {
      // Correct match
      const newMatched = new Set(matched);
      newMatched.add(id);
      setMatched(newMatched);
      setSelectedLeft(null);
      setSelectedRight(null);
      setWrongPair(null);
      setScore(s => s + 1);
      recordActivity(config.id, true);
      const item = items.find(i => i.id === id);
      if (item) sayText(`${item.name}! Correct!`);
    } else {
      // Wrong match
      setWrongPair([selectedLeft, id]);
      recordActivity(config.id, false);
      sayText('Not quite! Try again.');
      setTimeout(() => {
        setWrongPair(null);
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 1000);
    }
  }, [selectedLeft, matched, items, sayText, recordActivity, config.id]);

  const newRound = () => {
    setItems(buildRound());
    setMatched(new Set());
    setSelectedLeft(null);
    setSelectedRight(null);
    setWrongPair(null);
    setRounds(r => r + 1);
  };

  const allMatched = matched.size === items.length;

  return (
    <ActivityShell
      title={config.title}
      icon={config.icon}
      onNext={allMatched ? newRound : undefined}
      onRepeat={repeat}
      canGoNext={allMatched}
      nextLabel="New Round →"
      showRepeat={false}
    >
      <div className={styles.container}>
        <div className={styles.scorebar}>
          <span>⭐ Score: {score}</span>
          <span>Round {rounds + 1}</span>
          <span>{matched.size}/{items.length} matched</span>
        </div>

        {allMatched && (
          <div className={styles.celebration} aria-live="assertive">
            🎉 You matched them all! Amazing!
          </div>
        )}

        <p className={styles.instruction}>
          Tap an emoji on the left, then tap its name on the right!
        </p>

        <div className={styles.board}>
          {/* Left side — emojis */}
          <div className={styles.col}>
            {items.map(item => {
              const isMatched = matched.has(item.id);
              const isSelected = selectedLeft === item.id;
              const isWrong = wrongPair?.[0] === item.id;
              return (
                <button
                  key={item.id}
                  className={`${styles.leftCard} ${isMatched ? styles.matchedCard : ''} ${isSelected ? styles.selectedCard : ''} ${isWrong ? styles.wrongCard : ''}`}
                  onClick={() => handleLeftClick(item.id)}
                  disabled={isMatched}
                  aria-label={isMatched ? `${item.name} matched` : `Select ${item.emoji}`}
                >
                  <span className={styles.bigEmoji}>{item.emoji}</span>
                  {isMatched && <span className={styles.checkmark}>✓</span>}
                </button>
              );
            })}
          </div>

          {/* Connector line area */}
          <div className={styles.connector} aria-hidden="true">
            {items.map(item => (
              <div key={item.id} className={`${styles.dot} ${matched.has(item.id) ? styles.dotMatched : ''}`} />
            ))}
          </div>

          {/* Right side — names */}
          <div className={styles.col}>
            {rightSide.map(item => {
              const isMatched = matched.has(item.id);
              const isSelected = selectedRight === item.id || selectedLeft === item.id && false;
              const isWrong = wrongPair?.[1] === item.id;
              return (
                <button
                  key={item.id}
                  className={`${styles.rightCard} ${isMatched ? styles.matchedCard : ''} ${isSelected ? styles.selectedCard : ''} ${isWrong ? styles.wrongCard : ''}`}
                  onClick={() => handleRightClick(item.id)}
                  disabled={isMatched}
                  aria-label={isMatched ? `${item.name} matched` : `Select ${item.name}`}
                >
                  <span className={styles.itemName}>{item.name}</span>
                  {isMatched && <span className={styles.checkmark}>✓</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </ActivityShell>
  );
}
