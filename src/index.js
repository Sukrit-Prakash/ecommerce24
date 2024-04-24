import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css';
import store from './pages/state/store';
import { Provider } from 'react-redux';
// import { CounterProvider } from './pages/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <CounterProvider>
  //   <App/>
  // </CounterProvider>
  <Provider store={store}>
    <App/>
  </Provider>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);


