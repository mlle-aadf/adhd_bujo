import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import NavBarMobile from "../../components/NavBarMobile";
import HomeLink from "../../components/HomeLink";
import { useContext, useEffect, useState } from "react";
import { EventsContext } from "../../contexts/EventsContext";

const Event = () => {

    const {eventID} = useParams()
    // console.log("Event() eventParams: ", eventID)
    
    const [event, setEvent] = useState("")
    const [refresh, setRefresh] = useState()
    
    const getEvent = async () => {
        console.log("getEvent ID: ", eventID)
        
        try {
        const res = await fetch(`/events/${eventID}`);
        const {eventData} = await res.json();

        // setEvents(eventData)
        console.log("getEvent: ", eventData);
        const {title, description, start, end} = eventData
        console.log("infoss: ", title, description, start, end)
        setEvent(eventData);
        console.log("here",event)
        // setRefresh(!refresh)
        // return eventData;
        } catch (err) {
        console.log(err);
        }
    };

    useEffect(()=>{
        getEvent()
    }, [])


  return (
    <div>
      <NavBarMobile />
      <EventCont>
        {event !== "" ? 
            <div>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <p>{`start: ${event.start}`}</p>
                <p>{`end: ${event.end}`}</p>
            </div> 
        : <p>...</p>
        
        }


      </EventCont>
      <HomeLink />
    </div>
  );
};

export default Event;

const BackBTN = styled(Link)`
  text-decoration: none;
  color: white;
  &:active,
  &:hover {
    color: var(--pink);
  }
`;

const EventCont = styled.div``;
