import { Bug } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href='#'>
        <div>
          <Bug />
          <span>Bee</span>
        </div>
        <span>Pomodoro</span>
      </a>
    </div>
  );
}
