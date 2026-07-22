import { Route, Routes } from 'react-router-dom';

import { routesConfig } from './routesConfig';

const AppRouter = () => {
  const routeComponents = routesConfig.map((route) => (
    <Route
      path={route.path}
      element={route.element}
      key={route.key}
    />
  ));

  return <Routes>{routeComponents}</Routes>;
};

export default AppRouter;
