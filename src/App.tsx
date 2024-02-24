import { Route, Routes } from 'react-router-dom';

import { privateRoutes, publicRoutes } from './routes';

const App = () => {
  return (
    <Routes>
      {privateRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default App;
