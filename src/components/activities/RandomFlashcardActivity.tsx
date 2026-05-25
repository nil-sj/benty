import { useCallback, useEffect } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import { useRandomItem } from '../../hooks/useRandomItem';
import type { ActivityConfig } from '../../data/activities';
import {
  fruitsData, vegetablesData, animalsData, vehiclesData,
  bodyPartsData, professionsData, householdItemsData, schoolItemsData, sportsData,
} from '../../data/learningData';
import type { LearningItem } from '../../data/learningData';
import styles from './FlashcardActivity.module.css';

interface RandomFlashcardProps {
  config: ActivityConfig;
}

function getDataForSource(dataSource: string): LearningItem[] {
  switch (dataSource) {
    case 'fruits': return fruitsData;
    case 'vegetables': return vegetablesData;
    case 'animals': return animalsData;
    case 'vehicles': return vehiclesData;
    case 'bodyParts': return bodyPartsData;
    case 'professions': return professionsData;
    case 'householdItems': return householdItemsData;
    case 'schoolItems': return schoolItemsData;
    case 'sports': return sportsData;
    default: return fruitsData;
  }
}

const CATEGORY_COLORS: Record<string, string> = {
  Fruit: '#FF6B6B',
  Vegetable: '#6BCB77',
  Animal: '#FFB347',
  Vehicle: '#6EC6F5',
  'Body Part': '#C77DFF',
  Profession: '#FF6B6B',
  Household: '#6EC6F5',
  School: '#FFD93D',
  Sport: '#FF6B6B',
};

export function RandomFlashcardActivity({ config }: RandomFlashcardProps) {
  const items = getDataForSource(config.dataSource);
  const { current, next, previous, canGoPrevious } = useRandomItem(items);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);
  

  const speakItem = useCallback((item: LearningItem) => {
    const mainText = item.audioText || `This is a ${item.name}.`;
    const funFact = item.funFact || '';
    if (funFact) {
      // Read name first, then fun fact after a 1.5s pause
      sayText(mainText);
      setTimeout(() => sayText(funFact), 2200);
    } else {
      sayText(mainText);
    }
    
  }, [sayText]);

  useEffect(() => {
    const timer = setTimeout(() => speakItem(current), 350);
    return () => clearTimeout(timer);
  }, [current]);

  const accentColor = CATEGORY_COLORS[current.category || ''] || 'var(--color-coral)';

  return (
    <ActivityShell
      title={config.title}
      icon={config.icon}
      onNext={next}
      onPrevious={previous}
      onRepeat={repeat}
      canGoPrevious={canGoPrevious}
      canGoNext={true}
      nextLabel="Next →"
      voiceEnabled={isEnabled}
      onToggleVoice={toggle}
    >
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.visualSide}>
              <div className={styles.emojiDisplay} aria-label={current.name}>
                {current.emoji}
              </div>
            </div>
            <div className={styles.textSide}>
              <div className={styles.primaryText} style={{ color: accentColor }}>
                {current.name}
              </div>
              {current.category && (
                <div style={{
                  background: accentColor,
                  color: 'white',
                  borderRadius: 'var(--radius-lg)',
                  padding: '4px 14px',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                }}>
                  {current.category}
                </div>
              )}
              {current.funFact && (
                <div className={styles.funFact}>
                  <span className={styles.funFactIcon}>💡</span>
                  <span>{current.funFact}</span>
                </div>
              )}
              <button className={styles.speakBtn} onClick={repeat} aria-label="Say it again">
                🔊 Say it again!
              </button>
            </div>
          </div>
        </div>
      </div>
    </ActivityShell>
  );
}
