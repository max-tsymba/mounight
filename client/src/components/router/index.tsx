import IRoute, { privateRoutes, publicRoutes, RoutesNames } from '../../routes';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RootState } from '@/stores';
import { useSelector } from 'react-redux';

const AppRouter = () => {
  const isAuth = useSelector((state: RootState) => state.user?.isAuth);

  return isAuth ? (
    <Switch>
      {privateRoutes.map((route: IRoute) => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to={RoutesNames.Page404} />
    </Switch>
  ) : (
    <Switch>
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
