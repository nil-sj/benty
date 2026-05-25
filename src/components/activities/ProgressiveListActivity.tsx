import { useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { daysOfWeekData, monthsOfYearData, seasonsData } from '../../data/learningData';
import type { ListItem } from '../../data/learningData';
import styles from './ProgressiveListActivity.module.css';

interface ProgressiveListProps {
  config: ActivityConfig;
}

function getDataForSource(dataSource: string): ListItem[] {
  switch (dataSource) {
    case 'daysOfWeek': return daysOfWeekData;
    case 'monthsOfYear': return monthsOfYearData;
    case 'seasons': return seasonsData;
    default: return daysOfWeekData;
  }
}

export function ProgressiveListActivity({ config }: ProgressiveListProps) {
  const items = getDataForSource(config.dataSource);
  const [revealed, setRevealed] = useState(1);
  const [celebrating, setCelebrating] = useState(false);
  const { sayText } = useSpeech(config.voiceEnabled);

  useEffect(() => {
    const item = items[revealed - 1];
    if (item) {
      const timer = setTimeout(() => sayText(item.audioText), 300);
      return () => clearTimeout(timer);
    }
  }, [revealed]);

  const handleNext = () => {
    if (revealed < items.length) {
      setRevealed(revealed + 1);
    } else {
      setCelebrating(true);
      sayText('Great job! You learned them all!');
      setTimeout(() => setCelebrating(false), 3000);
    }
  };

  const handlePrevious = () => {
    if (revealed > 1) setRevealed(revealed - 1);
  };

  const handleRepeat = () => {
    const allText = items.slice(0, revealed).map((i) => i.name).join(', ');
    sayText(allText);
  };

  return (
    <ActivityShell
      title={config.title}
      icon={config.icon}
      onNext={handleNext}
      onPrevious={handlePrevious}
      onRepeat={handleRepeat}
      canGoPrevious={revealed > 1}
      canGoNext={true}
      nextLabel={revealed >= items.length ? '🎉 Review All' : 'Next →'}
      progressCurrent={revealed}
      progressTotal={items.length}
    >
      <div className={styles.container}>
        {celebrating && (
          <div className={styles.celebration} aria-live="polite">
            🎉 Amazing! You know them all! 🎉
          </div>
        )}

        <div className={styles.list}>
          {items.slice(0, revealed).map((item, i) => (
            <div
              key={item.id}
              className={`${styles.listItem} ${i === revealed - 1 ? styles.newest : ''}`}
              style={{ animationDelay: `${i === revealed - 1 ? '0ms' : '0ms'}` }}
            >
              <span className={styles.itemEmoji}>{item.emoji}</span>
              <span className={styles.itemName}>{item.name}</span>
              {item.detail && i === revealed - 1 && (
                <span className={styles.itemDetail}>{item.detail}</span>
              )}
            </div>
          ))}
        </div>

        <p className={styles.hint}>
          {revealed < items.length
            ? `${items.length - revealed} more to go!`
            : '⭐ You know all of them!'}
        </p>
      </div>
    </ActivityShell>
  );
}
