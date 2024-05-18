import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain = "dev-5t7xomjwvloo3c3h.us.auth0.com"
    clientId = "HZY4HIQAICADGUuc4G5ShZqP5OvD1964"
    redirectUri = {window.location.origin} >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

reportWebVitals();
