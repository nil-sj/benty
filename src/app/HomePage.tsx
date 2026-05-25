import { Hero } from '../components/home/Hero';
import { CategorySection } from '../components/home/CategorySection';
import { categories, getActivitiesByCategory } from '../data/activities';
import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <div className={styles.page}>
      <Hero />

      <main id="activities" className={styles.activities}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>
            <span aria-hidden="true">🎯</span>
            Choose an Activity!
          </h2>

          <div className={styles.categories}>
            {categories.map((cat) => (
              <CategorySection
                key={cat.name}
                name={cat.name}
                icon={cat.icon}
                color={cat.color}
                activities={getActivitiesByCategory(cat.name)}
              />
            ))}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Made with ❤️ for Mishka · Keep learning and growing! 🌱</p>
      </footer>
    </div>
  );
}
