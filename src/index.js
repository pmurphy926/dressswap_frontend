import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth0Provider';
import './App.css'
import './index.css';


ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root'),
);