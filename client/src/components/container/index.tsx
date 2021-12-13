import React from 'react';
import IContainer from './types';

const Container = ({ children }: IContainer) => {
  return <div className="container">{children}</div>;
};

export default Container;
