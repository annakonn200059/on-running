import { useEffect, useReducer } from 'react';
import { useFetchQuiz } from '@/hooks/quiz/useFetchQuiz';
import { QuizPhase, type QuizAnswer } from '@/types/quiz';
import { RESULTS_DELAY_MS } from '@/utils/constants';
import CalculatingScreen from './components/CalculatingScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultsScreen from './components/ResultsScreen';
import StartScreen from './components/StartScreen';
import { initialQuizFlowState, QuizActionType, quizReducer } from '@/data-reducers/quiz/reducer';
import { getCurrentQuestion, getRankedShoes } from './utils';

const Quiz = () => {
  const [state, dispatch] = useReducer(quizReducer, initialQuizFlowState);

  const {
    data,
    loading,
    error,
    fetchQuizData,
  } = useFetchQuiz();

  useEffect(() => {
    if (data) {
      dispatch({
        type: QuizActionType.QUIZ_LOADED,
        payload: data,
      });
    }
  }, [data]);

  useEffect(() => {
    if (state.phase !== QuizPhase.CALCULATING_RESULTS) {
      return;
    }

    const timer = setTimeout(() => {
      dispatch({
        type: QuizActionType.RESULTS_READY,
      });
    }, RESULTS_DELAY_MS);

    return () => clearTimeout(timer);
  }, [state.phase]);

  const handleAnswer = (answer: QuizAnswer) => {
    dispatch({
      type: QuizActionType.ANSWER_SELECTED,
      payload: answer,
    });
  };

  const handleRestart = () => {
    dispatch({ type: QuizActionType.RESET });
  };

  switch (state.phase) {
    case QuizPhase.QUESTION: {
      const question = getCurrentQuestion(state.quiz, state.currentQuestionId);

      if (!question) {
        return null;
      }

      return (
        <QuestionScreen
          question={question}
          onAnswer={handleAnswer}
        />
      );
    }

    case QuizPhase.CALCULATING_RESULTS:
      return <CalculatingScreen />;

    case QuizPhase.RESULTS: {
      const rankedShoes = getRankedShoes(state.quiz, state.ratings);

      return <ResultsScreen shoes={rankedShoes} onRestart={handleRestart} />;
    }

    case QuizPhase.START:
    default:
      return (
        <StartScreen
          loading={loading}
          error={error}
          onStart={fetchQuizData}
        />
      );
  }
};

export default Quiz;