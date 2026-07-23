export type ShoeId =
  | 'cloud'
  | 'cloudx'
  | 'cloudflow'
  | 'cloudventure'
  | 'cloudsurfer'
  | 'cloudventure_waterproof'
  | 'cloudventure_peak'
  | 'cloudflyer'

export interface Shoe {
  id: ShoeId
  name: string
  rating: number
}

export interface QuizAnswer {
  id?: number
  copy: string
  nextQuestion: number | ''
  ratingIncrease: Record<ShoeId, number>
}

export interface QuizQuestion {
  id: number
  copy: string
  answers: QuizAnswer[]
}

export interface Quiz {
  shoes: Shoe[]
  questions: QuizQuestion[]
}

export const QuizPhase = {
  START: 'start',
  QUESTION: 'question',
  CALCULATING_RESULTS: 'calculatingResults',
  RESULTS: 'results',
} as const;

export type QuizPhase = (typeof QuizPhase)[keyof typeof QuizPhase];

export interface QuizFlowState {
  phase: QuizPhase;
  quiz: Quiz | null;
  currentQuestionId: number | null;
  ratings: Record<ShoeId, number>;
}

