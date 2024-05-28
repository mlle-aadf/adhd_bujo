import { createContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

export const EventsContext = createContext();

const EventsContextProvider = ({ children }) => {
  const monthsKeys = [
    { str: "JANUARY", date: "2024-01", events: [""] },
    { str: "FEBRUARY", date: "2024-02", events: [""] },
    { str: "MARCH", date: "2024-03", events: [""] },
    { str: "APRIL", date: "2024-04", events: [""] },
    { str: "MAY", date: "2024-05", events: [""] },
    { str: "JUNE", date: "2024-06", events: [""] },
    { str: "JULY", date: "2024-07", events: [""] },
    { str: "AUGUST", date: "2024-08", events: [""] },
    { str: "SEPTEMBER", date: "2024-09", events: [""] },
    { str: "OCTOBER", date: "2024-10", events: [""] },
    { str: "NOVEMBER", date: "2024-11", events: [""] },
    { str: "DECEMBER", date: "2024-12", events: [""] },
  ];


  const [events, setEvents] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // const {eventID} = useParams()

  // const getEvent = async () => {
    
  //   try {
  //     const res = await fetch(`/events/${eventID}`);
  //     const { eventData } = await res.json();

  //     // setEvents(eventData)
  //     console.log("getEvent: ", eventData);
  //     setSelectedEvent(eventData)
  //     // return eventData;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const findEvent = (eventID) => getEvent(eventID);

  const getEvents = async () => {
    try {
      const res = await fetch("/events");
      const { events } = await res.json();
      setEvents(events);
      console.log("getEvents: ", events);
    } catch (err) {
      console.log(err);
    }
  };
  // const getEvents = async () => {
  //   try {
  //     const res = await fetch("/events");
  //     const { events } = await res.json();
  //     setEvents(events);
  //     console.log("getEvents: ", events);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    // getEvent()
    getEvents();
  }, [refresh]);

  // add new event to db
  const addNewEvent = async (newEvent) => {
    console.log("addNewEvent: ", newEvent);

    const response = await fetch("/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    });

    if (response.ok) {
      setRefresh(!refresh);
      console.log(`event "${newEvent.title}" saved`);
    } else {
      console.log("addEvent failed")
    }


  };

  // update existing event
  const updateEvent = async (eventID, update) => {
    const updateInfo = {
      eventID: eventID,
      updatedEvent: update,
    };

    console.log(updateInfo);

    // const response = await fetch("/todo", {
    //   method: "PATCH",
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify(updateInfo)
    // })

    // if (response.ok) {
    //   setRefresh(!refresh)
    // }
  };

  return (
    <EventsContext.Provider
      value={{ monthsKeys, events, addNewEvent, updateEvent }}
    >
      {/* <EventsContext.Provider value={{monthsKeys, events}}> */}
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContextProvider;
