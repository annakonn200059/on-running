import { useCallback, useState } from 'react';
import type { Quiz } from '@/types/quiz';
import { fetchQuiz } from '../../api/quiz/quiz';

interface FetchQuizState {
  data: Quiz | null;
  loading: boolean;
  error: string | null;
}

const initialState: FetchQuizState = {
  data: null,
  loading: false,
  error: null,
};

export function useFetchQuiz() {
  const [state, setState] = useState<FetchQuizState>(initialState);

  const fetchQuizData = useCallback(async () => {
    setState({ data: null, loading: true, error: null });

    try {
      const data = await fetchQuiz();
      setState({ data, loading: false, error: null });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: error instanceof Error ? error.message : 'Something went wrong',
      });
    }
  }, []);

  return { ...state, fetchQuizData };
}
