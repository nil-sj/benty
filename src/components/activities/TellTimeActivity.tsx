import { useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { timeData } from '../../data/newActivitiesData';
import { shuffle } from '../../utils/random';
import { useProgress } from '../../context/ProgressContext';
import styles from './TellTimeActivity.module.css';

interface TellTimeProps { config: ActivityConfig; }

function ClockFace({ hours, minutes }: { hours: number; minutes: 0 | 30 }) {
  const minAngle = minutes === 30 ? 180 : 0;
  const hourAngle = ((hours % 12) + minutes / 60) * 30;
  const cx = 100; const cy = 100; const r = 80;
  const toXY = (angle: number, len: number) => {
    const rad = (angle - 90) * Math.PI / 180;
    return { x: cx + len * Math.cos(rad), y: cy + len * Math.sin(rad) };
  };
  const hourEnd = toXY(hourAngle, 45);
  const minEnd = toXY(minAngle, 65);
  return (
    <svg viewBox="0 0 200 200" className={styles.clock} aria-label={`Clock showing ${hours}:${minutes === 0 ? '00' : '30'}`}>
      <circle cx={cx} cy={cy} r={r} fill="white" stroke="#6EC6F5" strokeWidth="6" />
      {[12,1,2,3,4,5,6,7,8,9,10,11].map((n, i) => {
        const p = toXY(i * 30, 65);
        return <text key={n} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central" fontSize="14" fontFamily="Fredoka One" fill="#2C3E50">{n}</text>;
      })}
      {Array.from({length:60},(_, i)=>{
        const inner = toXY(i*6, i%5===0?70:74);
        const outer = toXY(i*6, 78);
        return <line key={i} x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y} stroke="#9CA3AF" strokeWidth={i%5===0?2:1}/>;
      })}
      <line x1={cx} y1={cy} x2={hourEnd.x} y2={hourEnd.y} stroke="#1F2937" strokeWidth="5" strokeLinecap="round"/>
      <line x1={cx} y1={cy} x2={minEnd.x} y2={minEnd.y} stroke="#6EC6F5" strokeWidth="3.5" strokeLinecap="round"/>
      <circle cx={cx} cy={cy} r="5" fill="#FF6B6B"/>
    </svg>
  );
}

export function TellTimeActivity({ config }: TellTimeProps) {
  const [items] = useState(() => shuffle(timeData));
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
    const correct = q.minutes === 0 ? opt.toLowerCase().includes(`${q.hours} o`) : opt.toLowerCase().includes(`half past ${q.hours}`);
    if (correct) {
      setScore(s => s + 1);
      sayText(`Yes! It is ${opt}!`);
      recordActivity(config.id, true);
    } else {
      sayText('Not quite! Look at where the hands point.');
      recordActivity(config.id, false);
    }
  };

  const isCorrectOpt = (opt: string) => q.minutes === 0 ? opt.toLowerCase().includes(`${q.hours} o`) : opt.toLowerCase().includes(`half past ${q.hours}`);

  return (
    <ActivityShell title={config.title} icon={config.icon} onNext={answered ? () => { if (index < items.length - 1) setIndex(i => i + 1); } : undefined} onRepeat={repeat} canGoNext={!!answered} nextLabel="Next →" voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.container}>
        <div className={styles.score}>⭐ {score} / {total}</div>
        <div className={styles.clockCard}>
          <ClockFace hours={q.hours} minutes={q.minutes} />
          <p className={styles.question}>{q.question}</p>
        </div>
        {answered && <div className={isCorrectOpt(answered) ? styles.fbCorrect : styles.fbWrong} aria-live="assertive">{isCorrectOpt(answered) ? `🎉 It is ${answered}!` : '😊 Try again next time!'}</div>}
        <div className={styles.optGrid}>
          {q.options.map(opt => (
            <button key={opt} className={`${styles.optBtn} ${answered ? (isCorrectOpt(opt) ? styles.correctOpt : answered === opt ? styles.wrongOpt : styles.dimOpt) : ''}`} onClick={() => handlePick(opt)} disabled={!!answered}>{opt}</button>
          ))}
        </div>
      </div>
    </ActivityShell>
  );
}
