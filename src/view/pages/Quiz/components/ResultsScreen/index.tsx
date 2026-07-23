import type { Shoe } from '@/types/quiz';

interface ResultsScreenProps {
  shoes: Shoe[];
}

const ResultsScreen = ({ shoes }: ResultsScreenProps) => (
  <div>
    Results: {shoes.map((shoe) => `${shoe.name} (${shoe.rating})`).join(', ')}
  </div>
);

export default ResultsScreen;
