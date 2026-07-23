import type { QuizAnswer, QuizQuestion } from '@/types/quiz';
import styles from './QuestionScreen.module.scss';

interface QuestionScreenProps {
  question: QuizQuestion;
  onAnswer: (answer: QuizAnswer) => void;
}

const QuestionScreen = ({ question, onAnswer }: QuestionScreenProps) => (
  <section className={styles.questionScreen}>
    <h2 className={styles.description}> TRY ON QUIZ <br /> 30 DAYS RISK FREE</h2>

    <div className={styles.content}>
      <h1>{question.copy}</h1>

      <div className={styles.answers}>
        {question.answers.map((answer) => (
          <button
            key={answer.id ?? answer.copy}
            type="button"
            className={styles.answer}
            onClick={() => onAnswer(answer)}
          >
            {answer.copy}
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default QuestionScreen;
