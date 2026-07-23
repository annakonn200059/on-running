import styles from './StartScreen.module.scss';
import runner from '@/assets/Background Image Start Screen.png';

interface StartScreenProps {
  loading: boolean;
  error: string | null;
  onStart: () => void;
}

const StartScreen = ({ loading, error, onStart }: StartScreenProps) => (
  <section className={styles.startScreen}>
    <div className={styles.content}>
      <h1>
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
    </div>

    <img className={styles.runner} src={runner} alt="Runner wearing On shoes" />
  </section>
);

export default StartScreen;
