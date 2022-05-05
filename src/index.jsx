import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Login from './views/Login/login';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
