import { useEffect, useState, useCallback } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import {
  plantsData, animalHomesData, wordProblemsData, factFamiliesData,
} from '../../data/newActivitiesData';
import { shuffle, randomItem } from '../../utils/random';
import { useProgress } from '../../context/ProgressContext';
import styles from './ScienceActivity.module.css';

interface Props { config: ActivityConfig; }
type FB = 'idle' | 'correct' | 'wrong';

// ─── Plants & Life Cycles ─────────────────────────────────────────────────────
export function PlantsActivity({ config }: Props) {
  const [plantIdx, setPlantIdx] = useState(0);
  const [stageIdx, setStageIdx] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const plant = plantsData[plantIdx];
  const stage = plant.stages[stageIdx];
  const isLastStage = stageIdx === plant.stages.length - 1;
  const isLastPlant = plantIdx === plantsData.length - 1;

  useEffect(() => {
    setStageIdx(0);
    const t = setTimeout(() => sayText(plant.audioText), 400);
    return () => clearTimeout(t);
  }, [plantIdx]);

  useEffect(() => {
    const t = setTimeout(() => sayText(stage.description), 400);
    return () => clearTimeout(t);
  }, [stage]);

  const next = () => {
    if (!isLastStage) setStageIdx(s => s + 1);
    else if (!isLastPlant) { setPlantIdx(p => p + 1); setStageIdx(0); }
  };

  return (
    <ActivityShell title={config.title} icon={config.icon}
      onNext={(!isLastStage || !isLastPlant) ? next : undefined}
      onPrevious={stageIdx > 0 ? () => setStageIdx(s => s - 1) : plantIdx > 0 ? () => { setPlantIdx(p => p - 1); } : undefined}
      onRepeat={repeat}
      canGoPrevious={stageIdx > 0 || plantIdx > 0}
      canGoNext={!isLastStage || !isLastPlant}
      nextLabel={isLastStage ? 'Next Plant →' : 'Next Stage →'}
      progressCurrent={stageIdx + 1} progressTotal={plant.stages.length}
      voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.container}>
        {/* Plant selector */}
        <div className={styles.selectorRow}>
          {plantsData.map((p, i) => (
            <button key={p.id} className={`${styles.selectorBtn} ${i === plantIdx ? styles.selectorActive : ''}`} onClick={() => setPlantIdx(i)}>
              {p.emoji} {p.name}
            </button>
          ))}
        </div>

        {/* Stage display */}
        <div className={styles.lifecycleCard}>
          <div className={styles.stageEmoji}>{stage.emoji}</div>
          <div className={styles.stageName}>Stage {stage.stage}: {stage.name}</div>
          <p className={styles.stageDesc}>{stage.description}</p>

          {/* Progress dots */}
          <div className={styles.stageDots}>
            {plant.stages.map((_, i) => (
              <button key={i} className={`${styles.stageDot} ${i === stageIdx ? styles.stageDotActive : i < stageIdx ? styles.stageDotDone : ''}`} onClick={() => setStageIdx(i)} />
            ))}
          </div>
        </div>

        {isLastStage && (
          <div className={styles.funFact}>💡 {plant.funFact}</div>
        )}
      </div>
    </ActivityShell>
  );
}

// ─── Animals & Their Homes ────────────────────────────────────────────────────
export function AnimalHomesActivity({ config }: Props) {
  const [isRandom, setIsRandom] = useState(false);
  const [shuffled] = useState(() => shuffle(animalHomesData));
  const [index, setIndex] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const list = isRandom ? shuffled : animalHomesData;
  const current = list[index];
  const total = animalHomesData.length;

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
        <div className={styles.homeCard}>
          <div className={styles.homeRow}>
            <div className={styles.homeItem}>
              <div className={styles.homeEmoji}>{current.animalEmoji}</div>
              <div className={styles.homeLabel}>{current.animal}</div>
            </div>
            <div className={styles.homeLives}>lives in a</div>
            <div className={styles.homeItem}>
              <div className={styles.homeEmoji}>{current.homeEmoji}</div>
              <div className={styles.homeLabel}>{current.home}</div>
            </div>
          </div>
          <p className={styles.homeDesc}>{current.description}</p>
          <div className={styles.homeFact}>💡 {current.funFact}</div>
          <button className={styles.speakBtn} onClick={repeat}>🔊 Say it again!</button>
        </div>
      </div>
    </ActivityShell>
  );
}

// ─── Word Problems ────────────────────────────────────────────────────────────
export function WordProblemsActivity({ config }: Props) {
  const [level, setLevel] = useState<1|2|3>(1);
  const pool = wordProblemsData.filter(p => p.level === level);
  const [q, setQ] = useState(() => randomItem(pool));
  const [fb, setFb] = useState<FB>('idle');
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const { recordActivity } = useProgress();

  useEffect(() => {
    const newPool = wordProblemsData.filter(p => p.level === level);
    setQ(randomItem(newPool));
    setFb('idle');
  }, [level]);

  useEffect(() => {
    setFb('idle');
    const t = setTimeout(() => {
      sayText(q.story);
      setTimeout(() => sayText(q.question), 2500);
    }, 400);
    return () => clearTimeout(t);
  }, [q]);

  const handlePick = useCallback((n: number) => {
    if (fb !== 'idle') return;
    setTotal(t => t + 1);
    if (n === q.answer) {
      setFb('correct'); setScore(s => s + 1);
      sayText(`Correct! ${q.working}. The answer is ${q.answer}!`);
      recordActivity(config.id, true);
      setTimeout(() => {
        const newPool = wordProblemsData.filter(p => p.level === level);
        setQ(randomItem(newPool, q));
        setFb('idle');
      }, 2200);
    } else {
      setFb('wrong');
      sayText(`Not quite! The answer is ${q.answer}. ${q.working}`);
      recordActivity(config.id, false);
      setTimeout(() => setFb('idle'), 2000);
    }
  }, [fb, q, level, sayText, recordActivity, config.id]);

  const levelLabels: Record<number, string> = { 1: '⭐ Easy', 2: '⭐⭐ Medium', 3: '⭐⭐⭐ Harder' };

  return (
    <ActivityShell title={config.title} icon={config.icon} onRepeat={repeat} showNavigation={false} voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.container}>
        <div className={styles.levelBar}>
          {([1,2,3] as const).map(l => (
            <button key={l} className={`${styles.levelBtn} ${level === l ? styles.levelActive : ''}`} onClick={() => setLevel(l)}>{levelLabels[l]}</button>
          ))}
        </div>
        <div className={styles.score}>⭐ {score} / {total}</div>
        <div className={styles.problemCard}>
          <div className={styles.problemEmoji}>{q.emoji}</div>
          <p className={styles.storyText}>{q.story}</p>
          <p className={styles.questionText}>{q.question}</p>
        </div>
        {fb === 'correct' && <div className={styles.fbCorrect}>🎉 {q.answer}! Working: {q.working}</div>}
        {fb === 'wrong' && <div className={styles.fbWrong}>😊 The answer is {q.answer}. {q.working}</div>}
        <div className={styles.optGrid}>
          {q.options.map(opt => (
            <button key={opt} className={`${styles.optBtn} ${fb === 'correct' && opt === q.answer ? styles.optCorrect : fb !== 'idle' && opt !== q.answer ? styles.optDim : ''}`} onClick={() => handlePick(opt)}>{opt}</button>
          ))}
        </div>
      </div>
    </ActivityShell>
  );
}

// ─── Fact Families ────────────────────────────────────────────────────────────
export function FactFamiliesActivity({ config }: Props) {
  const [q, setQ] = useState(() => randomItem(factFamiliesData));
  const [shown, setShown] = useState<number[]>([]);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const { recordActivity } = useProgress();

  const facts = [
    `${q.a} + ${q.b} = ${q.sum}`,
    `${q.b} + ${q.a} = ${q.sum}`,
    `${q.sum} - ${q.a} = ${q.b}`,
    `${q.sum} - ${q.b} = ${q.a}`,
  ];

  useEffect(() => {
    setShown([]);
    const t = setTimeout(() => sayText(`The numbers ${q.a}, ${q.b}, and ${q.sum}. Can you find all four fact family sentences?`), 400);
    return () => clearTimeout(t);
  }, [q]);

  const toggleFact = (i: number) => {
    if (shown.includes(i)) return;
    const newShown = [...shown, i];
    setShown(newShown);
    sayText(facts[i].replace('+', 'plus').replace('-', 'minus').replace('=', 'equals'));
    recordActivity(config.id, true);
    if (newShown.length === 4) {
      sayText('Amazing! You found all four fact family sentences!');
      setTimeout(() => { setQ(randomItem(factFamiliesData, q)); }, 2500);
    }
  };

  const emojiSet = Array(q.a).fill(q.emoji).join('');
  const emojiSet2 = Array(q.b).fill(q.emoji).join('');

  return (
    <ActivityShell title={config.title} icon={config.icon} onRepeat={repeat} showNavigation={false} voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.container}>
        <div className={styles.score}>⭐ Found {shown.length} / 4 facts</div>
        <div className={styles.factTriangle}>
          <div className={styles.factTop}>
            <div className={styles.factNum} style={{ fontSize: 'clamp(2.5rem,8vw,4rem)', color: 'var(--color-coral)' }}>{q.sum}</div>
            <div className={styles.factLabel}>Total</div>
          </div>
          <div className={styles.factBottom}>
            <div className={styles.factPart}>
              <div className={styles.factNum}>{q.a}</div>
              <div className={styles.factEmoji}>{emojiSet}</div>
            </div>
            <div className={styles.factPlus}>+</div>
            <div className={styles.factPart}>
              <div className={styles.factNum}>{q.b}</div>
              <div className={styles.factEmoji}>{emojiSet2}</div>
            </div>
          </div>
        </div>
        <p className={styles.factInstruction}>Tap each fact to hear it!</p>
        <div className={styles.factsGrid}>
          {facts.map((fact, i) => (
            <button key={i} className={`${styles.factBtn} ${shown.includes(i) ? styles.factShown : ''}`} onClick={() => toggleFact(i)}>
              {shown.includes(i) ? fact : '?  ?  ?'}
            </button>
          ))}
        </div>
        {shown.length === 4 && <div className={styles.celebrate}>🎉 All 4 fact family sentences found!</div>}
      </div>
    </ActivityShell>
  );
}
