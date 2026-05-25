import { useCallback, useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { syllableData, digraphsData, longVowelsData, grammarData } from '../../data/newActivitiesData';
import { shuffle } from '../../utils/random';
import { useProgress } from '../../context/ProgressContext';
import styles from './LiteracyExtra.module.css';

interface Props { config: ActivityConfig; }
type FB = 'idle' | 'correct' | 'wrong';

// ─── Syllable Clapper ─────────────────────────────────────────────────────────
export function SyllableActivity({ config }: Props) {
  const [isRandom, setIsRandom] = useState(false);
  const [index, setIndex] = useState(0);
  const [shuffled] = useState(() => shuffle(syllableData));
  const [clapped, setClapped] = useState(0);
  const [fb, setFb] = useState<FB>('idle');
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const { recordActivity } = useProgress();

  const list = isRandom ? shuffled : syllableData;
  const current = list[index];

  useEffect(() => {
    setClapped(0); setFb('idle');
    const t = setTimeout(() => sayText(`How many syllables in ${current.word}? Clap along!`), 400);
    return () => clearTimeout(t);
  }, [current]);

  const handleClap = () => {
    if (fb !== 'idle') return;
    const newClapped = clapped + 1;
    setClapped(newClapped);
    // Play a clap sound effect via speech
    sayText(current.breakdown.split('-')[newClapped - 1] || '');
  };

  const checkAnswer = useCallback(() => {
    if (clapped === 0) return;
    setTotal(t => t + 1);
    if (clapped === current.syllables) {
      setFb('correct'); setScore(s => s + 1);
      sayText(`Yes! ${current.word} has ${current.syllables} syllable${current.syllables > 1 ? 's' : ''}! ${current.breakdown}`);
      recordActivity(config.id, true);
    } else {
      setFb('wrong');
      sayText(`Not quite! ${current.word} has ${current.syllables} syllable${current.syllables > 1 ? 's' : ''}. ${current.breakdown}`);
      recordActivity(config.id, false);
    }
  }, [clapped, current, sayText, recordActivity, config.id]);

  const goNext = () => { setIndex(i => Math.min(i + 1, list.length - 1)); };

  return (
    <ActivityShell title={config.title} icon={config.icon}
      onNext={fb !== 'idle' ? goNext : undefined}
      onPrevious={index > 0 ? () => setIndex(i => i - 1) : undefined}
      onRepeat={repeat}
      canGoPrevious={index > 0} canGoNext={fb !== 'idle'}
      nextLabel="Next word →"
      progressCurrent={!isRandom ? index + 1 : undefined}
      progressTotal={!isRandom ? syllableData.length : undefined}
      voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.container}>
        <div className={styles.modeBar}>
          <button className={`${styles.modeBtn} ${!isRandom ? styles.active : ''}`} onClick={() => { setIsRandom(false); setIndex(0); }}>📋 In Order</button>
          <button className={`${styles.modeBtn} ${isRandom ? styles.active : ''}`} onClick={() => { setIsRandom(true); setIndex(0); }}>🔀 Random</button>
          {!isRandom && <span className={styles.counter}>{index + 1} / {syllableData.length}</span>}
        </div>
        <div className={styles.syllableCard}>
          <div className={styles.wordEmoji}>{current.emoji}</div>
          <div className={styles.bigWord}>{current.word}</div>
          {fb !== 'idle' && <div className={styles.breakdown}>{current.breakdown}</div>}
          <button className={`${styles.clapBtn} ${clapped > 0 ? styles.clapActive : ''}`} onClick={handleClap} aria-label="Clap!">
            👏 Clap!
            {clapped > 0 && <span className={styles.clapCount}> {clapped}</span>}
          </button>
          {fb === 'idle' && clapped > 0 && (
            <button className={styles.checkBtn} onClick={checkAnswer}>✓ That's my answer!</button>
          )}
          {fb !== 'idle' && (
            <button className={styles.checkBtn} onClick={() => { setClapped(0); setFb('idle'); }}>Try again</button>
          )}
        </div>
        {fb === 'correct' && <div className={styles.fbCorrect}>🎉 {current.syllables} syllable{current.syllables > 1 ? 's' : ''}: {current.breakdown}</div>}
        {fb === 'wrong' && <div className={styles.fbWrong}>😊 It has {current.syllables}: {current.breakdown}</div>}
        <p className={styles.hint}>⭐ {score} / {total} correct</p>
      </div>
    </ActivityShell>
  );
}

// ─── Digraphs ─────────────────────────────────────────────────────────────────
export function DigraphsActivity({ config }: Props) {
  const [index, setIndex] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const current = digraphsData[index];

  useEffect(() => {
    const t = setTimeout(() => {
      sayText(current.audioText);
    }, 400);
    return () => clearTimeout(t);
  }, [current]);

  return (
    <ActivityShell title={config.title} icon={config.icon}
      onNext={index < digraphsData.length - 1 ? () => setIndex(i => i + 1) : undefined}
      onPrevious={index > 0 ? () => setIndex(i => i - 1) : undefined}
      onRepeat={repeat}
      canGoPrevious={index > 0} canGoNext={index < digraphsData.length - 1}
      progressCurrent={index + 1} progressTotal={digraphsData.length}
      voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.container}>
        <div className={styles.digraphCard}>
          <div className={styles.digraphLetters}>{current.digraph}</div>
          <div className={styles.digraphEmoji}>{current.emoji}</div>
          <p className={styles.digraphDesc}>{current.description}</p>
        </div>
        <div className={styles.wordRow}>
          {current.words.map((word, i) => (
            <button key={word} className={styles.wordChip} onClick={() => sayText(word)} aria-label={`Hear ${word}`}>
              <span className={styles.chipEmoji}>{current.wordEmojis[i]}</span>
              <span className={styles.chipWord}>
                <span style={{ color: 'var(--color-coral)', fontWeight: 900 }}>{current.digraph.toLowerCase()}</span>
                {word.slice(2)}
              </span>
            </button>
          ))}
        </div>
        <p className={styles.hint}>Tap each word to hear it!</p>
        <button className={styles.speakBtn} onClick={repeat}>🔊 Hear the sound again</button>
      </div>
    </ActivityShell>
  );
}

// ─── Long Vowels ──────────────────────────────────────────────────────────────
export function LongVowelsActivity({ config }: Props) {
  const [index, setIndex] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const current = longVowelsData[index];

  useEffect(() => {
    const t = setTimeout(() => {
      sayText(current.audioText);
      setTimeout(() => sayText(current.example), 2500);
    }, 400);
    return () => clearTimeout(t);
  }, [current]);

  return (
    <ActivityShell title={config.title} icon={config.icon}
      onNext={index < longVowelsData.length - 1 ? () => setIndex(i => i + 1) : undefined}
      onPrevious={index > 0 ? () => setIndex(i => i - 1) : undefined}
      onRepeat={repeat}
      canGoPrevious={index > 0} canGoNext={index < longVowelsData.length - 1}
      progressCurrent={index + 1} progressTotal={longVowelsData.length}
      voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.container}>
        <div className={styles.vowelCard}>
          <div className={styles.vowelLetter}>{current.vowel}</div>
          <div className={styles.vowelRule}>{current.rule}</div>
          <div className={styles.vowelEmoji}>{current.emoji}</div>
          <p className={styles.vowelExample}>{current.example}</p>
        </div>
        <div className={styles.wordRow}>
          {current.words.map((word, i) => {
            // Highlight the long vowel pattern
            // const magicE = word.includes('_e') || word.endsWith('e') && word.length > 3;
            return (
              <button key={word} className={styles.wordChip} onClick={() => sayText(word)} aria-label={`Hear ${word}`}>
                <span className={styles.chipEmoji}>{current.wordEmojis[i]}</span>
                <span className={styles.chipWord}>{word}</span>
              </button>
            );
          })}
        </div>
        <p className={styles.hint}>Tap each word to hear the long vowel sound!</p>
        <button className={styles.speakBtn} onClick={repeat}>🔊 Hear the sound again</button>
      </div>
    </ActivityShell>
  );
}

// ─── Grammar Basics ───────────────────────────────────────────────────────────
export function GrammarActivity({ config }: Props) {
  const [index, setIndex] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const current = grammarData[index];

  useEffect(() => {
    const t = setTimeout(() => {
      sayText(current.audioText);
      setTimeout(() => sayText(current.definition), 2000);
    }, 400);
    return () => clearTimeout(t);
  }, [current]);

  return (
    <ActivityShell title={config.title} icon={config.icon}
      onNext={index < grammarData.length - 1 ? () => setIndex(i => i + 1) : undefined}
      onPrevious={index > 0 ? () => setIndex(i => i - 1) : undefined}
      onRepeat={repeat}
      canGoPrevious={index > 0} canGoNext={index < grammarData.length - 1}
      progressCurrent={index + 1} progressTotal={grammarData.length}
      voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.container}>
        <div className={styles.grammarCard}>
          <div className={styles.grammarEmoji}>{current.emoji}</div>
          <div className={styles.grammarConcept}>{current.concept}</div>
          <p className={styles.grammarDef}>{current.definition}</p>
          <div className={styles.grammarTip}>💡 <strong>Tip:</strong> {current.tip}</div>
        </div>
        <div className={styles.examplesBox}>
          <p className={styles.examplesLabel}>Examples:</p>
          <div className={styles.examplesRow}>
            {current.examples.map((ex, i) => (
              <button key={ex} className={styles.wordChip} onClick={() => sayText(ex)} aria-label={ex}>
                <span className={styles.chipEmoji}>{current.exampleEmojis[i]}</span>
                <span className={styles.chipWord}>{ex}</span>
              </button>
            ))}
          </div>
        </div>
        <div className={styles.funFactBox}>💡 {current.funFact}</div>
        <button className={styles.speakBtn} onClick={repeat}>🔊 Say it again!</button>
      </div>
    </ActivityShell>
  );
}
