import { useNavigate } from 'react-router-dom';
import styles from './HomeButton.module.css';

export function HomeButton() {
  const navigate = useNavigate();

  return (
    <button
      className={styles.homeBtn}
      onClick={() => navigate('/')}
      aria-label="Go back to home menu"
      title="Home (Escape)"
    >
      <span aria-hidden="true">🏠</span>
      <span>Home</span>
    </button>
  );
}
