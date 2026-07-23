import type { Shoe } from '@/types/quiz';
import styles from './ResultsScreen.module.scss';
import ProductCard from './ResultCard';

interface ResultsScreenProps {
  shoes: Shoe[];
  onRestart: () => void;
}

const ResultsScreen = ({ shoes, onRestart }: ResultsScreenProps) => {
  const [result, ...similarShoes] = shoes;
  const similarShoesToShow = similarShoes.slice(0, 2);

  const recommendedNames = [result, ...similarShoes]
    .slice(0, 2)
    .map(({ name }) => name)
    .join(' and ');

  if (!result) {
    return null;
  }

  return (
    <section className={styles.resultsScreen}>
      <div className={styles.header}>
        <h1>Congratulations!</h1>

        <p className={styles.intro}>
          Based on your selection we&apos;ve decided on the {recommendedNames}!
          Enjoy the 30 day trial!
        </p>
      </div>
      
      <ProductCard shoe={result} />

      {similarShoesToShow.length > 0 && (
        <>
          <h3 className={styles.similarShoes_title}>Similar profiles</h3>

          {similarShoesToShow.map((shoe) => (
            <ProductCard
              key={shoe.id}
              shoe={shoe}
            />
          ))}
        </>
      )}

      <button type="button" className={styles.restart} onClick={onRestart}>
        Restart Quiz
      </button>
    </section>
  );
};

export default ResultsScreen;
