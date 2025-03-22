import './index.css'
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MovieProvider } from './context/MovieContext';
import { I18nextProvider } from 'react-i18next'; // Importamos el provider de i18next
import i18n from './i18n'; // Importamos la configuración de i18next

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
    <MovieProvider>
      <App />
    </MovieProvider>
    </I18nextProvider>
  </React.StrictMode>
);