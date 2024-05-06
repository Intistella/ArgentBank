import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './appRouter/AppRouter'
import { Provider } from 'react-redux'
import store from './redux/Store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>  
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

