import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from "@asgardeo/auth-react";
import { TokenExchangePlugin } from "@asgardeo/token-exchange-plugin";
import authconfig from './config.json';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider 
          config={{...authconfig}}
          plugin={ TokenExchangePlugin.getInstance() }
      >
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
