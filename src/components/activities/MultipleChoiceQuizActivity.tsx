import { useCallback, useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { quizzesData } from '../../data/learningData';
import { randomItem, shuffle } from '../../utils/random';
import styles from './QuizActivity.module.css';

interface MultipleChoiceProps {
  config: ActivityConfig;
}

type AnswerState = 'unanswered' | 'correct' | 'wrong';

export function MultipleChoiceQuizActivity({ config }: MultipleChoiceProps) {
  const [current, setCurrent] = useState(() => randomItem(quizzesData));
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>('unanswered');
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);

  useEffect(() => {
    setShuffledOptions(shuffle(current.options));
    setSelected(null);
    setAnswerState('unanswered');
    const timer = setTimeout(() => sayText(current.question), 400);
    return () => clearTimeout(timer);
  }, [current]);

  const handleAnswer = useCallback((optionIndex: number) => {
    if (answerState !== 'unanswered') return;
    const selectedOption = shuffledOptions[optionIndex];
    const correctOption = current.options[current.correctIndex];
    const isCorrect = selectedOption === correctOption;

    setSelected(optionIndex);
    setTotal((t) => t + 1);

    if (isCorrect) {
      setAnswerState('correct');
      setScore((s) => s + 1);
      sayText(`Correct! ${current.explanation}`);
    } else {
      setAnswerState('wrong');
      sayText(`Good try! ${current.explanation}`);
    }
  }, [answerState, shuffledOptions, current, sayText]);

  const handleNext = () => {
    setCurrent(randomItem(quizzesData, current));
  };

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <ActivityShell
      title={config.title}
      icon={config.icon}
      onNext={answerState !== 'unanswered' ? handleNext : undefined}
      onRepeat={repeat}
      canGoNext={answerState !== 'unanswered'}
      nextLabel="Next Question →"
      onAnswer={(key) => {
        const idx = optionLabels.indexOf(key);
        if (idx !== -1) handleAnswer(idx);
      }}
    
      voiceEnabled={isEnabled}
      onToggleVoice={toggle}
    >
      <div className={styles.container}>
        {/* Score */}
        <div className={styles.score}>⭐ {score} / {total}</div>

        {/* Question card */}
        <div className={styles.questionCard}>
          <div className={styles.questionEmoji} aria-hidden="true">{current.emoji}</div>
          <p className={styles.questionText}>{current.question}</p>
        </div>

        {/* Options */}
        <div className={styles.optionsGrid} role="group" aria-label="Answer choices">
          {shuffledOptions.map((option, i) => {
            const correctOption = current.options[current.correctIndex];
            const isCorrectOption = option === correctOption;
            const isSelectedOption = selected === i;

            let btnClass = styles.optionBtn;
            if (answerState !== 'unanswered') {
              if (isCorrectOption) btnClass = `${styles.optionBtn} ${styles.correctOption}`;
              else if (isSelectedOption) btnClass = `${styles.optionBtn} ${styles.wrongOption}`;
              else btnClass = `${styles.optionBtn} ${styles.dimmedOption}`;
            }

            return (
              <button
                key={option}
                className={btnClass}
                onClick={() => handleAnswer(i)}
                disabled={answerState !== 'unanswered'}
                aria-label={`${optionLabels[i]}: ${option}`}
              >
                <span className={styles.optionLabel}>{optionLabels[i]}</span>
                <span className={styles.optionText}>{option}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {answerState === 'correct' && (
          <div className={styles.feedbackCorrect} aria-live="assertive">
            🎉 {current.explanation}
          </div>
        )}
        {answerState === 'wrong' && (
          <div className={styles.feedbackWrong} aria-live="assertive">
            😊 {current.explanation}
          </div>
        )}
      </div>
    </ActivityShell>
  );
}
