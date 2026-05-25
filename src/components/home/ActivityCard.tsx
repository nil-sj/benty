import { useNavigate } from 'react-router-dom';
import type { ActivityConfig } from '../../data/activities';
import { FavoriteButton } from './FavoriteButton';
import styles from './ActivityCard.module.css';

interface ActivityCardProps {
  activity: ActivityConfig;
  accentColor: string;
}

export function ActivityCard({ activity, accentColor }: ActivityCardProps) {
  const navigate = useNavigate();

  return (
    <div className={styles.cardWrapper} style={{ '--accent': accentColor } as React.CSSProperties}>
      <button
        className={styles.card}
        onClick={() => navigate(activity.route)}
        aria-label={`${activity.title}: ${activity.description}`}
      >
        <span className={styles.icon} aria-hidden="true">{activity.icon}</span>
        <div className={styles.info}>
          <span className={styles.title}>{activity.title}</span>
          <span className={styles.desc}>{activity.description}</span>
        </div>
        <span className={styles.arrow} aria-hidden="true">›</span>
      </button>
      <FavoriteButton activityId={activity.id} size="sm" />
    </div>
  );
}
