import React, { Dispatch, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/header';
import AppRouter from './components/router';
import AuthService from './services/AuthService';
import { RootState } from './stores';

const App = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(AuthService.checkAuth());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header dispatch={dispatch} isAuth={isAuth} />
      <AppRouter isAuth={isAuth} />
    </BrowserRouter>
  );
};

export default App;
