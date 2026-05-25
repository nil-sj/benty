import { useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { fruitsData, animalsData } from '../../data/learningData';
import { shuffle, pickN } from '../../utils/random';
import { useProgress } from '../../context/ProgressContext';
import styles from './MemoryCardGame.module.css';

interface MemoryCardGameProps {
  config: ActivityConfig;
}

interface Card {
  uid: string;
  id: string;
  emoji: string;
  name: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const POOL = [...fruitsData, ...animalsData];

function buildDeck(pairs = 6): Card[] {
  const items = pickN(POOL, pairs);
  const cards = items.flatMap(item => [
    { uid: item.id + '-a', id: item.id, emoji: item.emoji, name: item.name, isFlipped: false, isMatched: false },
    { uid: item.id + '-b', id: item.id, emoji: item.emoji, name: item.name, isFlipped: false, isMatched: false },
  ]);
  return shuffle(cards);
}

export function MemoryCardGame({ config }: MemoryCardGameProps) {
  const [cards, setCards] = useState<Card[]>(() => buildDeck());
  const [flipped, setFlipped] = useState<string[]>([]);
  const [locked, setLocked] = useState(false);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const { sayText } = useSpeech(config.voiceEnabled);
  const { recordActivity } = useProgress();

  const total = cards.length / 2;

  useEffect(() => {
    if (matches === total && total > 0) {
      sayText(`Amazing! You found all ${total} pairs in ${moves} moves!`);
    }
  }, [matches, total, moves]);

  const handleFlip = (uid: string) => {
    if (locked) return;
    const card = cards.find(c => c.uid === uid);
    if (!card || card.isFlipped || card.isMatched) return;

    const newFlipped = [...flipped, uid];
    setCards(prev => prev.map(c => c.uid === uid ? { ...c, isFlipped: true } : c));

    if (newFlipped.length === 2) {
      setFlipped([]);
      setMoves(m => m + 1);
      setLocked(true);

      const [a, b] = newFlipped.map(uid => cards.find(c => c.uid === uid)!);
      if (a.id === b.id) {
        // Match!
        setTimeout(() => {
          setCards(prev => prev.map(c => c.id === a.id ? { ...c, isMatched: true } : c));
          setMatches(m => m + 1);
          sayText(`${a.name}! Match!`);
          recordActivity(config.id, true);
          setLocked(false);
        }, 600);
      } else {
        // No match — flip back
        setTimeout(() => {
          setCards(prev => prev.map(c =>
            newFlipped.includes(c.uid) ? { ...c, isFlipped: false } : c
          ));
          recordActivity(config.id, false);
          setLocked(false);
        }, 1200);
      }
    } else {
      setFlipped(newFlipped);
      sayText(card.name);
    }
  };

  const restart = () => {
    setCards(buildDeck());
    setFlipped([]);
    setLocked(false);
    setMoves(0);
    setMatches(0);
  };

  const won = matches === total;

  return (
    <ActivityShell
      title={config.title}
      icon={config.icon}
      showNavigation={false}
    >
      <div className={styles.container}>
        <div className={styles.stats}>
          <span>🃏 Moves: {moves}</span>
          <span>✅ Pairs: {matches}/{total}</span>
          <button className={styles.restartBtn} onClick={restart}>🔄 New Game</button>
        </div>

        {won && (
          <div className={styles.winBanner} aria-live="assertive">
            🎉 You found all {total} pairs in {moves} moves! Amazing!
          </div>
        )}

        <div className={styles.grid} role="grid" aria-label="Memory card grid">
          {cards.map(card => (
            <button
              key={card.uid}
              className={`${styles.card} ${card.isFlipped || card.isMatched ? styles.cardFront : styles.cardBack} ${card.isMatched ? styles.cardMatched : ''}`}
              onClick={() => handleFlip(card.uid)}
              aria-label={card.isFlipped || card.isMatched ? card.name : 'Hidden card'}
              aria-pressed={card.isFlipped || card.isMatched}
            >
              <span className={styles.cardInner}>
                {card.isFlipped || card.isMatched ? card.emoji : '❓'}
              </span>
            </button>
          ))}
        </div>
      </div>
    </ActivityShell>
  );
}
