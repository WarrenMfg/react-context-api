import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider_User } from './Context_User';
import App from './App';

ReactDOM.render(
  <ContextProvider_User>
    <App />
  </ContextProvider_User>,
  document.getElementById('app')
);
