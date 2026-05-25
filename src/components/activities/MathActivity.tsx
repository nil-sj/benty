import { useCallback, useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { additionData, subtractionData, compareData, patternData } from '../../data/newActivitiesData';
import type { MathQuestion } from '../../data/newActivitiesData';
import { shuffle, randomItem } from '../../utils/random';
import { useProgress } from '../../context/ProgressContext';
import styles from './MathActivity.module.css';

interface MathProps { config: ActivityConfig; }
type Feedback = 'idle' | 'correct' | 'wrong';

// ─── Addition / Subtraction ──────────────────────────────────────────────────
export function AdditionActivity({ config }: MathProps) {
  const isSubtraction = config.dataSource === 'subtraction';
  const allQ = isSubtraction ? subtractionData : additionData;
  const [q, setQ] = useState<MathQuestion>(() => randomItem(allQ));
  const [feedback, setFeedback] = useState<Feedback>('idle');
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const { recordActivity } = useProgress();

  useEffect(() => {
    setFeedback('idle');
    const t = setTimeout(() => sayText(q.audioText), 400);
    return () => clearTimeout(t);
  }, [q]);

  const checkAnswer = useCallback((val: number) => {
    if (feedback !== 'idle') return;
    setTotal(t => t + 1);
    if (val === q.answer) {
      setFeedback('correct');
      setScore(s => s + 1);
      const word = isSubtraction ? 'minus' : 'plus';
      sayText(`Yes! ${q.n1} ${word} ${q.n2} equals ${q.answer}!`);
      recordActivity(config.id, true);
      setTimeout(() => { setQ(randomItem(allQ, q)); setFeedback('idle'); }, 2000);
    } else {
      setFeedback('wrong');
      sayText('Good try! Count again carefully.');
      recordActivity(config.id, false);
      setTimeout(() => setFeedback('idle'), 1500);
    }
  }, [feedback, q, allQ, isSubtraction, sayText, recordActivity, config.id]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { const n = parseInt(e.key); if (n >= 0 && n <= 9) checkAnswer(n); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [checkAnswer]);

  const emoji1Row = Array(q.n1).fill(q.emoji1).join('');
  const emoji2Row = Array(q.n2).fill(q.emoji2).join('');

  return (
    <ActivityShell title={config.title} icon={config.icon} onRepeat={repeat} showNavigation={false} voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.container}>
        <div className={styles.score}>⭐ {score} / {total}</div>
        <div className={styles.mathCard}>
          <div className={styles.emojiRow}>{emoji1Row}</div>
          <div className={styles.operator}>{isSubtraction ? '−' : '+'}</div>
          <div className={styles.emojiRow}>{emoji2Row}</div>
          <div className={styles.equals}>=</div>
          <div className={styles.question}>?</div>
          <p className={styles.prompt}>{q.audioText}</p>
        </div>
        {feedback === 'correct' && <div className={styles.fbCorrect}>🎉 {q.n1} {isSubtraction ? '−' : '+'} {q.n2} = {q.answer}!</div>}
        {feedback === 'wrong' && <div className={styles.fbWrong}>😊 Try again! Count carefully.</div>}
        <div className={styles.numGrid}>
          {Array.from({ length: 11 }, (_, i) => i).map(n => (
            <button key={n} className={`${styles.numBtn} ${feedback === 'correct' && n === q.answer ? styles.numCorrect : ''}`} onClick={() => checkAnswer(n)}>{n}</button>
          ))}
        </div>
      </div>
    </ActivityShell>
  );
}

// ─── Compare ─────────────────────────────────────────────────────────────────
export function CompareActivity({ config }: MathProps) {
  const [items] = useState(() => shuffle(compareData));
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const { recordActivity } = useProgress();
  const q = items[index];

  useEffect(() => {
    setAnswered(null);
    const t = setTimeout(() => sayText(q.audioText), 400);
    return () => clearTimeout(t);
  }, [q]);

  const handlePick = (pick: 'left' | 'right' | 'equal') => {
    if (answered) return;
    setAnswered(pick);
    setTotal(t => t + 1);
    const correct = pick === q.correct;
    if (correct) {
      setScore(s => s + 1);
      const msg = q.correct === 'equal' ? 'They are equal!' : q.correct === 'left' ? `Yes! ${q.left} is more!` : `Yes! ${q.right} is more!`;
      sayText(msg);
      recordActivity(config.id, true);
    } else {
      sayText('Not quite! Count each group carefully.');
      recordActivity(config.id, false);
    }
  };

  const next = () => { if (index < items.length - 1) setIndex(i => i + 1); };

  return (
    <ActivityShell title={config.title} icon={config.icon} onNext={answered ? next : undefined} onRepeat={repeat} canGoNext={!!answered} nextLabel="Next →" voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.container}>
        <div className={styles.score}>⭐ {score} / {total}</div>
        <p className={styles.bigPrompt}>{q.audioText}</p>
        <div className={styles.compareRow}>
          <button
            className={`${styles.groupBtn} ${answered ? (q.correct === 'left' ? styles.correctGroup : answered === 'left' ? styles.wrongGroup : styles.dimGroup) : ''}`}
            onClick={() => handlePick('left')} disabled={!!answered}>
            <div className={styles.groupEmojis}>{Array(q.left).fill(q.leftEmoji).join('')}</div>
            <div className={styles.groupCount}>{q.left}</div>
          </button>
          <div className={styles.compareVs}>{answered ? (q.correct === 'equal' ? '=' : q.correct === 'left' ? '>' : '<') : '?'}</div>
          <button
            className={`${styles.groupBtn} ${answered ? (q.correct === 'right' ? styles.correctGroup : answered === 'right' ? styles.wrongGroup : styles.dimGroup) : ''}`}
            onClick={() => handlePick('right')} disabled={!!answered}>
            <div className={styles.groupEmojis}>{Array(q.right).fill(q.rightEmoji).join('')}</div>
            <div className={styles.groupCount}>{q.right}</div>
          </button>
        </div>
        {answered && <div className={answered === q.correct ? styles.fbCorrect : styles.fbWrong}>{answered === q.correct ? '🎉 Correct!' : '😊 Good try! Count each group.'}</div>}
      </div>
    </ActivityShell>
  );
}

// ─── Pattern ──────────────────────────────────────────────────────────────────
export function PatternActivity({ config }: MathProps) {
  const [items] = useState(() => shuffle(patternData));
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const { recordActivity } = useProgress();
  const q = items[index];

  useEffect(() => {
    setAnswered(null);
    const t = setTimeout(() => sayText(q.audioText), 400);
    return () => clearTimeout(t);
  }, [q]);

  const handlePick = (opt: string) => {
    if (answered) return;
    setAnswered(opt);
    setTotal(t => t + 1);
    if (opt === q.answer) {
      setScore(s => s + 1);
      sayText(`Yes! ${opt} comes next!`);
      recordActivity(config.id, true);
    } else {
      sayText('Look at the pattern again carefully!');
      recordActivity(config.id, false);
    }
  };

  const next = () => { if (index < items.length - 1) setIndex(i => i + 1); };

  return (
    <ActivityShell title={config.title} icon={config.icon} onNext={answered ? next : undefined} onRepeat={repeat} canGoNext={!!answered} nextLabel="Next →" voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.container}>
        <div className={styles.score}>⭐ {score} / {total}</div>
        <div className={styles.patternCard}>
          <p className={styles.patternHint}>{q.hint}</p>
          <div className={styles.patternRow}>
            {q.sequence.map((emoji, i) => <span key={i} className={styles.patternItem}>{emoji}</span>)}
            <span className={styles.patternNext}>{answered || '?'}</span>
          </div>
          <p className={styles.prompt}>{q.audioText}</p>
        </div>
        {answered && <div className={answered === q.answer ? styles.fbCorrect : styles.fbWrong}>{answered === q.answer ? `🎉 Yes! ${q.answer} comes next!` : '😊 Look at the pattern again!'}</div>}
        <div className={styles.optGrid}>
          {q.options.map(opt => (
            <button key={opt} className={`${styles.optBtn} ${answered === q.answer && opt === q.answer ? styles.numCorrect : answered && opt === answered && answered !== q.answer ? styles.numWrong : ''}`} onClick={() => handlePick(opt)}>{opt}</button>
          ))}
        </div>
      </div>
    </ActivityShell>
  );
}
