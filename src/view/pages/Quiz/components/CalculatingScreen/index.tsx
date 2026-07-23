import styles from './CalculatingScreen.module.scss';
import loader from '@/assets/loader.gif';

const CalculatingScreen = () => (
  <section className={styles.calculatingScreen}>
    <img src={loader} alt="Loading" />

    <p className={styles.title}>We&apos;re running to get your results.</p>
  </section>
);

export default CalculatingScreen;
