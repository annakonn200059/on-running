import type { Quiz } from '../../types/quiz'
import { MOCK_DELAY_MS } from '../../utils/constants'

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function fetchQuiz(): Promise<Quiz> {
  const [response] = await Promise.all([fetch(`${import.meta.env.BASE_URL}data.json`), delay(MOCK_DELAY_MS)])

  if (!response.ok) {
    throw new Error(`Failed to load quiz: ${response.status}`)
  }

  return response.json()
}
