// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles for your app
import App from './App'; // The root component of your React application
import reportWebVitals from './reportWebVitals';

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Initial render: Render the App component to the DOM.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
