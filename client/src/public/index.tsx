import React from 'react';
import { render } from 'react-dom';
import App from '../App';
import '../global/index.scss';
import { store } from '../stores/index';
import { Provider } from 'react-redux';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
