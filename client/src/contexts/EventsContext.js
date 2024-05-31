import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  // const [buttonMessage, setButtonMessage] = useState("boop");
  const [refresh, setRefresh] = useState(false);

  // const {eventID} = useParams()

  // const getEvent = async (eventID) => {

  //   try {
  //     const response = await fetch(`/events/${eventID}`);

  //     // setEvents(eventData)
  //     console.log("getEvent response: ", response);
  //     // setEvent(eventData)
  //     // return eventData
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
      // console.log("getEvents: ", events);
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

    const response = await fetch("/events", {
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
  // console.log("updateEvent_updateInfo: ",updateInfo);

  const response = await fetch("/events", {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updateInfo)
    })

    if (response.ok) {
      setRefresh(!refresh)
      console.log(`updateEvent: EVENT ${eventID} updated`)
    }
  };

  return (
    <EventsContext.Provider
      value={{ monthsKeys, events, addNewEvent, updateEvent, event}}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContextProvider;
