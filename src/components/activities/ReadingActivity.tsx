import { useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import { cvcWordsData, simpleSentencesData, shortStoriesData } from '../../data/newActivitiesData';
import { shuffle } from '../../utils/random';
import styles from './ReadingActivity.module.css';

interface ReadingProps { config: ActivityConfig; }

// ─── CVC Word Blending ────────────────────────────────────────────────────────
export function CVCWordActivity({ config }: ReadingProps) {
  const [isRandom, setIsRandom] = useState(false);
  const [items] = useState(() => cvcWordsData);
  const [shuffled, setShuffled] = useState(() => shuffle(cvcWordsData));
  const [index, setIndex] = useState(0);
  const [blendStep, setBlendStep] = useState(0); // 0=letter1, 1=letter2, 2=letter3, 3=full
  const { sayText, repeat, isEnabled, toggle } = useSpeech(config.voiceEnabled);

  const list = isRandom ? shuffled : items;
  const current = list[index];
  const total = items.length;

  const speakBlend = (step: number, item: typeof current) => {
    if (step === 0) sayText(`${item.breakdown[0]}!`);
    else if (step === 1) sayText(`${item.breakdown[0]}-${item.breakdown[1]}!`);
    else if (step === 2) sayText(`${item.breakdown[0]}-${item.breakdown[1]}-${item.breakdown[2]}!`);
    else sayText(`${item.audioText} ${item.sentence}`);
  };

  useEffect(() => {
    setBlendStep(0);
    const t = setTimeout(() => speakBlend(0, current), 350);
    return () => clearTimeout(t);
  }, [current]);

  const handleBlendNext = () => {
    const next = blendStep + 1;
    if (next <= 3) { setBlendStep(next); speakBlend(next, current); }
  };

  const goNext = () => { setIndex(i => Math.min(i + 1, total - 1)); };
  const goPrev = () => { setIndex(i => Math.max(i - 1, 0)); };

  return (
    <ActivityShell
      title={config.title} icon={config.icon}
      onNext={blendStep < 3 ? handleBlendNext : goNext}
      onPrevious={goPrev}
      canGoPrevious={index > 0}
      canGoNext={true}
      onRepeat={repeat}
      nextLabel={blendStep < 3 ? 'Next letter →' : 'New word →'}
      progressCurrent={!isRandom ? index + 1 : undefined}
      progressTotal={!isRandom ? total : undefined}
      voiceEnabled={isEnabled} onToggleVoice={toggle}
    >
      <div className={styles.container}>
        <div className={styles.modeBar}>
          <button className={`${styles.modeBtn} ${!isRandom ? styles.active : ''}`} onClick={() => { setIsRandom(false); setIndex(0); }}>📋 In Order</button>
          <button className={`${styles.modeBtn} ${isRandom ? styles.active : ''}`} onClick={() => { setIsRandom(true); setShuffled(shuffle(cvcWordsData)); setIndex(0); }}>🔀 Random</button>
          {!isRandom && <span className={styles.counter}>{index + 1} / {total}</span>}
        </div>

        <div className={styles.wordCard}>
          <div className={styles.wordEmoji}>{current.emoji}</div>
          <div className={styles.letterRow}>
            {current.breakdown.map((letter, i) => (
              <span
                key={i}
                className={`${styles.letterBox} ${blendStep > i ? styles.activeBox : styles.dimBox}`}
              >
                {letter}
              </span>
            ))}
          </div>
          {blendStep >= 3 && (
            <div className={styles.fullWord}>{current.word}</div>
          )}
          {blendStep >= 3 && (
            <div className={styles.sentenceBox}>{current.sentence}</div>
          )}
        </div>

        <div className={styles.blendProgress}>
          {['1st', '2nd', '3rd', 'Word!'].map((label, i) => (
            <div key={i} className={`${styles.blendDot} ${blendStep >= i ? styles.blendDotActive : ''}`}>{label}</div>
          ))}
        </div>
      </div>
    </ActivityShell>
  );
}

// ─── Simple Sentence Reader ───────────────────────────────────────────────────
export function SentenceReaderActivity({ config }: ReadingProps) {
  const [items] = useState(() => simpleSentencesData);
  const [index, setIndex] = useState(0);
  const [highlightWord, setHighlightWord] = useState(-1);
  const { sayText, isEnabled, toggle } = useSpeech(config.voiceEnabled);

  const current = items[index];

  const readSentence = () => {
    // Highlight each word as we read
    current.words.forEach((word, i) => {
      setTimeout(() => {
        setHighlightWord(i);
        sayText(word);
      }, i * 700);
    });
    setTimeout(() => setHighlightWord(-1), current.words.length * 700 + 500);
  };

  useEffect(() => {
    setHighlightWord(-1);
    const t = setTimeout(readSentence, 400);
    return () => clearTimeout(t);
  }, [current]);

  return (
    <ActivityShell
      title={config.title} icon={config.icon}
      onNext={index < items.length - 1 ? () => setIndex(i => i + 1) : undefined}
      onPrevious={index > 0 ? () => setIndex(i => i - 1) : undefined}
      onRepeat={readSentence}
      canGoPrevious={index > 0}
      canGoNext={index < items.length - 1}
      progressCurrent={index + 1} progressTotal={items.length}
      voiceEnabled={isEnabled} onToggleVoice={toggle}
    >
      <div className={styles.container}>
        <div className={styles.sentenceCard}>
          <div className={styles.sentenceEmoji}>{current.emoji}</div>
          <div className={styles.sentenceWords}>
            {current.words.map((word, i) => (
              <span key={i} className={`${styles.readWord} ${highlightWord === i ? styles.highlighted : ''}`}>
                {word}
              </span>
            ))}
          </div>
        </div>
        <button className={styles.readBtn} onClick={readSentence} aria-label="Read the sentence">
          🔊 Read it to me!
        </button>
        <p className={styles.tapHint}>Listen and follow along with each word!</p>
      </div>
    </ActivityShell>
  );
}

// ─── Story Time ────────────────────────────────────────────────────────────────
export function StoryTimeActivity({ config }: ReadingProps) {
  const [storyIndex, setStoryIndex] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const { sayText, isEnabled, toggle } = useSpeech(config.voiceEnabled);

  const story = shortStoriesData[storyIndex];
  const page = story.pages[pageIndex];
  const isLastPage = pageIndex === story.pages.length - 1;
  const isLastStory = storyIndex === shortStoriesData.length - 1;

  useEffect(() => {
    const t = setTimeout(() => sayText(page.text), 400);
    return () => clearTimeout(t);
  }, [page]);

  const nextPage = () => {
    if (!isLastPage) setPageIndex(p => p + 1);
    else if (!isLastStory) { setStoryIndex(s => s + 1); setPageIndex(0); }
  };

  const prevPage = () => {
    if (pageIndex > 0) setPageIndex(p => p - 1);
    else if (storyIndex > 0) { setStoryIndex(s => s - 1); setPageIndex(shortStoriesData[storyIndex - 1].pages.length - 1); }
  };

  const canPrev = pageIndex > 0 || storyIndex > 0;
  const canNext = !isLastPage || !isLastStory;

  return (
    <ActivityShell
      title={story.title} icon={story.emoji}
      onNext={canNext ? nextPage : undefined}
      onPrevious={canPrev ? prevPage : undefined}
      onRepeat={() => sayText(page.text)}
      canGoPrevious={canPrev}
      canGoNext={canNext}
      nextLabel={isLastPage ? 'Next Story →' : 'Next Page →'}
      progressCurrent={pageIndex + 1} progressTotal={story.pages.length}
      voiceEnabled={isEnabled} onToggleVoice={toggle}
    >
      <div className={styles.container}>
        <div className={styles.storySelector}>
          {shortStoriesData.map((s, i) => (
            <button key={s.id} className={`${styles.storyChip} ${i === storyIndex ? styles.storyActive : ''}`} onClick={() => { setStoryIndex(i); setPageIndex(0); }}>
              {s.emoji} {s.title}
            </button>
          ))}
        </div>

        <div className={styles.storyCard} key={page.text}>
          <div className={styles.storyEmoji}>{page.emoji}</div>
          <p className={styles.storyText}>{page.text}</p>
          <div className={styles.pageDots}>
            {story.pages.map((_, i) => (
              <span key={i} className={`${styles.pageDot} ${i === pageIndex ? styles.pageDotActive : ''}`} />
            ))}
          </div>
        </div>

        <button className={styles.readBtn} onClick={() => sayText(page.text)}>🔊 Read it to me!</button>
      </div>
    </ActivityShell>
  );
}
