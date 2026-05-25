import styles from './Hero.module.css';

export function Hero() {

  const scrollToActivities = () => {
    document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} aria-label="Welcome to Mishka's Learning World">
      {/* Decorative clouds / floating elements */}
      <div className={styles.floatingEmojis} aria-hidden="true">
        <span className={styles.floater} style={{ '--delay': '0s', '--x': '5%', '--y': '15%' } as React.CSSProperties}>⭐</span>
        <span className={styles.floater} style={{ '--delay': '0.5s', '--x': '88%', '--y': '20%' } as React.CSSProperties}>🌈</span>
        <span className={styles.floater} style={{ '--delay': '1s', '--x': '10%', '--y': '70%' } as React.CSSProperties}>🎈</span>
        <span className={styles.floater} style={{ '--delay': '1.5s', '--x': '82%', '--y': '65%' } as React.CSSProperties}>🎶</span>
        <span className={styles.floater} style={{ '--delay': '0.3s', '--x': '50%', '--y': '8%' } as React.CSSProperties}>🦋</span>
        <span className={styles.floater} style={{ '--delay': '2s', '--x': '92%', '--y': '45%' } as React.CSSProperties}>🌸</span>
        <span className={styles.floater} style={{ '--delay': '0.8s', '--x': '2%', '--y': '45%' } as React.CSSProperties}>🎨</span>
      </div>

      <div className={styles.heroContent}>
        <div className={styles.mascot} aria-hidden="true">🦊</div>

        <h1 className={styles.title}>
          <span className={styles.titleLine1}>Mishka's</span>
          <span className={styles.titleLine2}>Learning World</span>
        </h1>

        <p className={styles.subtitle}>
          Play, listen, tap, count, match, draw, and learn!
        </p>

        <div className={styles.heroCtas}>
          <button
            className={styles.startBtn}
            onClick={scrollToActivities}
            aria-label="Start playing - scroll to activities"
          >
            <span>🚀</span>
            <span>Start Playing!</span>
          </button>
        </div>

        <div className={styles.activityPills} aria-label="Activity types">
          {['🔤 Alphabet', '🔢 Numbers', '🍎 Fruits', '🦁 Animals', '🎵 Music', '🎨 Draw'].map((pill) => (
            <span key={pill} className={styles.pill}>{pill}</span>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F0F9FF" />
        </svg>
      </div>
    </section>
  );
}
