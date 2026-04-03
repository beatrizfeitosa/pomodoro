import styles from './styles.module.css';

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <b>Cycles</b>
      <div className={styles.cycleDots}>
        <div className={`${styles.cycleDot} ${styles.workTime}`}></div>
        <div className={`${styles.cycleDot} ${styles.shortBreakTime}`}></div>
        <div className={`${styles.cycleDot} ${styles.workTime}`}></div>
        <div className={`${styles.cycleDot} ${styles.shortBreakTime}`}></div>
        <div className={`${styles.cycleDot} ${styles.workTime}`}></div>
        <div className={`${styles.cycleDot} ${styles.shortBreakTime}`}></div>
        <div className={`${styles.cycleDot} ${styles.workTime}`}></div>
        <div className={`${styles.cycleDot} ${styles.longBreakTime}`}></div>
      </div>
    </div>
  );
}
