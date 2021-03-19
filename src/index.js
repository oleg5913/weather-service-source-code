import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './redux/store';
import App from './App';

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
  <Provider store={store}>
      <App />
  </Provider>
</HashRouter>
    ,
  document.getElementById('root')
);