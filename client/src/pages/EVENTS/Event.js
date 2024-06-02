import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

import { MdEdit, MdDelete } from "react-icons/md";
import NavBarMobile from "../../pages/HOME/NavBarMobile";
import HomeLink from "../HOME/HomeBTN";
import { useContext, useEffect, useState } from "react";
import { DayContext } from "../../contexts/DayContext";
import { EventsContext } from "../../contexts/EventsContext";
import { Collapse } from "react-collapse";

import EditEvent from "./EditEvent";

const Event = () => {

    const {eventID} = useParams()
    
    const [isOpened, setIsOpened] = useState(false)
    const [sureOpened, setSureOpened] = useState(false)
    const [buttonOpened, setButtonOpened] = useState(true)
    const [event, setEvent] = useState("")

    const {months, days} = useContext(DayContext)
    const {updateEvent, deleteEvent} = useContext(EventsContext)

    const [textContent, setTextContent]=useState("are you sure?")

    const [display, setDisplay]= useState({
      day: "",
      month: "",
      date: "",
      time: "",
    })
    const [endDisplay, setEndDisplay] = useState("")
    
    const getEvent = async () => {
        try {
        const res = await fetch(`/events/${eventID}`);
        const {eventData} = await res.json();

        const {start, end} = eventData
        setEvent(eventData);

        const startDisplay = new Date(start)
        
        setDisplay({
          day: days[startDisplay.getDay()],
          month:  months[startDisplay.getMonth()],
          date: startDisplay.getDate(),
          time: `${startDisplay.getHours()}:${startDisplay.getMinutes() === 0 ? "00" : startDisplay.getMinutes()}`
        })

        // console.log("endDisplay: ", endDisplay)
      
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


    const deleteBTNHandler = () => {
      // console.log("deleteHandler")
      
      setIsOpened(false)
      setSureOpened(!sureOpened)
      setButtonOpened(!buttonOpened)
    }

    const noHandler = () => {
      setSureOpened(!sureOpened)
      setButtonOpened(!buttonOpened)
    }
    
    const navigate = useNavigate()
    
    const yesHandler = async (eventID) => {
      setTextContent("deleting event...")
      document.getElementById("yesNo").style.display="none"
      await deleteEvent(eventID)
      navigate("/month")
    }
      


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
                    <p>START:</p>
                    <p>{`${display.day}, ${display.month} ${display.date}`} </p>
                    <p>{`${display.time}`}</p>
                  </StartTimeCont>
                    {endDisplay !== ""?
                    <EndTimeCont>
                      <p>END:</p>
                      <p>{`${endDisplay.day}, ${endDisplay.month} ${endDisplay.date}`} </p>
                      <p>{`${endDisplay.time}`}</p>
                    </EndTimeCont> :
                    <p></p>
                  }
                  <BTNCont style={{fontWeight:"300"}}>
                    <Collapse isOpened={sureOpened}>
                      <SureCont>
                        <p>{textContent}</p>
                        <div id="yesNo" style={{display:"flex", justifyContent:"space-between"}}>
                          <Yes onClick={()=>yesHandler(eventID)}>yes</Yes><p style={{marginLeft:"0.5rem", marginRight:"0.5rem"}}>|</p>
                          <No onClick={noHandler}>no</No>
                        </div>
                      </SureCont>
                    </Collapse>
                    
         
                    
                    <Collapse isOpened={buttonOpened}>
                      <div style={{display:"flex"}}>
                        <DeleteIcon onClick={deleteBTNHandler}/>
                        <EditIcon onClick={()=>setIsOpened(!isOpened)} style={{marginLeft:"1rem"}}/>
                      </div>
                    </Collapse>
                    
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

const DeleteIcon = styled(MdDelete)`
    cursor: pointer;
  &:hover{
    font-weight: 500;
  }
  &:active{
    color: var(--mint);
  }
`
const EditIcon = styled(MdEdit)`
  cursor: pointer;
  &:hover{
    font-weight: 500;
  }
  &:active{
    color: var(--mint);
  }
`

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
  margin-bottom: 1rem;
`;

const SureCont = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70vw;
  margin-Left:1rem;

`

const Yes = styled.p`
  cursor: pointer;
  &:hover{
    font-weight: 500;
  }
  &:active{
    color: var(--mint);
  }
  `

const No = styled.p`
  cursor: pointer;
  &:hover{
    font-weight: 500;
  }
  &:active{
    color: var(--mint);
  }
`