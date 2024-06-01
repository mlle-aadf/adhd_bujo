import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import DayContextProvider from './contexts/DayContext';
import EventsContextProvider from './contexts/EventsContext';
import TaskContexttProvider from './contexts/TasksContext';
import NotesContextProvider from './contexts/NotesContext'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DayContextProvider>
      <EventsContextProvider>
        <TaskContexttProvider>
          <NotesContextProvider>
            <App />
          </NotesContextProvider>
        </TaskContexttProvider>
      </EventsContextProvider>
    </DayContextProvider>
  </React.StrictMode>
);



reportWebVitals();
