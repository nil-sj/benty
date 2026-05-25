import { useCallback, useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import {
  numberLineData, oneMoreLessData, compoundWordsData, coinsData,
} from '../../data/newActivitiesData';
import { shuffle, randomItem } from '../../utils/random';
import { useProgress } from '../../context/ProgressContext';
import styles from './NewMathActivity.module.css';

interface Props { config: ActivityConfig; }
type FB = 'idle' | 'correct' | 'wrong';

// ─── Number Line ─────────────────────────────────────────────────────────────
export function NumberLineActivity({ config }: Props) {
  const pool = shuffle(numberLineData);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [fb, setFb] = useState<FB>('idle');
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const { recordActivity } = useProgress();
  const q = pool[idx % pool.length];

  useEffect(() => {
    setSelected(null); setFb('idle');
    const t = setTimeout(() => sayText(q.audioText), 400);
    return () => clearTimeout(t);
  }, [idx]);

  const handlePick = (n: number) => {
    if (fb !== 'idle') return;
    setSelected(n);
    setTotal(t => t + 1);
    if (n === q.target) {
      setFb('correct'); setScore(s => s + 1);
      sayText(`Yes! ${q.target} is right here on the number line!`);
      recordActivity(config.id, true);
      setTimeout(() => setIdx(i => i + 1), 1800);
    } else {
      setFb('wrong');
      sayText(`Not quite! Count from zero to find ${q.target}.`);
      recordActivity(config.id, false);
      setTimeout(() => { setSelected(null); setFb('idle'); }, 1500);
    }
  };

  const nums = Array.from({ length: q.max + 1 }, (_, i) => i);

  return (
    <ActivityShell title={config.title} icon={config.icon} onRepeat={repeat} showNavigation={false} voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.container}>
        <div className={styles.score}>⭐ {score} / {total}</div>
        <div className={styles.questionCard}>
          <p className={styles.prompt}>{q.audioText}</p>
          <p className={styles.hint}>{q.hint}</p>
        </div>
        <div className={styles.numberLine}>
          {nums.map(n => (
            <button
              key={n}
              className={`${styles.nlBtn} ${n === selected && fb === 'correct' ? styles.nlCorrect : ''} ${n === selected && fb === 'wrong' ? styles.nlWrong : ''} ${fb === 'correct' && n === q.target ? styles.nlCorrect : ''}`}
              onClick={() => handlePick(n)}
              aria-label={String(n)}
            >
              {n}
            </button>
          ))}
        </div>
        <div className={styles.nlLine} />
        {fb === 'correct' && <div className={styles.fbCorrect}>🎉 {q.target} is in the right spot!</div>}
        {fb === 'wrong' && <div className={styles.fbWrong}>😊 Try counting from 0!</div>}
      </div>
    </ActivityShell>
  );
}

// ─── One More / One Less ─────────────────────────────────────────────────────
export function OneMoreLessActivity({ config }: Props) {
  const [q, setQ] = useState(() => randomItem(oneMoreLessData));
  const [fb, setFb] = useState<FB>('idle');
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const { recordActivity } = useProgress();

  useEffect(() => {
    setFb('idle');
    const t = setTimeout(() => sayText(q.audioText), 400);
    return () => clearTimeout(t);
  }, [q]);

  const handlePick = useCallback((n: number) => {
    if (fb !== 'idle') return;
    setTotal(t => t + 1);
    if (n === q.answer) {
      setFb('correct'); setScore(s => s + 1);
      sayText(`Yes! One ${q.ask} than ${q.number} is ${q.answer}!`);
      recordActivity(config.id, true);
      setTimeout(() => { setQ(randomItem(oneMoreLessData, q)); setFb('idle'); }, 1800);
    } else {
      setFb('wrong');
      sayText(`Not quite! One ${q.ask} than ${q.number} is ${q.answer}.`);
      recordActivity(config.id, false);
      setTimeout(() => setFb('idle'), 1500);
    }
  }, [fb, q, sayText, recordActivity, config.id]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { const n = parseInt(e.key); if (!isNaN(n)) handlePick(n); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [handlePick]);

  // Show nearby numbers as options
  const options = [q.answer - 2, q.answer - 1, q.answer, q.answer + 1, q.answer + 2]
    .filter(n => n >= 0 && n <= 11)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
    .concat(q.answer)
    .filter((v, i, arr) => arr.indexOf(v) === i)
    .sort(() => Math.random() - 0.5);

  const emojiRow = Array(q.number).fill(q.emoji).join('');

  return (
    <ActivityShell title={config.title} icon={config.icon} onRepeat={repeat} showNavigation={false} voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.container}>
        <div className={styles.score}>⭐ {score} / {total}</div>
        <div className={styles.questionCard}>
          <div className={styles.emojiRow}>{emojiRow}</div>
          <div className={styles.bigNumber}>{q.number}</div>
          <p className={styles.prompt}>{q.ask === 'more' ? 'One MORE' : 'One LESS'} than <strong>{q.number}</strong> is…?</p>
        </div>
        {fb === 'correct' && <div className={styles.fbCorrect}>🎉 {q.answer} is one {q.ask} than {q.number}!</div>}
        {fb === 'wrong' && <div className={styles.fbWrong}>😊 One {q.ask} is {q.answer}!</div>}
        <div className={styles.optGrid}>
          {options.map(n => (
            <button key={n} className={`${styles.optBtn} ${fb === 'correct' && n === q.answer ? styles.optCorrect : fb !== 'idle' && n !== q.answer ? styles.optDim : ''}`} onClick={() => handlePick(n)}>{n}</button>
          ))}
        </div>
      </div>
    </ActivityShell>
  );
}

// ─── Compound Words ───────────────────────────────────────────────────────────
export function CompoundWordsActivity({ config }: Props) {
  const [isRandom, setIsRandom] = useState(false);
  const [shuffled] = useState(() => shuffle(compoundWordsData));
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const list = isRandom ? shuffled : compoundWordsData;
  const current = list[index];
  const total = compoundWordsData.length;

  useEffect(() => {
    setRevealed(false);
    const t = setTimeout(() => {
      sayText(`${current.part1}… plus… ${current.part2}… makes…`);
    }, 400);
    return () => clearTimeout(t);
  }, [current]);

  const reveal = () => {
    setRevealed(true);
    sayText(`${current.part1} plus ${current.part2} makes ${current.compound}!`);
    setTimeout(() => sayText(current.sentence), 2200);
  };

  return (
    <ActivityShell title={config.title} icon={config.icon}
      onNext={index < total - 1 ? () => setIndex(i => i + 1) : undefined}
      onPrevious={index > 0 ? () => setIndex(i => i - 1) : undefined}
      onRepeat={repeat} canGoPrevious={index > 0} canGoNext={index < total - 1}
      progressCurrent={!isRandom ? index + 1 : undefined} progressTotal={!isRandom ? total : undefined}
      voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.container}>
        <div className={styles.modeBar}>
          <button className={`${styles.modeBtn} ${!isRandom ? styles.modeActive : ''}`} onClick={() => { setIsRandom(false); setIndex(0); }}>📋 In Order</button>
          <button className={`${styles.modeBtn} ${isRandom ? styles.modeActive : ''}`} onClick={() => { setIsRandom(true); setIndex(0); }}>🔀 Random</button>
          {!isRandom && <span className={styles.counter}>{index + 1} / {total}</span>}
        </div>
        <div className={styles.compoundCard}>
          <div className={styles.compoundParts}>
            <div className={styles.compPart}>
              <span className={styles.compEmoji}>{current.emoji1}</span>
              <span className={styles.compWord}>{current.part1}</span>
            </div>
            <span className={styles.compPlus}>+</span>
            <div className={styles.compPart}>
              <span className={styles.compEmoji}>{current.emoji2}</span>
              <span className={styles.compWord}>{current.part2}</span>
            </div>
            <span className={styles.compEquals}>=</span>
            {revealed ? (
              <div className={styles.compResult}>
                <span className={styles.compEmoji} style={{ fontSize: '3rem' }}>{current.emojiResult}</span>
                <span className={styles.compAnswer}>{current.compound}</span>
              </div>
            ) : (
              <button className={styles.revealBtn} onClick={reveal}>❓ Tap to reveal!</button>
            )}
          </div>
          {revealed && <p className={styles.compSentence}>{current.sentence}</p>}
        </div>
      </div>
    </ActivityShell>
  );
}

// ─── Coins & Money ────────────────────────────────────────────────────────────
export function CoinsActivity({ config }: Props) {
  const [index, setIndex] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const current = coinsData[index];

  useEffect(() => {
    const t = setTimeout(() => {
      sayText(current.audioText);
      setTimeout(() => sayText(current.description), 2000);
      setTimeout(() => sayText(current.funFact), 5000);
    }, 400);
    return () => clearTimeout(t);
  }, [current]);

  return (
    <ActivityShell title={config.title} icon={config.icon}
      onNext={index < coinsData.length - 1 ? () => setIndex(i => i + 1) : undefined}
      onPrevious={index > 0 ? () => setIndex(i => i - 1) : undefined}
      onRepeat={repeat} canGoPrevious={index > 0} canGoNext={index < coinsData.length - 1}
      progressCurrent={index + 1} progressTotal={coinsData.length}
      voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.container}>
        <div className={styles.coinCard}>
          <div className={styles.coinCircle} style={{ background: current.color }}>
            <span className={styles.coinValue}>{current.value < 100 ? `${current.value}p` : `£${current.value / 100}`}</span>
          </div>
          <div className={styles.coinName}>{current.name}</div>
          <p className={styles.coinDesc}>{current.description}</p>
          <div className={styles.coinFact}>💡 {current.funFact}</div>
          <button className={styles.speakBtn} onClick={repeat}>🔊 Say it again!</button>
        </div>
      </div>
    </ActivityShell>
  );
}
