import { useProgress } from '../../context/ProgressContext';
import styles from './FavoriteButton.module.css';

interface FavoriteButtonProps {
  activityId: string;
  size?: 'sm' | 'md';
}

export function FavoriteButton({ activityId, size = 'md' }: FavoriteButtonProps) {
  const { getStatFor, toggleFavorite } = useProgress();
  const stat = getStatFor(activityId);
  const isStarred = stat?.starred ?? false;

  return (
    <button
      className={`${styles.btn} ${styles[size]} ${isStarred ? styles.starred : ''}`}
      onClick={e => { e.stopPropagation(); toggleFavorite(activityId); }}
      aria-label={isStarred ? 'Remove from favorites' : 'Add to favorites'}
      aria-pressed={isStarred}
      title={isStarred ? 'Remove favorite' : 'Add to favorites'}
    >
      {isStarred ? '⭐' : '☆'}
    </button>
  );
}
