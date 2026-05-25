import { useParams, useNavigate } from 'react-router-dom';
import { getActivityById } from '../../data/activities';
import { SequentialFlashcardActivity } from '../activities/SequentialFlashcardActivity';
import { RandomFlashcardActivity } from '../activities/RandomFlashcardActivity';
import { ProgressiveListActivity } from '../activities/ProgressiveListActivity';
import { CountingActivity } from '../activities/CountingActivity';
import { MusicAlbumActivity } from '../activities/MusicAlbumActivity';
import { DrawingCanvasActivity } from '../activities/DrawingCanvasActivity';
import { MultipleChoiceQuizActivity } from '../activities/MultipleChoiceQuizActivity';
import { SightWordActivity } from '../activities/SightWordActivity';
import { WordSpinnerActivity } from '../activities/WordSpinnerActivity';
import type { ActivityConfig, ComponentType } from '../../data/activities';
import styles from './ActivityLoader.module.css';

type ComponentMap = {
  [K in ComponentType]?: React.ComponentType<{ config: ActivityConfig }>;
};

const activityComponentMap: ComponentMap = {
  'flashcard-sequential': SequentialFlashcardActivity,
  'flashcard-random': RandomFlashcardActivity,
  'progressive-list': ProgressiveListActivity,
  'counting': CountingActivity,
  'music-album': MusicAlbumActivity,
  'drawing-canvas': DrawingCanvasActivity,
  'multiple-choice-quiz': MultipleChoiceQuizActivity,
  'sight-word': SightWordActivity,
  'word-spinner': WordSpinnerActivity,
};

export function ActivityLoader() {
  const { activityId } = useParams<{ activityId: string }>();
  const navigate = useNavigate();

  if (!activityId) {
    return <NotFound />;
  }

  const config = getActivityById(activityId);

  if (!config) {
    return <NotFound />;
  }

  const ActivityComponent = activityComponentMap[config.componentType];

  if (!ActivityComponent) {
    return (
      <div className={styles.comingSoon}>
        <span className={styles.comingSoonIcon}>{config.icon}</span>
        <h2>{config.title}</h2>
        <p>This activity is coming soon! 🚀</p>
        <button onClick={() => navigate('/')} className={styles.homeBtn}>
          🏠 Back to Home
        </button>
      </div>
    );
  }

  return <ActivityComponent config={config} />;
}

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles.comingSoon}>
      <span className={styles.comingSoonIcon}>🤔</span>
      <h2>Hmm, we can't find that activity!</h2>
      <p>Let's go back home and try another one.</p>
      <button onClick={() => navigate('/')} className={styles.homeBtn}>
        🏠 Back to Home
      </button>
    </div>
  );
}
