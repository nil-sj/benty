import { useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { speak } from '../utils/speech';
import styles from './SettingsPage.module.css';

export function SettingsPage() {
  const navigate = useNavigate();
  const { settings, updateSettings, clearProgress } = useProgress();

  const testVoice = () => {
    speak("Hello! This is how I sound!", settings.speechRate, 1.1);
  };

  const handleClear = () => {
    if (window.confirm("Clear all progress and favorites? This can't be undone.")) {
      clearProgress();
    }
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <button className={styles.backBtn} onClick={() => navigate('/')} aria-label="Back to home">
          🏠 Home
        </button>
        <h1 className={styles.title}>⚙️ Settings</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>🔊 Voice & Audio</h2>

          <div className={styles.row}>
            <div className={styles.rowInfo}>
              <span className={styles.rowLabel}>Voice Narration</span>
              <span className={styles.rowDesc}>Speak words and instructions aloud</span>
            </div>
            <button
              className={`${styles.toggle} ${settings.voiceEnabled ? styles.toggleOn : ''}`}
              onClick={() => updateSettings({ voiceEnabled: !settings.voiceEnabled })}
              aria-label={settings.voiceEnabled ? 'Disable voice' : 'Enable voice'}
              role="switch"
              aria-checked={settings.voiceEnabled}
            >
              <span className={styles.toggleThumb} />
            </button>
          </div>

          <div className={styles.row}>
            <div className={styles.rowInfo}>
              <span className={styles.rowLabel}>Auto-Read</span>
              <span className={styles.rowDesc}>Automatically read each item when it appears</span>
            </div>
            <button
              className={`${styles.toggle} ${settings.autoRead ? styles.toggleOn : ''}`}
              onClick={() => updateSettings({ autoRead: !settings.autoRead })}
              role="switch"
              aria-checked={settings.autoRead}
              aria-label={settings.autoRead ? 'Disable auto-read' : 'Enable auto-read'}
            >
              <span className={styles.toggleThumb} />
            </button>
          </div>

          <div className={styles.row}>
            <div className={styles.rowInfo}>
              <span className={styles.rowLabel}>Speech Speed</span>
              <span className={styles.rowDesc}>How fast the voice speaks</span>
            </div>
            <div className={styles.sliderGroup}>
              <span className={styles.sliderLabel}>🐢</span>
              <input
                type="range"
                min={0.5}
                max={1.3}
                step={0.05}
                value={settings.speechRate}
                onChange={e => updateSettings({ speechRate: parseFloat(e.target.value) })}
                className={styles.slider}
                aria-label="Speech rate"
              />
              <span className={styles.sliderLabel}>🐇</span>
            </div>
          </div>

          <button className={styles.testBtn} onClick={testVoice}>
            🔊 Test Voice
          </button>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>📊 Progress</h2>
          <p className={styles.infoText}>
            Progress and favorites are saved automatically on this device.
          </p>
          <button className={styles.dangerBtn} onClick={handleClear}>
            🗑️ Clear All Progress & Favorites
          </button>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>ℹ️ About</h2>
          <p className={styles.infoText}>
            Mishka's Learning World — built with ❤️ for young learners.<br />
            Version 1.1.0
          </p>
        </div>
      </main>
    </div>
  );
}
