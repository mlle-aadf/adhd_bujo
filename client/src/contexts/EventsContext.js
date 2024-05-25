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
      }]



      const [displayMonth, setDisplayMonth] = useState()
      // const updateMonth = (month) => setDisplayMonth(month)

    // const monthsKeys =  ["2024-01","2024-02","2024-03","2024-04","2024-05", "2024-06","2024-07","2024-08","2024-09", "2024-10", "2024-11", "2024-12"]

    const monthsKeys =  [
      {str:"JANUARY", date:"2024-01", events:janEvents},
      {str:"FEBRUARY", date:"2024-02", events:febEvents}
      // {str:"MARCH", date:"2024-03"},
      // {str:"APRIL", date:"2024-04"},
      // {str:"MAY", date:"2024-05"},
      // {str:"JUNE", date:"2024-06"},
      // {str:"JULY", date:"2024-07"},
      // {str:"AUGUST", date:"2024-08"},
      // {str:"SEPTEMBER", date:"2024-09"},
      // {str:"OCTOBER", date:"2024-10"},
      // {str:"NOVEMBER", date:"2024-11"},
      // {str:"DECEMBER", date:"2024-12"},
    ]
    
    // console.log("keys: ", monthsKeys, events )

    return (
        <EventsContext.Provider value={{monthsKeys, events, displayMonth, setDisplayMonth}}>
          {children}
        </EventsContext.Provider>
      );
    };
    
    export default EventsContextProvider
