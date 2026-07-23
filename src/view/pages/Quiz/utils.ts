import type { Quiz, QuizQuestion, Shoe, ShoeId } from '@/types/quiz';

export function getCurrentQuestion(
  quiz: Quiz | null,
  currentQuestionId: number | null,
): QuizQuestion | null {
  if (!quiz || currentQuestionId === null) {
    return null;
  }

  return (
    quiz.questions.find((question) => question.id === currentQuestionId) ?? null
  );
}

export function getRankedShoes(
  quiz: Quiz | null,
  ratings: Record<ShoeId, number>,
): Shoe[] {
  if (!quiz) {
    return [];
  }

  return quiz.shoes
    .map((shoe) => ({
      ...shoe,
      rating: ratings[shoe.id] ?? 0
    }))
    .sort((a, b) => b.rating - a.rating);
}