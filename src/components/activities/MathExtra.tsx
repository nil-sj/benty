import { useCallback, useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { numberBondsData, ordinalData, skipCountData, placeValueData } from '../../data/newActivitiesData';
import { shuffle, randomItem } from '../../utils/random';
import { useProgress } from '../../context/ProgressContext';
import styles from './MathActivity.module.css';
import extra from './MathExtra.module.css';

interface Props { config: ActivityConfig; }
type FB = 'idle' | 'correct' | 'wrong';

// ─── Number Bonds ─────────────────────────────────────────────────────────────
export function NumberBondsActivity({ config }: Props) {
  const pool = numberBondsData.filter(b => b.total <= 10);
  const [bond, setBond] = useState(() => randomItem(pool));
  const [missing, setMissing] = useState<'part1' | 'part2'>('part2');
  const [fb, setFb] = useState<FB>('idle');
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const { recordActivity } = useProgress();

  const correctAnswer = missing === 'part1' ? bond.part1 : bond.part2;

  const nextBond = useCallback(() => {
    const next = randomItem(pool, bond);
    setBond(next);
    setMissing(Math.random() > 0.5 ? 'part1' : 'part2');
    setFb('idle');
  }, [bond, pool]);

  useEffect(() => {
    const known = missing === 'part1' ? bond.part2 : bond.part1;
    const t = setTimeout(() => sayText(`${known} and what makes ${bond.total}?`), 400);
    return () => clearTimeout(t);
  }, [bond, missing]);

  const handleAnswer = useCallback((n: number) => {
    if (fb !== 'idle') return;
    setTotal(t => t + 1);
    if (n === correctAnswer) {
      setFb('correct');
      setScore(s => s + 1);
      sayText(`${bond.part1} and ${bond.part2} make ${bond.total}!`);
      recordActivity(config.id, true);
      setTimeout(nextBond, 1800);
    } else {
      setFb('wrong');
      sayText('Try again! Count carefully.');
      recordActivity(config.id, false);
      setTimeout(() => setFb('idle'), 1200);
    }
  }, [fb, correctAnswer, bond, sayText, recordActivity, config.id, nextBond]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { const n = parseInt(e.key); if (n >= 0 && n <= 9) handleAnswer(n); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [handleAnswer]);

  const known = missing === 'part1' ? bond.part2 : bond.part1;

  return (
    <ActivityShell title={config.title} icon={config.icon} onRepeat={repeat} showNavigation={false} voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.container}>
        <div className={styles.score}>⭐ {score} / {total}</div>
        <div className={extra.bondCard}>
          <div className={extra.bondTotal}>
            <span className={extra.bondEmoji}>{Array(bond.total).fill(bond.emoji).join('')}</span>
            <span className={extra.bondNum}>{bond.total}</span>
            <span className={extra.bondLabel}>total</span>
          </div>
          <div className={extra.bondArrows}>⬇️ ⬇️</div>
          <div className={extra.bondParts}>
            <div className={`${extra.bondPart} ${missing === 'part1' ? extra.bondMissing : ''}`}>
              {missing === 'part1' ? '?' : bond.part1}
            </div>
            <div className={extra.bondPlus}>+</div>
            <div className={`${extra.bondPart} ${missing === 'part2' ? extra.bondMissing : ''}`}>
              {missing === 'part2' ? '?' : bond.part2}
            </div>
          </div>
          <p className={styles.prompt}>{known} and <strong>?</strong> makes {bond.total}</p>
        </div>
        {fb === 'correct' && <div className={styles.fbCorrect}>🎉 {bond.part1} + {bond.part2} = {bond.total}!</div>}
        {fb === 'wrong' && <div className={styles.fbWrong}>😊 Try again!</div>}
        <div className={styles.numGrid}>
          {Array.from({ length: bond.total + 1 }, (_, i) => i).map(n => (
            <button key={n} className={`${styles.numBtn} ${fb === 'correct' && n === correctAnswer ? styles.numCorrect : ''}`} onClick={() => handleAnswer(n)}>{n}</button>
          ))}
        </div>
      </div>
    </ActivityShell>
  );
}

// ─── Ordinal Numbers ──────────────────────────────────────────────────────────
export function OrdinalNumbersActivity({ config }: Props) {
  const [index, setIndex] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const current = ordinalData[index];

  useEffect(() => {
    const t = setTimeout(() => {
      sayText(current.audioText);
      setTimeout(() => sayText(current.example), 2000);
      setTimeout(() => sayText(current.funFact), 4500);
    }, 400);
    return () => clearTimeout(t);
  }, [current]);

  return (
    <ActivityShell title={config.title} icon={config.icon}
      onNext={index < ordinalData.length - 1 ? () => setIndex(i => i + 1) : undefined}
      onPrevious={index > 0 ? () => setIndex(i => i - 1) : undefined}
      onRepeat={repeat} canGoPrevious={index > 0} canGoNext={index < ordinalData.length - 1}
      progressCurrent={index + 1} progressTotal={ordinalData.length}
      voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={extra.ordinalCard}>
        <div className={extra.ordEmoji}>{current.emoji}</div>
        <div className={extra.ordNumber}>{current.number}</div>
        <div className={extra.ordWord}>{current.ordinal}</div>
        <div className={extra.ordShort}>{current.short}</div>
        <p className={extra.ordExample}>{current.example}</p>
        <div className={extra.ordFact}>💡 {current.funFact}</div>
        <button className={styles.numBtn} style={{ marginTop: 12, padding: '10px 24px', fontSize: '1rem' }} onClick={repeat}>🔊 Say it again!</button>
      </div>
    </ActivityShell>
  );
}

// ─── Skip Counting ────────────────────────────────────────────────────────────
export function SkipCountingActivity({ config }: Props) {
  const [skipIdx, setSkipIdx] = useState(0);
  const [revealed, setRevealed] = useState(3);
  const [celebrating, setCelebrating] = useState(false);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const current = skipCountData[skipIdx];

  useEffect(() => {
    setRevealed(3);
    setCelebrating(false);
    const t = setTimeout(() => sayText(current.audioText), 400);
    return () => clearTimeout(t);
  }, [current]);

  const handleNext = () => {
    if (revealed < current.sequence.length) {
      const next = current.sequence[revealed];
      setRevealed(r => r + 1);
      sayText(`${next}!`);
    } else {
      setCelebrating(true);
      sayText('Amazing! You counted all the way!');
    }
  };

  return (
    <ActivityShell title={config.title} icon={config.icon}
      onNext={handleNext} onRepeat={repeat}
      nextLabel={revealed >= current.sequence.length ? '🎉 Done!' : `Next: ${current.sequence[revealed] ?? ''}  →`}
      voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={extra.skipContainer}>
        <div className={extra.skipButtons}>
          {skipCountData.map((s, i) => (
            <button key={s.id} className={`${extra.skipTab} ${i === skipIdx ? extra.skipTabActive : ''}`} onClick={() => setSkipIdx(i)}>{s.label}</button>
          ))}
        </div>
        <div className={extra.skipCard}>
          <p className={extra.skipHint}>{current.hint}</p>
          <p className={extra.skipEmoji}>{current.emoji}</p>
          <div className={extra.skipGrid}>
            {current.sequence.map((n, i) => (
              <div key={n} className={`${extra.skipNum} ${i < revealed ? extra.skipNumVisible : extra.skipNumHidden}`}>
                {i < revealed ? n : '?'}
              </div>
            ))}
          </div>
        </div>
        {celebrating && <div className={extra.celebrate}>🎉 You counted in {current.skip}s all the way to {current.sequence[current.sequence.length - 1]}!</div>}
      </div>
    </ActivityShell>
  );
}

// ─── Place Value ──────────────────────────────────────────────────────────────
export function PlaceValueActivity({ config }: Props) {
  const pool = shuffle(placeValueData);
  const [idx, setIdx] = useState(0);
  const [fb, setFb] = useState<FB>('idle');
  const [guessedTens, setGuessedTens] = useState<number | null>(null);
  const [guessedOnes, setGuessedOnes] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const { recordActivity } = useProgress();
  const current = pool[idx % pool.length];

  useEffect(() => {
    setFb('idle'); setGuessedTens(null); setGuessedOnes(null);
    const t = setTimeout(() => sayText(`How many tens and ones in ${current.number}?`), 400);
    return () => clearTimeout(t);
  }, [idx]);

  const checkAnswer = () => {
    if (guessedTens === null || guessedOnes === null) return;
    setTotal(t => t + 1);
    if (guessedTens === current.tens && guessedOnes === current.ones) {
      setFb('correct'); setScore(s => s + 1);
      sayText(current.audioText);
      recordActivity(config.id, true);
      setTimeout(() => setIdx(i => i + 1), 2000);
    } else {
      setFb('wrong');
      sayText('Not quite! Count the tens and ones again.');
      recordActivity(config.id, false);
      setTimeout(() => { setFb('idle'); setGuessedTens(null); setGuessedOnes(null); }, 1500);
    }
  };

  const tensCount = Array(current.tens).fill('🟦');
  const onesCount = Array(current.ones).fill('🟨');

  return (
    <ActivityShell title={config.title} icon={config.icon} onRepeat={repeat}
      onNext={guessedTens !== null && guessedOnes !== null ? checkAnswer : undefined}
      nextLabel="Check ✓" canGoNext={guessedTens !== null && guessedOnes !== null}
      voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.container}>
        <div className={styles.score}>⭐ {score} / {total}</div>
        <div className={extra.pvCard}>
          <div className={extra.pvNumber}>{current.number}</div>
          <div className={extra.pvBlocks}>
            <div className={extra.pvGroup}>
              <div className={extra.pvGroupLabel}>Tens</div>
              <div className={extra.pvBlockRow}>{tensCount.map((e, i) => <span key={i} className={extra.pvTenBlock}>{e}</span>)}</div>
            </div>
            {current.ones > 0 && (
              <div className={extra.pvGroup}>
                <div className={extra.pvGroupLabel}>Ones</div>
                <div className={extra.pvBlockRow}>{onesCount.map((e, i) => <span key={i} className={extra.pvOneBlock}>{e}</span>)}</div>
              </div>
            )}
          </div>
          <p className={styles.prompt}>How many tens and ones?</p>
          <div className={extra.pvInputRow}>
            <div className={extra.pvInputGroup}>
              <label>Tens</label>
              <div className={extra.pvNumBtns}>
                {[0,1,2,3,4,5,6,7,8,9].map(n => (
                  <button key={n} className={`${extra.pvNumBtn} ${guessedTens === n ? extra.pvSelected : ''}`} onClick={() => setGuessedTens(n)}>{n}</button>
                ))}
              </div>
            </div>
            <div className={extra.pvInputGroup}>
              <label>Ones</label>
              <div className={extra.pvNumBtns}>
                {[0,1,2,3,4,5,6,7,8,9].map(n => (
                  <button key={n} className={`${extra.pvNumBtn} ${guessedOnes === n ? extra.pvSelected : ''}`} onClick={() => setGuessedOnes(n)}>{n}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {fb === 'correct' && <div className={styles.fbCorrect}>🎉 {current.number} = {current.tens} tens and {current.ones} ones!</div>}
        {fb === 'wrong' && <div className={styles.fbWrong}>😊 Count the blocks carefully!</div>}
      </div>
    </ActivityShell>
  );
}
