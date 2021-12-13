import Home from '../pages/Home';
import React from 'react';

export default interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RoutesNames {
  HOME = '/',
}

export const publicRoutes: IRoute[] = [
  { path: RoutesNames.HOME, component: Home, exact: true },
];

export const privateRoutes: IRoute[] = [
  { path: RoutesNames.HOME, component: Home, exact: true },
];
