import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/header';
import AppRouter from './components/router';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
