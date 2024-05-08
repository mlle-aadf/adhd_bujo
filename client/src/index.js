import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DayContextProvider from './contexts/DayContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DayContextProvider>
      <App />
    </DayContextProvider>
  </React.StrictMode>
);



reportWebVitals();
