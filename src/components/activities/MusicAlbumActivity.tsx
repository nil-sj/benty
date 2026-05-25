import { useEffect, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import type { ActivityConfig } from '../../data/activities';
import { songsData } from '../../data/learningData';
import { playSong, stopSong, isAudioSupported } from '../../utils/audioSynth';
import { useSpeech } from '../../hooks/useSpeech';
import styles from './MusicAlbumActivity.module.css';

interface MusicAlbumProps {
  config: ActivityConfig;
}

export function MusicAlbumActivity({ config }: MusicAlbumProps) {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [audioSupported] = useState(isAudioSupported);
  const { isEnabled, toggle, sayText } = useSpeech(config.voiceEnabled);

  useEffect(() => () => stopSong(), []);

  const handleSongClick = (songId: string) => {
    const song = songsData.find(s => s.id === songId);
    if (!song) return;

    if (playingId === songId) {
      stopSong();
      setPlayingId(null);
      return;
    }

    stopSong();
    setPlayingId(songId);

    if (audioSupported) {
      playSong(songId, () => setPlayingId(null));
    } else {
      // Fallback to speech
      if (isEnabled) sayText(song.fullLyrics);
      const dur = song.fullLyrics.length * 75;
      setTimeout(() => setPlayingId(null), dur);
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
        <p className={styles.subtitle}>
          {audioSupported ? '🎹 Tap a song to hear the melody!' : '🎤 Tap a song to sing along!'}
        </p>

        {/* Lyrics panel for playing song */}
        {playingId && (
          <div className={styles.lyricsPanel} aria-live="polite">
            <div className={styles.lyricsBars} aria-hidden="true">
              <span /><span /><span /><span /><span />
            </div>
            <p className={styles.lyricsText}>
              {songsData.find(s => s.id === playingId)?.fullLyrics}
            </p>
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
