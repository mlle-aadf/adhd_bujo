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

    const janEvents = [{
        title: 'Event1',
        start: '2024-05-22 09:30:00',
        end: '2024-05-22 10:30:00'
      },
      {
        title: 'Event2',
        start: '2024-05-22 12:30:00',
        end: '2024-05-22 13:30',
      }]


    const febEvents = [{
        title: 'Event3',
        start: '2024-05-22 09:30:00',
        end: '2024-05-22 10:30:00'
      },
      {
        title: 'Event4',
        start: '2024-05-22 12:30:00',
        end: '2024-05-22 13:30',
      },
      {
        title: 'Event4',
        start: '2024-05-22 12:30:00',
        end: '2024-05-22 13:30',
      },
      {
        title: 'Event4',
        start: '2024-05-22 12:30:00',
        end: '2024-05-22 13:30',
      }]



      const [displayMonth, setDisplayMonth] = useState()
      // const updateMonth = (month) => setDisplayMonth(month)

    // const monthsKeys =  ["2024-01","2024-02","2024-03","2024-04","2024-05", "2024-06","2024-07","2024-08","2024-09", "2024-10", "2024-11", "2024-12"]

    const monthsKeys =  [
      {str:"JANUARY", date:"2024-01", events:janEvents},
      {str:"FEBRUARY", date:"2024-02", events:febEvents},
      {str:"MARCH", date:"2024-03", events:febEvents},
      {str:"APRIL", date:"2024-04", events:febEvents},
      {str:"MAY", date:"2024-05", events:events},
      {str:"JUNE", date:"2024-06", events:febEvents},
      {str:"JULY", date:"2024-07", events:febEvents},
      {str:"AUGUST", date:"2024-08", events:febEvents},
      {str:"SEPTEMBER", date:"2024-09", events:febEvents},
      {str:"OCTOBER", date:"2024-10", events:febEvents},
      {str:"NOVEMBER", date:"2024-11", events:febEvents},
      {str:"DECEMBER", date:"2024-12", events:febEvents},
    ]
    
    // console.log("keys: ", monthsKeys, events )

    return (
        <EventsContext.Provider value={{monthsKeys, events, displayMonth, setDisplayMonth}}>
          {children}
        </EventsContext.Provider>
      );
    };
    
    export default EventsContextProvider
