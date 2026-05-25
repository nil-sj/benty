import { useNavigate } from 'react-router-dom';
import { useProgress } from '../../context/ProgressContext';
import { activities } from '../../data/activities';
import styles from './QuickAccess.module.css';

export function QuickAccess() {
  const navigate = useNavigate();
  const { recentIds, stats } = useProgress();

  const favorites = activities.filter(a => stats[a.id]?.starred);
  const recent = recentIds.map(id => activities.find(a => a.id === id)).filter(Boolean).slice(0, 6);

  if (favorites.length === 0 && recent.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      {favorites.length > 0 && (
        <div className={styles.strip}>
          <h2 className={styles.stripTitle}>⭐ Favorites</h2>
          <div className={styles.chips}>
            {favorites.map(a => (
              <button key={a.id} className={styles.chip} onClick={() => navigate(a.route)}>
                {a.icon} {a.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {recent.length > 0 && (
        <div className={styles.strip}>
          <h2 className={styles.stripTitle}>🕐 Recently Played</h2>
          <div className={styles.chips}>
            {recent.map(a => a && (
              <button key={a.id} className={`${styles.chip} ${styles.recentChip}`} onClick={() => navigate(a.route)}>
                {a.icon} {a.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
