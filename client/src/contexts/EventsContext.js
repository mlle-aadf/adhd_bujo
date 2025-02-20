import { createContext, useEffect, useState } from "react";

export const EventsContext = createContext();

const EventsContextProvider = ({ children }) => {
  const monthsKeys = [
    { str: "JANUARY", date: "2024-01"},
    { str: "FEBRUARY", date: "2024-02"},
    { str: "MARCH", date: "2024-03"},
    { str: "APRIL", date: "2024-04"},
    { str: "MAY", date: "2024-05"},
    { str: "JUNE", date: "2024-06"},
    { str: "JULY", date: "2024-07"},
    { str: "AUGUST", date: "2024-08"},
    { str: "SEPTEMBER", date: "2024-09"},
    { str: "OCTOBER", date: "2024-10"},
    { str: "NOVEMBER", date: "2024-11"},
    { str: "DECEMBER", date: "2024-12"},
  ];

  const [event, setEvent] = useState({})
  const [events, setEvents] = useState([]);
  const [refresh, setRefresh] = useState(false);


  const getEvents = async () => {
    try {
      const res = await fetch("https://adhd-bujo.vercel.app/events");
      const { events } = await res.json();
      setEvents(events);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // getEvent()
    getEvents();
  }, [refresh]);

  // add new event to db
  const addNewEvent = async (newEvent) => {
    console.log("addNewEvent: ", newEvent);

    const response = await fetch("https://adhd-bujo.vercel.app/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    });

    if (response.ok) {
      setRefresh(!refresh);
      // document.getElementById("newEventForm").reset()
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

  const response = await fetch("https://adhd-bujo.vercel.app/events", {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updateInfo)
    })

    if (response.ok) {
      setRefresh(!refresh)
      console.log(`updateEvent: EVENT ${eventID} updated`)
    }
  };

  // delete event
  const deleteEvent = async (eventID) => {
    
    const deleteEvent = {
      eventID: eventID
    }
    
    const response = await fetch("https://adhd-bujo.vercel.app/events", {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(deleteEvent),
    })

    if(response.ok) {
      setRefresh(!refresh)
      console.log(`deleteEvent: EVENT ${eventID} deleted`)
    } 
  }


  return (
    <EventsContext.Provider
      value={{ monthsKeys, events, addNewEvent, updateEvent, event, deleteEvent}}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContextProvider;
