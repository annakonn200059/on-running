import { type QuizAnswer, type Quiz, type ShoeId, type QuizFlowState, QuizPhase, type Shoe } from '@/types/quiz';

export const QuizActionType = {
  QUIZ_LOADED: 'QUIZ_LOADED',
  ANSWER_SELECTED: 'ANSWER_SELECTED',
  RESULTS_READY: 'RESULTS_READY',
} as const;

export type QuizFlowAction =
  | { type: typeof QuizActionType.QUIZ_LOADED; payload: Quiz }
  | { type: typeof QuizActionType.ANSWER_SELECTED; payload: QuizAnswer }
  | { type: typeof QuizActionType.RESULTS_READY };

export const initialQuizFlowState: QuizFlowState = {
  phase: QuizPhase.START,
  quiz: null,
  currentQuestionId: null,
  ratings: {} as Record<ShoeId, number>,
};

function createInitialRatings(shoes: Shoe[]): Record<ShoeId, number> {
  return Object.fromEntries(shoes.map((shoe) => [shoe.id, 0])) as Record<ShoeId, number>;
}

function updateRatings(
  currentRatings: Record<ShoeId, number>,
  ratingIncrease: Record<ShoeId, number>,
): Record<ShoeId, number> {
  const ratings = { ...currentRatings };

  for (const [shoeId, increase] of Object.entries(ratingIncrease)) {
    const id = shoeId as ShoeId;

    ratings[id] = (ratings[id] ?? 0) + increase;
  }

  return ratings;
}


export function quizReducer(state: QuizFlowState, action: QuizFlowAction): QuizFlowState {
  switch (action.type) {
    case QuizActionType.QUIZ_LOADED: {
      const quiz = action.payload;

      return {
        ...state,
        phase: QuizPhase.QUESTION,
        quiz,
        currentQuestionId: quiz.questions[0]?.id ?? null,
        ratings: createInitialRatings(quiz.shoes),
      };
    }

    case QuizActionType.ANSWER_SELECTED: {
      const { ratingIncrease, nextQuestion } = action.payload;

      const ratings = updateRatings(
        state.ratings,
        ratingIncrease,
      );

      const isLastQuestion = nextQuestion === '';

      return {
        ...state,
        ratings,
        currentQuestionId: isLastQuestion ? null : nextQuestion,
        phase: isLastQuestion ? QuizPhase.CALCULATING_RESULTS : QuizPhase.QUESTION,
      };
    }

    case QuizActionType.RESULTS_READY:
      return { ...state, phase: QuizPhase.RESULTS };

    default:
      return state;
  }
}
