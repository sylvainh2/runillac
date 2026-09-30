import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Récupération de l'URL demandée après une redirection GitHub Pages
const redirect = sessionStorage.getItem('redirect');

if (redirect) {
    sessionStorage.removeItem('redirect');
    window.history.replaceState(null, '', redirect);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
);

reportWebVitals();