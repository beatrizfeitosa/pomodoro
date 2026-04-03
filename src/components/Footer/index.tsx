import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda como funciona o pomodoro</a>
      <a href=''>
        Bee Pomodo &copy; {new Date().getFullYear()} - Feito por Bia ♡
      </a>
    </footer>
  );
}
