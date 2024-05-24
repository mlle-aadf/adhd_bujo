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

    const monthsKeys =  ["2024-01","2024-02","2024-03","2024-04","2024-05", "2024-06","2024-07","2024-08","2024-09", "2024-10", "2024-11", "2024-12"]
    

    return (
        <EventsContext.Provider value={{monthsKeys, events, displayMonth, setDisplayMonth}}>
          {children}
        </EventsContext.Provider>
      );
    };
    
    export default EventsContextProvider
