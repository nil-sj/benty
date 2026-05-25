import { useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import type { ActivityConfig } from '../../data/activities';
import { songsData } from '../../data/learningData';
import { speak, stopSpeaking } from '../../utils/speech';
import styles from './MusicAlbumActivity.module.css';

interface MusicAlbumProps {
  config: ActivityConfig;
}

export function MusicAlbumActivity({ config }: MusicAlbumProps) {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const handleSongClick = (songId: string) => {
    const song = songsData.find((s) => s.id === songId);
    if (!song) return;

    if (playingId === songId) {
      // Stop
      stopSpeaking();
      setPlayingId(null);
    } else {
      // Play lyrics hint or title
      stopSpeaking();
      setPlayingId(songId);
      const textToSay = song.lyricsHint || `Now playing: ${song.title}`;
      speak(textToSay, 0.75, 1.1);

      // Reset after estimated time
      const duration = (textToSay.length / 10) * 1000 + 2000;
      setTimeout(() => setPlayingId(null), duration);
    }
  };

  return (
    <ActivityShell
      title={config.title}
      icon={config.icon}
      showNavigation={false}
    >
      <div className={styles.container}>
        <p className={styles.subtitle}>Tap a song to sing along! 🎤</p>
        <div className={styles.albumGrid}>
          {songsData.map((song) => {
            const isPlaying = playingId === song.id;
            return (
              <button
                key={song.id}
                className={`${styles.songCard} ${isPlaying ? styles.playing : ''}`}
                onClick={() => handleSongClick(song.id)}
                aria-label={isPlaying ? `Stop ${song.title}` : `Play ${song.title}`}
                aria-pressed={isPlaying}
              >
                <span className={styles.songIcon}>
                  {isPlaying ? '🎵' : song.icon}
                </span>
                {isPlaying && (
                  <div className={styles.musicBars} aria-hidden="true">
                    <span /><span /><span /><span />
                  </div>
                )}
                <span className={styles.songTitle}>{song.title}</span>
                {song.description && (
                  <span className={styles.songDesc}>{song.description}</span>
                )}
                <span className={styles.playPause}>
                  {isPlaying ? '⏸ Stop' : '▶ Play'}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </ActivityShell>
  );
}
