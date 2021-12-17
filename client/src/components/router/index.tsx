import IRoute, { privateRoutes, publicRoutes, RoutesNames } from '../../routes';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const AppRouter = () => {
  const isAuth = false;
  return (
    <Switch>
      {isAuth &&
        privateRoutes.map((route: IRoute) => (
          <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={route.path}
          />
        ))}
      {publicRoutes.map((route: IRoute) => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
          key={route.path}
        />
      ))}

      <Redirect to={RoutesNames.Page404} />
    </Switch>
  );
};

export default AppRouter;
