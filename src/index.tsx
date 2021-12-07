import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App/App'
import { store } from './store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { initAxios } from './services/InitAxios';

initAxios();

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter><App /></BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

