import React, { Suspense } from 'react';

const Quiz = React.lazy(() => import(/* @vite-ignore */ './Quiz'));

const QuizPage: React.FC = () => (
  <Suspense fallback={null}>
    <Quiz />
  </Suspense>
);

export default QuizPage;
