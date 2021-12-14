import Home from '../pages/Home';
import React from 'react';
import Page404 from '../pages/404';

export default interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RoutesNames {
  HOME = '/',
  Page404 = '/404',
}

export const publicRoutes: IRoute[] = [
  { path: RoutesNames.HOME, component: Home, exact: true },
  { path: RoutesNames.Page404, component: Page404, exact: true },
];

export const privateRoutes: IRoute[] = [
  { path: RoutesNames.HOME, component: Home, exact: true },
  { path: RoutesNames.Page404, component: Page404, exact: true },
];
