import 'modern-normalize/modern-normalize.css';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './styles/base.scss';

// console.log(store);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>

  <App />

  // </React.StrictMode>
);
