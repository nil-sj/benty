import { ActivityCard } from './ActivityCard';
import type { ActivityConfig } from '../../data/activities';
import styles from './CategorySection.module.css';

interface CategorySectionProps {
  name: string;
  icon: string;
  color: string;
  activities: ActivityConfig[];
}

export function CategorySection({ name, icon, color, activities }: CategorySectionProps) {
  if (activities.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby={`cat-${name}`}>
      <div className={styles.header} style={{ '--cat-color': color } as React.CSSProperties}>
        <span className={styles.catIcon} aria-hidden="true">{icon}</span>
        <h2 id={`cat-${name}`} className={styles.catTitle}>{name}</h2>
        <span className={styles.count}>{activities.length}</span>
      </div>

      <div className={styles.grid}>
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} accentColor={color} />
        ))}
      </div>
    </section>
  );
}
