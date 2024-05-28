import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import NavBarMobile from "../../components/NavBarMobile";
import HomeLink from "../../components/HomeLink";
import { useEffect, useState } from "react";

const Event = () => {
    const {eventID} = useParams()

    const [event, setEvent] = useState({})

    const getEvent = async () => {
        try {
        const res = await fetch(`/events/${eventID}`);
        const { eventData } = await res.json();

        // setEvents(eventData)
        console.log("getEvent: ", eventData);
        setEvent(eventData);
        // return eventData;
        } catch (err) {
        console.log(err);
        }
    };

    useEffect(()=>{
        getEvent()
    }, [])

    console.log(event)

  return (
    <div>
      <NavBarMobile />
      {/* <BackBTN to={"/month"}>back</BackBTN> */}
      <EventCont>EVENT</EventCont>
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
