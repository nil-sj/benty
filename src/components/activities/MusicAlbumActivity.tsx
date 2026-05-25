import { useEffect, useRef, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import type { ActivityConfig } from '../../data/activities';
import { songsData } from '../../data/learningData';
import { useSpeech } from '../../hooks/useSpeech';
import styles from './MusicAlbumActivity.module.css';

interface MusicAlbumProps {
  config: ActivityConfig;
}

export function MusicAlbumActivity({ config }: MusicAlbumProps) {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [displayedLyrics, setDisplayedLyrics] = useState('');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { isEnabled, toggle, stop } = useSpeech(config.voiceEnabled);

  const clearTimer = () => { if (timerRef.current) clearTimeout(timerRef.current); };

  useEffect(() => () => { clearTimer(); stop(); }, []);

  const handleSongClick = (songId: string) => {
    const song = songsData.find(s => s.id === songId);
    if (!song) return;

    if (playingId === songId) {
      stop();
      setPlayingId(null);
      setDisplayedLyrics('');
      clearTimer();
      return;
    }

    stop();
    clearTimer();
    setPlayingId(songId);
    setDisplayedLyrics(song.fullLyrics);

    if (isEnabled && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(song.fullLyrics);
      utterance.rate = 0.78;
      utterance.pitch = 1.2;
      utterance.volume = 1;

      // Try to get a clear voice
      const voices = window.speechSynthesis.getVoices();
      const preferred = voices.find(v =>
        v.lang.startsWith('en') && (
          v.name.includes('Samantha') || v.name.includes('Google') ||
          v.name.includes('Karen') || v.name.includes('Moira')
        )
      );
      if (preferred) utterance.voice = preferred;

      utterance.onend = () => {
        timerRef.current = setTimeout(() => {
          setPlayingId(null);
          setDisplayedLyrics('');
        }, 800);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      // Fallback: just show lyrics for reading, auto-dismiss
      const duration = song.fullLyrics.length * 80;
      timerRef.current = setTimeout(() => {
        setPlayingId(null);
        setDisplayedLyrics('');
      }, duration);
    }
  };

  return (
    <ActivityShell
      title={config.title}
      icon={config.icon}
      showNavigation={false}
      voiceEnabled={isEnabled}
      onToggleVoice={toggle}
    >
      <div className={styles.container}>
        <p className={styles.subtitle}>Tap a song to sing along! 🎤</p>

        {/* Lyrics panel */}
        {playingId && displayedLyrics && (
          <div className={styles.lyricsPanel} aria-live="polite">
            <div className={styles.lyricsBars} aria-hidden="true">
              <span /><span /><span /><span /><span />
            </div>
            <p className={styles.lyricsText}>{displayedLyrics}</p>
          </div>
        )}

        <div className={styles.albumGrid}>
          {songsData.map(song => {
            const isPlaying = playingId === song.id;
            return (
              <button
                key={song.id}
                className={`${styles.songCard} ${isPlaying ? styles.playing : ''}`}
                onClick={() => handleSongClick(song.id)}
                aria-label={isPlaying ? `Stop ${song.title}` : `Play ${song.title}`}
                aria-pressed={isPlaying}
              >
                <span className={styles.songIcon}>{isPlaying ? '🎵' : song.icon}</span>
                {isPlaying && (
                  <div className={styles.musicBars} aria-hidden="true">
                    <span /><span /><span /><span />
                  </div>
                )}
                <span className={styles.songTitle}>{song.title}</span>
                {song.description && <span className={styles.songDesc}>{song.description}</span>}
                <span className={styles.playPause}>{isPlaying ? '⏸ Stop' : '▶ Play'}</span>
              </button>
            );
          })}
        </div>
      </div>
    </ActivityShell>
  );
}
