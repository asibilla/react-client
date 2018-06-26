import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import initStore from './store';
import './app.css';

const store = initStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App dispatch={store.dispatch} />
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
