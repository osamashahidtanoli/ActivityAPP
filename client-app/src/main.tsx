import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from 'core/store/store.ts';
import './index.css';
import './global-style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
);
