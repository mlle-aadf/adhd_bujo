import { createContext, useEffect, useState } from "react";

export const EventsContext = createContext();

const EventsContextProvider = ({ children }) => {

  const monthsKeys =  [
    {str:"JANUARY", date:"2024-01", events:[""]},
    {str:"FEBRUARY", date:"2024-02", events:[""]},
    {str:"MARCH", date:"2024-03", events:[""]},
    {str:"APRIL", date:"2024-04", events:[""]},
    {str:"MAY", date:"2024-05", events:[""]},
    {str:"JUNE", date:"2024-06", events:[""]},
    {str:"JULY", date:"2024-07", events:[""]},
    {str:"AUGUST", date:"2024-08", events:[""]},
    {str:"SEPTEMBER", date:"2024-09", events:[""]},
    {str:"OCTOBER", date:"2024-10", events:[""]},
    {str:"NOVEMBER", date:"2024-11", events:[""]},
    {str:"DECEMBER", date:"2024-12", events:[""]},
  ]

    const [events, setEvents] = useState([])

    const [refresh, setRefresh] = useState(false)
    
    const getEvents = async () => {
      try{
        const res = await fetch("/schedule")
        const {events} = await res.json()
        
        // triage events ->
        // filter() event month
        // const monthEvents = monthsKeys.map((month, i)=>{
        //   return []
        // })

      //   const allEvents = events.filter((event) => 
      //       event.completed !== true && event.deleted !== true
      //     )
    
      //   // filter() day = today
      //   const todayEvents = tasks.filter((event) => 
      //       task.completed === true
      // )
    
    
        setEvents(events)
        console.log("getEvents: ", events)
     
    
      } catch (err) {
        console.log(err)
      }
    } 

    useEffect(()=> {
      getEvents()
    }, [refresh])

    const addEventHandler = async (newEvent) => {

      console.log("addEventHandler: ", newEvent)
    }
    // const events = [{
    //     title: 'Event1',
    //     start: '2024-05-22 09:30:00',
    //     end: '2024-05-22 10:30:00'
    //   },
    //   {
    //     title: 'Event2',
    //     start: '2024-05-22 12:30:00',
    //     end: '2024-05-22 13:30',
    //   }]

    // const janEvents = [{
    //     title: 'Event1',
    //     start: '2024-05-22 09:30:00',
    //     end: '2024-05-22 10:30:00'
    //   },
    //   {
    //     title: 'Event2',
    //     start: '2024-05-22 12:30:00',
    //     end: '2024-05-22 13:30',
    //   }]


    // const febEvents = [{
    //     title: 'Event3',
    //     start: '2024-05-22 09:30:00',
    //     end: '2024-05-22 10:30:00'
    //   },
    //   {
    //     title: 'Event4',
    //     start: '2024-05-22 12:30:00',
    //     end: '2024-05-22 13:30',
    //   },
    //   {
    //     title: 'Event4',
    //     start: '2024-05-22 12:30:00',
    //     end: '2024-05-22 13:30',
    //   },
    //   {
    //     title: 'Event4',
    //     start: '2024-05-22 12:30:00',
    //     end: '2024-05-22 13:30',
    //   }]

    // const monthsKeys =  ["2024-01","2024-02","2024-03","2024-04","2024-05", "2024-06","2024-07","2024-08","2024-09", "2024-10", "2024-11", "2024-12"]
    
    // console.log("keys: ", monthsKeys, events )

    return (
        <EventsContext.Provider value={{monthsKeys, events, addEventHandler}}>
        {/* <EventsContext.Provider value={{monthsKeys, events}}> */}
          {children}
        </EventsContext.Provider>
      );
    };
    
    export default EventsContextProvider
