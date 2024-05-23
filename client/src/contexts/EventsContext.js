import { createContext, useState } from "react";

export const EventsContext = createContext();

const EventsContextProvider = ({ children }) => {

    const events = [{
        title: 'Event1',
        start: '2024-05-22 09:30:00',
        end: '2024-05-22 10:30:00'
      },
      {
        title: 'Event2',
        start: '2024-05-22 12:30:00',
        end: '2024-05-22 13:30',
      }]

      const [displayMonth, setDisplayMonth] = useState()
      const updateMonth = (month) => setDisplayMonth(month)

    return (
        <EventsContext.Provider value={{events, displayMonth, updateMonth}}>
          {children}
        </EventsContext.Provider>
      );
    };
    
    export default EventsContextProvider
