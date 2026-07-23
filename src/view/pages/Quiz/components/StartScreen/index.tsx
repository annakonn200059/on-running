import styles from './StartScreen.module.scss';

interface StartScreenProps {
  loading: boolean;
  error: string | null;
  onStart: () => void;
}

const StartScreen = ({ loading, error, onStart }: StartScreenProps) => (
  <section className={styles.startScreen}>
    <h1 className={styles.title}>
      Take the quiz
      <br />
      and try your first pair!
    </h1>

    <button type="button" className={styles.button} onClick={onStart} disabled={loading}>
      {loading ? 'Loading…' : 'Try On Trial'}
    </button>

    {error && <p className={styles.error}>{error}</p>}

    <p className={styles.note}>
      30 Days risk free
    </p>
  </section>
);

export default StartScreen;
