import Home from '../pages/Home';
import React from 'react';
import Page404 from '../pages/404';
import Users from '../pages/Users';
import UserPage from '../pages/UserPage';
import UserSettings from '../pages/UserSettings';
import Activation from '../pages/Activation';

export default interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RoutesNames {
  HOME = '/',
  Page404 = '/404',
  USERS = '/users',
  USER_PAGE = '/users/:userId',
  USER_SETTINGS = '/account/settings',
  ACTIVATE = '/activation',
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
  { path: RoutesNames.USER_SETTINGS, component: UserSettings, exact: true },
  { path: RoutesNames.ACTIVATE, component: Activation, exact: true },
];
