import { useCallback, useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { countableObjects } from '../../data/learningData';
import { randomItem, randomInt } from '../../utils/random';
import styles from './CountingActivity.module.css';

interface CountingActivityProps {
  config: ActivityConfig;
}

type FeedbackState = 'idle' | 'correct' | 'wrong';

const NUMBER_WORDS = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

export function CountingActivity({ config }: CountingActivityProps) {
  const [count, setCount] = useState(() => randomInt(1, 9));
  const [object, setObject] = useState(() => randomItem(countableObjects));
  const [feedback, setFeedback] = useState<FeedbackState>('idle');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const { sayText, isEnabled, toggle } = useSpeech(config.voiceEnabled);

  const prompt = `Can you count the ${object.plural}?`;

  const speakPrompt = useCallback(() => {
    sayText(prompt);
  }, [sayText, prompt]);

  useEffect(() => {
    const timer = setTimeout(speakPrompt, 500);
    return () => clearTimeout(timer);
  }, [count, object]);

  const handleAnswer = useCallback((answer: number) => {
    if (feedback !== 'idle') return;
    setAttempts((a) => a + 1);

    if (answer === count) {
      setFeedback('correct');
      setScore((s) => s + 1);
      sayText(`Great job! There ${count === 1 ? 'is' : 'are'} ${NUMBER_WORDS[count]} ${count === 1 ? object.singular : object.plural}!`);
      setTimeout(() => {
        setCount(randomInt(1, 9));
        setObject(randomItem(countableObjects, object));
        setFeedback('idle');
      }, 2000);
    } else {
      setFeedback('wrong');
      sayText(`Good try! Count again carefully.`);
      setTimeout(() => setFeedback('idle'), 1500);
    }
  }, [feedback, count, object, sayText]);

  useKeyAnswerHandler(handleAnswer);

  const objectItems = Array.from({ length: count }, (_, i) => i);

  return (
    <ActivityShell
      title={config.title}
      icon={config.icon}
      onRepeat={speakPrompt}
      showNavigation={false}
    
      voiceEnabled={isEnabled}
      onToggleVoice={toggle}
    >
      <div className={styles.container}>
        {/* Score */}
        <div className={styles.score}>
          ⭐ Score: {score} / {attempts}
        </div>

        {/* Objects display */}
        <div className={styles.question} aria-live="polite">
          <p className={styles.prompt}>{prompt}</p>
          <div
            className={styles.objectGrid}
            role="img"
            aria-label={`${count} ${count === 1 ? object.singular : object.plural}`}
          >
            {objectItems.map((i) => (
              <span key={i} className={styles.objectItem} aria-hidden="true">
                {object.emoji}
              </span>
            ))}
          </div>
        </div>

        {/* Feedback */}
        {feedback === 'correct' && (
          <div className={styles.feedbackCorrect} aria-live="assertive">
            🎉 Correct! {count} {count === 1 ? object.singular : object.plural}!
          </div>
        )}
        {feedback === 'wrong' && (
          <div className={styles.feedbackWrong} aria-live="assertive">
            😊 Try again! Count carefully...
          </div>
        )}

        {/* Number buttons */}
        <div className={styles.numberGrid} role="group" aria-label="Choose the count">
          {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              className={`${styles.numBtn} ${feedback === 'correct' && n === count ? styles.correctBtn : ''}`}
              onClick={() => handleAnswer(n)}
              aria-label={`${n}`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </ActivityShell>
  );
}

// Hook to handle number key presses for counting game
function useKeyAnswerHandler(onAnswer: (n: number) => void) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const n = parseInt(e.key);
      if (n >= 1 && n <= 9) onAnswer(n);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onAnswer]);
}
