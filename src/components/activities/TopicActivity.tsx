import { useCallback, useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import {
  emotionsData, weatherData, familyData, routinesData, natureColorsData,
} from '../../data/newActivitiesData';

import { shuffle } from '../../utils/random';
import styles from './TopicActivity.module.css';
import orderStyles from './OrderToggle.module.css';

interface TopicProps { config: ActivityConfig; }

// ─── Generic ordered/random flashcard for any topic ──────────────────────────
interface TopicCard {
  id: string;
  name: string;
  emoji: string;
  audioText: string;
  description: string;
  funFact: string;
  extra?: string; // optional third line
}

function TopicFlashcard({
  config,
  items,
  accentColor = 'var(--color-sky)',
}: {
  config: ActivityConfig;
  items: TopicCard[];
  accentColor?: string;
}) {
  const [isRandom, setIsRandom] = useState(false);
  const [shuffled, setShuffled] = useState(() => shuffle(items));
  const [index, setIndex] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);

  const list = isRandom ? shuffled : items;
  const current = list[index];
  const total = items.length;

  const speak = useCallback((item: TopicCard) => {
    sayText(item.audioText);
    setTimeout(() => sayText(item.description), 2200);
    setTimeout(() => sayText(item.funFact), 5000);
  }, [sayText]);

  useEffect(() => {
    const t = setTimeout(() => speak(current), 400);
    return () => clearTimeout(t);
  }, [current]);

  const goNext = () => {
    if (isRandom) setShuffled(s => { const next = [...s]; next.push(next.shift()!); return next; });
    else setIndex(i => Math.min(i + 1, total - 1));
  };
  const goPrev = () => {
    if (!isRandom) setIndex(i => Math.max(i - 1, 0));
  };

  const canGoNext = isRandom ? true : index < total - 1;
  const canGoPrev = isRandom ? false : index > 0;

  return (
    <ActivityShell
      title={config.title} icon={config.icon}
      onNext={canGoNext ? goNext : undefined}
      onPrevious={canGoPrev ? goPrev : undefined}
      onRepeat={repeat}
      canGoPrevious={canGoPrev}
      canGoNext={canGoNext}
      nextLabel={!isRandom && index === total - 1 ? '✓ Done' : 'Next →'}
      progressCurrent={!isRandom ? index + 1 : undefined}
      progressTotal={!isRandom ? total : undefined}
      voiceEnabled={isEnabled} onToggleVoice={toggle}
    >
      <div className={styles.wrapper}>
        {/* Mode toggle */}
        <div className={orderStyles.toggleBar}>
          <span className={orderStyles.toggleLabel}>Mode:</span>
          <button className={`${orderStyles.modeBtn} ${!isRandom ? orderStyles.active : ''}`} onClick={() => { setIsRandom(false); setIndex(0); }} aria-pressed={!isRandom}>📋 In Order</button>
          <button className={`${orderStyles.modeBtn} ${isRandom ? orderStyles.active : ''}`} onClick={() => { setIsRandom(true); setShuffled(shuffle(items)); }} aria-pressed={isRandom}>🔀 Random</button>
          {!isRandom && <span className={orderStyles.counter}>{index + 1} / {total}</span>}
        </div>

        <div className={styles.card} style={{ '--accent': accentColor } as React.CSSProperties}>
          <div className={styles.cardInner}>
            <div className={styles.emojiSide}>
              <div className={styles.bigEmoji}>{current.emoji}</div>
            </div>
            <div className={styles.textSide}>
              <div className={styles.itemName} style={{ color: accentColor }}>{current.name}</div>
              <p className={styles.description}>{current.description}</p>
              {current.extra && <p className={styles.extra}>{current.extra}</p>}
              <div className={styles.funFact}>
                <span className={styles.factIcon}>💡</span>
                <span>{current.funFact}</span>
              </div>
              <button className={styles.speakBtn} onClick={repeat}>🔊 Say it again!</button>
            </div>
          </div>
        </div>
      </div>
    </ActivityShell>
  );
}

// ─── Emotions Activity ────────────────────────────────────────────────────────
export function EmotionsActivity({ config }: TopicProps) {
  const items: TopicCard[] = emotionsData.map(e => ({
    id: e.id, name: e.name, emoji: e.emoji,
    audioText: e.audioText, description: e.description,
    funFact: e.funFact, extra: e.example,
  }));
  return <TopicFlashcard config={config} items={items} accentColor="#FF6B6B" />;
}

// ─── Weather Activity ─────────────────────────────────────────────────────────
export function WeatherActivity({ config }: TopicProps) {
  const items: TopicCard[] = weatherData.map(w => ({
    id: w.id, name: w.name, emoji: w.emoji,
    audioText: w.audioText, description: w.description,
    funFact: w.funFact, extra: `👗 ${w.whatToWear}`,
  }));
  return <TopicFlashcard config={config} items={items} accentColor="#6EC6F5" />;
}

// ─── My Family Activity ───────────────────────────────────────────────────────
export function FamilyActivity({ config }: TopicProps) {
  const items: TopicCard[] = familyData.map(f => ({
    id: f.id, name: f.name, emoji: f.emoji,
    audioText: f.audioText, description: f.description,
    funFact: f.funFact,
  }));
  return <TopicFlashcard config={config} items={items} accentColor="#C77DFF" />;
}

// ─── Daily Routines Activity ──────────────────────────────────────────────────
const TIME_LABELS: Record<string, string> = {
  morning: '🌅 Morning', evening: '🌙 Evening', anytime: '⏰ Anytime',
};

export function RoutinesActivity({ config }: TopicProps) {
  const [filter, setFilter] = useState<'all' | 'morning' | 'evening' | 'anytime'>('all');
  const base = filter === 'all' ? routinesData : routinesData.filter(r => r.timeOfDay === filter);
  const items: TopicCard[] = base.map(r => ({
    id: r.id, name: r.name, emoji: r.emoji,
    audioText: r.audioText, description: r.description,
    funFact: r.funFact, extra: TIME_LABELS[r.timeOfDay],
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', padding: '8px 16px' }}>
        {(['all', 'morning', 'evening', 'anytime'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '8px 16px', borderRadius: 20, border: '3px solid',
              borderColor: filter === f ? 'var(--color-sky)' : 'var(--color-border)',
              background: filter === f ? 'var(--color-sky)' : 'var(--color-white)',
              color: filter === f ? 'white' : 'var(--color-text-secondary)',
              fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer',
              fontFamily: 'var(--font-body)',
            }}
          >
            {f === 'all' ? '📋 All' : TIME_LABELS[f]}
          </button>
        ))}
      </div>
      <TopicFlashcard config={config} items={items} accentColor="#6BCB77" />
    </div>
  );
}

// ─── Colours in Nature Activity ───────────────────────────────────────────────
export function NatureColorsActivity({ config }: TopicProps) {
  const [isRandom, setIsRandom] = useState(false);
  const [index, setIndex] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);

  const list = isRandom ? shuffle(natureColorsData) : natureColorsData;
  const current = list[index % list.length];
  const total = natureColorsData.length;

  useEffect(() => {
    const t = setTimeout(() => {
      sayText(current.audioText);
      setTimeout(() => sayText(current.sentence), 1800);
    }, 400);
    return () => clearTimeout(t);
  }, [current]);

  return (
    <ActivityShell
      title={config.title} icon={config.icon}
      onNext={index < total - 1 ? () => setIndex(i => i + 1) : undefined}
      onPrevious={index > 0 ? () => setIndex(i => i - 1) : undefined}
      onRepeat={repeat}
      canGoPrevious={index > 0}
      canGoNext={index < total - 1}
      progressCurrent={!isRandom ? index + 1 : undefined}
      progressTotal={!isRandom ? total : undefined}
      voiceEnabled={isEnabled} onToggleVoice={toggle}
    >
      <div className={styles.wrapper}>
        <div className={orderStyles.toggleBar}>
          <span className={orderStyles.toggleLabel}>Mode:</span>
          <button className={`${orderStyles.modeBtn} ${!isRandom ? orderStyles.active : ''}`} onClick={() => { setIsRandom(false); setIndex(0); }}>📋 In Order</button>
          <button className={`${orderStyles.modeBtn} ${isRandom ? orderStyles.active : ''}`} onClick={() => { setIsRandom(true); setIndex(0); }}>🔀 Random</button>
          {!isRandom && <span className={orderStyles.counter}>{index + 1} / {total}</span>}
        </div>

        <div className={styles.colorCard}>
          <div className={styles.colorSwatch} style={{ background: current.color.toLowerCase().replace('colours', '') }}>
            <div className={styles.colorName}>{current.color}</div>
          </div>
          <p className={styles.colorSentence}>{current.sentence}</p>
          <div className={styles.natureGrid}>
            {current.naturalThings.map((thing, i) => (
              <button key={thing} className={styles.natureItem} onClick={() => sayText(`${thing}!`)} aria-label={`Hear ${thing}`}>
                <span className={styles.natureEmoji}>{current.naturalEmojis[i]}</span>
                <span className={styles.natureName}>{thing}</span>
              </button>
            ))}
          </div>
          <p className={styles.tapHint}>Tap each picture to hear its name!</p>
        </div>
      </div>
    </ActivityShell>
  );
}

// ─── Imports for new topics ───────────────────────────────────────────────────
import { sensesData, directionsData, sizesData, healthyEatingData } from '../../data/newActivitiesData';

// ─── Five Senses Activity ─────────────────────────────────────────────────────
export function SensesActivity({ config }: TopicProps) {
  const [index, setIndex] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const current = sensesData[index];
  const total = sensesData.length;

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
      progressCurrent={index + 1} progressTotal={total}
      voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.wrapper}>
        <div className={styles.card} style={{ '--accent': '#C77DFF' } as React.CSSProperties}>
          <div className={styles.cardInner}>
            <div className={styles.emojiSide}>
              <div className={styles.bigEmoji}>{current.organEmoji}</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#C77DFF', marginTop: 8 }}>{current.organ}</div>
            </div>
            <div className={styles.textSide}>
              <div className={styles.itemName} style={{ color: '#C77DFF' }}>{current.name}</div>
              <p className={styles.description}>{current.description}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {current.examples.map((ex, i) => (
                  <button key={ex} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '8px 12px', background: 'var(--color-bg)', border: '2px solid var(--color-border)', borderRadius: 12, cursor: 'pointer' }}
                    onClick={() => sayText(ex)}>
                    <span style={{ fontSize: '1.5rem' }}>{current.exampleEmojis[i]}</span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>{ex}</span>
                  </button>
                ))}
              </div>
              <div className={styles.funFact}>
                <span className={styles.factIcon}>💡</span>
                <span>{current.funFact}</span>
              </div>
              <button className={styles.speakBtn} onClick={repeat}>🔊 Say it again!</button>
            </div>
          </div>
        </div>
      </div>
    </ActivityShell>
  );
}

// ─── Directions Activity ──────────────────────────────────────────────────────
export function DirectionsActivity({ config }: TopicProps) {
  const items: TopicCard[] = directionsData.map(d => ({
    id: d.id, name: d.name, emoji: d.emoji,
    audioText: d.audioText, description: d.description,
    funFact: d.funFact,
    extra: d.example,
  }));
  return <TopicFlashcard config={config} items={items} accentColor="#FFB347" />;
}

// ─── Sizes & Comparisons Activity ────────────────────────────────────────────
export function SizesActivity({ config }: TopicProps) {
  const [index, setIndex] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const current = sizesData[index];
  const total = sizesData.length;

  useEffect(() => {
    const t = setTimeout(() => {
      sayText(current.audioText);
      setTimeout(() => sayText(current.description), 2000);
    }, 400);
    return () => clearTimeout(t);
  }, [current]);

  return (
    <ActivityShell title={config.title} icon={config.icon}
      onNext={index < total - 1 ? () => setIndex(i => i + 1) : undefined}
      onPrevious={index > 0 ? () => setIndex(i => i - 1) : undefined}
      onRepeat={repeat} canGoPrevious={index > 0} canGoNext={index < total - 1}
      progressCurrent={index + 1} progressTotal={total}
      voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.wrapper}>
        <div className={styles.card} style={{ '--accent': '#6EC6F5' } as React.CSSProperties}>
          <div className={styles.cardInner}>
            <div className={styles.emojiSide}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                {current.levels.map((level, i) => (
                  <div key={level} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: `${1.8 + i * 0.8}rem` }}>{current.emojis[i]}</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: `${1 + i * 0.2}rem`, color: 'var(--color-text-secondary)' }}>{level}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.textSide}>
              <div className={styles.itemName} style={{ color: '#6EC6F5' }}>{current.concept}</div>
              <p className={styles.description}>{current.description}</p>
              <p className={styles.extra}>{current.example}</p>
              <div className={styles.funFact}>
                <span className={styles.factIcon}>💡</span>
                <span>{current.funFact}</span>
              </div>
              <button className={styles.speakBtn} onClick={repeat}>🔊 Say it again!</button>
            </div>
          </div>
        </div>
      </div>
    </ActivityShell>
  );
}

// ─── Healthy Eating Activity ──────────────────────────────────────────────────
export function HealthyEatingActivity({ config }: TopicProps) {
  const [index, setIndex] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const current = healthyEatingData[index];
  const total = healthyEatingData.length;

  useEffect(() => {
    const t = setTimeout(() => {
      sayText(current.audioText);
      setTimeout(() => sayText(current.whyWeNeedIt), 2000);
    }, 400);
    return () => clearTimeout(t);
  }, [current]);

  return (
    <ActivityShell title={config.title} icon={config.icon}
      onNext={index < total - 1 ? () => setIndex(i => i + 1) : undefined}
      onPrevious={index > 0 ? () => setIndex(i => i - 1) : undefined}
      onRepeat={repeat} canGoPrevious={index > 0} canGoNext={index < total - 1}
      progressCurrent={index + 1} progressTotal={total}
      voiceEnabled={isEnabled} onToggleVoice={toggle}>
      <div className={styles.wrapper}>
        <div className={styles.card} style={{ '--accent': current.color } as React.CSSProperties}>
          <div className={styles.cardInner}>
            <div className={styles.emojiSide}>
              <div className={styles.bigEmoji}>{current.emoji}</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center', marginTop: 8 }}>
                {current.exampleEmojis.map((em, i) => (
                  <button key={i} style={{ fontSize: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', padding: 2 }}
                    onClick={() => sayText(current.examples[i])} aria-label={current.examples[i]}>{em}</button>
                ))}
              </div>
            </div>
            <div className={styles.textSide}>
              <div className={styles.itemName} style={{ color: current.color }}>{current.group}</div>
              <p className={styles.description}>{current.description}</p>
              <p className={styles.extra}>💪 {current.whyWeNeedIt}</p>
              <div className={styles.funFact}>
                <span className={styles.factIcon}>💡</span>
                <span>{current.funFact}</span>
              </div>
              <button className={styles.speakBtn} onClick={repeat}>🔊 Say it again!</button>
            </div>
          </div>
        </div>
      </div>
    </ActivityShell>
  );
}
