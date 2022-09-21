import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import 'modern-normalize/modern-normalize.css';
import './styles/base.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
