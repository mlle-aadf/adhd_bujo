import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

import { MdEdit, MdDelete } from "react-icons/md";
import NavBarMobile from "../../components/NavBarMobile";
import HomeLink from "../../components/HomeLink";
import { useContext, useEffect, useState } from "react";
import { DayContext } from "../../contexts/DayContext";
import { EventsContext } from "../../contexts/EventsContext";
import { Collapse } from "react-collapse";

import EditEvent from "./EditEvent";

const Event = () => {

    const {eventID} = useParams()
    // console.log("Event() eventParams: ", eventID)
    
    const [isOpened, setIsOpened] = useState(false)
    const [event, setEvent] = useState("")

    const {months, days} = useContext(DayContext)
    const {updateEvent} = useContext(EventsContext)

    

    const [display, setDisplay]= useState({
      day: "",
      month: "",
      date: "",
      time: "",
    })
    const [endDisplay, setEndDisplay] = useState("")
    
    const getEvent = async () => {
        // console.log("getEvent ID: ", eventID)
        
        try {
        const res = await fetch(`/events/${eventID}`);
        const {eventData} = await res.json();

        const {title, description, start, end} = eventData
        // console.log("infoss: ", title, description, start, end)
        setEvent(eventData);


        
        const startDisplay = new Date(start)
        
        setDisplay({
          day: days[startDisplay.getDay()],
          month:  months[startDisplay.getMonth()],
          date: startDisplay.getDate(),
          time: `${startDisplay.getHours()}:${startDisplay.getMinutes() === 0 ? "00" : startDisplay.getMinutes()}`
        })

      
        if (end !== "") {
          const endDate = new Date(end)
          setEndDisplay({
            day: days[endDate.getDay()],
            month:  months[endDate.getMonth()],
            date: endDate.getDate(),
            time: `${endDate.getHours()}:${endDate.getMinutes() === 0 ? "00" : endDate.getMinutes()}`
          })
        }         
        } catch (err) {
        console.log(err);
        }
    };

    useEffect(()=>{
        getEvent()
    }, [updateEvent])


  return (
    <div>
      <NavBarMobile />
      <EventCont>
        {event !== "" ? 
            <>
              <div style={{backgroundColor:"var(--faded)", padding:"0 0.5rem"}}>
                  <h2 style={{marginTop:"1rem", paddingTop:"0.5rem"}}>{event.title}</h2>
                  <h3 style={{paddingBottom:"1rem", textAlign:"right"}}><em>{event.description}</em></h3>
              </div>
                  <StartTimeCont>
                    <p>FROM:</p>
                    <p>{`${display.day}, ${display.month} ${display.date}`} </p>
                    <p>{`${display.time}`}</p>
                  </StartTimeCont>
                  <EndTimeCont>
                    <p>TO:</p>
                    <p>{`${endDisplay.day}, ${endDisplay.month} ${endDisplay.date}`} </p>
                    <p>{`${endDisplay.time}`}</p>
                  </EndTimeCont>
                  <BTNCont style={{fontWeight:"300"}}>
                    <MdDelete onClick={()=>setIsOpened(!isOpened)}/>
                    <MdEdit onClick={()=>setIsOpened(!isOpened)} style={{marginLeft:"1rem"}}/>
                  </BTNCont>
                  <Collapse isOpened={isOpened}>
                    <EditEvent setIsOpened={setIsOpened} isOpened={isOpened} event={event}/>
                  </Collapse>
            </>
        : <p>...</p>
        
        }


      </EventCont>
      <HomeLink />
    </div>
  );
};

export default Event;

const BTNCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 1.5rem;
`

const EventCont = styled.div`
  width:75vw;
`;
const StartTimeCont = styled.div`
  display:flex;
  justify-content: space-around;
  `;
const EndTimeCont = styled.div`
  display:flex;
  justify-content: space-around;
  `;

// const EditCont = styled.div`
//   width:75vw;
//   height: 50vw;
//   border: 2px solid lightcoral;
// `;


