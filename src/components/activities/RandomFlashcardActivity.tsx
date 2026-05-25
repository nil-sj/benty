import { useCallback, useEffect, useState } from 'react';
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
import orderStyles from './OrderToggle.module.css';

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
  const sourceItems = getDataForSource(config.dataSource);
  const [isRandom, setIsRandom] = useState(false);
  const [orderedIndex, setOrderedIndex] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);

  // Random mode hook
  const randomHook = useRandomItem(sourceItems);

  const currentItem = isRandom
    ? randomHook.current
    : sourceItems[orderedIndex];

  const totalItems = sourceItems.length;
  const currentIndex = isRandom ? null : orderedIndex + 1;


  const speakItem = useCallback((item: LearningItem) => {
    const mainText = item.audioText || `This is a ${item.name}.`;
    const funFact = item.funFact || '';
    if (funFact) {
      sayText(mainText);
      setTimeout(() => sayText(funFact), 2200);
    } else {
      sayText(mainText);
    }
  }, [sayText]);

  useEffect(() => {
    const timer = setTimeout(() => speakItem(currentItem), 350);
    return () => clearTimeout(timer);
  }, [currentItem]);

  const handleNext = () => {
    if (isRandom) {
      randomHook.next();
    } else {
      setOrderedIndex(i => Math.min(i + 1, totalItems - 1));
    }
  };

  const handlePrevious = () => {
    if (isRandom) {
      randomHook.previous();
    } else {
      setOrderedIndex(i => Math.max(i - 1, 0));
    }
  };

  const canGoNext = isRandom ? true : orderedIndex < totalItems - 1;
  const canGoPrev = isRandom ? randomHook.canGoPrevious : orderedIndex > 0;

  const accentColor = CATEGORY_COLORS[currentItem.category || ''] || 'var(--color-coral)';

  return (
    <ActivityShell
      title={config.title}
      icon={config.icon}
      onNext={canGoNext ? handleNext : undefined}
      onPrevious={handlePrevious}
      onRepeat={repeat}
      canGoPrevious={canGoPrev}
      canGoNext={canGoNext}
      nextLabel={!isRandom && orderedIndex === totalItems - 1 ? '✓ Done' : 'Next →'}
      progressCurrent={!isRandom ? currentIndex! : undefined}
      progressTotal={!isRandom ? totalItems : undefined}
      voiceEnabled={isEnabled}
      onToggleVoice={toggle}
    >
      <div className={styles.cardWrapper}>
        {/* Order/Random toggle */}
        <div className={orderStyles.toggleBar}>
          <span className={orderStyles.toggleLabel}>Mode:</span>
          <button
            className={`${orderStyles.modeBtn} ${!isRandom ? orderStyles.active : ''}`}
            onClick={() => setIsRandom(false)}
            aria-pressed={!isRandom}
          >
            📋 In Order
          </button>
          <button
            className={`${orderStyles.modeBtn} ${isRandom ? orderStyles.active : ''}`}
            onClick={() => { setIsRandom(true); }}
            aria-pressed={isRandom}
          >
            🔀 Random
          </button>
          {!isRandom && (
            <span className={orderStyles.counter} aria-label={`Item ${currentIndex} of ${totalItems}`}>
              {currentIndex} / {totalItems}
            </span>
          )}
        </div>

        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.visualSide}>
              <div className={styles.emojiDisplay} aria-label={currentItem.name}>
                {currentItem.emoji}
              </div>
            </div>
            <div className={styles.textSide}>
              <div className={styles.primaryText} style={{ color: accentColor }}>
                {currentItem.name}
              </div>
              {currentItem.category && (
                <div style={{
                  background: accentColor, color: 'white',
                  borderRadius: 'var(--radius-lg)', padding: '4px 14px',
                  fontWeight: 800, fontSize: '0.9rem', display: 'inline-block', alignSelf: 'flex-start',
                }}>
                  {currentItem.category}
                </div>
              )}
              {currentItem.funFact && (
                <div className={styles.funFact}>
                  <span className={styles.funFactIcon}>💡</span>
                  <span>{currentItem.funFact}</span>
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
