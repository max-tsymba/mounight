import Home from '../pages/Home';
import React from 'react';
import Page404 from '../pages/404';
import Users from '../pages/Users';
import UserPage from '../pages/UserPage';

export default interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RoutesNames {
  HOME = '/',
  Page404 = '/404',
  USERS = '/users',
  USER_PAGE = '/users/:userName',
}

export const publicRoutes: IRoute[] = [
  { path: RoutesNames.HOME, component: Home, exact: true },
  { path: RoutesNames.Page404, component: Page404, exact: true },
];

export const privateRoutes: IRoute[] = [
  { path: RoutesNames.HOME, component: Home, exact: true },
  { path: RoutesNames.Page404, component: Page404, exact: true },
  { path: RoutesNames.USERS, component: Users, exact: true },
  { path: RoutesNames.USER_PAGE, component: UserPage, exact: true },
];
