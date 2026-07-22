import URLS from './urls';
import { Quiz } from '../view/pages';

export const routesConfig = [
  {
    path: URLS.QUIZ,
    element: <Quiz />,
    key: 'Quiz',
  },
];
