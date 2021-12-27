import React, { Dispatch, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/header';
import AppRouter from './components/router';
import AuthService from './services/AuthService';
import { RootState } from './stores';

const App = () => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(AuthService.checkAuth());
    }
  }, [dispatch]);

  const isLoading = useSelector((state: RootState) => state.loader.isLoading);
  if (isLoading) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Header dispatch={dispatch} />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
