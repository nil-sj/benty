import { useEffect, useState, useCallback } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { sortingChallenges, sentenceBuildData } from '../../data/newActivitiesData';
import type { SortItem } from '../../data/newActivitiesData';
import { shuffle } from '../../utils/random';
import { useProgress } from '../../context/ProgressContext';
import styles from './DragActivity.module.css';

interface Props { config: ActivityConfig; }

// ─── Category Sorting (tap-to-sort — works on mobile and desktop) ─────────────
export function CategorySortActivity({ config }: Props) {
  const [challengeIdx, setChallengeIdx] = useState(0);
  const challenge = sortingChallenges[challengeIdx];
  const [items, setItems] = useState<SortItem[]>(() => shuffle(challenge.items));
  const [sorted, setSorted] = useState<Record<string, SortItem[]>>({});
  const [selected, setSelected] = useState<SortItem | null>(null);
  const [wrongItem, setWrongItem] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const { recordActivity } = useProgress();

  const totalSorted = Object.values(sorted).reduce((n, arr) => n + arr.length, 0);
  const allDone = totalSorted === challenge.items.length;

  useEffect(() => {
    setItems(shuffle(challenge.items));
    setSorted({});
    setSelected(null);
    setWrongItem(null);
    const t = setTimeout(() => sayText(challenge.audioText), 400);
    return () => clearTimeout(t);
  }, [challengeIdx]);

  const handleItemTap = (item: SortItem) => {
    if (selected?.id === item.id) { setSelected(null); return; }
    setSelected(item);
    sayText(item.name);
  };

  const handleCategoryTap = (category: string) => {
    if (!selected) return;
    if (selected.category === category) {
      // Correct!
      setSorted(prev => ({ ...prev, [category]: [...(prev[category] || []), selected] }));
      setItems(prev => prev.filter(i => i.id !== selected.id));
      setScore(s => s + 1);
      sayText(`${selected.name} is ${category}!`);
      recordActivity(config.id, true);
      setSelected(null);
    } else {
      // Wrong
      setWrongItem(selected.id);
      sayText(`Hmm, ${selected.name} is not ${category}. Try again!`);
      recordActivity(config.id, false);
      setTimeout(() => { setWrongItem(null); setSelected(null); }, 1200);
    }
  };

  const nextChallenge = () => {
    setChallengeIdx(i => (i + 1) % sortingChallenges.length);
    setScore(0);
  };

  return (
    <ActivityShell title={config.title} icon={config.icon}
      onNext={allDone ? nextChallenge : undefined}
      onRepeat={repeat}
      canGoNext={allDone} nextLabel="Next Sort →"
      voiceEnabled={isEnabled} onToggleVoice={toggle}
      showRepeat={false}>
      <div className={styles.container}>
        {/* Challenge picker */}
        <div className={styles.challengeBar}>
          {sortingChallenges.map((c, i) => (
            <button key={c.id} className={`${styles.challengeBtn} ${i === challengeIdx ? styles.challengeActive : ''}`} onClick={() => setChallengeIdx(i)}>
              {c.categoryEmojis[0]}{c.categoryEmojis[1]}
            </button>
          ))}
        </div>

        <h2 className={styles.title}>{challenge.title}</h2>
        <p className={styles.instruction}>{challenge.instruction}</p>
        {selected && <p className={styles.selectedHint}>Now tap a basket to place <strong>{selected.emoji} {selected.name}</strong></p>}

        {/* Category baskets */}
        <div className={styles.baskets}>
          {challenge.categories.map((cat, i) => (
            <div key={cat} className={`${styles.basket} ${selected ? styles.basketActive : ''}`} onClick={() => handleCategoryTap(cat)} role="button" aria-label={`Sort into ${cat}`}>
              <div className={styles.basketEmoji}>{challenge.categoryEmojis[i]}</div>
              <div className={styles.basketLabel}>{cat}</div>
              <div className={styles.basketItems}>
                {(sorted[cat] || []).map(item => (
                  <span key={item.id} className={styles.sortedItem}>{item.emoji}</span>
                ))}
              </div>
              <div className={styles.basketCount}>{(sorted[cat] || []).length}</div>
            </div>
          ))}
        </div>

        {/* Items to sort */}
        {items.length > 0 && (
          <div className={styles.itemsPool}>
            {items.map(item => (
              <button
                key={item.id}
                className={`${styles.sortItem} ${selected?.id === item.id ? styles.sortItemSelected : ''} ${wrongItem === item.id ? styles.sortItemWrong : ''}`}
                onClick={() => handleItemTap(item)}
                aria-label={item.name}
              >
                <span className={styles.sortEmoji}>{item.emoji}</span>
                <span className={styles.sortName}>{item.name}</span>
              </button>
            ))}
          </div>
        )}

        {allDone && (
          <div className={styles.celebration} aria-live="assertive">
            🎉 Amazing! You sorted everything correctly! Score: {score}/{challenge.items.length}
          </div>
        )}
      </div>
    </ActivityShell>
  );
}

// ─── Sentence Builder (tap words to put them in order) ────────────────────────
export function SentenceBuilderActivity({ config }: Props) {
  const [level, setLevel] = useState<1|2|3>(1);
  const levelItems = sentenceBuildData.filter(s => s.level === level);
  const [idx, setIdx] = useState(0);
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [built, setBuilt] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const { recordActivity } = useProgress();

  const current = levelItems[idx % levelItems.length];

  const reset = useCallback((item: typeof current) => {
    setShuffledWords(shuffle([...item.words]));
    setBuilt([]);
    setDone(false);
    setCorrect(false);
  }, []);

  useEffect(() => {
    reset(current);
    const t = setTimeout(() => sayText('Put the words in the right order!'), 400);
    return () => clearTimeout(t);
  }, [current]);

  useEffect(() => { if (level !== undefined) { setIdx(0); } }, [level]);

  const addWord = (word: string, wordIdx: number) => {
    if (done) return;
    const newBuilt = [...built, word];
    const newShuffled = shuffledWords.filter((_, i) => i !== wordIdx);
    setBuilt(newBuilt);
    setShuffledWords(newShuffled);
    sayText(word);

    if (newShuffled.length === 0) {
      // All words placed — check
      setDone(true);
      setTotal(t => t + 1);
      const isCorrect = newBuilt.join(' ') === current.words.join(' ');
      setCorrect(isCorrect);
      if (isCorrect) {
        setScore(s => s + 1);
        sayText(current.audioText);
        recordActivity(config.id, true);
      } else {
        sayText('Almost! Try again.');
        recordActivity(config.id, false);
      }
    }
  };

  const removeWord = (word: string, builtIdx: number) => {
    if (done) return;
    const newBuilt = built.filter((_, i) => i !== builtIdx);
    setBuilt(newBuilt);
    setShuffledWords(prev => [...prev, word]);
  };

  const nextQ = () => {
    setIdx(i => (i + 1) % levelItems.length);
  };

  const levelLabels: Record<number, string> = { 1: '⭐ Easy', 2: '⭐⭐ Medium', 3: '⭐⭐⭐ Harder' };

  return (
    <ActivityShell title={config.title} icon={config.icon}
      onNext={done ? nextQ : undefined}
      onRepeat={repeat}
      canGoNext={done} nextLabel="Next sentence →"
      voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.container}>
        <div className={styles.levelBar}>
          {([1,2,3] as const).map(l => (
            <button key={l} className={`${styles.levelBtn} ${level === l ? styles.levelActive : ''}`} onClick={() => setLevel(l)}>
              {levelLabels[l]}
            </button>
          ))}
        </div>

        <div className={styles.score}>⭐ {score} / {total} · {current.emoji}</div>

        {/* Build area */}
        <div className={`${styles.buildArea} ${done ? (correct ? styles.buildCorrect : styles.buildWrong) : ''}`}>
          {built.length === 0 && <span className={styles.buildPlaceholder}>Tap words below to build the sentence</span>}
          {built.map((word, i) => (
            <button key={`${word}-${i}`} className={styles.builtWord} onClick={() => removeWord(word, i)} aria-label={`Remove ${word}`}>
              {word}
            </button>
          ))}
        </div>

        {done && !correct && (
          <div className={styles.wrongHint}>
            The correct order was: <strong>{current.words.join(' ')}</strong>
          </div>
        )}

        {/* Word pool */}
        <div className={styles.wordPool}>
          {shuffledWords.map((word, i) => (
            <button key={`${word}-${i}`} className={styles.poolWord} onClick={() => addWord(word, i)} aria-label={`Add ${word}`}>
              {word}
            </button>
          ))}
        </div>

        {done && correct && <div className={styles.celebration}>🎉 Perfect sentence!</div>}
        {done && (
          <button className={styles.retryBtn} onClick={() => reset(current)}>↩ Try again</button>
        )}
        <p className={styles.hint}>Tap a word to add it · Tap a placed word to remove it</p>
      </div>
    </ActivityShell>
  );
}
