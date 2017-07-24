import React from 'react';
import {render} from 'react-dom';
import App from './containers/app';
import '../styles-global/style.css';
import store from './store';
import {Provider} from 'react-redux';

const mountNode = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode);
