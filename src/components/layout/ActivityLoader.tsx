import { useEffect } from 'react';
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
import { MissingLetterActivity } from '../activities/MissingLetterActivity';
import { OddManOutActivity } from '../activities/OddManOutActivity';
import { MatchingGameActivity } from '../activities/MatchingGameActivity';
import { AnimalSoundsActivity } from '../activities/AnimalSoundsActivity';
import { MemoryCardGame } from '../activities/MemoryCardGame';
import { RhymeFinderActivity } from '../activities/RhymeFinderActivity';
import { FirstLetterActivity } from '../activities/FirstLetterActivity';
import { OppositesActivity } from '../activities/OppositesActivity';
import { AdditionActivity, CompareActivity, PatternActivity } from '../activities/MathActivity';
import { TellTimeActivity } from '../activities/TellTimeActivity';
import { PhonicsActivity } from '../activities/PhonicsActivity';
import { CVCWordActivity, SentenceReaderActivity, StoryTimeActivity } from '../activities/ReadingActivity';
import { EmotionsActivity, WeatherActivity, FamilyActivity, RoutinesActivity, NatureColorsActivity, SensesActivity, DirectionsActivity, SizesActivity, HealthyEatingActivity } from '../activities/TopicActivity';
import { NumberBondsActivity, OrdinalNumbersActivity, SkipCountingActivity, PlaceValueActivity } from '../activities/MathExtra';
import { SyllableActivity, DigraphsActivity, LongVowelsActivity, GrammarActivity } from '../activities/LiteracyExtra';
import { CategorySortActivity, SentenceBuilderActivity } from '../activities/DragActivity';
import { NumberLineActivity, OneMoreLessActivity, CompoundWordsActivity, CoinsActivity } from '../activities/NewMathActivity';
import { PlantsActivity, AnimalHomesActivity, WordProblemsActivity, FactFamiliesActivity } from '../activities/ScienceActivity';
import type { ActivityConfig, ComponentType } from '../../data/activities';
import { useProgress } from '../../context/ProgressContext';
import styles from './ActivityLoader.module.css';

type ComponentMap = { [K in ComponentType]?: React.ComponentType<{ config: ActivityConfig }> };

const activityComponentMap: ComponentMap = {
  'flashcard-sequential':   SequentialFlashcardActivity,
  'flashcard-random':       RandomFlashcardActivity,
  'progressive-list':       ProgressiveListActivity,
  'counting':               CountingActivity,
  'music-album':            MusicAlbumActivity,
  'drawing-canvas':         DrawingCanvasActivity,
  'multiple-choice-quiz':   MultipleChoiceQuizActivity,
  'sight-word':             SightWordActivity,
  'word-spinner':           WordSpinnerActivity,
  'missing-letter':         MissingLetterActivity,
  'odd-man-out':            OddManOutActivity,
  'matching':               MatchingGameActivity,
  'animal-sounds':          AnimalSoundsActivity,
  'memory-card':            MemoryCardGame,
  'rhyme-finder':           RhymeFinderActivity,
  'first-letter':           FirstLetterActivity,
  'opposites':              OppositesActivity,
  'addition':               AdditionActivity,
  'subtraction':            AdditionActivity,
  'compare':                CompareActivity,
  'pattern':                PatternActivity,
  'tell-time':              TellTimeActivity,
  'phonics':                PhonicsActivity,
  'cvc-words':              CVCWordActivity,
  'sentence-reader':        SentenceReaderActivity,
  'story-time':             StoryTimeActivity,
  'emotions':               EmotionsActivity,
  'weather':                WeatherActivity,
  'family':                 FamilyActivity,
  'routines':               RoutinesActivity,
  'nature-colors':          NatureColorsActivity,
  'senses':                 SensesActivity,
  'directions':             DirectionsActivity,
  'sizes':                  SizesActivity,
  'healthy-eating':         HealthyEatingActivity,
  'number-bonds':           NumberBondsActivity,
  'ordinal-numbers':        OrdinalNumbersActivity,
  'skip-counting':          SkipCountingActivity,
  'place-value':            PlaceValueActivity,
  'syllables':              SyllableActivity,
  'digraphs':               DigraphsActivity,
  'long-vowels':            LongVowelsActivity,
  'grammar-basics':         GrammarActivity,
  'category-sort':          CategorySortActivity,
  'sentence-builder':       SentenceBuilderActivity,
  'number-line':            NumberLineActivity,
  'one-more-less':          OneMoreLessActivity,
  'compound-words':         CompoundWordsActivity,
  'coins':                  CoinsActivity,
  'plants':                 PlantsActivity,
  'animal-homes':           AnimalHomesActivity,
  'word-problems':          WordProblemsActivity,
  'fact-families':          FactFamiliesActivity,
};

export function ActivityLoader() {
  const { activityId } = useParams<{ activityId: string }>();
  const navigate = useNavigate();
  const { recordActivity } = useProgress();

  if (!activityId) return <NotFound />;
  const config = getActivityById(activityId);
  if (!config) return <NotFound />;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => { recordActivity(config.id); }, [config.id]);

  const ActivityComponent = activityComponentMap[config.componentType];
  if (!ActivityComponent) {
    return (
      <div className={styles.comingSoon}>
        <span className={styles.comingSoonIcon}>{config.icon}</span>
        <h2>{config.title}</h2>
        <p>This activity is coming soon! 🚀</p>
        <button onClick={() => navigate('/')} className={styles.homeBtn}>🏠 Back to Home</button>
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
      <button onClick={() => navigate('/')} className={styles.homeBtn}>🏠 Back to Home</button>
    </div>
  );
}
