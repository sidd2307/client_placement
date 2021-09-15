import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { CompanyContextProvider } from './context/companiesContext/CompanyContext';

ReactDOM.render(
  <React.StrictMode>
    <CompanyContextProvider>
      <App />
    </CompanyContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
