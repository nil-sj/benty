import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { activities } from '../data/activities';
import styles from './ParentDashboard.module.css';

const PIN = '1234'; // Simple default PIN — parents can change in localStorage

export function ParentDashboard() {
  const navigate = useNavigate();
  const { stats, recentIds, clearProgress } = useProgress();
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState('');
  const [pinError, setPinError] = useState(false);

  const handlePin = () => {
    const savedPin = localStorage.getItem('mishka_parent_pin') || PIN;
    if (input === savedPin) {
      setUnlocked(true);
      setPinError(false);
    } else {
      setPinError(true);
      setInput('');
    }
  };

  if (!unlocked) {
    return (
      <div className={styles.pinPage}>
        <div className={styles.pinCard}>
          <div className={styles.pinIcon}>🔐</div>
          <h1 className={styles.pinTitle}>Parent Area</h1>
          <p className={styles.pinDesc}>Enter the parent PIN to view progress reports.</p>
          <p className={styles.pinHint}>Default PIN: <strong>1234</strong></p>
          <input
            type="password"
            inputMode="numeric"
            maxLength={4}
            className={styles.pinInput}
            value={input}
            onChange={e => setInput(e.target.value.replace(/\D/, ''))}
            onKeyDown={e => e.key === 'Enter' && handlePin()}
            placeholder="••••"
            aria-label="Parent PIN"
            autoFocus
          />
          {pinError && <p className={styles.pinError}>Incorrect PIN. Try again.</p>}
          <div className={styles.pinBtns}>
            <button className={styles.cancelBtn} onClick={() => navigate('/')}>Cancel</button>
            <button className={styles.unlockBtn} onClick={handlePin}>Unlock</button>
          </div>
        </div>
      </div>
    );
  }

  // Compute summary
  const playedActivities = activities.filter(a => stats[a.id]);
  const totalPlays = Object.values(stats).reduce((n, s) => n + s.totalPlays + s.totalAnswers, 0);
  const totalCorrect = Object.values(stats).reduce((n, s) => n + s.correctAnswers, 0);
  const totalAnswers = Object.values(stats).reduce((n, s) => n + s.totalAnswers, 0);
  const accuracy = totalAnswers > 0 ? Math.round((totalCorrect / totalAnswers) * 100) : 0;
  const favorites = activities.filter(a => stats[a.id]?.starred);
  const recentActivities = recentIds.map(id => activities.find(a => a.id === id)).filter(Boolean);

  const getAccuracyColor = (pct: number) => {
    if (pct >= 80) return 'var(--color-mint)';
    if (pct >= 50) return 'var(--color-sun)';
    return 'var(--color-coral)';
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <button className={styles.backBtn} onClick={() => navigate('/')}>🏠 Home</button>
        <h1 className={styles.title}>📊 Parent Dashboard</h1>
        <button className={styles.lockBtn} onClick={() => setUnlocked(false)}>🔒 Lock</button>
      </header>

      <main className={styles.main}>
        {/* Summary cards */}
        <div className={styles.summaryGrid}>
          <div className={styles.summaryCard}>
            <span className={styles.summaryIcon}>🎮</span>
            <span className={styles.summaryNum}>{totalPlays}</span>
            <span className={styles.summaryLabel}>Total Sessions</span>
          </div>
          <div className={styles.summaryCard}>
            <span className={styles.summaryIcon}>📚</span>
            <span className={styles.summaryNum}>{playedActivities.length}</span>
            <span className={styles.summaryLabel}>Activities Tried</span>
          </div>
          <div className={styles.summaryCard}>
            <span className={styles.summaryIcon}>🎯</span>
            <span className={styles.summaryNum} style={{ color: getAccuracyColor(accuracy) }}>{accuracy}%</span>
            <span className={styles.summaryLabel}>Accuracy</span>
          </div>
          <div className={styles.summaryCard}>
            <span className={styles.summaryIcon}>⭐</span>
            <span className={styles.summaryNum}>{favorites.length}</span>
            <span className={styles.summaryLabel}>Favorites</span>
          </div>
        </div>

        {/* Recently played */}
        {recentActivities.length > 0 && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>🕐 Recently Played</h2>
            <div className={styles.recentList}>
              {recentActivities.map(a => a && (
                <div key={a.id} className={styles.recentItem}>
                  <span>{a.icon}</span>
                  <span className={styles.recentName}>{a.title}</span>
                  <span className={styles.recentCat}>{a.category}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Activity breakdown */}
        {playedActivities.length > 0 && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>📈 Activity Breakdown</h2>
            <div className={styles.activityTable}>
              {playedActivities.map(a => {
                const s = stats[a.id]!;
                const pct = s.totalAnswers > 0 ? Math.round((s.correctAnswers / s.totalAnswers) * 100) : null;
                return (
                  <div key={a.id} className={styles.activityRow}>
                    <span className={styles.actIcon}>{a.icon}</span>
                    <span className={styles.actName}>{a.title}</span>
                    <span className={styles.actStat}>{s.totalPlays + s.totalAnswers} sessions</span>
                    {pct !== null && (
                      <span className={styles.actPct} style={{ color: getAccuracyColor(pct) }}>
                        {pct}% ✓
                      </span>
                    )}
                    {s.starred && <span className={styles.actStar}>⭐</span>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* PIN change */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>🔐 Change PIN</h2>
          <PinChanger />
        </div>

        {/* Danger zone */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>⚠️ Data</h2>
          <button
            className={styles.dangerBtn}
            onClick={() => { if (window.confirm('Clear all progress data?')) clearProgress(); }}
          >
            🗑️ Clear All Progress
          </button>
        </div>
      </main>
    </div>
  );
}

function PinChanger() {
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [msg, setMsg] = useState('');

  const handleChange = () => {
    const saved = localStorage.getItem('mishka_parent_pin') || '1234';
    if (current !== saved) { setMsg('Current PIN is wrong.'); return; }
    if (next.length !== 4) { setMsg('New PIN must be 4 digits.'); return; }
    localStorage.setItem('mishka_parent_pin', next);
    setMsg('PIN updated!');
    setCurrent(''); setNext('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
        <input
          type="password" inputMode="numeric" maxLength={4} placeholder="Current PIN"
          value={current} onChange={e => setCurrent(e.target.value.replace(/\D/, ''))}
          style={{ width: 130, padding: '10px 14px', borderRadius: 12, border: '3px solid var(--color-border)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem' }}
        />
        <input
          type="password" inputMode="numeric" maxLength={4} placeholder="New PIN (4 digits)"
          value={next} onChange={e => setNext(e.target.value.replace(/\D/, ''))}
          style={{ width: 160, padding: '10px 14px', borderRadius: 12, border: '3px solid var(--color-border)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem' }}
        />
        <button
          onClick={handleChange}
          style={{ padding: '10px 20px', background: 'var(--color-sky)', border: 'none', borderRadius: 12, color: 'white', fontWeight: 800, cursor: 'pointer', fontSize: '0.95rem' }}
        >
          Save
        </button>
      </div>
      {msg && <p style={{ fontWeight: 700, color: msg.includes('updated') ? 'var(--color-mint)' : 'var(--color-coral)', fontSize: '0.9rem' }}>{msg}</p>}
    </div>
  );
}
